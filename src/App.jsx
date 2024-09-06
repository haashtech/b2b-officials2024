

import './App.css'
import Navbar from './components/landings/navbar_Sec/Navbar'
import Home from './pages/UserSide/Home'

function App() {


  return (
    <>
    <div className="max-w-screen-2xl xl:px-24 md:px-20 sm:px-15 px-5 mx-auto">
      <Navbar/>
        <Home/>
    </div>
    </>
  )
}

export default App
