// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "Publications", href: "/publications" },
//     { name: "CV", href: "/cv" },
//     { name: "Research", href: "/research" },
//     { name: "Teaching", href: "/teaching" },
//     { name: "Personal", href: "/personal" },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-black shadow-lg border-b border-gray-200 sticky top-0 z-50 w-full font-serif">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="flex justify-center items-center h-16 relative">
//           {/* Desktop Navigation - Centered */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-white  hover:scale-110 transition-all delay-75 px-3 py-2 text-md border-b-2 border-transparent hover:border-yellow-300"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="absolute right-0 md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-200 hover:text-white focus:outline-none transition-colors duration-200"
//               aria-expanded={isMenuOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <div
//           className={`md:hidden transition-all duration-300 ease-in-out ${
//             isMenuOpen
//               ? "max-h-96 opacity-100"
//               : "max-h-0 opacity-0 overflow-hidden"
//           }`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200 mt-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-yellow-400 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className=" bg-black text-white font-semibold text-xl text-center py-8 px-4">
//         <p className="">
//           Amrik Sen | PhD{" "}
//           <span className="font-light">
//             (
//             <a
//               target="_blank"
//               href="https://www.colorado.edu/amath/"
//               className="text-decoration-line: underline"
//             >
//               Applied Mathematics
//             </a>
//             , University of Colorado, Boulder, USA)
//           </span>
//         </p>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//Left Aligned Version
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Publications", href: "/publications" },
    { name: "CV", href: "/cv" },
    { name: "Research", href: "/research" },
    { name: "DigiTT", href: "/projects" },
    { name: "Teaching", href: "/teaching" },
    { name: "Personal", href: "/personal" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black shadow-lg border-b border-gray-200 sticky top-0 z-50 w-full font-serif">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-start items-center h-16  relative">
          {/* Desktop Navigation - Left Aligned */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white  hover:scale-110 transition-all delay-75 px-3 py-2 text-md border-b-2 border-transparent hover:border-yellow-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="absolute right-0 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200 mt-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-yellow-400 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-white font-semibold text-xl text-left py-4 px-11 -mt-3">
        <p className="">
          Amrik Sen | PhD{" "}
          <span className="font-light">
            (
            <a
              target="_blank"
              href="https://www.colorado.edu/amath/"
              className="text-decoration-line: underline"
            >
              Applied Mathematics
            </a>
            , University of Colorado, Boulder, USA)
          </span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
