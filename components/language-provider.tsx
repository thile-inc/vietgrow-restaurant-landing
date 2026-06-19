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
    "package": "What you get",
    "results": "Results",
    "faq": "FAQ",
    "cta": "Get Free Plan"
  },
  "hero": {
    "eyebrow": "For restaurants, cafes, bars, bakeries & food brands",
    "title": "Stop Losing Revenue After People See Your Food",
    "body": "Most F&B brands do not need more random posts. They need one clear offer, local ads, and an order/reservation path that turns attention into revenue. Vietgrow builds that system for $119/month.",
    "primary": "Get Free Plan",
    "secondary": "See the system",
    "trusted": "Trusted by local hospitality owners",
    "lockIn": "No long-term lock-in",
    "leadTitle": "New reservation request",
    "leadMeta": "Dinner for 4 · 2 min ago",
    "callTitle": "+38 orders this week",
    "callMeta": "from your local ad campaign",
    "imageAlt": "A warm Vietnamese restaurant with pho, fresh herbs, shared dishes, and guests being served"
  },
  "results": {
    "title": "What changes when the revenue path is clear",
    "stats": [
      {
        "value": "+50%",
        "label": "more orders, bookings, and sales opportunities"
      },
      {
        "value": "24/7",
        "label": "ad-to-order path live 24/7"
      },
      {
        "value": "Done-for-you",
        "label": "creative, ads, page & lead form"
      }
    ]
  },
  "system": {
    "eyebrow": "The Vietgrow Restaurant Growth System",
    "title": "The 3-part revenue path we build for F&B",
    "body": "No random boosted posts. One offer, one local campaign, one page built to drive orders and bookings.",
    "steps": [
      {
        "number": "01",
        "title": "Clarify the offer",
        "description": "We turn your menu, signature dishes, catering packages, happy hours, brunches, and seasonal promos into clear, click-worthy campaign concepts with short-form video ideas, carousel creatives, and polished food visuals.",
        "tags": [
          "Offer strategy",
          "Video & carousel ads",
          "Food-first visuals"
        ]
      },
      {
        "number": "02",
        "title": "Run local traffic",
        "description": "We launch and manage Facebook & Instagram campaigns focused on reaching nearby diners, families, office teams, tourists, and event planners most likely to reserve, order, or inquire.",
        "tags": [
          "Local targeting",
          "FB & IG campaigns",
          "Budget control"
        ]
      },
      {
        "number": "03",
        "title": "Convert into revenue",
        "description": "Traffic lands on an F&B-specific page with a clear action path built to turn clicks into reservations, online orders, catering sales, and private-event revenue.",
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
    "title": "What Vietgrow builds for $119/month",
    "body": "A focused revenue system: offer, ads, landing page, lead/order path, and optimization.",
    "label": "Restaurant Growth System",
    "cardTitle": "Done-for-you F&B revenue funnel",
    "cardBody": "Built and optimized by Vietgrow so you can stay focused on food and service.",
    "priceMeta": "per month",
    "cta": "Get my free plan",
    "included": "Everything included:",
    "includes": [
      "12 posts per month",
      "Facebook & Instagram ad campaign setup",
      "Restaurant-focused ad creative design",
      "Video ad and carousel ad concepts",
      "Local audience targeting",
      "Landing page for your restaurant campaign",
      "Lead form setup",
      "Campaign tracking structure",
      "Monthly optimization",
      "Offer and promotion strategy",
      "Consultation and growth recommendations"
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
    "title": "Get a Free F&B Revenue Review",
    "body": "Send your restaurant details. We will review your offer, local market, and current order/reservation path, then send back a practical revenue plan.",
    "expectations": [
      "Where revenue is leaking after attention",
      "Which offer and ad angle to test first",
      "What page/order path should be fixed"
    ],
    "privacy": "Your information is only used to prepare your restaurant growth plan. No spam. No pressure.",
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
        "a": "No. Whether you've never run an ad or you've been boosting posts for years, we build the full system from scratch — offer, creative, campaign, landing page, and lead form."
      },
      {
        "q": "Is this only for restaurants?",
        "a": "It's built specifically for food and beverage businesses: restaurants, cafes, bars, bakeries, ghost kitchens, caterers, private dining, and local food brands."
      },
      {
        "q": "Do you create the ad content?",
        "a": "Yes. We design your ad creatives — including video and carousel concepts, food-first visuals, and the offers — so you don't have to produce every campaign asset yourself."
      },
      {
        "q": "Do I need a website?",
        "a": "No. We build a dedicated restaurant landing page for your campaign with a clear action path, so you can collect reservation requests, order interest, catering sales, and private-event revenue even without a full website rebuild."
      },
      {
        "q": "Will this guarantee bookings or orders?",
        "a": "No honest marketer can guarantee sales. What we guarantee is a complete, professional system designed to convert — strong offers, targeted traffic, and a page built to turn clicks into requests."
      },
      {
        "q": "How much ad budget do I need?",
        "a": "It depends on your location, margins, offer, and goals. Many local restaurants start modestly and scale up once they see which offers convert. We'll recommend a realistic budget in your free growth plan."
      },
      {
        "q": "What happens after I submit the form?",
        "a": "We review your business, menu, location, customer base, and goals, then come back with a practical growth plan tailored to your restaurant — no pressure and no obligation."
      },
      {
        "q": "Can this work for dine-in, takeout, delivery, catering, or events?",
        "a": "Yes. The system can be tailored to reservations, online ordering, lunch traffic, brunch, catering, private dining, holiday menus, and seasonal promotions."
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
    "package": "Gói dịch vụ",
    "results": "Kết quả",
    "faq": "FAQ",
    "cta": "Nhận plan miễn phí"
  },
  "hero": {
    "eyebrow": "Dành cho restaurant, cafe, bar, bakery và F&B brand",
    "title": "Đừng để doanh thu rơi mất sau khi khách thấy món ăn",
    "body": "Nhiều F&B brand không thiếu post, mà thiếu offer rõ, ads đúng tệp và đường đi order/reservation biết tạo doanh thu. Vietgrow xây hệ thống đó với $119/tháng.",
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
    "title": "Điều thay đổi khi revenue path rõ ràng",
    "stats": [
      {
        "value": "+50%",
        "label": "thêm order, booking và sales opportunity"
      },
      {
        "value": "24/7",
        "label": "đường đi ads-to-order chạy 24/7"
      },
      {
        "value": "Done-for-you",
        "label": "creative, ads, page và lead form"
      }
    ]
  },
  "system": {
    "eyebrow": "Vietgrow Restaurant Growth System",
    "title": "Revenue path 3 phần Vietgrow xây cho F&B",
    "body": "Không boost post ngẫu nhiên. Một offer rõ, một campaign local, một page được xây để kéo order và booking.",
    "steps": [
      {
        "number": "01",
        "title": "Làm rõ offer",
        "description": "Chúng tôi biến menu, signature dish, catering package, happy hour, brunch và seasonal promo thành campaign concept rõ ràng, dễ click, kèm ý tưởng video ngắn, carousel creative và visual món ăn hấp dẫn.",
        "tags": [
          "Offer strategy",
          "Video & carousel ads",
          "Food-first visuals"
        ]
      },
      {
        "number": "02",
        "title": "Kéo traffic local đúng tệp",
        "description": "Chúng tôi launch và quản lý campaign Facebook & Instagram tập trung vào khách gần khu vực: diners, gia đình, office team, khách du lịch và event planner có khả năng reserve, order hoặc inquire.",
        "tags": [
          "Local targeting",
          "FB & IG campaigns",
          "Budget control"
        ]
      },
      {
        "number": "03",
        "title": "Chuyển đổi thành doanh thu",
        "description": "Traffic được đưa về landing page riêng cho F&B với action path rõ ràng để tạo reservation, online order, catering sale và private-event revenue.",
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
    "title": "Vietgrow xây gì với $119/tháng",
    "body": "Một hệ thống doanh thu gọn: offer, ads, landing page, order/request path và tối ưu.",
    "label": "Restaurant Growth System",
    "cardTitle": "F&B revenue funnel done-for-you",
    "cardBody": "Vietgrow xây và tối ưu để bạn tập trung vào món ăn và service.",
    "priceMeta": "mỗi tháng",
    "cta": "Nhận plan miễn phí",
    "included": "Bao gồm tất cả:",
    "includes": [
      "12 bài post mỗi tháng",
      "Setup campaign Facebook & Instagram",
      "Thiết kế ad creative đúng ngành restaurant",
      "Concept video ad và carousel ad",
      "Target khách local quanh khu vực",
      "Landing page cho restaurant campaign",
      "Setup lead form",
      "Cấu trúc tracking cho campaign",
      "Tối ưu hằng tháng",
      "Offer và promotion strategy",
      "Tư vấn consultation và growth"
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
    "body": "Gửi thông tin nhà hàng. Vietgrow sẽ xem offer, thị trường local và đường đi order/reservation hiện tại, rồi gửi lại revenue plan thực tế.",
    "expectations": [
      "Điểm đang làm rò rỉ doanh thu sau attention",
      "Offer và ad angle nên test trước",
      "Page/order path nào cần sửa"
    ],
    "privacy": "Thông tin của bạn chỉ dùng để chuẩn bị restaurant growth plan. Không spam. Không gây áp lực.",
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
        "a": "Không. Dù bạn chưa từng chạy ads hay đã boost post nhiều năm, Vietgrow vẫn có thể xây lại hệ thống từ đầu: offer, creative, campaign, landing page và lead form."
      },
      {
        "q": "Dịch vụ này chỉ dành cho restaurant thôi hả?",
        "a": "Dịch vụ được xây riêng cho F&B business: restaurant, cafe, bar, bakery, ghost kitchen, caterer, private dining và local food brand."
      },
      {
        "q": "Vietgrow có làm ad content không?",
        "a": "Có. Chúng tôi thiết kế ad creative, bao gồm concept video, carousel, food-first visual và offer để bạn không phải tự sản xuất mọi campaign asset."
      },
      {
        "q": "Tôi có cần website không?",
        "a": "Không. Chúng tôi xây một landing page riêng cho campaign của nhà hàng, có action path rõ ràng để nhận reservation request, order interest, catering sale và private-event revenue ngay cả khi chưa rebuild website."
      },
      {
        "q": "Dịch vụ này có cam kết booking hoặc order không?",
        "a": "Không marketer nghiêm túc nào nên cam kết doanh số tuyệt đối. Điều chúng tôi cam kết là một hệ thống chuyên nghiệp được thiết kế để chuyển đổi tốt hơn: offer rõ, traffic đúng tệp và page tối ưu để biến click thành request."
      },
      {
        "q": "Tôi cần ngân sách ads bao nhiêu?",
        "a": "Tùy khu vực, margin, offer và mục tiêu. Nhiều nhà hàng local bắt đầu với ngân sách vừa phải rồi scale khi biết offer nào convert tốt. Trong growth plan miễn phí, chúng tôi sẽ đề xuất mức ngân sách thực tế."
      },
      {
        "q": "Sau khi gửi form thì chuyện gì xảy ra?",
        "a": "Chúng tôi review business, menu, khu vực, customer base và mục tiêu của bạn, sau đó gửi lại một growth plan thực tế cho nhà hàng. Không áp lực và không ràng buộc."
      },
      {
        "q": "Có phù hợp với dine-in, takeout, delivery, catering hoặc event không?",
        "a": "Có. Hệ thống có thể tùy chỉnh cho reservation, online ordering, lunch traffic, brunch, catering, private dining, holiday menu và seasonal promotion."
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
