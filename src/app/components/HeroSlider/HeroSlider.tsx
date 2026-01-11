'use client'

import Link from 'next/link'
import styles from './HeroSlider.module.css'

import Slider, { type Slide } from '@/components/Slider/Slider'

type Cta = {
  label: string
  href: string
}

type HeroSliderProps = {
  slides?: Slide[]
  ariaLabel?: string
  intervalMs?: number

  kicker?: string
  title?: string
  subtitle?: string

  primaryCta?: Cta
  secondaryCta?: Cta

  /** Optional: small highlights under CTA */
  highlights?: string[]
}

const defaultSlides: Slide[] = Array.from({ length: 11 }, (_, i) => {
  const n = String(i).padStart(2, '0')
  return {
    src: `/images/hero/Aree ${n}.jpg`,
    alt: `สวนแม่อารี รูปที่ ${i + 1}`,
    caption: `สวนแม่อารี • ภาพที่ ${i + 1}`,
    priority: i === 0,
  }
})


export default function HeroSlider({
  slides = defaultSlides,
  ariaLabel = 'Orchard highlights',
  intervalMs = 4200,
}: HeroSliderProps) {
  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.container}>
        <div
          className={styles.sliderWrap}
        >
          <Slider
            slides={slides}
            ariaLabel={ariaLabel}
            intervalMs={intervalMs}
          />
        </div>
      </div>

      <div className={styles.fadeBottom} aria-hidden="true" />
    </section>
  )
}
