// import {
//   Mail,
//   MapPin,
//   Phone,
//   ExternalLink,
//   Youtube,
//   Facebook,
//   Twitter,
//   GraduationCap,
//   Linkedin,
// } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       icon: <GraduationCap className="w-7 h-7" />,
//       href: "https://scholar.google.com/citations?user=2LZZD5YAAAAJ&hl=en",
//       label: "Google Scholar",
//     },
//     {
//       icon: <Youtube className="w-7 h-7" />,
//       href: "https://www.youtube.com/user/amriksen",
//       label: "YouTube",
//     },
//     {
//       icon: <Facebook className="w-7 h-7" />,
//       href: "https://www.facebook.com/amriksen",
//       label: "Facebook",
//     },
//     {
//       icon: <Twitter className="w-7 h-7" />,
//       href: "https://x.com/amriksen",
//       label: "Twitter",
//     },
//     {
//       icon: <Linkedin className="w-7 h-7" />,
//       href: "https://www.linkedin.com/in/amrik-sen-246054122/",
//       label: "LinkedIn",
//     },
//   ];

//   return (
//     <footer className="bg-black text-white font-serif">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Personal Info Left */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Amrik Sen</h3>
//             <div className="space-y-2 text-gray-300 text-md">
//               {/* <div className="flex items-center">
//                 <MapPin className="w-4 h-4 mr-2" />
//                 Los Angeles, California, United States
//               </div> */}
//               <div className="flex items-center">
//                 <Mail className="w-4 h-4 mr-2" />
//                 <a
//                   href="mailto:amriksen@gmail.com"
//                   className="hover:text-yellow-400 transition-colors"
//                 >
//                   amriksen@gmail.com
//                 </a>
//               </div>
//               {/* <div className="flex items-center">
//                 <Phone className="w-4 h-4 mr-2" />
//                 <a
//                   href="tel:+18183574698"
//                   className="hover:text-yellow-400 transition-colors"
//                 >
//                   +1-818-357-4698
//                 </a>
//               </div> */}
//             </div>
//           </div>

//           {/* Social Icons Right */}
//           <div className="flex md:justify-end items-start">
//             <div className="space-x-4 flex">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   title={link.label}
//                   className="text-gray-300 hover:text-yellow-400 transition-colors"
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 mt-10 pt-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
//             <div className="text-gray-400 text-sm text-center sm:text-left">
//               © {currentYear} Amrik Sen. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Back to Top */}
//       <div className="text-center pb-4">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center mx-auto group"
//         >
//           <span className="mr-1">Back to Top</span>
//           <svg
//             className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Youtube,
  Facebook,
  Twitter,
  GraduationCap,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      href: "https://scholar.google.com/citations?user=2LZZD5YAAAAJ&hl=en",
      label: "Google Scholar",
    },
    {
      icon: <Youtube className="w-7 h-7" />,
      href: "https://www.youtube.com/user/amriksen",
      label: "YouTube",
    },
    {
      icon: <Facebook className="w-7 h-7" />,
      href: "https://www.facebook.com/amriksen",
      label: "Facebook",
    },
    {
      icon: <Twitter className="w-7 h-7" />,
      href: "https://x.com/amriksen",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-7 h-7" />,
      href: "https://www.linkedin.com/in/amrik-sen-246054122/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-black text-white font-serif">
      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4 ml-2">
        {" "}
        {/* Removed mx-auto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Info Left */}
          <div>
            <h3 className="text-xl font-bold mb-4">Amrik Sen</h3>
            <div className="space-y-2 text-gray-300 text-md">
              {/* <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Los Angeles, California, United States
              </div> */}
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:amriksen@gmail.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  amriksen@gmail.com
                </a>
              </div>
              {/* <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a
                  href="tel:+18183574698"
                  className="hover:text-yellow-400 transition-colors"
                >
                  +1-818-357-4698
                </a>
              </div> */}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-start items-start md:justify-end">
            {" "}
            {/* Adjusted to justify-start for left alignment on small screens, keep md:justify-end for larger screens if desired for layout, otherwise remove it too */}
            <div className="space-x-4 flex">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-left">
              {" "}
              {/* Changed to text-left */}© {currentYear} Amrik Sen. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="pb-4 flex justify-start pl-4 sm:pl-6 lg:pl-8 ml-2">
        {" "}
        {/* Added flex and justify-start, adjusted padding */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
        >
          <span className="mr-1">Back to Top</span>
          <svg
            className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
