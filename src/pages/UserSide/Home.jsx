import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";

function Home() {
  const onlyWidth = useWindowWidth();
  const mobileSize = onlyWidth < 768;
  return (
    <div
      className="w-full min-h-screen h-screen relative 2xl:pl-24 lg:pl-20 sm:pl-10 sm:px-0 px-5 mx-auto lg:flex"
      // style={{
      //   background: `url("/src/assets/images/Background Images/Main_image.png")`,
      //   backgroundSize: "fill",
      //   backgroundPosition: "right",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex lg:w-[40%] w-full space-y-3 lg:-translate-y-5  lg:mt-0 sm:mt-24 mt-16 flex-col lg:justify-end justify-center lg:items-start items-center lg:h-screen h-1/2 z-20 text-container font-bold  uppercase">
        <div className="lg:text-start text-center ">
          <h3>Offers a platform</h3>
          <h3>for trade,</h3>
          <h3>focusing on </h3>
          <h3>Indian businesses.</h3>
        </div>
        <div className="sm:w-1/2 w-full ">
          <p className="text-xs font-normal lg:text-start text-center capitalize">
            Our platform streamlines wholesale trade by connecting Indian
            businesses. We simplify transactions and enhance trade opportunities
            within the Indian market.
          </p>
        </div>
        <div className="">
          <Button variant="b2bStyle">Get Started</Button>
        </div>
      </div>
      {/*  */}
      <div className="lg:h-screen h-1/2 lg:w-[60%] w-full">
        <img
          src={`${
            mobileSize
              ? "/src/assets/images/Background Images/Mobile_Main_image.png"
              : "/src/assets/images/Background Images/Main_image.png"
          }`}
          alt="home|B2b"
          draggable={false}
          className="lg:float-end  w-full"
        />
      </div>
    </div>
  );
}

export default Home;
