import Link from "next/link"
import SignOut from "./SignOut"
import AvatarImage from "./AvatarImage"

export function Navbar() {
  return (
    <nav className=" backdrop-blur-md   fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-br from-blue-600 to-indigo-400 shadow-md rounded-md px-4 py-2 max-w-6xl w-[90%] hidden md:flex justify-between items-center">
      {/* Logo */}
      <Link href="/home" className="text-xl font-bold text-white">
        MoneyTransfer
      </Link>

      {/* Links */}
      <div className="flex gap-6">
        <Link
          href="/home"
          className="text-gray-100 hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-100 hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-100 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
      <div className=" flex items-center">
        <AvatarImage/>

      {/* CTA Button */}
             <SignOut/>
      </div>
    </nav>
  )
}


// import React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

// const Navbar = () => {
//   return (
// <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gray-500  shadow-md border-none rounded-xl px-4 py-2 max-w-6xl w-[90%]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <NavigationMenu className="flex items-center h-16">
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className="bg-gray-500">Item One</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
