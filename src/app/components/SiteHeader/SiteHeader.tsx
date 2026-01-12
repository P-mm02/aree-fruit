'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './SiteHeader.module.css'

type NavItem = { href: string; label: string }

const NAV: NavItem[] = [
  { href: '#top', label: 'หน้าแรก' },
  { href: '#about', label: 'เกี่ยวกับเรา' },
  { href: '#products', label: 'ผลไม้วันนี้' },
]

export default function SiteHeader() {
  const panelId = useId()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Close when clicking outside
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!open) return
      const t = e.target as Node
      if (panelRef.current?.contains(t)) return
      if (btnRef.current?.contains(t)) return
      setOpen(false)
    }
    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Close when resizing to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 860) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // ✅ FIX: close panel first, then scroll (prevents the "jump")
  function onNavClick(href: string) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      // If panel isn't open, let browser handle normal anchor jump
      if (!open) return

      e.preventDefault()
      setOpen(false)

      const id = href.startsWith('#') ? href.slice(1) : href
      const el = document.getElementById(id)
      if (!el) return

      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

      // If reduced motion, scroll immediately after close
      if (prefersReduced) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'auto', block: 'start' })
          history.replaceState(null, '', `#${id}`)
        })
        return
      }

      const panel = panelRef.current
      let done = false

      const scrollNow = () => {
        if (done) return
        done = true
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', `#${id}`)
      }

      // Wait for the panel collapse transition to end (no hardcoded ms)
      if (panel) {
        const onEnd = (ev: TransitionEvent) => {
          // only react to the panel's own max-height transition
          if (ev.target !== panel) return
          panel.removeEventListener('transitionend', onEnd)
          scrollNow()
        }
        panel.addEventListener('transitionend', onEnd)

        // Fallback in case transitionend doesn't fire (rare)
        window.setTimeout(() => {
          panel.removeEventListener('transitionend', onEnd)
          scrollNow()
        }, 350)
      } else {
        // Very safe fallback
        window.setTimeout(scrollNow, 0)
      }
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <a
          className={styles.brand}
          href="#top"
          aria-label="สวนแม่อารี - กลับไปด้านบน"
          onClick={onNavClick('#top')}
        >
          <div className={styles.brandMark}>
            <Image
              src="/logo/logo_aree_nobg.svg"
              alt="โลโก้ สวนแม่อารี"
              width={128}
              height={128}
              priority
              className={styles.brandLogo}
            />
          </div>

          <div className={styles.brandText}>
            <div className={styles.brandName}>สวนแม่อารี</div>
            <div className={styles.brandTagline}>
              ผลไม้คุณภาพดี ส่งตรงจากสวน
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="เมนูหลัก">
          {NAV.map((item) => (
            <a
              key={item.href}
              className={styles.navLink}
              href={item.href}
              onClick={onNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            className={`${styles.navLink} ${styles.navCta}`}
            href="#contact"
            onClick={onNavClick('#contact')}
          >
            สั่งซื้อ / ติดต่อ
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={btnRef}
          type="button"
          className={styles.menuBtn}
          aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span className={styles.bar} />
            <span className={styles.bar} />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id={panelId}
        ref={panelRef}
        className={`${styles.mobilePanel} ${
          open ? styles.mobilePanelOpen : ''
        }`}
        aria-hidden={!open}
      >
        <div className={styles.mobileInner}>
          <div className={styles.mobileTitle}>เมนู</div>

          <div className={styles.mobileLinks}>
            {NAV.map((item) => (
              <a
                key={item.href}
                className={styles.mobileLink}
                href={item.href}
                onClick={onNavClick(item.href)}
              >
                <span className={styles.mobileDot} aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <a
            className={styles.mobileCta}
            href="#contact"
            onClick={onNavClick('#contact')}
          >
            สั่งซื้อ / ติดต่อ
          </a>

          <div className={styles.mobileNote}>
            • ส่งทั่วประเทศ • ผลไม้คุณภาพดี • วิตามินสูง • สดจากสวน •
          </div>
        </div>
      </div>
    </header>
  )
}
