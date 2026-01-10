import styles from './SiteFooterTH.module.css'
import styles_share from '@/app/page.module.css'

export default function SiteFooterTH() {
  return (
    <footer className={styles.footer}>
      <div className={styles_share.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.brandMark} aria-hidden="true" />
            <div>
              <div className={styles.footerName}>สวนแม่อารี</div>
              <div className={styles.footerMuted}>
                ผลไม้ตามฤดูกาล • ส่งตรงจากสวน
              </div>
            </div>
          </div>

          <div className={styles.footerLinks} aria-label="ลิงก์ท้ายเว็บ">
            <a className={styles.footerLink} href="#seasonal">
              ผลไม้วันนี้
            </a>
            <a className={styles.footerLink} href="#why">
              ทำไมต้องเรา
            </a>
            <a className={styles.footerLink} href="#how">
              วิธีสั่งซื้อ
            </a>
            <a className={styles.footerLink} href="#contact">
              ติดต่อ
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
    </footer>
  )
}
