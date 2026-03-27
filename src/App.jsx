
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'

function App() {
  
   const pricingPromise = fetch('pricingDta.json').then(res => res.json());
  return (
    <>


      
        <header>
          <NavBar></NavBar>
         
        </header>

        <main>
           <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
           </Suspense>
        </main>
         
         </>
  )
}

export default App
