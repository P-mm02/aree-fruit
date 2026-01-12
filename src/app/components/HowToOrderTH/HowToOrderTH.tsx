import styles from './HowToOrderTH.module.css'
import styles_share from '@/app/page.module.css'

const steps = [
  {
    title: 'ทักมาบอกสิ่งที่ต้องการ',
    desc: 'บอกชนิดผลไม้ จำนวน งบ และพื้นที่จัดส่ง',
  },
  {
    title: 'ยืนยันรายการและแพ็ก',
    desc: 'เรายืนยันของที่มี/จำนวน/เวลา และแพ็กกันกระแทก',
  },
  {
    title: 'จัดส่งและแจ้งติดตาม',
    desc: 'แจ้งเลขติดตาม พร้อมคำแนะนำการดูแลหลังรับของ',
  },
]

export default function HowToOrderTH() {
  return (
    <section
      aria-label="วิธีสั่งซื้อ"
    >
      <div >
        <div className={styles_share.sectionHead}>
          <h2 className={styles_share.h2}>วิธีสั่งซื้อ / ติดต่อสวน</h2>
          <p className={styles_share.lead}>
            ขั้นตอนเรียบง่าย ตอบไว และช่วยแนะนำให้เหมาะกับความต้องการจริง
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <div className={styles.stepNum} aria-hidden="true">
                {i + 1}
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepDesc}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className={styles.quickTip}>
          <div className={styles.quickTipTitle}>บอกเราง่าย ๆ แบบนี้ก็ได้</div>
          <div className={styles.quickTipBox}>
            “อยากได้มะม่วงหวาน ๆ สำหรับ 2 คน งบ 600 ส่งกรุงเทพฯ”
          </div>
        </div> */}
      </div>
    </section>
  )
}
