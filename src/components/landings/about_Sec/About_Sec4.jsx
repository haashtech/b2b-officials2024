import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function AboutSec4() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/login"); // Navigate to the login route
  };
  return (
    <div className=" w-full bg-black h-full">
      <div
        className=" w-full py-10 "
        style={{
          backgroundImage: `url('/src/assets/images/Background Images/DoodleBG_image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="section_container flex ">
          <div className="md:w-1/2 w-full h-full space-y-11">
            {/* ------- */}
            <div className=" h-full">
              <h4 className="text-gray-700">Contact Us</h4>
              <div className="text-white">
                <h3>We're Here to Help</h3>
                <h3>Reach Out for Support </h3>
                <h3>and Solutions</h3>
              </div>
            </div>
            {/* ===== */}
            <div className="mt-auto h-full flex flex-col text-white">
              <a href="tel:974488444" className="flex items-center gap-3"><img src="/src/assets/images/icons/Phone_icon.svg" alt="" /> 974488444</a>
              <a href="tel:974488444" className="flex items-center gap-3"><img src="/src/assets/images/icons/logos_whatsapp-icon.svg" alt="" /> 974488444</a>
            </div>
          </div>
          {/* second half */}
          <div className="md:w-1/2 w-full mt-auto">
          <div className="border-l pl-3">
            <span className="text-gray-500 flex flex-wrap items-center gap-1">Merchant Legal entity name: <h5 className="text-white">HAASH INDIA EXPORTS PRIVATE LIMITED</h5></span>
            <span className="text-gray-500 flex flex-wrap items-center gap-1">Registered Address: <h5 className="text-white">Ground Floor, 45/J, Cee Pee's Building, Ambala Mukku, Malayamma Kozhikode KERALA 673601</h5></span>
            <span className="text-gray-500 flex flex-wrap items-center gap-1">Operational Address: <h5 className="text-white">Ground Floor, 45/J, Cee Pee's Building, Ambala Mukku, Malayamma Kozhikode KERALA 673601</h5></span>
            <span className="text-gray-500 flex flex-wrap items-center gap-1">Telephone No: <h5 className="text-white">9846012078</h5></span>

          </div>
          </div>
        </div>
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
  );
}

export default AboutSec4;
