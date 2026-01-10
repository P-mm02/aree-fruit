'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './SiteHeader.module.css'

type NavItem = { href: string; label: string }

const NAV: NavItem[] = [
  { href: '#seasonal', label: 'ผลไม้วันนี้' },
  { href: '#why', label: 'ทำไมต้องเรา' },
  { href: '#how', label: 'วิธีสั่งซื้อ' },
  { href: '#faq', label: 'คำถามที่พบบ่อย' },
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

  function onNavClick() {
    setOpen(false)
  }

  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main">
        ข้ามไปเนื้อหาหลัก
      </a>

      <div className={styles.containerHeader}>
        <a
          className={styles.brand}
          href="#top"
          aria-label="สวนแม่อารี - กลับไปด้านบน"
        >
          <div className={styles.brandMark}>
            <Image
              src="/logo/logo_aree_nobg.svg"
              alt="โลโก้ สวนแม่อารี"
              width={64}
              height={64}
              priority
              className={styles.brandLogo}
            />
          </div>

          <div className={styles.brandText}>
            <div className={styles.brandName}>สวนแม่อารี</div>
            <div className={styles.brandTagline}>
              ผลไม้ตามฤดูกาล ส่งตรงจากสวน
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="เมนูหลัก">
          {NAV.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className={`${styles.navLink} ${styles.navCta}`} href="#contact">
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
                onClick={onNavClick}
              >
                <span className={styles.mobileDot} aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <a className={styles.mobileCta} href="#contact" onClick={onNavClick}>
            สั่งซื้อ / ติดต่อ
          </a>

          <div className={styles.mobileNote}>
            ส่งในกรุงเทพฯ / ปริมณฑล • ผลไม้ตามฤดูกาล • สดจากสวน
          </div>
        </div>
      </div>
    </header>
  )
}
