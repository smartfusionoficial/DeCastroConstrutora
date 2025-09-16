import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import logo from '../assets/logo.svg'

const Footer = () => {
  const contatos = [
    {
      tipo: "Telefone Geral",
      valor: "(27) 3062-6965",
      icon: <Phone className="h-5 w-5" />,
      link: "tel:+552730626965"
    },
    {
      tipo: "WhatsApp da Construtora",
      valor: "(27) 98829-6965",
      icon: <MessageCircle className="h-5 w-5" />,
      link: "https://wa.me/5527988296965"
    },
    {
      tipo: "WhatsApp do Comercial",
      valor: "(27) 99278-4090",
      icon: <MessageCircle className="h-5 w-5" />,
      link: "https://wa.me/5527992784090"
    }
  ]

  const redesSociais = [
    {
      nome: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      link: "#",
      color: "hover:text-pink-500"
    },
    {
      nome: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      link: "#",
      color: "hover:text-blue-600"
    },
    {
      nome: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      link: "#",
      color: "hover:text-red-600"
    }
  ]

  return (
    <footer id="contato" className="bg-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="De Castro Construtora" className="h-16 mb-6" />
            <p className="text-gray-300 mb-6">
              Mais de 30 anos construindo sonhos e transformando vidas em Vila Velha/ES.
            </p>
            <div className="flex space-x-4">
              {redesSociais.map((rede) => (
                <a
                  key={rede.nome}
                  href={rede.link}
                  className={`text-gray-400 transition-colors duration-300 ${rede.color}`}
                  aria-label={rede.nome}
                >
                  {rede.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              {contatos.map((contato, index) => (
                <a
                  key={index}
                  href={contato.link}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="text-green-500 group-hover:text-green-400">
                    {contato.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{contato.tipo}</div>
                    <div className="font-semibold">{contato.valor}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Endereço</h3>
            <div className="flex items-start space-x-3 text-gray-300">
              <MapPin className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p>Av. Fortaleza, 1520</p>
                <p>Itapuã, Vila Velha - ES</p>
                <p>29101-575, Brasil</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="mt-6 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
            >
              Ver no Mapa
            </Button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <div className="space-y-3">
              {['Home', 'Empreendimentos', 'Sobre', 'Notícias', 'Contato'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 De Castro Construtora. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Call to Action */}
      <div className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">NOS SIGA NAS REDES SOCIAIS</h3>
          <p className="text-gray-400 mb-6">
            Acompanhe nossos projetos e novidades
          </p>
          <div className="flex justify-center space-x-6">
            {redesSociais.map((rede) => (
              <a
                key={rede.nome}
                href={rede.link}
                className={`bg-slate-800 p-4 rounded-full text-gray-400 transition-all duration-300 hover:scale-110 ${rede.color}`}
                aria-label={rede.nome}
              >
                {rede.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

