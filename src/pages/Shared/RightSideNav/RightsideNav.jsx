import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightsideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle className="text-2xl" />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className="text-2xl" />
                    Login with GitHub
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-2xl font-semibold mb-3">Find Us on</h2>
               <a href="" className="p-4 flex items-center border rounded-t-lg">
                <FaFacebook className="text-2xl mr-3 text-[#3B599C]"/>
                <samp className="font-semibold">Facebook</samp>
               </a>
               <a href="" className="p-4 flex items-center border">
                <FaTwitter className="text-2xl mr-3 text-[#58A7DE]"/>
                <samp className="font-semibold">Twitter</samp>
               </a>
               <a href="" className="p-4 flex items-center border rounded-b-lg">
                <FaInstagram className="text-2xl text-[#D82D7E] mr-3"/>
                <samp className="font-semibold">Facebook</samp>
               </a>
            </div>

            <div className="p-4 space-y-4 mb-6 bg-[#F3F3F3]">
                <h2 className="text-2xl font-semibold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
               
            </div>
        </div>
    );
};

export default RightsideNav;