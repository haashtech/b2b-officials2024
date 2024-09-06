

import './App.css'
import Navbar from './components/landings/navbar_Sec/Navbar'
import { Outlet } from "react-router-dom";
import { cn } from './lib/utils';
function App() {


  return (
    <>
    <div className={cn(``, {
              "debug-screens": import.meta.env.MODE === "development",
            })}>
      <Navbar/>
        <Outlet/>
    </div>
    </>
  )
}

export default App
