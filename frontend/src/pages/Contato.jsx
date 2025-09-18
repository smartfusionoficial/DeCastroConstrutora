import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empreendimento: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Enviar dados para o backend
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          destinatario: 'contato@decastroconstrutora.com.br'
        })
      })

      if (response.ok) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        // Limpar formulário
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          empreendimento: '',
          mensagem: ''
        })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.')
    }
  }

  const contatos = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      titulo: 'Endereço',
      info: 'Av. Fortaleza, 1520 - Itapuã\nVila Velha - ES, 29101-575'
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      titulo: 'Telefone',
      info: '(27) 3229-9999\n(27) 98829-6965'
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      titulo: 'E-mail',
      info: 'contato@decastroconstrutora.com.br\nvendas@decastroconstrutora.com.br'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      titulo: 'Horário de Funcionamento',
      info: 'Segunda a Sexta: 8h às 18h'
    }
  ]

  const empreendimentos = [
    'Carolina Caliari',
    'Home Experience',
    'Chiabai Martins',
    'Outros'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Estamos prontos para ajudá-lo a encontrar o apartamento dos seus sonhos. 
                Fale conosco e tire todas as suas dúvidas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contatos.map((contato, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      {contato.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {contato.titulo}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line text-sm">
                      {contato.info}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <AnimatedSection animation="fade-up">
              <Card className="p-8">
                <CardContent className="pt-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Envie sua Mensagem
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone *
                        </label>
                        <Input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="(27) 99999-9999"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Empreendimento de Interesse
                        </label>
                        <select
                          name="empreendimento"
                          value={formData.empreendimento}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Selecione um empreendimento</option>
                          {empreendimentos.map((emp) => (
                            <option key={emp} value={emp}>{emp}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Conte-nos como podemos ajudá-lo..."
                        required
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Mapa e Informações Adicionais */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-8">
                {/* Mapa */}
                <Card className="overflow-hidden">
                  <div className="h-64 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8!2d-40.2881122!3d-20.3542731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20Fortaleza%2C%201520%20-%20Itapu%C3%A3%2C%20Vila%20Velha%20-%20ES%2C%2029101-575!5e0!3m2!1spt-BR!2sbr!4v1694876543210!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização De Castro Construtora"
                      className="absolute inset-0"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="font-medium">De Castro Construtora</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Av. Fortaleza, 1520 - Itapuã
                      </p>
                    </div>
                  </div>
                </Card>

                {/* WhatsApp */}
                <Card className="p-6 bg-green-50 border-green-200">
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          Atendimento via WhatsApp
                        </h3>
                        <p className="text-gray-600">
                          Resposta rápida e personalizada
                        </p>
                      </div>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open('https://wa.me/5527988296965', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Falar no WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                {/* Horários Especiais */}
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Atendimento Personalizado
                    </h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Visitas aos empreendimentos:</span>
                        <span className="font-medium">Todos os dias</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Plantão de vendas:</span>
                        <span className="font-medium">Fins de semana</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Atendimento online:</span>
                        <span className="font-medium">24h via WhatsApp</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Pronto para Conhecer seu Novo Lar?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agende uma visita aos nossos empreendimentos e descubra por que a De Castro 
              é a escolha certa para o seu futuro.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5527988296965', '_blank')}
              >
                WhatsApp Direto
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Contato

