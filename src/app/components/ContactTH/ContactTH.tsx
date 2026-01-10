import styles from './ContactTH.module.css'
import styles_share from '@/app/page.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@yourline' // TODO: replace
const PHONE = '+66 00 000 0000' // TODO: replace
const MAP_URL = 'https://maps.google.com' // TODO: replace

export default function ContactTH() {
  return (
    <section
      id="contact"
      className={styles_share.section}
      aria-label="ติดต่อสั่งซื้อ"
    >
      <div className={styles_share.container}>
        <div className={styles.contactBox}>
          <div>
            <h2 className={styles_share.h2}>สั่งซื้อ / ติดต่อสวน</h2>
            <p className={styles_share.lead}>
              ทักมาบอก “ผลไม้ที่อยากได้ + จำนวน + พื้นที่จัดส่ง”
              เราช่วยแนะนำตัวที่อร่อยที่สุดในช่วงนี้
            </p>

            <div className={styles.contactActions}>
              <a
                className={`${styles_share.btn} ${styles_share.btnPrimary}`}
                href={LINE_URL}
              >
                ทัก LINE
              </a>
              <a
                className={`${styles_share.btn} ${styles_share.btnGhost}`}
                href={`tel:${PHONE.replace(/\s/g, '')}`}
              >
                โทร {PHONE}
              </a>
              <a
                className={`${styles_share.btn} ${styles_share.btnSoft}`}
                href={MAP_URL}
              >
                ดูแผนที่สวน
              </a>
            </div>

            <div className={styles.contactHint}>
              หมายเหตุ: เปลี่ยนลิงก์ LINE/เบอร์โทร/แผนที่ในไฟล์{' '}
              <code>ContactTH.tsx</code>
            </div>
          </div>

          <div className={styles.contactRight} aria-hidden="true">
            <div className={styles.contactOrb} />
            <div className={styles.contactMini}>
              <div className={styles.contactMiniTitle}>
                ข้อมูลที่ควรบอกเวลาออเดอร์
              </div>
              <ul className={styles.contactList}>
                <li>ชนิดผลไม้ / รสที่ชอบ</li>
                <li>งบประมาณโดยประมาณ</li>
                <li>พื้นที่จัดส่ง</li>
                <li>กินเองหรือของฝาก</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
