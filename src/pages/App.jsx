import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home        from './pages/Home'
import About       from './pages/About'
import Atouts      from './pages/Atouts'
import Webinaire   from './pages/Webinaire'
import Salon       from './pages/Salon'
import Recrutement from './pages/Recrutement'
import Contact     from './pages/Contact'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/atouts"       element={<Atouts />} />
          <Route path="/webinaire"    element={<Webinaire />} />
          <Route path="/salon"        element={<Salon />} />
          <Route path="/recrutement"  element={<Recrutement />} />
          <Route path="/contact"      element={<Contact />} />
          <Route path="*"             element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
