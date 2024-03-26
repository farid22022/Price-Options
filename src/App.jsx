

import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import LineChart from './component/LineChart/LineChart'
import NavBar from './component/NavBar/NavBar'
import Phones from './component/Phones/Phones'
import PriceOptions from './component/PriceOptions/PriceOptions'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
