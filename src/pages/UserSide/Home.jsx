import HomeSec1 from "@/components/landings/home_Sec/Home_Sec1";
import HomeSec2 from "@/components/landings/home_Sec/Home_Sec2";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";

function Home() {
  const onlyWidth = useWindowWidth();
  const mobileSize = onlyWidth < 768;
  return (
    <div
      className="w-full min-h-screen h-screen "
    >
      <HomeSec1/>
      {/* ====== */}
      <HomeSec2/>
      
    </div>
  );
}

export default Home;
