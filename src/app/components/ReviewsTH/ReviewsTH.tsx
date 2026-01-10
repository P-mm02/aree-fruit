import styles from './ReviewsTH.module.css'
import styles_share from '@/app/page.module.css'

const reviews = [
  { name: 'คุณอร', text: 'แพ็กดีมากค่ะ ของถึงแล้วสวย ไม่ช้ำ รสชาติดีจริง' },
  { name: 'คุณนัท', text: 'สั่งเป็นของฝาก ลูกค้าชอบมาก ดูพรีเมียมและอร่อย' },
  { name: 'คุณมะลิ', text: 'แนะนำดีมาก เลือกผลไม้ตามรสที่ชอบให้ ถูกใจเลยค่ะ' },
]

export default function ReviewsTH() {
  return (
    <section className={styles_share.section} aria-label="รีวิวลูกค้า">
      <div className={styles_share.container}>
        <div className={styles_share.sectionHead}>
          <h2 className={styles_share.h2}>รีวิวจากลูกค้า</h2>
          <p className={styles_share.lead}>
            ความพอใจของลูกค้า คือมาตรฐานที่เรายึดถือทุกวัน
          </p>
        </div>

        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <article key={r.name} className={styles.reviewCard}>
              <div className={styles.quote} aria-hidden="true">
                “
              </div>
              <p className={styles.reviewText}>{r.text}</p>
              <div className={styles.reviewName}>{r.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
