import React, {useContext} from 'react'
import Link from 'next/link';

const navigationLinks = [

  {name: 'About Me', url: "/about-me"},  
  {name: 'Graphics', url: "/graphics"}, 
  {name: 'Photography', url: "/photography"},
  {name: 'Archive', url: "/"},
];
const Header = () => {
  return (
    <div className="cotainer mx auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl text-white">
              Arvydas | Gudas
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {navigationLinks.map((navigationLink, index) => (      
          <Link key={index} href={`${navigationLink.url}`}>
            <span className="md:float-right mt-2 align-middle white-text ml-4 font-semibold cursor-pointer hover:text-white">
              {navigationLink.name}
            </span>
          </Link>))}
        </div>
      </div>
    </div>
  )
}

export default Header
