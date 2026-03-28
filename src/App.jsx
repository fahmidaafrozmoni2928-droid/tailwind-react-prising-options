
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultCharts from './components/ResultCharts/ResultCharts'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

function App() {
  
   const pricingPromise = fetch('pricingDta.json').then(res => res.json());
   const marksPromise = axios.get('MarksData.json');
  return (
    <>


      
        <header>
          <NavBar></NavBar>
         
        </header>

        <main>
           <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
           </Suspense>

           <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <MarksChart marksPromise={marksPromise}></MarksChart>
           </Suspense>

           <ResultCharts></ResultCharts>
        </main>
         
         </>
  )
}

export default App
