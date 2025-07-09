import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      {/* about */}
      {/* projects */}
      {/* experience */}
      {/* testimonial */}
      {/* contact */}
      {/* footer */}
    </div>
  )
}

export default App