import { useState } from "react";
import Link from "../Link/Link";
// import { AiOutLineMenu } from 'react-icons';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {

    const [open , setOpen]= useState(false)
        
    const routes = [
        { id: 1, name: 'Home', path: '/', exact: true },
        { id: 2, name: 'About', path: '/about', exact: true },
        { id: 3, name: 'Services', path: '/services', exact: true },
        { id: 4, name: 'Contact', path: '/contact', exact: true },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      

      
    return (
        <nav className="text-red-600 p-8">
            <div className="md:hidden" onClick={() => {setOpen(!open)}}>
                {
                    open === true? <HiOutlineMenuAlt1 className="text-2xl"></HiOutlineMenuAlt1>: <RxCross1 className="text-2xl" ></RxCross1>
                }
                
            </div>
            <ul className={`md:flex absolute duration-1000 md:static
            ${open ? 'top-20':'-top-60'}
            px-6 shadow-2xl rounded-lg text-2xl`}>
                {
                    routes.map(route =><Link className=" "  key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;