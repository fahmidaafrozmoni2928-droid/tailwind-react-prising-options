import React from "react";

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
    return (
        <nav >

        <ul className="flex">
            {
                navLinks.map(route =>  <li className="mr-10"><a href={route.path}></a>{route.name}</li>)
            }
        </ul>


         {/* < ul className="flex">
            <li className="mr-10"><a href="/home"></a>Home</li>
            <li className="mr-10"><a href="/about"></a>About</li>
            <li className="mr-10"><a href="/blog"></a>Blog</li>
          </ul >*/}
        </nav>
    )
}
export default NavBar;