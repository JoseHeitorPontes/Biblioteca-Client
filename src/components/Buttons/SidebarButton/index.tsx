import { FaBars } from "react-icons/fa";

export function SidebarButton() {
    return (
        <button className="py-[0.75rem] px-[1rem] bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-sm">
            <FaBars />
        </button>
    );
}
