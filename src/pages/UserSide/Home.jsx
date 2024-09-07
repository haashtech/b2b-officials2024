import HomeSec1 from "@/components/landings/home_Sec/Home_Sec1";
import HomeSec2 from "@/components/landings/home_Sec/Home_Sec2";
import HomeSec3 from "@/components/landings/home_Sec/Home_Sec3";
import HomeSec4 from "@/components/landings/home_Sec/Home_Sec4";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";

function Home() {
  const onlyWidth = useWindowWidth();
  const mobileSize = onlyWidth < 768;
  return (
    <div
      className="w-full  "
    >
      <HomeSec1/>
      {/* ====== */}
      <HomeSec2/>
      {/* ====== */}
      <HomeSec3/>
      {/* ====== */}
      <HomeSec4/>
      
    </div>
  );
}

export default Home;
