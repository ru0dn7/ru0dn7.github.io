"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface PortfolioCardProps {
  id: number
  title: string
  image: string
  description: string
  skills: string[]
  details: string
  websiteUrl?: string
}

export default function PortfolioCard({ title, image, description, skills, details, websiteUrl }: PortfolioCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseEnter = () => {
    setIsFlipped(true)
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
  }

  const handleWebsiteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (websiteUrl) {
      window.open(websiteUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div 
      className="group perspective-1000 h-90 cursor-pointer" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden overflow-hidden group-hover:shadow-lg transition-shadow duration-300 bg-slate-700 border-0">
          <div className="relative h-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-sm opacity-90">{description}</p>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
          <div className="p-6 h-full flex flex-col">
            <div className="mb-4">
              <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{details}</p>
            </div>

            <div className="flex-1">
              <h5 className="text-sm font-semibold text-slate-700 mb-3">사용 기술</h5>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-blue-200">
              {websiteUrl ? (
                <div className="text-center">
                  <h6 className="text-sm font-medium text-slate-700 mb-2">사이트 바로가기</h6>
                  <button
                    onClick={handleWebsiteClick}
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-slate-500 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">바로가기</span>
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <span className="text-xs text-slate-500">웹사이트 링크가 없습니다</span>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
