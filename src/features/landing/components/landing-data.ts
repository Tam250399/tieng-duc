export type Course = {
  level: string
  name: string
  description: string
  meta: string[]
  price: string
  priceNote: string
  featured?: boolean
  delay?: string
}

export type Feature = {
  icon: string
  title: string
  description: string
  delay?: string
}

export type ProcessStep = {
  number: string
  icon: string
  title: string
  description: string
  delay?: string
}

export type Testimonial = {
  text: string
  authorInitials: string
  authorName: string
  authorMeta: string
  delay?: string
}

export const features: Feature[] = [
  {
    icon: '🎓',
    title: 'Giảng viên được chứng nhận DaF',
    description:
      '100% giáo viên có bằng DaF (Tiếng Đức là ngoại ngữ) từ các trường đại học Đức và Áo',
  },
  {
    icon: '📚',
    title: 'Giáo trình chuẩn Goethe Institut',
    description:
      'Nội dung được cập nhật theo chuẩn CEFR mới nhất, có cam kết đầu ra rõ ràng',
    delay: '0.1s',
  },
  {
    icon: '🔴',
    title: 'Lớp học nhỏ — tối đa 12 người',
    description:
      'Mỗi học viên được chú ý và sửa lỗi trực tiếp, không học chay theo nhóm lớn',
    delay: '0.2s',
  },
  {
    icon: '💬',
    title: 'Luyện nói hàng ngày với native speaker',
    description:
      'Session 1-1 với người bản ngữ 2 lần/tuần giúp phát âm và phản xạ ngôn ngữ tự nhiên',
    delay: '0.3s',
  },
]

export const courses: Course[] = [
  {
    level: 'Sơ cấp',
    name: 'Nhập môn A1 — A2',
    description:
      'Xây dựng nền tảng vững chắc từ bảng chữ cái, phát âm, cấu trúc câu cơ bản đến giao tiếp hàng ngày.',
    meta: [
      '⏰ 4 tháng · 3 buổi/tuần',
      '👥 Tối đa 12 học viên',
      '📍 Online & Offline',
      '🎯 Thi chứng chỉ A2 Goethe',
    ],
    price: '2.900.000',
    priceNote: 'VNĐ / tháng',
  },
  {
    level: 'Trung cấp',
    name: 'Giao tiếp B1 — B2',
    description:
      'Đạt trình độ sử dụng tiếng Đức thành thạo trong môi trường làm việc, du học và định cư Đức.',
    meta: [
      '⏰ 8 tháng · 3 buổi/tuần',
      '👥 Tối đa 10 học viên',
      '📍 Online & Offline',
      '🎯 Thi chứng chỉ B2 Goethe',
    ],
    price: '3.600.000',
    priceNote: 'VNĐ / tháng',
    featured: true,
    delay: '0.15s',
  },
  {
    level: 'Nâng cao',
    name: 'Chuyên sâu C1',
    description:
      'Dành cho người muốn học tại Đức, làm việc chuyên nghiệp hoặc cần thành thạo học thuật và kinh doanh.',
    meta: [
      '⏰ 6 tháng · 4 buổi/tuần',
      '👥 Tối đa 8 học viên',
      '📍 Hybrid (ưu tiên offline)',
      '🎯 Thi chứng chỉ C1 Goethe',
    ],
    price: '4.500.000',
    priceNote: 'VNĐ / tháng',
    delay: '0.3s',
  },
  {
    level: 'Đặc biệt',
    name: 'Tiếng Đức cho Du học',
    description:
      'Chuẩn bị toàn diện cho Studienkolleg, kỳ thi DSH và TestDaF. Bao gồm hỗ trợ hồ sơ du học.',
    meta: [
      '⏰ 3 — 12 tháng linh hoạt',
      '👥 Tối đa 8 học viên',
      '📍 Offline ưu tiên',
      '🎯 DSH / TestDaF',
    ],
    price: '4.200.000',
    priceNote: 'VNĐ / tháng',
    delay: '0.15s',
  },
  {
    level: 'Doanh nghiệp',
    name: 'Tiếng Đức Thương mại',
    description:
      'Ngôn ngữ chuyên ngành cho môi trường kinh doanh, đàm phán, viết báo cáo và thuyết trình bằng tiếng Đức.',
    meta: [
      '⏰ 4 tháng · linh hoạt',
      '👥 Group hoặc 1-1',
      '📍 Tại doanh nghiệp / Online',
      '🎯 Chứng chỉ Goethe Beruf',
    ],
    price: 'Liên hệ',
    priceNote: 'báo giá theo nhóm',
    delay: '0.3s',
  },
  {
    level: 'Cấp tốc',
    name: 'Intensive 1-1',
    description:
      'Học 1 kèm 1 với giảng viên cá nhân, đẩy nhanh tiến độ gấp đôi. Lịch học linh hoạt hoàn toàn theo bạn.',
    meta: [
      '⏰ Linh hoạt 100%',
      '👥 Chỉ 1 học viên',
      '📍 Online / Offline / Tại nhà',
      '🎯 Theo mục tiêu cá nhân',
    ],
    price: '350.000',
    priceNote: 'VNĐ / giờ',
    delay: '0.45s',
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: '📋',
    title: 'Kiểm tra đầu vào',
    description:
      'Làm bài test online miễn phí để xác định đúng trình độ và chọn khóa học phù hợp nhất với bạn.',
  },
  {
    number: '02',
    icon: '🗣️',
    title: 'Tư vấn 1-1',
    description:
      'Gặp gỡ tư vấn viên để thảo luận mục tiêu, lịch học và thiết kế lộ trình cá nhân hóa cho bạn.',
    delay: '0.15s',
  },
  {
    number: '03',
    icon: '📖',
    title: 'Học thử 1 tuần',
    description:
      'Tham gia 3 buổi học thử hoàn toàn miễn phí. Không hài lòng — không cần trả bất kỳ đồng nào.',
    delay: '0.3s',
  },
  {
    number: '04',
    icon: '🏆',
    title: 'Chinh phục mục tiêu',
    description:
      'Học theo lộ trình có cam kết đầu ra. Đội ngũ hỗ trợ 24/7 và theo dõi tiến độ học hàng tuần.',
    delay: '0.45s',
  },
]

export const testimonials: Testimonial[] = [
  {
    text: '"Sau 8 tháng học tại Frau Nguyen, tôi đã đậu B2 Goethe với điểm Sehr gut. Giờ tôi đang học tại ĐH Hamburg — điều tôi chưa bao giờ dám mơ trước đây."',
    authorInitials: 'NL',
    authorName: 'Nguyễn Linh',
    authorMeta: 'Du học sinh ĐH Hamburg · B2 Goethe 2023',
  },
  {
    text: '"Mình đã thử 2 trung tâm khác trước đây nhưng không tiến bộ. Frau Nguyen có phương pháp khác hẳn — lớp nhỏ, giáo viên tận tâm và nói tiếng Đức từ ngày đầu tiên."',
    authorInitials: 'TH',
    authorName: 'Trần Hương',
    authorMeta: 'Kỹ sư tại Bosch Vietnam · C1 candidate',
    delay: '0.15s',
  },
  {
    text: '"Khóa tiếng Đức thương mại giúp tôi tự tin đàm phán với đối tác Đức. Doanh thu mảng xuất khẩu của công ty tăng 40% kể từ khi có thể giao tiếp trực tiếp."',
    authorInitials: 'PD',
    authorName: 'Phạm Dũng',
    authorMeta: 'Giám đốc kinh doanh · Goethe Beruf 2022',
    delay: '0.3s',
  },
]
