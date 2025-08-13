import { Github, Mail, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PortfolioCard from "@/components/portfolio-card"

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Website",
      image: "/modern-ecommerce-website.png",
      description: "반응형 쇼핑몰 웹사이트 구축",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      details:
        "내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 내용 설명 ",
      websiteUrl: "https://www.naver.com",
    },
    {
      id: 2,
      title: "Corporate Landing Page",
      image: "/corporate-landing-page.png",
      description: "기업 랜딩 페이지 제작",
      skills: ["HTML5", "SCSS", "JavaScript", "Gulp", "Git"],
      details:
        "SEO 최적화와 빠른 로딩 속도를 위해 최적화된 기업 랜딩 페이지입니다. 애니메이션과 인터랙션을 통해 사용자 경험을 향상시켰습니다.",
        websiteUrl: "https://www.google.com",
    },
    {
      id: 3,
      title: "Blog Platform",
      image: "/clean-blog-platform.png",
      description: "개인 블로그 플랫폼 구축",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      details: "정적 사이트 생성기를 활용한 고성능 블로그 플랫폼입니다. 마크다운 지원과 다크모드를 구현했습니다.",
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: "/creative-portfolio-website.png",
      description: "크리에이티브 포트폴리오 사이트",
      skills: ["Vue.js", "Nuxt.js", "CSS Grid", "GSAP"],
      details:
        "창의적인 애니메이션과 인터랙션을 활용한 포트폴리오 웹사이트입니다. 성능 최적화와 사용자 경험에 중점을 두었습니다.",
    },
    {
      id: 5,
      title: "Dashboard Interface",
      image: "/modern-dashboard-interface.png",
      description: "관리자 대시보드 UI 구현",
      skills: ["React", "Material-UI", "Chart.js", "Redux"],
      details:
        "데이터 시각화와 직관적인 UI/UX를 제공하는 관리자 대시보드입니다. 반응형 디자인과 접근성을 고려했습니다.",
    },
    {
      id: 6,
      title: "Mobile App Landing",
      image: "/mobile-app-landing-page.png",
      description: "모바일 앱 소개 페이지",
      skills: ["HTML5", "CSS3", "JavaScript", "AOS", "Webpack"],
      details: "모바일 앱을 소개하는 랜딩 페이지로, 스크롤 애니메이션과 인터랙티브 요소를 활용했습니다.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-500 to-slate-700">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">WEB PORTFOLIO</h1>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/ru0dn7" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#contact" aria-label="Go to contact section">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
            김경욱
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-8 tit">
            {'Web Publisher & Frontend Developer'.split('').map((char, index) => (
              <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </h2>
          <p className="text-xl text-white mb-8 leading-relaxed">
            사용자 중심의 웹 경험을 만드는 웹퍼블리셔입니다.
            <br />
            반응형 웹사이트와 인터랙티브한 UI/UX 구현을 전문으로 합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              HTML5
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              CSS3
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              JavaScript
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              React
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Vue.js
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Tailwind CSS
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-slate-500 hover:bg-slate-700 cursor-pointer">
              <a href="#portfolio" aria-label="Portfolio section">
                <ExternalLink className="w-4 h-4 mr-2" />
                프로젝트 보기
              </a>
            </Button>
            <Button asChild size="lg" className="bg-slate-500 hover:bg-slate-700 cursor-pointer">
              <a href="#contact" aria-label="Contact section">
                <Phone className="w-4 h-4 mr-2" />
                연락하기
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-700 mb-4">Portfolio</h3>
          <p className="text-white max-w-2xl mx-auto ">
            다양한 프로젝트를 통해 쌓은 경험과 기술력을 확인해보세요. 카드를 클릭하면 사용된 기술 스택과 상세 정보를 볼
            수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
             신입 프론트엔드·웹퍼블리셔로서 성장할 수 있는 팀을 찾고 있습니다.<br/>함께 멋진 웹사이트를 만들어보아요!
          </p>
          <div className="flex justify-center gap-6">
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
            >
              <a href="mailto:ru0dn7@gmail.com" aria-label="Send email to ru0dn7@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                ru0dn7@gmail.com
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
            >
              <a href="tel:01090122532" aria-label="Call 010-9012-2532">
                <Phone className="w-4 h-4 mr-2" />
                010-9012-2532
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 김경욱. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
