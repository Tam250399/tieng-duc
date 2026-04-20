import type { FormEvent, RefObject } from 'react'
import { courses, features, processSteps, testimonials } from './landing-data'

type ScrollToSection = (id: string) => void

type NavbarProps = {
  shrunk: boolean
  onScrollTo: ScrollToSection
}

export function Navbar({ shrunk, onScrollTo }: NavbarProps) {
  return (
    <nav className={shrunk ? 'is-shrunk' : undefined}>
      <div className="nav-logo">
        Frau<span>Nguyen</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#why">Về chúng tôi</a>
        </li>
        <li>
          <a href="#courses">Khóa học</a>
        </li>
        <li>
          <a href="#process">Lộ trình</a>
        </li>
        <li>
          <a href="#testimonials">Học viên</a>
        </li>
      </ul>
      <button className="nav-cta" onClick={() => onScrollTo('cta')} type="button">
        Đăng ký ngay
      </button>
      <button className="hamburger" type="button" aria-label="Mở menu điều hướng">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>
  cnt1Ref: RefObject<HTMLDivElement | null>
  cnt2Ref: RefObject<HTMLDivElement | null>
  cnt3Ref: RefObject<HTMLDivElement | null>
  heroGridRef: RefObject<HTMLDivElement | null>
  onScrollTo: ScrollToSection
}

export function HeroSection({
  heroRef,
  cnt1Ref,
  cnt2Ref,
  cnt3Ref,
  heroGridRef,
  onScrollTo,
}: HeroSectionProps) {
  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="hero-grid" ref={heroGridRef}></div>
      <div className="hero-content">
        <div className="hero-badge">Trung tâm tiếng Đức hàng đầu Việt Nam</div>
        <h1>
          Chinh phục
          <br />
          <em>tiếng Đức</em>
          <br />
          từ con số 0
        </h1>
        <p className="hero-sub">
          Lộ trình học chuẩn CEFR từ A1 đến C1, được thiết kế bởi chuyên gia người
          Đức. Cam kết đầu ra — hoàn tiền nếu không đạt mục tiêu.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => onScrollTo('courses')} type="button">
            Xem khóa học
          </button>
          <button className="btn-outline" onClick={() => onScrollTo('cta')} type="button">
            Học thử miễn phí
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num" ref={cnt1Ref}>
              0
            </div>
            <div className="stat-label">Học viên tốt nghiệp</div>
          </div>
          <div className="stat-item">
            <div className="stat-num" ref={cnt2Ref}>
              0
            </div>
            <div className="stat-label">Năm kinh nghiệm</div>
          </div>
          <div className="stat-item">
            <div className="stat-num" ref={cnt3Ref}>
              0%
            </div>
            <div className="stat-label">Tỷ lệ đậu chứng chỉ</div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-visual-wrap">
          <div className="hero-card-main">
            <div className="card-lang-flag">🇩🇪</div>
            <div className="card-title">Tiếng Đức chuẩn Goethe</div>
            <div className="card-sub">Chương trình đào tạo quốc tế</div>
            <div className="card-levels">
              <span className="level-tag">A1</span>
              <span className="level-tag">A2</span>
              <span className="level-tag">B1</span>
              <span className="level-tag">B2</span>
              <span className="level-tag">C1</span>
            </div>
            <div className="card-progress-title">Tiến độ trung bình học viên</div>
            <div className="card-progress-bar">
              <div className="card-progress-fill"></div>
            </div>
            <div className="card-progress-label">75% hoàn thành lộ trình B2</div>
          </div>
          <div className="floating-badge fb1">
            <div className="fb-label">Học viên mới</div>
            <div className="fb-value">+120 / tháng</div>
          </div>
          <div className="floating-badge fb2">
            <div className="fb-label">Xếp hạng Goethe</div>
            <div className="fb-value">★ 4.9 / 5</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section id="why">
      <div className="why-grid">
        <div className="why-text">
          <div className="section-label">Tại sao chọn chúng tôi</div>
          <h2 className="section-title">
            Học tiếng Đức
            <br />
            theo <em>đúng cách</em>
          </h2>
          <p className="section-sub">
            Chúng tôi không chỉ dạy từ vựng và ngữ pháp. Chúng tôi xây dựng tư duy
            ngôn ngữ để bạn có thể sử dụng tiếng Đức tự nhiên trong mọi tình huống
            thực tế.
          </p>
          <div className="why-features">
            {features.map((feature) => (
              <div
                className="feature-row lazy-item"
                key={feature.title}
                style={{ transitionDelay: feature.delay }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-info">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-visual lazy-item">
          <div className="stat-card">
            <div className="sc-num">3.200+</div>
            <div className="sc-label">Học viên tốt nghiệp thành công</div>
          </div>
          <div className="stat-card">
            <div className="sc-num">12</div>
            <div className="sc-label">Năm hoạt động liên tục</div>
          </div>
          <div className="stat-card">
            <div className="sc-num">97%</div>
            <div className="sc-label">Tỷ lệ đậu chứng chỉ Goethe B1/B2</div>
          </div>
          <div className="stat-card">
            <div className="sc-num">4.9★</div>
            <div className="sc-label">Đánh giá trung bình từ học viên</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CoursesSection() {
  return (
    <section id="courses">
      <div className="courses-intro">
        <div className="section-label">Chương trình học</div>
        <h2 className="section-title">
          Khóa học phù hợp
          <br />
          với mọi <em>trình độ</em>
        </h2>
        <p className="section-sub">
          Từ người chưa biết gì đến nâng cao C1 — chúng tôi có lộ trình dành riêng
          cho bạn
        </p>
      </div>
      <div className="courses-grid">
        {courses.map((course) => (
          <article
            className={`course-card lazy-item${course.featured ? ' course-featured' : ''}`}
            key={course.name}
            style={{ transitionDelay: course.delay }}
          >
            {course.featured ? <div className="featured-tag">Phổ biến nhất</div> : null}
            <div className="course-level">{course.level}</div>
            <h3 className="course-name">{course.name}</h3>
            <p className="course-desc">{course.description}</p>
            <div className="course-meta">
              {course.meta.map((meta) => (
                <div className="course-meta-item" key={`${course.name}-${meta}`}>
                  {meta}
                </div>
              ))}
            </div>
            <div className="course-price">
              {course.price} <span>{course.priceNote}</span>
            </div>
            <div className="course-hover-line"></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section id="process">
      <div className="process-header">
        <div className="section-label">Quy trình học</div>
        <h2 className="section-title">
          4 bước <em>đơn giản</em>
          <br />
          để bắt đầu
        </h2>
      </div>
      <div className="process-steps">
        {processSteps.map((step) => (
          <div
            className="process-step lazy-item"
            key={step.number}
            style={{ transitionDelay: step.delay }}
          >
            <div className="step-num">{step.number}</div>
            <div className="step-icon">{step.icon}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="testi-header">
        <div>
          <div className="section-label">Học viên nói gì</div>
          <h2 className="section-title">
            Câu chuyện
            <br />
            <em>thành công</em>
          </h2>
        </div>
        <div className="testi-header-note">
          Hơn 3.200 học viên đã đạt chứng chỉ tiếng Đức và thực hiện được giấc mơ của
          mình
        </div>
      </div>
      <div className="testi-grid">
        {testimonials.map((item) => (
          <article
            className="testi-card lazy-item"
            key={item.authorName}
            style={{ transitionDelay: item.delay }}
          >
            <div className="testi-stars">★★★★★</div>
            <div className="testi-text">{item.text}</div>
            <div className="testi-author">
              <div className="author-avatar">{item.authorInitials}</div>
              <div>
                <div className="author-name">{item.authorName}</div>
                <div className="author-meta">{item.authorMeta}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

type CtaSectionProps = {
  email: string
  submitLabel: string
  inputError: boolean
  onEmailChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function CtaSection({
  email,
  submitLabel,
  inputError,
  onEmailChange,
  onSubmit,
}: CtaSectionProps) {
  return (
    <section id="cta">
      <div className="cta-content">
        <div className="section-label cta-label">
          <span></span>
          Bắt đầu hành trình
        </div>
        <h2 className="cta-title">
          Sẵn sàng nói
          <br />
          <em>Auf Wiedersehen</em>
          <br />
          với rào cản ngôn ngữ?
        </h2>
        <p className="cta-sub">
          Đăng ký nhận lịch học thử miễn phí — không ràng buộc, không áp lực, bắt đầu
          ngay hôm nay.
        </p>
        <form className="cta-form" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder={inputError ? 'Vui lòng nhập email hợp lệ' : 'Email của bạn...'}
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
            className={inputError ? 'is-error' : undefined}
          />
          <button type="submit">{submitLabel}</button>
        </form>
        <div className="cta-note">
          🔒 Chúng tôi không bao giờ chia sẻ thông tin của bạn · Hủy bất cứ lúc nào
        </div>
      </div>
    </section>
  )
}

export function FooterSection() {
  return (
    <footer>
      <div className="footer-logo">Frau Nguyen</div>
      <div className="footer-copy">© 2025 Frau Nguyen. Mọi quyền được bảo lưu.</div>
      <div className="footer-links">
        <a href="#">Chính sách</a>
        <a href="#">Điều khoản</a>
        <a href="#">Liên hệ</a>
      </div>
    </footer>
  )
}
