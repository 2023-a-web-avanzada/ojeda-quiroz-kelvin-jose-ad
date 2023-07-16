import Logo from "@/app/components/Logo";
import React, {useEffect, useState} from "react";

export default function LandingHeader({textColor}: { textColor: string }) {
    const [username, setUsername] = useState("");
    const [isMenuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        // Acciones a realizar cuando el estado isMenuOpen cambia
        if (isMenuOpen) {
            // Lógica o efectos secundarios cuando el menú se abre
            console.log("El menú se ha abierto");
        } else {
            // Lógica o efectos secundarios cuando el menú se cierra
            console.log("El menú se ha cerrado");
        }

        // Limpieza del efecto (opcional) si es necesario
        return () => {
            console.log("Componente LandingHeader desmontado");
        };
    }, [isMenuOpen]);


    return (

        <header className={`py-4 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-${textColor} `}>
            <div className={"w-28"}>
                <Logo/>
            </div>
            <nav>
                <ul className={"flex text-sm [&>li>a]:font-medium [&>li>a]:inline-bloc [&>li>a]:py-2 [&>li>a]:px-4"}>
                    <li><a href="">Model S</a></li>
                    <li><a href="">Model 3</a></li>
                    <li><a href="">Model X</a></li>
                    <li><a href="">Model Y</a></li>
                    <li><a href="">Solar Roof</a></li>
                </ul>

            </nav>
            <nav className={""}>
                <ul className={"flex text-sm [&>li>a]:font-medium [&>li>a]:inline-bloc [&>li>a]:py-2 [&>li>a]:px-4"}

                >
                    <li><a href="">Shop</a></li>
                    <li><a href="">Account</a></li>
                    <li onMouseEnter={() => setUsername("Kelvin Ojeda")}
                        onMouseLeave={() => setUsername("")}
                        onMouseDown={() => setMenuOpen(true)}><a href="">Menu</a></li>
                </ul>
            </nav>
            <div className="ml-5 text-white text-sm absolute">
                {username && (
                    <div className="bg-black text-white py-1 px-2 rounded absolute top-6" style={{ left: "1438px" } }>
                        {username}
                    </div>
                )}
            </div>
            {isMenuOpen && <Menu onClose={() => setMenuOpen(false)} />}
        </header>
    )
}
function Menu({ onClose }: { onClose: () => void }) {
    return (
        <div className="menu-overlay">
            <div className="menu">

                <ul>
                    <li className="close-button ml-2 pb-14" onClick={onClose}>
                        <a>X</a>
                    </li>
                    <li>
                        <a href="">Existing Inventary</a>
                    </li>
                    <li>
                        <a href="">Used Inventary</a>
                    </li>
                    <li>
                        <a href="">Trade-In</a>
                    </li>
                    <li>
                        <a href="">Demo Drive</a>
                    </li>
                    <li>
                        <a href="">Insurance</a>
                    </li>
                    <li>
                        <a href="">Fleet</a>
                    </li>
                    <li>
                        <a href="">Cibertruck</a>
                    </li>
                    <li>
                        <a href="">Roadster</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}