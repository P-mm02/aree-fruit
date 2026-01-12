// src\app\components\ContactTH\ContactTH.tsx
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './ContactTH.module.css'
import styles_share from '@/app/page.module.css'
import HowToOrderTH from '@/app/components/HowToOrderTH/HowToOrderTH'

const LINE_URL = 'https://lin.ee/HeWGKny'
const FB_URL = 'https://www.facebook.com/profile.php?id=61586301839903'
const PHONE = '0621958050'
const EMAIL = 'areefruits.official@gmail.com'
const ADDRESS = '43/7 หมู่9 ต.โพชนไก่ อ.บางระจัน จ.สิงห์บุรี 16130'
const MAP_URL = 'https://maps.app.goo.gl/7Y8HXGp2UvJBgfom6'

// Google map embed (pin)
const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=14.940194,100.289167&output=embed'

// Facebook plugin width control
const FB_MAX_WIDTH = 500
const FB_MIN_WIDTH = 280

export default function ContactTH() {
  const fbWrapRef = useRef<HTMLDivElement | null>(null)
  const [fbWidth, setFbWidth] = useState(FB_MAX_WIDTH)

  useEffect(() => {
    const el = fbWrapRef.current
    if (!el) return

    const clamp = (n: number) =>
      Math.max(FB_MIN_WIDTH, Math.min(FB_MAX_WIDTH, n))

    const update = () => {
      const w = clamp(Math.floor(el.clientWidth))
      setFbWidth(w)
    }

    update()

    const ro = new ResizeObserver(() => update())
    ro.observe(el)

    return () => ro.disconnect()
  }, [])

  const fbEmbedSrc = useMemo(() => {
    return `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
      FB_URL
    )}&tabs=timeline&width=${fbWidth}&height=520&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`
  }, [fbWidth])

  return (
    <section
      id="contact"
      className={styles_share.section}
      aria-label="ติดต่อสั่งซื้อ"
    >
      <div className={styles_share.container}>
        <div className={styles.contactBox}>
          {/* LEFT */}
          <div className={styles.contactLeft}>
            <HowToOrderTH />

            {/* quick info */}
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoLabel}>โทร</div>
                <a className={styles.infoValue} href={`tel:${PHONE}`}>
                  {PHONE}
                </a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoLabel}>อีเมล</div>
                <a className={styles.infoValue} href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>

              <div className={`${styles.infoCard} ${styles.infoCardWide}`}>
                <div className={styles.infoLabel}>ที่อยู่สวน</div>
                <a
                  className={styles.infoValue}
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ADDRESS}
                </a>
              </div>
            </div>

            <div className={styles.primaryLinks}>
              <a
                className={`${styles_share.btn} ${styles_share.btnPrimary}`}
                href={LINE_URL}
                target="_blank"
                rel="noreferrer"
              >
                ทักสั่งซื้อทาง LINE
              </a>
              <a
                className={`${styles_share.btn} ${styles_share.btnSoft}`}
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
              >
                เปิดแผนที่สวน
              </a>
            </div>

            {/* icon actions */}
            <div className={styles.contactActions} aria-label="ช่องทางติดต่อ">
              <a
                className={styles.iconBtn}
                href={LINE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="ติดต่อผ่าน LINE"
                title="LINE"
              >
                <Image
                  src="/icons/LINE.png"
                  alt="LINE"
                  width={56}
                  height={56}
                  className={styles.iconImg}
                />
              </a>

              <a
                className={styles.iconBtn}
                href={FB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="ไปที่ Facebook Page"
                title="Facebook"
              >
                <Image
                  src="/icons/Facebook.png"
                  alt="Facebook"
                  width={56}
                  height={56}
                  className={styles.iconImg}
                />
              </a>

              <a
                className={styles.iconBtn}
                href={`tel:${PHONE}`}
                aria-label={`โทร ${PHONE}`}
                title={`โทร ${PHONE}`}
              >
                <Image
                  src="/icons/phone.png"
                  alt="Phone"
                  width={56}
                  height={56}
                  className={styles.iconImg}
                />
              </a>

              <a
                className={styles.iconBtn}
                href={`mailto:${EMAIL}`}
                aria-label={`อีเมล ${EMAIL}`}
                title={EMAIL}
              >
                <Image
                  src="/icons/email.png"
                  alt="Email"
                  width={56}
                  height={56}
                  className={styles.iconImg}
                />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.contactRight}>
            {/* Facebook */}
            <div
              className={styles.embedCard}
              aria-label="Facebook Page สวนแม่อารี"
            >
              <div className={styles.embedHeader}>
                <div className={styles.embedTitle}>Facebook</div>
                <a
                  className={styles.embedLink}
                  href={FB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  เปิดเพจ →
                </a>
              </div>

              <div className={styles.embedCenter} ref={fbWrapRef}>
                <iframe
                  key={fbWidth} // force reload when width changes (prevents cropping)
                  className={styles.embedFrameFb}
                  title="Facebook Page สวนแม่อารี"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  src={fbEmbedSrc}
                  style={{ width: `${fbWidth}px`}}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Map (outside grid like your current layout) */}
        <div
          className={`${styles.embedCard} ${styles.marginTop2rem}`}
          aria-label="แผนที่สวนแม่อารี"
        >
          <div className={styles.embedHeader}>
            <div className={styles.embedTitle}>แผนที่สวน</div>
            <a
              className={styles.embedLink}
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
            >
              เปิดใน Google Maps →
            </a>
          </div>

          <iframe
            className={styles.embedFrame}
            title="แผนที่สวนแม่อารี"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={MAP_EMBED_SRC}
          />
        </div>
      </div>
    </section>
  )
}
