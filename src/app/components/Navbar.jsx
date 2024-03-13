import Image from "next/image"

const Navbar = () => {
    return(
    <div className="bg-white pt-4 border-b shadow-md p-3">
        
        <ul className="flex justify-between mr-10 font-extrabold">
            <Image src="/cg-high-resolution-logo-black-transparent-2.png" width={50} height={50} className='cursor-pointer'></Image>
            <li><a href='#'className='navbar_hover'>Home</a></li>
            <li><a href='#'className='navbar_hover'>About</a></li>
            <li><a href='#'className='navbar_hover'>Projects</a></li>
            <li><a href='#'className='navbar_hover'>Contact</a></li>
        </ul>
    </div>
    )
}

export default Navbar