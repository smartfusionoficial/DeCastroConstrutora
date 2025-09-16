import { MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

const WhatsAppButton = ({ 
  message = "Olá! Gostaria de saber mais informações sobre os empreendimentos da De Castro Construtora.",
  phone = "5527306269650",
  className = "",
  size = "icon",
  variant = "floating"
}) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="icon" 
          className={`bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-bounce hover:animate-none transform hover:scale-110 transition-all duration-300 ${className}`}
          onClick={handleWhatsAppClick}
          title="Falar no WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <Button 
      size={size}
      className={`bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300 ${className}`}
      onClick={handleWhatsAppClick}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      WhatsApp
    </Button>
  )
}

export default WhatsAppButton

