import { MENUBUTTON, MENUS } from "@/constants/menu";
import { FaPlus } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="border-r-2 border-gray-300 px-6 py-4 h-screen">
            <div className="flex justify-center place-items-center gap-2">
                <MdDashboard size={"2rem"} className="text-blue-600" />
                <h1 className="font-bold text-[1.5rem]">Dashboard</h1>
            </div>
            <div className="flex flex-col items-start">
                <button className={MENUBUTTON.BUTTONDESIGN}>Admin</button>
            </div>
        </div>
    )
}
export default Sidebar;