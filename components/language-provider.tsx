'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Language = 'en' | 'vi'

const copy = {
  en: {
    lang: {
      current: "EN",
      next: "VI",
      toggleLabel: "Switch to Vietnamese"
    },
    header: {
      how: "How it works",
      package: "$119 plan",
      results: "Proof",
      faq: "FAQ",
      cta: "Get Free Plan"
    },
    hero: {
      eyebrow: "For restaurants, cafes, and local food brands",
      title: "Grow Restaurant Revenue by 50%",
      body: "Launch one easy-to-buy food offer, run local ads, and send customers to a page built for orders and reservations.",
      primary: "Get Free Plan",
      secondary: "See how it works",
      trusted: "For food owners who need more revenue, not just views",
      lockIn: "No long-term contract",
      leadTitle: "New table request",
      leadMeta: "Dinner for 4 - 2 min ago",
      callTitle: "+50% revenue growth",
      callMeta: "from one local campaign",
      imageAlt: "A warm Vietnamese restaurant with shared dishes and guests being served"
    },
    results: {
      title: "Turn ad clicks into revenue.",
      stats: [
        {
          value: "+50%",
          label: "revenue growth target"
        },
        {
          value: "1",
          label: "offer to launch"
        },
        {
          value: "$119",
          label: "per month"
        }
      ]
    },
    system: {
      eyebrow: "How it works",
      title: "Pick an offer. Run ads. Grow revenue.",
      body: "Give customers one clear reason to order or reserve.",
      steps: [
        {
          number: "01",
          title: "Pick one starter offer",
          description: "Turn a signature dish, combo, or group deal into a clear reason to buy.",
          tags: [
            "Offer",
            "Deal",
            "Hook"
          ]
        },
        {
          number: "02",
          title: "Run targeted ads",
          description: "Show it to the right nearby customers on Facebook and Instagram.",
          tags: [
            "Facebook",
            "Instagram",
            "Nearby customers"
          ]
        },
        {
          number: "03",
          title: "Drive revenue",
          description: "Send clicks to a short page built for orders, reservations, or requests.",
          tags: [
            "Revenue page",
            "Form",
            "Follow-up"
          ]
        }
      ],
      flow: [
        "Starter offer",
        "Targeted ads",
        "Short page",
        "Order or request"
      ]
    },
    package: {
      eyebrow: "What you get",
      title: "Launch your revenue campaign for $119/month",
      body: "Get the campaign pieces needed to turn one offer into orders and reservations.",
      label: "F&B Revenue System",
      cardTitle: "Built for orders and reservations",
      cardBody: "We build the campaign and improve it each month.",
      price: "$119",
      priceMeta: "per month",
      cta: "Get my free plan",
      included: "Included:",
      includes: [
        "12 posts per month",
        "Facebook and Instagram setup",
        "Food ad creative",
        "Local targeting",
        "Revenue page and form",
        "Monthly improvements"
      ]
    },
    campaign: {
      eyebrow: "Campaign preview",
      title: "What a customer sees",
      body: "A clear food offer and one easy way to order, reserve, or ask.",
      videoAlt: "Video ad preview for a restaurant offer",
      videoTitle: "Dinner for Two Feature",
      videoMeta: "Chef special - reserve this week",
      videoCaption: "Short video ad",
      carouselAlt: "Carousel ad preview for a restaurant offer",
      carouselTitle: "New Guest Tasting Offer",
      carouselMeta: "Limited tables for first-time guests this month.",
      carouselCta: "Reserve my table",
      carouselCaption: "Offer creative",
      formTitle: "Send a request",
      formFields: [
        "Full name",
        "Phone number",
        "Order or reservation need"
      ],
      formCta: "Send request",
      formStatus: "Request sent to your inbox",
      formCaption: "Landing page and inquiry form",
      conceptsLabel: "Strong F&B campaign angles:",
      concepts: [
        "Signature dish launch",
        "Weekday lunch push",
        "Brunch reservations",
        "Happy hour offer",
        "Catering sales",
        "Private dining",
        "Holiday menu",
        "Online ordering",
        "New guest tasting offer"
      ]
    },
    cta: {
      title: "Start turning attention into revenue",
      body: "Get the first offer and revenue path your restaurant should run.",
      button: "Get Free Plan"
    },
    form: {
      eyebrow: "Free, no pressure",
      title: "Get your revenue growth plan",
      body: "Tell us about your restaurant. We will show you what to promote first.",
      expectations: [
        "Which offer to promote",
        "What revenue target to aim for",
        "What channel to fix first"
      ],
      privacy: "No spam. We only use this to prepare your plan.",
      successTitle: "Thank you!",
      successBody: "We received your details. Vietgrow will review your restaurant and send the next step shortly.",
      scheduleCta: "Schedule a 30-min call",
      callCta: "Call Stillen",
      callNote: "Need to ask first? Call 781-363-7322.",
      labels: {
        fullName: "Full name",
        businessName: "Business name",
        phone: "Phone number",
        email: "Email",
        businessType: "Business type",
        budget: "Current monthly revenue",
        message: "Anything else?",
        optional: "(optional)",
        revenueGoal: "How much more revenue do you want in 12 months?",
        currentAssets: "What do you already have?"
      },
      placeholders: {
        fullName: "Jane Doe",
        businessName: "Lotus Kitchen",
        phone: "(555) 123-4567",
        email: "you@restaurant.com",
        businessType: "Select type",
        budget: "Select current revenue",
        message: "Share your city, main service, or current challenge.",
        revenueGoal: "Select revenue goal",
        currentAssets: "Select current assets"
      },
      businessTypes: [
        {
          value: "Full-Service Restaurant",
          label: "Full-Service Restaurant"
        },
        {
          value: "Cafe / Coffee Shop",
          label: "Cafe / Coffee Shop"
        },
        {
          value: "Bakery / Dessert Shop",
          label: "Bakery / Dessert Shop"
        },
        {
          value: "Catering / Private Events",
          label: "Catering / Private Events"
        },
        {
          value: "Food Truck / Pop-Up",
          label: "Food Truck / Pop-Up"
        },
        {
          value: "Other Food & Beverage Business",
          label: "Other Food & Beverage Business"
        }
      ],
      budgets: [
        {
          value: "$5k/month",
          label: "$5k/month"
        },
        {
          value: "$10k/month",
          label: "$10k/month"
        },
        {
          value: "$50k/month",
          label: "$50k/month"
        },
        {
          value: "$100k+/month",
          label: "$100k+/month"
        }
      ],
      submitting: "Submitting...",
      submit: "Get Free Plan",
      footer: "No spam. Just a practical plan.",
      revenueGoals: [
        {
          value: "+$5k/month",
          label: "+$5k/month"
        },
        {
          value: "+$10k/month",
          label: "+$10k/month"
        },
        {
          value: "+$50k/month",
          label: "+$50k/month"
        },
        {
          value: "+$100k+/month",
          label: "+$100k+/month"
        }
      ],
      currentAssets: [
        {
          value: "Website",
          label: "Website"
        },
        {
          value: "Facebook / Instagram / TikTok",
          label: "Facebook / Instagram / TikTok"
        },
        {
          value: "Google Maps profile",
          label: "Google Maps profile"
        },
        {
          value: "Website + social channels",
          label: "Website + social channels"
        },
        {
          value: "Social channels + Google Maps profile",
          label: "Social channels + Google Maps profile"
        },
        {
          value: "Website + social channels + Google Maps profile",
          label: "Website + social channels + Google Maps profile"
        },
        {
          value: "None yet",
          label: "None yet"
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "What restaurant owners ask",
      items: [
        {
          q: "Do I need ads already?",
          a: "No. We can start from zero."
        },
        {
          q: "Do I need a website?",
          a: "No. We create the campaign page."
        },
        {
          q: "Is 50% guaranteed?",
          a: "No. It is the campaign target. Results depend on your offer, area, budget, and follow-up."
        },
        {
          q: "What happens after I submit?",
          a: "We review your restaurant and send a simple campaign plan."
        }
      ]
    },
    footer: {
      tagline: "Paid ad campaigns for restaurants and local food brands.",
      link: "Get your free revenue plan",
      rights: "All rights reserved."
    }
  },
  vi: {
    lang: {
      current: "VI",
      next: "EN",
      toggleLabel: "Chuyển sang tiếng Anh"
    },
    header: {
      how: "Cách làm",
      package: "Gói $119",
      results: "Kết quả",
      faq: "Hỏi đáp",
      cta: "Nhận kế hoạch miễn phí"
    },
    hero: {
      eyebrow: "Dành cho nhà hàng, quán cà phê và thương hiệu ẩm thực địa phương",
      title: "Tăng ngay 50% doanh thu cho nhà hàng/quán ăn",
      body: "Dựng offer kéo khách, chạy quảng cáo đúng tệp, đưa khách về trang đặt bàn hoặc gọi món.",
      primary: "Nhận kế hoạch miễn phí",
      secondary: "Xem cách làm",
      trusted: "Dành cho chủ quán cần doanh thu, không chỉ lượt xem",
      lockIn: "Không ràng buộc dài hạn",
      leadTitle: "Yêu cầu đặt bàn mới",
      leadMeta: "Bữa tối cho 4 người - 2 phút trước",
      callTitle: "+50% doanh thu",
      callMeta: "từ một chiến dịch địa phương",
      imageAlt: "Nhà hàng Việt ấm cúng với món ăn được phục vụ cho khách"
    },
    results: {
      title: "Biến cú nhấp quảng cáo thành doanh thu.",
      stats: [
        {
          value: "+50%",
          label: "mục tiêu tăng doanh thu"
        },
        {
          value: "1",
          label: "offer cần chạy"
        },
        {
          value: "$119",
          label: "mỗi tháng"
        }
      ]
    },
    system: {
      eyebrow: "Cách làm",
      title: "Chọn offer. Chạy quảng cáo. Tăng doanh thu.",
      body: "Offer càng rõ, khách càng dễ gọi món hoặc đặt bàn.",
      steps: [
        {
          number: "01",
          title: "Chọn offer kéo khách",
          description: "Lấy món chủ lực, combo hoặc ưu đãi nhóm rồi gắn lý do mua rõ.",
          tags: [
            "Offer",
            "Giá trị",
            "Điểm hút khách"
          ]
        },
        {
          number: "02",
          title: "Chạy quảng cáo đúng tệp",
          description: "Đưa ưu đãi đến đúng khách quanh khu vực trên Facebook và Instagram.",
          tags: [
            "Facebook",
            "Instagram",
            "Khách quanh khu vực"
          ]
        },
        {
          number: "03",
          title: "Chốt doanh thu",
          description: "Dẫn khách về một trang ngắn để đặt bàn, gọi món hoặc gửi yêu cầu.",
          tags: [
            "Trang ngắn",
            "Biểu mẫu",
            "Chăm sóc khách"
          ]
        }
      ],
      flow: [
        "Offer kéo khách",
        "Quảng cáo đúng tệp",
        "Trang ngắn",
        "Đơn hàng hoặc yêu cầu"
      ]
    },
    package: {
      eyebrow: "Bạn nhận được gì",
      title: "Chạy chiến dịch tăng doanh thu với $119/tháng",
      body: "Có đủ phần cần chạy để biến một offer thành đơn hàng và đặt bàn.",
      label: "Hệ thống tăng doanh thu",
      cardTitle: "Xây cho đơn hàng và đặt bàn",
      cardBody: "Vietgrow dựng chiến dịch và cải thiện hằng tháng.",
      price: "$119",
      priceMeta: "mỗi tháng",
      cta: "Nhận kế hoạch miễn phí",
      included: "Bao gồm:",
      includes: [
        "12 bài đăng mỗi tháng",
        "Thiết lập Facebook và Instagram",
        "Mẫu quảng cáo ngành ẩm thực",
        "Nhắm khách quanh khu vực",
        "Trang tạo doanh thu và biểu mẫu",
        "Cải thiện hằng tháng"
      ]
    },
    campaign: {
      eyebrow: "Minh họa chiến dịch",
      title: "Khách sẽ thấy gì",
      body: "Một ưu đãi món ăn rõ ràng và một cách dễ để đặt bàn, gọi món hoặc gửi yêu cầu.",
      videoAlt: "Mẫu quảng cáo cho offer nhà hàng",
      videoTitle: "Bữa tối cho hai người",
      videoMeta: "Món đặc biệt - đặt bàn trong tuần",
      videoCaption: "Quảng cáo video ngắn",
      carouselAlt: "Mẫu quảng cáo cho offer nhà hàng",
      carouselTitle: "Ưu đãi trải nghiệm cho khách mới",
      carouselMeta: "Số bàn cho khách mới có giới hạn trong tháng này.",
      carouselCta: "Tôi muốn đặt bàn",
      carouselCaption: "Mẫu ưu đãi",
      formTitle: "Gửi yêu cầu",
      formFields: [
        "Họ và tên",
        "Số điện thoại",
        "Nhu cầu đặt bàn/gọi món"
      ],
      formCta: "Gửi yêu cầu",
      formStatus: "Yêu cầu đã được gửi về hộp thư của bạn",
      formCaption: "Trang đích và biểu mẫu đặt lịch",
      conceptsLabel: "Góc chiến dịch mạnh cho nhà hàng:",
      concepts: [
        "Ra mắt món chủ lực",
        "Đẩy bữa trưa ngày thường",
        "Đặt bàn cuối tuần",
        "Ưu đãi giờ vàng",
        "Bán gói tiệc",
        "Phòng riêng",
        "Thực đơn dịp lễ",
        "Gọi món trực tuyến",
        "Ưu đãi cho khách mới"
      ]
    },
    cta: {
      title: "Bắt đầu biến sự chú ý thành doanh thu",
      body: "Nhận offer và đường tạo doanh thu nên chạy trước.",
      button: "Nhận kế hoạch miễn phí"
    },
    form: {
      eyebrow: "Miễn phí, không gây áp lực",
      title: "Nhận kế hoạch tăng doanh thu",
      body: "Cho Vietgrow biết về nhà hàng của bạn. Chúng tôi sẽ gợi ý offer nên chạy trước.",
      expectations: [
        "Offer nên chạy",
        "Mục tiêu doanh thu nên nhắm tới",
        "Kênh cần sửa trước"
      ],
      privacy: "Không gửi thư rác. Thông tin chỉ dùng để chuẩn bị kế hoạch.",
      successTitle: "Cảm ơn bạn!",
      successBody: "Vietgrow đã nhận thông tin và sẽ xem nhà hàng của bạn để gửi bước tiếp theo.",
      scheduleCta: "Đặt lịch 30 phút",
      callCta: "Gọi Stillen",
      callNote: "Muốn hỏi nhanh? Gọi 781-363-7322.",
      labels: {
        fullName: "Họ và tên",
        businessName: "Tên cơ sở",
        phone: "Số điện thoại",
        email: "Email",
        businessType: "Loại hình cơ sở",
        budget: "Doanh thu hiện tại của quán/nhà hàng",
        message: "Thông tin thêm?",
        optional: "(không bắt buộc)",
        revenueGoal: "Trong 12 tháng muốn tăng thêm bao nhiêu doanh thu?",
        currentAssets: "Hiện tại bạn đang có gì?"
      },
      placeholders: {
        fullName: "Nguyễn An",
        businessName: "Lotus Kitchen",
        phone: "(555) 123-4567",
        email: "you@restaurant.com",
        businessType: "Chọn loại hình",
        budget: "Chọn mức doanh thu hiện tại",
        message: "Chia sẻ thêm khu vực, dịch vụ chính hoặc vấn đề bạn đang gặp.",
        revenueGoal: "Chọn mục tiêu tăng doanh thu",
        currentAssets: "Chọn những gì đang có"
      },
      businessTypes: [
        {
          value: "Full-Service Restaurant",
          label: "Nhà hàng phục vụ tại bàn"
        },
        {
          value: "Cafe / Coffee Shop",
          label: "Quán cà phê"
        },
        {
          value: "Bakery / Dessert Shop",
          label: "Tiệm bánh hoặc tráng miệng"
        },
        {
          value: "Catering / Private Events",
          label: "Dịch vụ tiệc hoặc sự kiện riêng"
        },
        {
          value: "Food Truck / Pop-Up",
          label: "Xe bán đồ ăn hoặc gian hàng tạm thời"
        },
        {
          value: "Other Food & Beverage Business",
          label: "Cơ sở ẩm thực khác"
        }
      ],
      budgets: [
        {
          value: "$5k/month",
          label: "$5k mỗi tháng"
        },
        {
          value: "$10k/month",
          label: "$10k mỗi tháng"
        },
        {
          value: "$50k/month",
          label: "$50k mỗi tháng"
        },
        {
          value: "$100k+/month",
          label: "Trên $100k mỗi tháng"
        }
      ],
      submitting: "Đang gửi...",
      submit: "Nhận kế hoạch miễn phí",
      footer: "Không gửi thư rác. Chỉ là một kế hoạch thực tế.",
      revenueGoals: [
        {
          value: "+$5k/month",
          label: "Tăng thêm $5k mỗi tháng"
        },
        {
          value: "+$10k/month",
          label: "Tăng thêm $10k mỗi tháng"
        },
        {
          value: "+$50k/month",
          label: "Tăng thêm $50k mỗi tháng"
        },
        {
          value: "+$100k+/month",
          label: "Tăng thêm trên $100k mỗi tháng"
        }
      ],
      currentAssets: [
        {
          value: "Website",
          label: "Website"
        },
        {
          value: "Facebook / Instagram / TikTok",
          label: "Facebook / Instagram / TikTok"
        },
        {
          value: "Google Maps profile",
          label: "Hồ sơ Google Maps"
        },
        {
          value: "Website + social channels",
          label: "Website và kênh mạng xã hội"
        },
        {
          value: "Social channels + Google Maps profile",
          label: "Kênh mạng xã hội và hồ sơ Google Maps"
        },
        {
          value: "Website + social channels + Google Maps profile",
          label: "Website, kênh mạng xã hội và hồ sơ Google Maps"
        },
        {
          value: "None yet",
          label: "Chưa có gì"
        }
      ]
    },
    faq: {
      eyebrow: "Hỏi đáp",
      title: "Chủ nhà hàng thường hỏi",
      items: [
        {
          q: "Tôi có cần đang chạy quảng cáo không?",
          a: "Không. Vietgrow có thể bắt đầu từ con số không."
        },
        {
          q: "Tôi có cần website không?",
          a: "Không. Vietgrow tạo trang riêng cho chiến dịch."
        },
        {
          q: "Có cam kết đúng 50% không?",
          a: "Không. Đây là mục tiêu chiến dịch. Kết quả phụ thuộc vào ưu đãi, khu vực, ngân sách và cách chăm sóc khách."
        },
        {
          q: "Sau khi gửi thông tin thì sao?",
          a: "Vietgrow xem nhà hàng của bạn và gửi kế hoạch chiến dịch ngắn gọn."
        }
      ]
    },
    footer: {
      tagline: "Chiến dịch quảng cáo cho nhà hàng và thương hiệu ẩm thực địa phương.",
      link: "Nhận kế hoạch tăng doanh thu miễn phí",
      rights: "Đã đăng ký bản quyền."
    }
  }
} as const

type Copy = (typeof copy)[Language]

const LanguageContext = createContext<
  | {
      language: Language
      setLanguage: (language: Language) => void
      toggleLanguage: () => void
      copy: Copy
    }
  | undefined
>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem('vietgrow-language')
    if (stored === 'en' || stored === 'vi') {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem('vietgrow-language', nextLanguage)
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === 'en' ? 'vi' : 'en'),
      copy: copy[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
