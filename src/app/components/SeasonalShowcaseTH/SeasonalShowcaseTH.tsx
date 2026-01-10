import styles from './SeasonalShowcaseTH.module.css'
import styles_share from '@/app/page.module.css'

type Item = {
  name: string
  note: string
  status: 'พร้อมส่ง' | 'มีจำนวนจำกัด' | 'พรีออเดอร์'
  taste: string
}

const items: Item[] = [
  {
    name: 'มะม่วง',
    note: 'หอมหวาน เนื้อแน่น',
    status: 'พร้อมส่ง',
    taste: 'หวาน',
  },
  {
    name: 'มังคุด',
    note: 'ฉ่ำ หวานอมเปรี้ยวกำลังดี',
    status: 'พร้อมส่ง',
    taste: 'บาลานซ์',
  },
  {
    name: 'ทุเรียน',
    note: 'เนื้อครีม กลิ่นชัด',
    status: 'มีจำนวนจำกัด',
    taste: 'เข้มข้น',
  },
  {
    name: 'ส้มโอ',
    note: 'หอมสดชื่น เนื้อแน่น',
    status: 'มีจำนวนจำกัด',
    taste: 'ซิตรัส',
  },
  { name: 'ลำไย', note: 'หวานใส กินเพลิน', status: 'พร้อมส่ง', taste: 'หวาน' },
  {
    name: 'เงาะ',
    note: 'กรอบเด้ง สดชื่น',
    status: 'พรีออเดอร์',
    taste: 'สดใส',
  },
]

function statusClass(status: Item['status']) {
  if (status === 'พร้อมส่ง') return styles.tagOk
  if (status === 'มีจำนวนจำกัด') return styles.tagWarn
  return styles.tagSoft
}

export default function SeasonalShowcaseTH() {
  return (
    <section
      id="seasonal"
      className={styles_share.section}
      aria-label="ผลไม้ตามฤดูกาล"
    >
      <div className={styles_share.container}>
        <div className={styles_share.sectionHeadRow}>
          <div>
            <h2 className={styles_share.h2}>ผลไม้วันนี้ (ตามฤดูกาล)</h2>
            <p className={styles_share.lead}>
              รายการอาจเปลี่ยนตามรอบเก็บเกี่ยว — ทักมาเพื่อเช็กของจริงได้ทันที
            </p>
          </div>

          <div className={styles_share.sectionActions}>
            <a
              className={`${styles_share.btn} ${styles_share.btnSoft}`}
              href="#contact"
            >
              ทักเช็กของ / สั่งซื้อ
            </a>
          </div>
        </div>

        <div className={styles.cardGrid}>
          {items.map((it) => (
            <article key={it.name} className={styles.itemCard}>
              <div className={styles.itemTop}>
                <h3 className={styles.itemName}>{it.name}</h3>
                <span className={`${styles.tag} ${statusClass(it.status)}`}>
                  {it.status}
                </span>
              </div>

              <p className={styles.itemNote}>{it.note}</p>

              <div className={styles.itemMeta}>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>รสชาติ</span>
                  <span className={styles.pillValue}>{it.taste}</span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>เกรด</span>
                  <span className={styles.pillValue}>คัดสวย</span>
                </div>
              </div>

              <a
                className={styles.itemLink}
                href="#contact"
                aria-label={`สั่งซื้อ ${it.name}`}
              >
                สั่งซื้อรายการนี้ →
              </a>
            </article>
          ))}
        </div>

        <div className={styles.notice}>
          <div className={styles.noticeTitle}>อยากได้ “ชุดของฝาก”?</div>
          <p className={styles.noticeText}>
            แจ้งงบ + โอกาส + จำนวนผู้รับ เราช่วยจัดชุดให้เหมาะที่สุด
            (ดูดีและคุ้ม)
          </p>
        </div>
      </div>
    </section>
  )
}
