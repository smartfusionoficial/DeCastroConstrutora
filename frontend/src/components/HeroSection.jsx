import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { useParallax } from '../hooks/useScrollAnimation'
import AnimatedSection from './AnimatedSection'
import heroImage from '../assets/carolina_caliari_hero.png'

const HeroSection = () => {
  const offset = useParallax()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-full text-sm mb-4 animate-pulse">
                Concluído
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                CAROLINA<br />
                CALIARI
              </h1>
              <p className="text-xl md:text-2xl font-light mb-2">RESIDENCIAL CLUBE</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="space-y-4 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Apartamentos</h2>
                <p className="text-xl">3 quartos com até 3 suítes</p>
              </div>
              
              <div className="border-t border-white/30 pt-4">
                <p className="text-lg">Na praia de Itapuã</p>
                <p className="text-lg">Vila Velha ES</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Saiba Mais
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-gray-800 hover:bg-gray-100 border-2 border-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5527306269650?text=Olá! Gostaria de saber mais informações sobre o empreendimento Carolina Caliari.', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="icon" 
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg animate-bounce hover:animate-none transform hover:scale-110 transition-all duration-300"
          onClick={() => window.open('https://wa.me/5527306269650?text=Olá! Gostaria de saber mais informações sobre os empreendimentos da De Castro Construtora.', '_blank')}
          title="Falar no WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

export default HeroSection

