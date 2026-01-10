import styles from './WhyChooseTH.module.css'
import styles_share from '@/app/page.module.css'

const points = [
  {
    title: 'คัดเกรดก่อนส่ง',
    desc: 'เลือกให้เหมาะกับการขนส่ง เพื่อให้ถึงมือแล้วสวยและอร่อย',
  },
  {
    title: 'แพ็กกันกระแทก',
    desc: 'ลดช้ำ ลดเสียหาย เหมาะกับของฝากและการส่งไกล',
  },
  {
    title: 'แนะนำตามรสที่ชอบ',
    desc: 'อยากหวาน/เปรี้ยว/นุ่ม/กรอบ บอกเราได้เลย',
  },
  {
    title: 'ซื่อสัตย์กับฤดูกาล',
    desc: 'โฟกัสช่วงที่ผลไม้รสชาติดีที่สุด ไม่ฝืนธรรมชาติ',
  },
]

export default function WhyChooseTH() {
  return (
    <section id="why" className={styles_share.section} aria-label="ทำไมต้องเรา">
      <div className={styles_share.container}>
        <div className={styles_share.sectionHead}>
          <h2 className={styles_share.h2}>ทำไมลูกค้าถึงเลือกสวนแม่อารี</h2>
          <p className={styles_share.lead}>
            เราตั้งใจทำให้ “มาตรฐาน” เกิดขึ้นทุกกล่อง ไม่ใช่แค่บางครั้ง
          </p>
        </div>

        <div className={styles.featureGrid}>
          {points.map((p) => (
            <article key={p.title} className={styles.featureCard}>
              <div className={styles.icon} aria-hidden="true" />
              <h3 className={styles_share.h3}>{p.title}</h3>
              <p className={styles_share.pMuted}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
