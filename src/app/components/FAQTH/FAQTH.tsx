import styles from './FAQTH.module.css'
import styles_share from '@/app/page.module.css'

const faqs = [
  {
    q: 'ผลไม้มีตลอดไหม?',
    a: 'ผลไม้ขึ้นกับฤดูกาลและรอบเก็บเกี่ยว บางช่วงมีจำนวนจำกัด แนะนำทักมาเช็กของจริงก่อนสั่ง',
  },
  {
    q: 'แพ็กอย่างไรให้ไม่ช้ำ?',
    a: 'เราใช้การแพ็กกันกระแทกและเลือกเกรดให้เหมาะกับการขนส่ง เพื่อลดการช้ำ/เสียหาย',
  },
  {
    q: 'เหมาะสำหรับของฝากไหม?',
    a: 'เหมาะมาก เราช่วยจัดชุดตามงบ/โอกาส พร้อมแพ็กให้ดูพรีเมียมและสุภาพ',
  },
  {
    q: 'ควรเก็บผลไม้อย่างไรหลังได้รับ?',
    a: 'บางชนิดควรพักให้สุกก่อน บางชนิดควรแช่เย็น เราจะแนะนำตามชนิดผลไม้เมื่อจัดส่ง',
  },
]

export default function FAQTH() {
  return (
    <section
      id="faq"
      className={styles_share.section}
      aria-label="คำถามที่พบบ่อย"
    >
      <div className={styles_share.container}>
        <div className={styles_share.sectionHead}>
          <h2 className={styles_share.h2}>คำถามที่พบบ่อย</h2>
          <p className={styles_share.lead}>
            ถ้าอยากให้ช่วยแนะนำตามงบ/รสที่ชอบ ทักมาได้เลย
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{f.q}</summary>
              <div className={styles.faqA}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
