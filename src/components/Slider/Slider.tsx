'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import Image from 'next/image'
import './Slider.css'

export type Slide = {
  src: string
  alt: string
  caption: string
  priority?: boolean
}

type SliderProps = {
  slides: Slide[]
  ariaLabel?: string
  intervalMs?: number
}

export default function Slider({
  slides,
  ariaLabel = 'Image carousel',
  intervalMs = 3000,
}: SliderProps) {
  const total = slides.length
  const isLoop = total > 1

  const loopSlides = useMemo(() => {
    if (!isLoop) return slides
    return [slides[total - 1], ...slides, slides[0]]
  }, [slides, total, isLoop])

  const [index, setIndex] = useState(isLoop ? 1 : 0)
  const [isHovering, setIsHovering] = useState(false)

  // swipe/drag
  const [isDragging, setIsDragging] = useState(false)
  const [dragPx, setDragPx] = useState(0)

  const [enableTransition, setEnableTransition] = useState(true)

  const rootRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)

  // drag refs (no re-render)
  const pointerIdRef = useRef<number | null>(null)
  const startXRef = useRef(0)
  const lastXRef = useRef(0)

  const isInteractiveTarget = (t: EventTarget | null) => {
    if (!(t instanceof HTMLElement)) return false
    return Boolean(
      t.closest('button, a, input, textarea, select, [role="button"]')
    )
  }

  useEffect(() => {
    flushSync(() => {
      setEnableTransition(false)
      setIndex(isLoop ? 1 : 0)
      setDragPx(0)
      setIsDragging(false)
    })
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setEnableTransition(true))
    })
  }, [isLoop, total])

  const next = () => {
    if (total <= 1) return
    setIndex((v) => v + 1)
  }

  const prev = () => {
    if (total <= 1) return
    setIndex((v) => v - 1)
  }

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      }
    }

    el.addEventListener('keydown', onKeyDown)
    return () => el.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    if (reduce) return
    if (total <= 1) return
    if (isHovering) return
    if (isDragging) return

    const id = window.setInterval(() => next(), intervalMs)
    return () => window.clearInterval(id)
  }, [isHovering, isDragging, intervalMs, total])

  const onTransitionEnd = () => {
    if (!isLoop) return

    if (index === 0) {
      flushSync(() => {
        setEnableTransition(false)
        setIndex(total)
      })
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true))
      })
    }

    if (index === total + 1) {
      flushSync(() => {
        setEnableTransition(false)
        setIndex(1)
      })
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true))
      })
    }
  }

  // --- Pointer (touch/mouse) drag handlers ---
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (total <= 1) return

    // ✅ don't start dragging when clicking UI controls (fix PC buttons)
    if (isInteractiveTarget(e.target)) return

    if (e.button !== 0 && e.pointerType === 'mouse') return

    const el = viewportRef.current
    if (!el) return

    pointerIdRef.current = e.pointerId
    startXRef.current = e.clientX
    lastXRef.current = e.clientX

    flushSync(() => {
      setIsDragging(true)
      setEnableTransition(false)
      setDragPx(0)
    })

    try {
      el.setPointerCapture(e.pointerId)
    } catch {}
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    if (pointerIdRef.current !== e.pointerId) return

    const dx = e.clientX - startXRef.current
    lastXRef.current = e.clientX
    setDragPx(dx)
  }

  const endDrag = (pointerId?: number) => {
    const el = viewportRef.current
    if (pointerId != null && el) {
      try {
        el.releasePointerCapture(pointerId)
      } catch {}
    }

    const width = viewportRef.current?.clientWidth ?? 1
    const dx = lastXRef.current - startXRef.current

    // threshold to trigger slide
    const threshold = Math.max(44, Math.round(width * 0.18))

    const goPrev = dx > threshold
    const goNext = dx < -threshold

    flushSync(() => {
      setEnableTransition(true)
      setDragPx(0)
      setIsDragging(false)
    })

    if (goPrev) prev()
    if (goNext) next()

    pointerIdRef.current = null
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    if (pointerIdRef.current !== e.pointerId) return
    endDrag(e.pointerId)
  }

  const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    if (pointerIdRef.current !== e.pointerId) return
    endDrag(e.pointerId)
  }

  if (total === 0) return null

  const realIndex = isLoop ? (index - 1 + total) % total : index

  return (
    <div
      ref={rootRef}
      className="slider"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={viewportRef}
        className="slider__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          className={`slider__track ${
            enableTransition ? '' : 'slider__track--no-anim'
          }`}
          style={{
            transform: `translate3d(calc(${
              -index * 100
            }% + ${dragPx}px), 0, 0)`,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {loopSlides.map((s, i) => (
            <div className="slider__slide" key={`${s.src}-${i}`}>
              <figure className="slider__figure">
                <div className="slider__media">
                  <Image
                    className="slider__img"
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 720px"
                    priority={Boolean(s.priority)}
                    draggable={false}
                  />
                </div>

                <figcaption className="slider__caption">
                  <span>{s.caption}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="slider__btn slider__btn--left"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={prev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="slider__btn slider__btn--right"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={next}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className="slider__dots"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((s, i) => {
          const active = i === realIndex
          return (
            <button
              key={`dot-${i}`}
              type="button"
              className={`slider__dot ${active ? 'is-active' : ''}`}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setIndex(isLoop ? i + 1 : i)}
              aria-label={`Go to slide ${i + 1}: ${s.caption}`}
              aria-current={active ? 'true' : undefined}
              role="tab"
            />
          )
        })}
      </div>

      <p className="slider__sr" aria-live="polite">
        Showing slide {realIndex + 1} of {total}
      </p>
    </div>
  )
}
