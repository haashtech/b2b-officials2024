import AboutSec1 from "@/components/landings/about_Sec/About_Sec1"
import AboutSec2 from "@/components/landings/about_Sec/About_Sec2"
import AboutSec3 from "@/components/landings/about_Sec/About_Sec3"
import AboutSec4 from "@/components/landings/about_Sec/About_Sec4"


function About() {
  return (
    <div className=" space-y-10">
      <div className="section_container">
           {/* ==== */}
      <AboutSec1/>
      {/* iiii */}
      <AboutSec2/>
      {/* ==== */} 
      </div>
      <AboutSec3/>

      {/* ==== */}
      <AboutSec4/>
  

    </div>
  )
}

export default About