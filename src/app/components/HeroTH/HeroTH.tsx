import styles from './HeroTH.module.css'
import styles_share from '@/app/page.module.css'

export default function HeroTH() {
  return (
    <section
      className={`${styles.hero} ${styles_share.section}`}
      aria-label="ส่วนแนะนำ"
    >
      <div className={styles_share.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <div className={styles.badges} aria-label="จุดเด่น">
              <span className={styles.badge}>คัดเกรด</span>
              <span className={styles.badge}>วิตามินสูง</span>
              <span className={styles.badge}>แพ็กแน่น ปลอดภัย</span>
            </div>

            <h1 className={styles.heroTitle}>
              ผลไม้คุณภาพดี <span className={styles.heroAccent}>สดใหม่</span>{' '}
              ส่งตรงจากสวน
            </h1>

            <p className={styles.heroDesc}>
              เราเน้น “รสชาติดีที่สุด กินแล้วเกิดประโยชน์สูงสุด”
              คัดเกรดด้วยความเชี่ยวชาญ แพ็กอย่างดี เหมาะทั้งกินเอง
              และทำเป็นของฝาก
            </p>

            <div className={styles.heroActions}>
              <a
                className={`${styles_share.btn} ${styles_share.btnPrimary}`}
                href="#seasonal"
              >
                รายการผลไม้
              </a>
              <a
                className={`${styles_share.btn} ${styles_share.btnGhost}`}
                href="#contact"
              >
                สั่งซื้อ / สอบถาม
              </a>
            </div>

            <div className={styles.heroChips} aria-label="ข้อมูลบริการ">
              <div className={styles.chipItem}>
                <span className={styles.dot} aria-hidden="true" />
                อัปเดตตามฤดูกาล
              </div>
              <div className={styles.chipItem}>
                <span className={styles.dot} aria-hidden="true" />
                จัดส่งได้ทุกพื้นที่
              </div>
              <div className={styles.chipItem}>
                <span className={styles.dot} aria-hidden="true" />
                จัดทำชุดของขวัญได้
              </div>
            </div>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <div className={styles.heroGlow} />
            <div className={styles.heroCard}>
              <div className={styles.heroCardTop}>
                <div className={styles.heroCardTitle}>รักษาคุณภาพ</div>
                <div className={styles.heroCardPill}>Maintain quality</div>
              </div>

              <div className={styles.heroCardBody}>
                <div className={styles.heroRow}>
                  <div className={styles.heroRowLabel}>มาตรฐาน</div>
                  <div className={styles.heroRowValue}>
                    เชี่ยวชาญ พัฒนาสวนมากว่า 50 ปี
                  </div>
                </div>
                <div className={styles.heroRow}>
                  <div className={styles.heroRowLabel}>การแพ็ก</div>
                  <div className={styles.heroRowValue}>
                    กันกระแทก ผลไม้ไม่ช้ำ
                  </div>
                </div>
                <div className={styles.heroRow}>
                  <div className={styles.heroRowLabel}>สุขภาพ</div>
                  <div className={styles.heroRowValue}>วิตามินสูงมาก</div>
                </div>
              </div>

              <div className={styles.heroHint}>
                ทิป: ผลไม้บางชนิดควรพักให้สุกก่อน เพื่อรสชาติที่ดีที่สุด
              </div>
            </div>

            <div className={styles.heroMiniStats}>
              <div className={styles.miniStat}>
                <div className={styles.miniKey}>คัดเกรด</div>
                <div className={styles.miniVal}>ทุกออเดอร์</div>
              </div>
              <div className={styles.miniStat}>
                <div className={styles.miniKey}>ปลอดภัย</div>
                <div className={styles.miniVal}>ไม่มีสารตกค้าง</div>
              </div>
              <div className={styles.miniStat}>
                <div className={styles.miniKey}>บริการดี</div>
                <div className={styles.miniVal}>ให้คำแนะนำได้</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
