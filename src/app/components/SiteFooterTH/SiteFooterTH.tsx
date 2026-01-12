import styles from './SiteFooterTH.module.css'
import styles_share from '@/app/page.module.css'
import Image from 'next/image'

const LINE_URL = 'https://lin.ee/HeWGKny'
const FB_URL = 'https://www.facebook.com/profile.php?id=61586301839903'
const PHONE = '0621958050'
const EMAIL = 'areefruits.official@gmail.com'

export default function SiteFooterTH() {
  return (
    <footer className={styles.footer}>
      <div className={styles_share.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <a className={styles.brandMark} href="#top">
              <Image
                src="/logo/logo_aree_nobg.svg"
                alt="โลโก้ สวนแม่อารี"
                width={64}
                height={64}
                priority
                className={styles.brandLogo}
              />
            </a>
          </div>
          <div className={styles.footerLinks} aria-label="ลิงก์ท้ายเว็บ">
            <a className={styles.footerLink} href="#top">
              หน้าแรก
            </a>
            <a className={styles.footerLink} href="#products">
              ผลไม้วันนี้
            </a>
            <a className={styles.footerLink} href="#contact">
              ติดต่อ
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
                width={49}
                height={49}
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
                width={49}
                height={49}
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
                width={49}
                height={49}
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
                width={49}
                height={49}
                className={styles.iconImg}
              />
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} สวนแม่อารี</span>
          <span className={styles.footerSep} aria-hidden="true">
            •
          </span>
          <span className={styles.footerMuted}>Built with Next.js</span>
        </div>
      </div>
      {/* Fixed back-to-top button */}
      <a
        href="#top"
        className={styles.toTop}
        aria-label="กลับไปด้านบน"
        title="กลับไปด้านบน"
      >
        <span className={styles.toTopIcon} aria-hidden="true">
          <svg viewBox="0 3 24 18" width="26" height="26" aria-hidden="true">
            <path
              d="M6.2 15.8L12 10l5.8 5.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </footer>
  )
}
