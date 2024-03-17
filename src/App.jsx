import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Properties from './pages/Properties/Properties'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails'
import Contact from './pages/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/properties' element={<Properties />} />
      <Route path='/propertyDetails' element={<PropertyDetails />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
