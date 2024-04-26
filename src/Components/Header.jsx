import Logo from "../assets/Iconos/Logo.svg"
import Lápiz from "../assets/Iconos/Edit_duotone.svg"

function Header() {
    return ( 
        <>
        <header className="flex  flex-col justify-center items-center py-8 my-6">
            <div className="flex flex-row gap-6" >
            <img src={Logo} alt="Logo"/>
            <h1 className=" text-5xl font-medium">My Task Board</h1>
            <img src={Lápiz} alt="Lápiz" />
            </div>
            <p className=" text-left text-2xl font-light py-4">Tasks to keep organized</p>
        </header>
        </>
     );
}

export default Header;