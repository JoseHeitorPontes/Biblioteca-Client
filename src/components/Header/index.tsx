import { Link } from "react-router";

import { SidebarButton } from "../Buttons/SidebarButton";

export function Header() {
    return (
        <header className="h-[3rem] px-[1rem] bg-gray-900 flex justify-between items-center text-white">
            <div className="flex gap-2 items-center">
                <SidebarButton />
            
                <h2 className="text-xl">Biblioteca</h2>
            </div>

            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link to="/" className="hover:text-gray-200">Home</Link>
                    </li>

                    <li>
                        <Link to="/livros" className="hover:text-gray-200">Livros</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}