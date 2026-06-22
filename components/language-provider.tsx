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
      eyebrow: "For restaurants, cafes, bakeries, caterers, and local food brands",
      title: "Grow Restaurant Revenue by 50% With a Clearer Ad Path",
      body: "Vietgrow builds the offer, ads, revenue page, and request form so local customers know exactly what to order, reserve, or book.",
      primary: "Get Free Plan",
      secondary: "See how it works",
      trusted: "Built for local food and hospitality owners",
      lockIn: "No long-term contract",
      leadTitle: "New table request",
      leadMeta: "Dinner for 4 - 2 min ago",
      callTitle: "+50% revenue lift",
      callMeta: "from one local campaign",
      imageAlt: "A warm Vietnamese restaurant with shared dishes and guests being served"
    },
    results: {
      title: "A clearer path from ad click to revenue",
      stats: [
        {
          value: "+50%",
          label: "more revenue"
        },
        {
          value: "24/7",
          label: "order path stays live"
        },
        {
          value: "$119",
          label: "monthly system fee"
        }
      ]
    },
    system: {
      eyebrow: "How it works",
      title: "Choose one revenue offer. Reach the right diners. Convert the click.",
      body: "A simple three-step path built for orders, reservations, and inquiries.",
      steps: [
        {
          number: "01",
          title: "Choose the offer",
          description: "Pick one menu item, set, or package with a clear deal to attract customers.",
          tags: [
            "Menu offer",
            "Clear deal",
            "Hook"
          ]
        },
        {
          number: "02",
          title: "Run targeted ads",
          description: "Run effective Facebook and Instagram ads aimed at the right local customers.",
          tags: [
            "Facebook",
            "Instagram",
            "Local audience"
          ]
        },
        {
          number: "03",
          title: "Convert the click",
          description: "Maximize conversion from ad click to order, reservation, or inquiry.",
          tags: [
            "Revenue page",
            "Request form",
            "Follow-up"
          ]
        }
      ],
      flow: [
        "Revenue offer",
        "Targeted ads",
        "Short revenue page",
        "Order or request"
      ]
    },
    package: {
      eyebrow: "What you get",
      title: "$119/month F&B revenue system",
      body: "A focused setup for food businesses that need sales opportunities, not empty attention.",
      label: "F&B Revenue System",
      cardTitle: "Built for orders, bookings, and sales",
      cardBody: "We prepare the campaign pieces and improve them month by month.",
      price: "$119",
      priceMeta: "per month",
      cta: "Get my free plan",
      included: "Included:",
      includes: [
        "12 posts per month",
        "Facebook and Instagram ad setup",
        "Food-focused ad creative",
        "Local audience targeting",
        "Revenue page and request form",
        "Monthly campaign improvement"
      ]
    },
    campaign: {
      eyebrow: "Campaign preview",
      title: "What customers see before they order",
      body: "A clear food offer, a short page, and an easy way to reserve, order, or inquire.",
      videoAlt: "Video ad preview for a spa package",
      videoTitle: "Dinner for Two Feature",
      videoMeta: "Chef special - reserve this week",
      videoCaption: "Short video ad",
      carouselAlt: "Carousel ad preview for a spa offer",
      carouselTitle: "New Guest Tasting Offer",
      carouselMeta: "Limited tables for first-time guests this month.",
      carouselCta: "Reserve my table",
      carouselCaption: "Offer creative",
      formTitle: "Send a request",
      formFields: [
        "Full name",
        "Phone number",
        "Service interest"
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
      title: "Turn food attention into revenue",
      body: "Get a simple plan for the offer, page, and ad angle to test first.",
      button: "Get Free Plan"
    },
    form: {
      eyebrow: "Free, no pressure",
      title: "Get your free F&B revenue plan",
      body: "Tell us about your restaurant. We will show you the first revenue angle we would test.",
      expectations: [
        "Best service or offer to run first",
        "Revenue target to aim for over 12 months",
        "Which current channel to fix first for better conversion"
      ],
      privacy: "No spam. We only use this to prepare your plan.",
      successTitle: "Thank you!",
      successBody: "We received your details. Vietgrow will review your restaurant and send the next step shortly.",
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
      title: "Questions restaurant owners ask us",
      items: [
        {
          q: "Do I need ads running already?",
          a: "No. We can start from zero."
        },
        {
          q: "Is this only for restaurants?",
          a: "It is built for restaurants, cafes, caterers, and local food brands."
        },
        {
          q: "Do I need a website?",
          a: "No. We create the campaign landing page."
        },
        {
          q: "Is 30 guaranteed?",
          a: "No. We create the campaign revenue page."
        },
        {
          q: "Is 50% guaranteed?",
          a: "No. It is the campaign target. Results depend on your market, offer, budget, and follow-up."
        },
        {
          q: "What happens after I submit?",
          a: "We review your spa and send a simple campaign plan."
        }
      ]
    },
    footer: {
      tagline: "Paid ad systems for restaurants and food businesses.",
      link: "Get your free F&B revenue plan",
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
      eyebrow: "Dành cho nhà hàng, quán cà phê, tiệm bánh, dịch vụ tiệc và thương hiệu ẩm thực địa phương",
      title: "Tăng 50% doanh thu nhà hàng bằng một đường quảng cáo rõ hơn",
      body: "Vietgrow xây ưu đãi, quảng cáo, trang tạo doanh thu và biểu mẫu để khách quanh khu vực biết nên gọi món, đặt bàn hoặc gửi yêu cầu gì.",
      primary: "Nhận kế hoạch miễn phí",
      secondary: "Xem cách làm",
      trusted: "Dành cho chủ nhà hàng và cơ sở ẩm thực địa phương",
      lockIn: "Không ràng buộc dài hạn",
      leadTitle: "Yêu cầu đặt bàn mới",
      leadMeta: "Bữa tối cho 4 người - 2 phút trước",
      callTitle: "+50% doanh thu",
      callMeta: "từ một chiến dịch địa phương",
      imageAlt: "Nhà hàng Việt ấm cúng với món ăn được phục vụ cho khách"
    },
    results: {
      title: "Đường đi rõ hơn từ cú nhấp quảng cáo đến doanh thu",
      stats: [
        {
          value: "+50%",
          label: "tăng doanh thu"
        },
        {
          value: "24/7",
          label: "đường gọi món luôn hoạt động"
        },
        {
          value: "$119",
          label: "chi phí hằng tháng"
        }
      ]
    },
    system: {
      eyebrow: "Cách làm",
      title: "Chọn đúng ưu đãi. Chạy đúng khách. Tối đa hóa doanh thu.",
      body: "Quy trình 3 bước gọn để biến quảng cáo thành đơn hàng, đặt bàn hoặc yêu cầu mới.",
      steps: [
        {
          number: "01",
          title: "Chọn ưu đãi chủ lực",
          description: "Chọn 1 món, combo hoặc gói dịch vụ với ưu đãi rõ để thu hút khách hàng.",
          tags: [
            "Món chủ lực",
            "Ưu đãi rõ",
            "Điểm thu hút"
          ]
        },
        {
          number: "02",
          title: "Chạy quảng cáo đúng tệp",
          description: "Chạy quảng cáo Facebook và Instagram hiệu quả, nhắm đúng nhóm khách hàng quanh khu vực.",
          tags: [
            "Facebook",
            "Instagram",
            "Khách quanh khu vực"
          ]
        },
        {
          number: "03",
          title: "Tăng chuyển đổi",
          description: "Tăng tối đa chuyển đổi từ cú nhấp thành đơn hàng, đặt bàn hoặc yêu cầu tư vấn.",
          tags: [
            "Trang ngắn",
            "Biểu mẫu",
            "Chăm sóc khách"
          ]
        }
      ],
      flow: [
        "Ưu đãi tạo doanh thu",
        "Quảng cáo đúng tệp",
        "Trang ngắn",
        "Đơn hàng hoặc yêu cầu"
      ]
    },
    package: {
      eyebrow: "Bạn nhận được gì",
      title: "Hệ thống tăng doanh thu ẩm thực $119 mỗi tháng",
      body: "Một bộ triển khai gọn cho cơ sở ẩm thực cần cơ hội bán hàng, không phải sự chú ý trống rỗng.",
      label: "Hệ thống tăng doanh thu",
      cardTitle: "Xây cho đơn hàng, đặt bàn và yêu cầu mới",
      cardBody: "Vietgrow chuẩn bị các phần của chiến dịch và cải thiện hằng tháng.",
      price: "$119",
      priceMeta: "mỗi tháng",
      cta: "Nhận kế hoạch miễn phí",
      included: "Bao gồm:",
      includes: [
        "12 bài đăng mỗi tháng",
        "Thiết lập quảng cáo Facebook và Instagram",
        "Mẫu quảng cáo đúng ngành ẩm thực",
        "Nhắm khách quanh khu vực",
        "Trang tạo doanh thu và biểu mẫu",
        "Cải thiện chiến dịch hằng tháng"
      ]
    },
    campaign: {
      eyebrow: "Minh họa chiến dịch",
      title: "Khách thấy gì trước khi gọi món",
      body: "Một ưu đãi món ăn rõ ràng, một trang ngắn và một cách dễ hiểu để đặt bàn, gọi món hoặc gửi yêu cầu.",
      videoAlt: "Mẫu quảng cáo cho gói spa",
      videoTitle: "Bữa tối cho hai người",
      videoMeta: "Món đặc biệt - đặt bàn trong tuần",
      videoCaption: "Quảng cáo video ngắn",
      carouselAlt: "Mẫu quảng cáo cho ưu đãi spa",
      carouselTitle: "Ưu đãi trải nghiệm cho khách mới",
      carouselMeta: "Số bàn cho khách mới có giới hạn trong tháng này.",
      carouselCta: "Tôi muốn đặt bàn",
      carouselCaption: "Mẫu ưu đãi",
      formTitle: "Gửi yêu cầu",
      formFields: [
        "Họ và tên",
        "Số điện thoại",
        "Dịch vụ quan tâm"
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
      title: "Biến sự chú ý dành cho món ăn thành doanh thu",
      body: "Nhận kế hoạch đơn giản cho ưu đãi, trang tạo doanh thu và góc quảng cáo nên thử trước.",
      button: "Nhận kế hoạch miễn phí"
    },
    form: {
      eyebrow: "Miễn phí, không gây áp lực",
      title: "Nhận kế hoạch tăng doanh thu miễn phí",
      body: "Cho Vietgrow biết về nhà hàng của bạn. Chúng tôi sẽ chỉ ra góc tạo doanh thu nên thử trước.",
      expectations: [
        "Dịch vụ hoặc ưu đãi nên chạy trước",
        "Mức doanh thu cần nhắm trong 12 tháng",
        "Kênh hiện tại nên sửa trước để tăng chuyển đổi"
      ],
      privacy: "Không gửi thư rác. Thông tin chỉ dùng để chuẩn bị kế hoạch.",
      successTitle: "Cảm ơn bạn!",
      successBody: "Vietgrow đã nhận thông tin và sẽ xem nhà hàng của bạn để gửi bước tiếp theo.",
      labels: {
        fullName: "Họ và tên",
        businessName: "Tên cơ sở",
        phone: "Số điện thoại",
        email: "Email",
        businessType: "Loại hình cơ sở",
        budget: "Doanh thu hiện tại của tiệm",
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
          q: "Dịch vụ này chỉ dành cho nhà hàng không?",
          a: "Dành cho nhà hàng, quán cà phê, dịch vụ tiệc và thương hiệu ẩm thực địa phương."
        },
        {
          q: "Tôi có cần website không?",
          a: "Không. Vietgrow tạo trang riêng cho chiến dịch."
        },
        {
          q: "Có cam kết đúng 30 lượt không?",
          a: "Không. Vietgrow tạo trang tạo doanh thu riêng cho chiến dịch."
        },
        {
          q: "Có cam kết đúng 50% không?",
          a: "Không. Đây là mục tiêu chiến dịch. Kết quả phụ thuộc vào khu vực, ưu đãi, ngân sách và cách chăm sóc khách."
        },
        {
          q: "Sau khi gửi thông tin thì sao?",
          a: "Vietgrow xem spa của bạn và gửi kế hoạch chiến dịch ngắn gọn."
        }
      ]
    },
    footer: {
      tagline: "Hệ thống quảng cáo trả phí cho nhà hàng và cơ sở ẩm thực.",
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
