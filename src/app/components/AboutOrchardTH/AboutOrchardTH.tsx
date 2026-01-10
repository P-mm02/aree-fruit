import styles from './AboutOrchardTH.module.css'
import styles_share from '@/app/page.module.css'

export default function AboutOrchardTH() {
  return (
    <section className={styles_share.section} aria-label="เกี่ยวกับสวน">
      <div className={styles_share.container}>
        <div className={styles_share.sectionHead}>
          <h2 className={styles_share.h2}>รู้จักสวนแม่อารี</h2>
          <p className={styles_share.lead}>
            สวนผลไม้ที่ตั้งใจทำให้ “คุณภาพ” และ “ความจริงใจ” ไปถึงมือคุณทุกกล่อง
          </p>
        </div>

        <div className={styles.aboutGrid}>
          <article className={styles.aboutCard}>
            <h3 className={styles_share.h3}>แนวคิดของเรา</h3>
            <p className={styles_share.pMuted}>
              เราเลือกส่งผลไม้ตามฤดูกาล เพราะเป็นช่วงที่รสชาติ “ดีที่สุดจริง”
              ลดการบังคับเก็บก่อนสุก และเน้นความสม่ำเสมอของคุณภาพ
            </p>
          </article>

          <article className={styles.aboutCard}>
            <h3 className={styles_share.h3}>คัดเกรดแบบมืออาชีพ</h3>
            <p className={styles_share.pMuted}>
              แต่ละออเดอร์คัดเกรดตามความเหมาะสมของการขนส่ง
              เพื่อให้ถึงปลายทางแล้วดูดี กินอร่อย
            </p>
          </article>

          <article className={styles.aboutCard}>
            <h3 className={styles_share.h3}>เหมาะทั้งกินเองและของฝาก</h3>
            <p className={styles_share.pMuted}>
              เราช่วยจัดชุดตามงบ/โอกาสได้ เช่น เยี่ยมผู้ใหญ่ ของขวัญลูกค้า
              หรือส่งให้ครอบครัว
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
