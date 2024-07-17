import { ArrowRight } from "lucide-react";



const Logo = () => {
    return (
        <div className="flex gap-4 items-center">
            <div className="flex flex-col relative bg-gradient-to-r from-[#C21E57] via-[#F34A93] to-[#CE2966] h-12 w-[70px] rotate-12 rounded-md shadow-xl ">

            </div>

            <h2 className="font-bold text-lg z-10 absolute left-8 text-white  shadow-2xl flex items-center justify-center "> TransFl
                <span className="text-[#F34A93] flex items-center justify-center"><ArrowRight/> ick</span> </h2>

        </div >
    );
};

export default Logo;