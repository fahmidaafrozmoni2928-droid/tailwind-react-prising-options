import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact"
    }
  ];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const links =  navLinks.map(route =>  <li className="mr-10"><a href={route.path}></a>{route.name}</li>)
    return (
        <nav className="flex justify-between mx-10" >
             <span className="flex" onClick={() => setOpen(!open)}>
            {
                open ? <X className="md:hidden"></X> : <Menu className="md:hidden">
               
                </Menu>
            }
           
            <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8' : '-top-40' }`}>
                {links}
            </ul>
            <h3 className="ml-4">My NavBar</h3>
            </span>
            
          
        <ul className=" hidden md:flex">
            {
              links 
            }
        </ul>


         {/* < ul className="flex">
            <li className="mr-10"><a href="/home"></a>Home</li>
            <li className="mr-10"><a href="/about"></a>About</li>
            <li className="mr-10"><a href="/blog"></a>Blog</li>
          </ul >*/}

          <button>Button</button>
        </nav>
    )
}
export default NavBar;