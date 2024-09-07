import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomeSec5() {
  const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/login"); // Navigate to the login route
      };
  return (
    <div className='w-full bg-black'>
         <div
        className="min-h-[300px] w-full flex justify-center items-center flex-col space-y-6"
        style={{
          backgroundImage: `url('/src/assets/images/Background Images/DoodleBG_image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className="text-white text-lg">Trendsetting fashion gems</span>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex flex-col text-center">
            <h3 className="text-textSec">5 Lakh+ </h3>
            <p className="text-white text-sm">of products</p>
          </div>
          {/* 2 */}
          <div className="flex flex-col text-center">
            <h3 className="text-textSec">150+</h3>
            <p className="text-white text-sm">Varieties of Categories</p>
          </div>
          {/* 3 */}
          <div className="flex flex-col text-center">
            <h3 className="text-textSec">1000+</h3>
            <p className="text-white text-sm">of Customers</p>
          </div>
        </div>
        <Button variant="b2bStyle" onClick={handleRegisterClick}>
          Register now <ArrowRight />
        </Button>
      </div>
      {/* ======= */}
      <div className="h-fit py-3 bg-combined-gradients flex md:flex-row flex-col space-y-3 justify-between section_container items-center">
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold capitalize">Download</h4>
          <h4 className="font-semibold capitalize">ODIO App Now!</h4>
          <div className="flex gap-3">
            <img
              src="/src/assets/images/icons/Appstore.png"
              alt="appStore | Odio"
              className="w-28"
            />
            <img
              src="/src/assets/images/icons/PlayStore.png"
              alt="playStore | Odio"
              className="w-28"
            />
          </div>
        </div>
        <div className="md:block hidden">
          <Button variant="b2bStyle" onClick={handleRegisterClick}>
            Register now <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeSec5