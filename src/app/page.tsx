import styles from './page.module.css'

import SiteHeader from './components/SiteHeader/SiteHeader'
import HeroSlider from './components/HeroSlider/HeroSlider'
import HeroTH from './components/HeroTH/HeroTH'
import AboutOrchardTH from './components/AboutOrchardTH/AboutOrchardTH'
import ProductTH from './components/ProductTH/ProductTH'
import WhyChooseTH from './components/WhyChooseTH/WhyChooseTH'
import HowToOrderTH from './components/HowToOrderTH/HowToOrderTH'
import ReviewsTH from './components/ReviewsTH/ReviewsTH'
import FAQTH from './components/FAQTH/FAQTH'
import ContactTH from './components/ContactTH/ContactTH'
import SiteFooterTH from './components/SiteFooterTH/SiteFooterTH'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "สวนแม่อารี (Aree's Fruit)",
    description:
      'สวนผลไม้ตามฤดูกาล คัดเกรด ส่งตรงจากสวน แพ็กอย่างดี พร้อมจัดส่ง',
    areaServed: 'TH',
    sameAs: ['https://example.com'],
  }

  return (
    <div className={styles.page}>
      <SiteHeader />

      <main id="main" className={styles.main}>
        <HeroSlider />
        <HeroTH />
        <AboutOrchardTH />
        <ProductTH />
        <WhyChooseTH />
        <HowToOrderTH />
        <ReviewsTH />
        <FAQTH />
        <ContactTH />
      </main>

      <SiteFooterTH />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
