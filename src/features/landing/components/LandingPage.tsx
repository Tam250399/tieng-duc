import { useCallback, useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import {
  CoursesSection,
  CtaSection,
  FooterSection,
  HeroSection,
  Navbar,
  ProcessSection,
  TestimonialsSection,
  WhySection,
} from './sections'

function animateCounter(
  element: HTMLDivElement,
  target: number,
  suffix = '',
  duration = 1800,
) {
  const startedAt = performance.now()

  const tick = (timestamp: number) => {
    const elapsed = timestamp - startedAt
    const progress = Math.min(elapsed / duration, 1)
    const current = Math.floor(target * progress)
    element.textContent = current.toLocaleString('vi') + suffix

    if (progress < 1) {
      window.requestAnimationFrame(tick)
      return
    }

    element.textContent = target.toLocaleString('vi') + suffix
  }

  window.requestAnimationFrame(tick)
}

export function LandingPage() {
  const [isShrunk, setIsShrunk] = useState(false)
  const [email, setEmail] = useState('')
  const [submitLabel, setSubmitLabel] = useState('Học thử miễn phí')
  const [inputErrorMessage, setInputErrorMessage] = useState('')
  const heroRef = useRef<HTMLElement | null>(null)
  const heroGridRef = useRef<HTMLDivElement | null>(null)
  const cnt1Ref = useRef<HTMLDivElement | null>(null)
  const cnt2Ref = useRef<HTMLDivElement | null>(null)
  const cnt3Ref = useRef<HTMLDivElement | null>(null)

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value)
    if (inputErrorMessage) {
      setInputErrorMessage('')
    }
  }, [inputErrorMessage])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.lazy-item').forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 60)
      if (heroGridRef.current) {
        heroGridRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !cnt1Ref.current || !cnt2Ref.current || !cnt3Ref.current) {
      return
    }

    const heroObserver = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return
        }

        window.setTimeout(() => {
          if (cnt1Ref.current) animateCounter(cnt1Ref.current, 3200, '+')
        }, 1000)
        window.setTimeout(() => {
          if (cnt2Ref.current) animateCounter(cnt2Ref.current, 12)
        }, 1200)
        window.setTimeout(() => {
          if (cnt3Ref.current) animateCounter(cnt3Ref.current, 97, '%')
        }, 1400)

        heroObserver.disconnect()
      },
      { threshold: 0.3 },
    )

    heroObserver.observe(hero)
    return () => heroObserver.disconnect()
  }, [])

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedEmail = email.trim()
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    if (!isValidEmail) {
      setInputErrorMessage('Vui lòng nhập email hợp lệ.')
      return
    }

    setSubmitLabel('✓ Đã đăng ký!')
    setInputErrorMessage('')
    setEmail('')
    window.setTimeout(() => setSubmitLabel('Học thử miễn phí'), 3000)
  }, [email])

  return (
    <>
      <Navbar shrunk={isShrunk} onScrollTo={scrollToSection} />
      <HeroSection
        heroRef={heroRef}
        cnt1Ref={cnt1Ref}
        cnt2Ref={cnt2Ref}
        cnt3Ref={cnt3Ref}
        heroGridRef={heroGridRef}
        onScrollTo={scrollToSection}
      />
      <WhySection />
      <CoursesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection
        email={email}
        submitLabel={submitLabel}
        inputErrorMessage={inputErrorMessage}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
      <FooterSection />
    </>
  )
}
