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
  "lang": {
    "current": "EN",
    "next": "VI",
    "toggleLabel": "Switch to Vietnamese"
  },
  "header": {
    "how": "How it works",
    "package": "$119 plan",
    "results": "Results",
    "faq": "FAQ",
    "cta": "Get Free Plan"
  },
  "hero": {
    "eyebrow": "For restaurants, cafes, bars, bakeries & food brands",
    "title": "+50% More Orders and Bookings",
    "body": "A done-for-you ad funnel for F&B: offer, local ads, revenue page, and request form. $119/month.",
    "primary": "Get Free Plan",
    "secondary": "See how it works",
    "trusted": "Trusted by local hospitality owners",
    "lockIn": "No long-term lock-in",
    "leadTitle": "New reservation request",
    "leadMeta": "Dinner for 4 · 2 min ago",
    "callTitle": "+38 orders this week",
    "callMeta": "from your local ad campaign",
    "imageAlt": "A warm Vietnamese restaurant with pho, fresh herbs, shared dishes, and guests being served"
  },
  "results": {
    "title": "Built to turn ad clicks into revenue",
    "stats": [
      {
        "value": "+50%",
        "label": "more orders + bookings"
      },
      {
        "value": "24/7",
        "label": "ad-to-order path"
      },
      {
        "value": "Done-for-you",
        "label": "ads + revenue page"
      }
    ]
  },
  "system": {
    "eyebrow": "The Vietgrow Restaurant Growth System",
    "title": "How it works",
    "body": "Three steps. One clear path from click to revenue.",
    "steps": [
      {
        "number": "01",
        "title": "Pick the offer",
        "description": "Choose one F&B offer people can understand fast.",
        "tags": [
          "Offer",
          "Creative",
          "Message"
        ]
      },
      {
        "number": "02",
        "title": "Run local traffic",
        "description": "Run Facebook and Instagram ads to local customers.",
        "tags": [
          "Local targeting",
          "FB & IG campaigns",
          "Budget control"
        ]
      },
      {
        "number": "03",
        "title": "Convert into revenue",
        "description": "Send clicks to a short revenue page and request form.",
        "tags": [
          "Landing page",
          "Lead form",
          "Order path"
        ]
      }
    ],
    "flow": [
      "Menu Offer + Ad Creative",
      "Local Traffic",
      "Landing Page + Lead Form",
      "Reservation / Order / Revenue"
    ]
  },
  "package": {
    "eyebrow": "What you get",
    "title": "$119/month F&B revenue system",
    "body": "Everything needed to launch a simple local ad funnel.",
    "label": "Restaurant Growth System",
    "cardTitle": "Done-for-you ad funnel",
    "cardBody": "We build the ads, page, form, and monthly improvements.",
    "priceMeta": "per month",
    "cta": "Get my free plan",
    "included": "Everything included:",
    "includes": [
      "12 posts per month",
      "Facebook & Instagram ad setup",
      "Food ad creative",
      "Local audience targeting",
      "Landing page + request form",
      "Monthly optimization"
    ]
  },
  "campaign": {
    "eyebrow": "Campaign previews",
    "title": "See what your ad-to-order journey looks like",
    "body": "From a scroll-stopping ad to a reservation, order, or catering sale — here's the revenue path we build for your customers.",
    "videoAlt": "Video ad preview for a restaurant dinner promotion",
    "videoTitle": "Dinner for Two Feature",
    "videoMeta": "Chef's special menu · Reserve this week",
    "videoCaption": "Short-form video ad",
    "carouselAlt": "Carousel ad preview showing a restaurant menu offer",
    "carouselTitle": "New Guest Tasting Menu",
    "carouselMeta": "Limited tables for first-time guests this month.",
    "carouselCta": "Reserve my table",
    "carouselCaption": "Carousel & offer creative",
    "formTitle": "Request your booking",
    "formFields": [
      "Full name",
      "Phone number",
      "Dining goal"
    ],
    "formCta": "Send request",
    "formStatus": "Request captured & sent to your inbox",
    "formCaption": "Restaurant landing page & lead form",
    "conceptsLabel": "Campaign concepts we build for F&B brands:",
    "concepts": [
      "Signature dish launch",
      "Weekday lunch fill",
      "Brunch reservation push",
      "Happy hour promotion",
      "Catering revenue campaign",
      "Private dining leads",
      "Holiday menu promotion",
      "Online ordering campaign",
      "New customer tasting offer"
    ]
  },
  "cta": {
    "title": "Ready to stop losing revenue after the click?",
    "body": "Get a free, practical growth plan built for your restaurant — your menu, your offers, your local market. No pressure, no obligation.",
    "button": "Get Free Plan"
  },
  "form": {
    "eyebrow": "Free, no pressure",
    "title": "Get your free F&B revenue plan",
    "body": "Tell us about your restaurant. We will send back what to fix first to drive more revenue.",
    "expectations": [
      "Best offer angle to test",
      "Where revenue is leaking",
      "What to fix first"
    ],
    "privacy": "No spam. No pressure. We only use this to prepare your plan.",
    "successTitle": "Thank you!",
    "successBody": "We've received your details and will prepare your free restaurant growth plan. Our team will reach out shortly with your next steps.",
    "labels": {
      "fullName": "Full name",
      "businessName": "Business name",
      "phone": "Phone number",
      "email": "Email",
      "businessType": "Business type",
      "budget": "Monthly ad budget",
      "message": "Anything else?",
      "optional": "(optional)"
    },
    "placeholders": {
      "fullName": "Jane Doe",
      "businessName": "Lotus Kitchen",
      "phone": "(555) 123-4567",
      "email": "you@restaurant.com",
      "businessType": "Select type",
      "budget": "Select budget",
      "message": "Tell us about your goals, location, or current challenges."
    },
    "businessTypes": [
      {
        "value": "Full-Service Restaurant",
        "label": "Full-Service Restaurant"
      },
      {
        "value": "Cafe / Coffee Shop",
        "label": "Cafe / Coffee Shop"
      },
      {
        "value": "Bar / Lounge",
        "label": "Bar / Lounge"
      },
      {
        "value": "Bakery / Dessert Shop",
        "label": "Bakery / Dessert Shop"
      },
      {
        "value": "Fast Casual / QSR",
        "label": "Fast Casual / QSR"
      },
      {
        "value": "Catering / Private Events",
        "label": "Catering / Private Events"
      },
      {
        "value": "Food Truck / Pop-Up",
        "label": "Food Truck / Pop-Up"
      },
      {
        "value": "Other Food & Beverage Business",
        "label": "Other Food & Beverage Business"
      }
    ],
    "budgets": [
      {
        "value": "Under $500/month",
        "label": "Under $500/month"
      },
      {
        "value": "$500–$1,000/month",
        "label": "$500–$1,000/month"
      },
      {
        "value": "$1,000–$2,500/month",
        "label": "$1,000–$2,500/month"
      },
      {
        "value": "$2,500+/month",
        "label": "$2,500+/month"
      },
      {
        "value": "Not sure yet",
        "label": "Not sure yet"
      }
    ],
    "submitting": "Submitting...",
    "submit": "Get Free Plan",
    "footer": "No spam. No pressure. Just your free plan."
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Questions restaurant owners ask us",
    "items": [
      {
        "q": "Do I need to already have ads running?",
        "a": "No. We can build the funnel from scratch."
      },
      {
        "q": "Is this only for restaurants?",
        "a": "It is built for restaurants, cafes, catering, and local F&B brands."
      },
      {
        "q": "Do you create the ad content?",
        "a": "Yes. We create the ad concepts, visuals, and offers."
      },
      {
        "q": "Do I need a website?",
        "a": "No. We build the landing page and request form for the campaign."
      },
      {
        "q": "Will this guarantee bookings or orders?",
        "a": "No. We build the system to improve conversion, but revenue depends on offer, market, and follow-up."
      },
      {
        "q": "How much ad budget do I need?",
        "a": "It depends on your area and offer. We will recommend a realistic starting budget."
      },
      {
        "q": "What happens after I submit the form?",
        "a": "We review your restaurant and send back a practical plan."
      },
      {
        "q": "Can this work for dine-in, takeout, delivery, catering, or events?",
        "a": "Yes. We tailor the funnel around your strongest revenue offer."
      }
    ]
  },
  "footer": {
    "tagline": "Paid-ad growth systems for restaurants and food brands.",
    "link": "Get your free restaurant growth plan",
    "rights": "All rights reserved."
  }
},
  vi: {
  "lang": {
    "current": "VI",
    "next": "EN",
    "toggleLabel": "Switch to English"
  },
  "header": {
    "how": "Cách hoạt động",
    "package": "Gói $119",
    "results": "Kết quả",
    "faq": "FAQ",
    "cta": "Nhận plan miễn phí"
  },
  "hero": {
    "eyebrow": "Dành cho restaurant, cafe, bar, bakery và F&B brand",
    "title": "+50% orders và bookings cho F&B",
    "body": "Ad funnel done-for-you cho F&B: offer, ads local, revenue page và request form. $119/tháng.",
    "primary": "Nhận plan miễn phí",
    "secondary": "Xem cách hoạt động",
    "trusted": "Được tin dùng bởi chủ hospitality business local",
    "lockIn": "Không ràng buộc dài hạn",
    "leadTitle": "Yêu cầu đặt bàn mới",
    "leadMeta": "Dinner cho 4 người · 2 phút trước",
    "callTitle": "+38 orders tuần này",
    "callMeta": "từ local ad campaign của bạn",
    "imageAlt": "Không gian nhà hàng Việt ấm cúng với phở, rau thơm, món ăn chia sẻ và khách đang được phục vụ"
  },
  "results": {
    "title": "Xây để biến click ads thành doanh thu",
    "stats": [
      {
        "value": "+50%",
        "label": "thêm order + booking"
      },
      {
        "value": "24/7",
        "label": "đường ads-to-order"
      },
      {
        "value": "Done-for-you",
        "label": "ads + revenue page"
      }
    ]
  },
  "system": {
    "eyebrow": "Vietgrow Restaurant Growth System",
    "title": "Cách hoạt động",
    "body": "3 bước ngắn. Một đường rõ từ click đến doanh thu.",
    "steps": [
      {
        "number": "01",
        "title": "Chọn offer",
        "description": "Chọn một offer F&B khách hiểu ngay.",
        "tags": [
          "Offer strategy",
          "Video & carousel ads",
          "Food-first visuals"
        ]
      },
      {
        "number": "02",
        "title": "Kéo traffic local đúng tệp",
        "description": "Chạy Facebook và Instagram ads đến khách local.",
        "tags": [
          "Local targeting",
          "FB & IG campaigns",
          "Budget control"
        ]
      },
      {
        "number": "03",
        "title": "Chuyển đổi thành doanh thu",
        "description": "Đưa click về revenue page ngắn và request form.",
        "tags": [
          "Landing page",
          "Lead form",
          "Order path"
        ]
      }
    ],
    "flow": [
      "Menu Offer + Ad Creative",
      "Local Traffic",
      "Landing Page + Lead Form",
      "Reservation / Order / Revenue"
    ]
  },
  "package": {
    "eyebrow": "Gói dịch vụ",
    "title": "Hệ thống doanh thu F&B $119/tháng",
    "body": "Những phần cần để launch một local ad funnel gọn.",
    "label": "Restaurant Growth System",
    "cardTitle": "Ad funnel done-for-you",
    "cardBody": "Vietgrow làm ads, page, form và tối ưu hằng tháng.",
    "priceMeta": "mỗi tháng",
    "cta": "Nhận plan miễn phí",
    "included": "Bao gồm tất cả:",
    "includes": [
      "12 bài post mỗi tháng",
      "Setup Facebook & Instagram ads",
      "Ad creative ngành F&B",
      "Target khách local",
      "Landing page + request form",
      "Tối ưu hằng tháng"
    ]
  },
  "campaign": {
    "eyebrow": "Campaign preview",
    "title": "Hành trình từ ad đến order sẽ trông như thế nào",
    "body": "Từ một mẫu ad thu hút trên feed đến reservation, order hoặc catering sale, đây là revenue path chúng tôi xây cho khách của bạn.",
    "videoAlt": "Video ad preview cho promotion bữa tối nhà hàng",
    "videoTitle": "Dinner for Two Feature",
    "videoMeta": "Chef special menu · Reserve trong tuần này",
    "videoCaption": "Short-form video ad",
    "carouselAlt": "Carousel ad preview cho restaurant menu offer",
    "carouselTitle": "New Guest Tasting Menu",
    "carouselMeta": "Số bàn giới hạn cho khách mới trong tháng này.",
    "carouselCta": "Reserve bàn của tôi",
    "carouselCaption": "Carousel & offer creative",
    "formTitle": "Gửi yêu cầu booking",
    "formFields": [
      "Họ và tên",
      "Số điện thoại",
      "Mục tiêu dining"
    ],
    "formCta": "Gửi yêu cầu",
    "formStatus": "Request đã được ghi nhận và gửi về inbox",
    "formCaption": "Restaurant landing page & lead form",
    "conceptsLabel": "Campaign concept chúng tôi xây cho F&B brand:",
    "concepts": [
      "Launch signature dish",
      "Lấp lịch weekday lunch",
      "Đẩy brunch reservation",
      "Happy hour promotion",
      "Campaign tăng doanh thu catering",
      "Private dining leads",
      "Holiday menu promotion",
      "Online ordering campaign",
      "Offer tasting cho khách mới"
    ]
  },
  "cta": {
    "title": "Sẵn sàng ngừng mất doanh thu sau cú click?",
    "body": "Nhận một growth plan thực tế, miễn phí, được xây theo nhà hàng của bạn: menu, offer và thị trường local. Không ép bán, không ràng buộc.",
    "button": "Nhận plan miễn phí"
  },
  "form": {
    "eyebrow": "Miễn phí, không áp lực",
    "title": "Nhận plan miễn phí",
    "body": "Gửi thông tin nhà hàng. Vietgrow sẽ chỉ ra nên sửa gì trước để tăng doanh thu.",
    "expectations": [
      "Offer angle nên test",
      "Điểm đang rò rỉ doanh thu",
      "Việc cần sửa trước"
    ],
    "privacy": "Không spam. Không gây áp lực. Chỉ dùng để chuẩn bị plan.",
    "successTitle": "Cảm ơn bạn!",
    "successBody": "Chúng tôi đã nhận thông tin và sẽ chuẩn bị restaurant growth plan miễn phí. Team Vietgrow sẽ liên hệ sớm với bước tiếp theo.",
    "labels": {
      "fullName": "Họ và tên",
      "businessName": "Tên business",
      "phone": "Số điện thoại",
      "email": "Email",
      "businessType": "Loại hình business",
      "budget": "Ngân sách ads hằng tháng",
      "message": "Thông tin thêm?",
      "optional": "(không bắt buộc)"
    },
    "placeholders": {
      "fullName": "Nguyen An",
      "businessName": "Lotus Kitchen",
      "phone": "(555) 123-4567",
      "email": "you@restaurant.com",
      "businessType": "Chọn loại hình",
      "budget": "Chọn ngân sách",
      "message": "Chia sẻ mục tiêu, khu vực hoặc vấn đề hiện tại của bạn."
    },
    "businessTypes": [
      {
        "value": "Full-Service Restaurant",
        "label": "Full-Service Restaurant"
      },
      {
        "value": "Cafe / Coffee Shop",
        "label": "Cafe / Coffee Shop"
      },
      {
        "value": "Bar / Lounge",
        "label": "Bar / Lounge"
      },
      {
        "value": "Bakery / Dessert Shop",
        "label": "Bakery / Dessert Shop"
      },
      {
        "value": "Fast Casual / QSR",
        "label": "Fast Casual / QSR"
      },
      {
        "value": "Catering / Private Events",
        "label": "Catering / Private Events"
      },
      {
        "value": "Food Truck / Pop-Up",
        "label": "Food Truck / Pop-Up"
      },
      {
        "value": "Other Food & Beverage Business",
        "label": "F&B business khác"
      }
    ],
    "budgets": [
      {
        "value": "Under $500/month",
        "label": "Dưới $500/tháng"
      },
      {
        "value": "$500–$1,000/month",
        "label": "$500–$1,000/tháng"
      },
      {
        "value": "$1,000–$2,500/month",
        "label": "$1,000–$2,500/tháng"
      },
      {
        "value": "$2,500+/month",
        "label": "Trên $2,500/tháng"
      },
      {
        "value": "Not sure yet",
        "label": "Chưa chắc"
      }
    ],
    "submitting": "Đang gửi...",
    "submit": "Nhận plan miễn phí",
    "footer": "Không spam. Không áp lực. Chỉ là plan miễn phí cho bạn."
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Những câu hỏi chủ nhà hàng thường hỏi",
    "items": [
      {
        "q": "Tôi có cần đang chạy ads sẵn không?",
        "a": "Không. Vietgrow có thể xây funnel từ đầu."
      },
      {
        "q": "Dịch vụ này chỉ dành cho restaurant thôi hả?",
        "a": "Dành cho restaurant, cafe, catering và local F&B brand."
      },
      {
        "q": "Vietgrow có làm ad content không?",
        "a": "Có. Vietgrow làm concept, visual và offer cho ads."
      },
      {
        "q": "Tôi có cần website không?",
        "a": "Không. Vietgrow xây landing page và request form cho campaign."
      },
      {
        "q": "Dịch vụ này có cam kết booking hoặc order không?",
        "a": "Không cam kết doanh thu tuyệt đối. Vietgrow xây hệ thống để tăng khả năng chuyển đổi."
      },
      {
        "q": "Tôi cần ngân sách ads bao nhiêu?",
        "a": "Tùy khu vực và offer. Vietgrow sẽ đề xuất mức bắt đầu thực tế."
      },
      {
        "q": "Sau khi gửi form thì chuyện gì xảy ra?",
        "a": "Vietgrow review nhà hàng và gửi lại plan thực tế."
      },
      {
        "q": "Có phù hợp với dine-in, takeout, delivery, catering hoặc event không?",
        "a": "Có. Funnel sẽ đi theo offer tạo doanh thu mạnh nhất."
      }
    ]
  },
  "footer": {
    "tagline": "Hệ thống paid ads growth cho restaurant và F&B brand.",
    "link": "Nhận restaurant growth plan miễn phí",
    "rights": "All rights reserved."
  }
},
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
