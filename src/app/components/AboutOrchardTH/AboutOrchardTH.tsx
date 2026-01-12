import styles from './AboutOrchardTH.module.css'
import styles_share from '@/app/page.module.css'

export default function AboutOrchardTH() {
  return (
    <section
      id="about"
      className={styles_share.section}
      aria-label="เกี่ยวกับสวน"
    >
      <div className={styles_share.container}>
        <div className={styles_share.sectionHead}>
          <h2 className={styles_share.h2}>รู้จักสวนแม่อารี</h2>
        </div>

        <div className={styles.aboutGrid}>
          <article className={styles.aboutCard}>
            <h3 className={styles_share.h3}>แนวคิดของเรา</h3>
            <p className={styles_share.pMuted}>
              “ของกินที่ดี ต้องเริ่มจากความตั้งใจที่ดี” ผลไม้ที่ตั้งใจทำให้
              รสชาติดีที่สุด วิตามินสูงสุด
              กินแล้วเกิดประโยชน์กับร่างกายมากที่สุด
            </p>
          </article>

          <article className={styles.aboutCard}>
            <h3 className={styles_share.h3}>ความเป็นมา</h3>
            <p className={`${styles_share.pMuted} text-indent`}>
              สวนแม่อารี เริ่มต้นจากปลูกผลไม้ไว้กินเอง และแบ่งปันให้คนใกล้ชิด
              ด้วยความเชื่อ “ของกินที่ดี ต้องเริ่มจากความตั้งใจที่ดี”
              จึงใส่ใจในทุกขั้นตอนตั้งแต่ดิน น้ำ เมล็ดพันธุ์ ไปจนถึงการดูแลต้น
              พัฒนาต่อเนื่องมานานกว่า 50 ปี
              ทำให้ผลผลิตของสวนมีชื่อเสียงมากขึ้นแบบปากต่อปาก
            </p>
          </article>

          <article className={styles.aboutCard}>
            <h3 className={styles_share.h3}>เหมาะทั้งกินเอง และของฝาก</h3>
            <p className={`${styles_share.pMuted} text-indent`}>
              เราช่วยจัดชุดตามงบ ตามโอกาสได้ เช่น เยี่ยมผู้ใหญ่ ของขวัญลูกค้า
              ส่งให้ครอบครัว หรือฝากเพื่อนฝูง เราจะทำการแพ็กให้เหมาะสม สวยงาม
              ขนส่งปลอดภัย รักษาคุณภาพ และความสดได้ดี
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
