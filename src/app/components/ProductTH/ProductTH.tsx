// src\app\components\ProductTH\ProductTH.tsx
'use client'

import { useMemo, useState } from 'react'
import styles from './ProductTH.module.css'
import styles_share from '@/app/page.module.css'

type Item = {
  name: string
  note: string
  status: 'พร้อมส่ง' | 'มีจำนวนจำกัด' | 'พรีออเดอร์' | 'หมดชั่วคราว'
  taste: string
}

const items: Item[] = [
  {
    name: 'ชมพู่',
    note: 'กรอบฉ่ำ หอมสดชื่น กินแล้วเบาสบาย',
    status: 'พร้อมส่ง',
    taste: 'สดชื่น',
  },
  {
    name: 'ฝรั่งกิมจู',
    note: 'กรอบแน่น หวานนิด เปรี้ยวหน่อย จิ้มพริกเกลือคือดี',
    status: 'พร้อมส่ง',
    taste: 'กรอบ',
  },
  {
    name: 'ฝรั่งไส้แดง',
    note: 'หอมผลไม้ชัด เนื้อแน่น สีสวย รสหวานอมเปรี้ยว',
    status: 'มีจำนวนจำกัด',
    taste: 'หวานอมเปรี้ยว',
  },
  {
    name: 'มะละกอ',
    note: 'เนื้อเนียนหวาน กลิ่นหอมละมุน สุกกำลังดี',
    status: 'พร้อมส่ง',
    taste: 'หวานละมุน',
  },
  {
    name: 'กล้วย',
    note: 'หวานธรรมชาติ เนื้อนุ่ม อิ่มท้อง กินง่ายทุกเวลา',
    status: 'พร้อมส่ง',
    taste: 'หวานนุ่ม',
  },
  {
    name: 'มะยงชิด',
    note: 'หอมจัด รสหวานอมเปรี้ยว เนื้อแน่นฉ่ำ สดชื่นมาก',
    status: 'หมดชั่วคราว',
    taste: 'หวานอมเปรี้ยว',
  },
]

function statusClass(status: Item['status']) {
  if (status === 'พร้อมส่ง') return styles.tagOk
  if (status === 'มีจำนวนจำกัด') return styles.tagWarn
  if (status === 'หมดชั่วคราว') return styles.tagRed
  return styles.tagSoft
}

export default function SeasonalShowcaseTH() {
  const [activeName, setActiveName] = useState(items[0]?.name ?? '')
  const [showAll, setShowAll] = useState(false)

  const activeItem = useMemo(
    () => items.find((x) => x.name === activeName) ?? items[0],
    [activeName]
  )

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

        {/* Buttons for each fruit + See all */}
        <div
          className={styles.fruitTabs}
          role="tablist"
          aria-label="เลือกผลไม้"
        >
          <button
            type="button"
            className={`${styles.fruitTab} ${
              showAll ? styles.fruitTabActive : ''
            }`}
            onClick={() => setShowAll(true)}
            role="tab"
            aria-selected={showAll}
          >
            <span className={styles.fruitTabName}>ดูทั้งหมด</span>
            <span className={`${styles.tagMini} ${styles.tagSoft}`}>
              {items.length}
            </span>
          </button>

          {items.map((it) => {
            const isActive = !showAll && it.name === activeName
            return (
              <button
                key={it.name}
                type="button"
                className={`${styles.fruitTab} ${
                  isActive ? styles.fruitTabActive : ''
                }`}
                onClick={() => {
                  setShowAll(false)
                  setActiveName(it.name)
                }}
                role="tab"
                aria-selected={isActive}
              >
                <span className={styles.fruitTabName}>{it.name}</span>
                <span className={`${styles.tagMini} ${statusClass(it.status)}`}>
                  {it.status}
                </span>
              </button>
            )
          })}
        </div>

        {/* Show all OR show selected (default first) */}
        {showAll ? (
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
        ) : (
          <div className={styles.cardSingle}>
            {activeItem && (
              <article className={styles.itemCard}>
                <div className={styles.itemTop}>
                  <h3 className={styles.itemName}>{activeItem.name}</h3>
                  <span
                    className={`${styles.tag} ${statusClass(
                      activeItem.status
                    )}`}
                  >
                    {activeItem.status}
                  </span>
                </div>

                <p className={styles.itemNote}>{activeItem.note}</p>

                <div className={styles.itemMeta}>
                  <div className={styles.pill}>
                    <span className={styles.pillLabel}>รสชาติ</span>
                    <span className={styles.pillValue}>{activeItem.taste}</span>
                  </div>
                  <div className={styles.pill}>
                    <span className={styles.pillLabel}>เกรด</span>
                    <span className={styles.pillValue}>คัดสวย</span>
                  </div>
                </div>

                <a
                  className={styles.itemLink}
                  href="#contact"
                  aria-label={`สั่งซื้อ ${activeItem.name}`}
                >
                  สั่งซื้อรายการนี้ →
                </a>
              </article>
            )}
          </div>
        )}

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
