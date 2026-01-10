import styles from './HeroTH.module.css'
import styles_share from '@/app/page.module.css'

export default function HeroTH() {
  return (
    <section className={styles.hero} aria-label="ส่วนแนะนำ">
      <div className={styles_share.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <div className={styles.badges} aria-label="จุดเด่น">
              <span className={styles.badge}>คัดเกรด</span>
              <span className={styles.badge}>ตามฤดูกาล</span>
              <span className={styles.badge}>แพ็กแน่น ปลอดภัย</span>
            </div>

            <h1 className={styles.heroTitle}>
              ผลไม้พรีเมียม <span className={styles.heroAccent}>สดใหม่</span>{' '}
              ส่งตรงจากสวน
            </h1>

            <p className={styles.heroDesc}>
              เราโฟกัส “รสชาติที่ดีที่สุดในช่วงนี้” คัดเกรดด้วยมือ แพ็กอย่างดี
              เหมาะทั้งกินเองและทำเป็นของฝาก
            </p>

            <div className={styles.heroActions}>
              <a
                className={`${styles_share.btn} ${styles_share.btnPrimary}`}
                href="#seasonal"
              >
                ดูผลไม้วันนี้
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
                อัปเดตของตามฤดูกาล
              </div>
              <div className={styles.chipItem}>
                <span className={styles.dot} aria-hidden="true" />
                จัดส่งได้หลายพื้นที่
              </div>
              <div className={styles.chipItem}>
                <span className={styles.dot} aria-hidden="true" />
                แนะนำชุดของขวัญได้
              </div>
            </div>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <div className={styles.heroGlow} />
            <div className={styles.heroCard}>
              <div className={styles.heroCardTop}>
                <div className={styles.heroCardTitle}>แนะนำวันนี้</div>
                <div className={styles.heroCardPill}>Seasonal</div>
              </div>

              <div className={styles.heroCardBody}>
                <div className={styles.heroRow}>
                  <div className={styles.heroRowLabel}>มาตรฐาน</div>
                  <div className={styles.heroRowValue}>คัดเกรดด้วยมือ</div>
                </div>
                <div className={styles.heroRow}>
                  <div className={styles.heroRowLabel}>การแพ็ก</div>
                  <div className={styles.heroRowValue}>กันกระแทก</div>
                </div>
                <div className={styles.heroRow}>
                  <div className={styles.heroRowLabel}>เหมาะกับ</div>
                  <div className={styles.heroRowValue}>กินเอง / ของฝาก</div>
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
                <div className={styles.miniKey}>แพ็ก</div>
                <div className={styles.miniVal}>ปลอดภัย</div>
              </div>
              <div className={styles.miniStat}>
                <div className={styles.miniKey}>บริการ</div>
                <div className={styles.miniVal}>แนะนำได้</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroDivider} />
      </div>
    </section>
  )
}
