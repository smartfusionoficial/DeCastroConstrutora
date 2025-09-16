import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Empreendimentos from './pages/Empreendimentos'
import Sobre from './pages/Sobre'
import Noticias from './pages/Noticias'
import NoticiaDetalhes from './pages/NoticiaDetalhes'
import Contato from './pages/Contato'
import CarolinaCaliari from './pages/CarolinaCaliari'
import HomeExperience from './pages/HomeExperience'
import ChiabaiMartins from './pages/ChiabaiMartins'
import Bacutia from './pages/Bacutia'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empreendimentos" element={<Empreendimentos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NoticiaDetalhes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/carolina-caliari" element={<CarolinaCaliari />} />
          <Route path="/home-experience" element={<HomeExperience />} />
          <Route path="/chiabai-martins" element={<ChiabaiMartins />} />
          <Route path="/bacutia" element={<Bacutia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

