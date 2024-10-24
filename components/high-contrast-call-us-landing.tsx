'use client'

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HighContrastCallUsLanding() {
  const officeNumber = "+351 960 033 553"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl sm:text-7xl font-bold text-white">Ligue-nos</h1>
        <p className="text-3xl sm:text-5xl font-semibold text-yellow-400">{officeNumber}</p>
        <Button 
          size="lg" 
          className="text-xl px-10 py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 bg-green-500 hover:bg-green-600 text-white"
          onClick={() => window.location.href = `tel:${officeNumber.replace(/\D/g,'')}`}
        >
          <Phone className="mr-3 h-8 w-8" />
          Ligar
        </Button>
      </div>
    </div>
  )
}