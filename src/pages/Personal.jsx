// import { useState } from "react";
// import { Globe, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// const PersonalPage = () => {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);

//   // Family photos - AVIF format images
//   const familyPhotos = [
//     {
//       id: 1,
//       url: "/personal_1.avif",
//       alt: "Prescott, Arizona, 2017",
//       title: "Prescott, Arizona, 2017",
//     },
//     {
//       id: 2,
//       url: "/personal_2.avif",
//       alt: "Marriott, Hyderabad, 2016",
//       title: "Marriott, Hyderabad, 2016",
//     },
//     {
//       id: 3,
//       url: "/personal_3.avif",
//       alt: "Prescott, Arizona, 2017",
//       title: "Prescott, Arizona, 2017",
//     },
//     {
//       id: 4,
//       url: "/personal_4.avif",
//       alt: "Pekhri Summit, The Himalayas, 2024",
//       title: "Pekhri Summit, The Himalayas, 2024",
//     },
//     {
//       id: 5,
//       url: "/personal_5.avif",
//       alt: "Thiruvalluvar Statue, Kanyakumari, 2015",
//       title: "Thiruvalluvar Statue, Kanyakumari, 2015",
//     },
//   ];

//   const openFullscreen = (index) => {
//     setFullscreenImageIndex(index);
//     setIsFullscreen(true);
//   };

//   const closeFullscreen = () => {
//     setIsFullscreen(false);
//   };

//   const nextFullscreenImage = () => {
//     setFullscreenImageIndex((prev) =>
//       prev === familyPhotos.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevFullscreenImage = () => {
//     setFullscreenImageIndex((prev) =>
//       prev === 0 ? familyPhotos.length - 1 : prev - 1
//     );
//   };

//   // Horizontal Tile Gallery
//   const TileGallery = () => {
//     return (
//       <div className="flex gap-4 overflow-x-auto pb-4">
//         {familyPhotos.map((photo, index) => (
//           <div
//             key={photo.id}
//             className="flex-shrink-0 relative group cursor-pointer transition-all duration-300"
//             onClick={() => openFullscreen(index)}
//           >
//             <div className="relative">
//               <img
//                 src={photo.url}
//                 alt={photo.alt}
//                 className="h-96 sm:h-[450px] lg:h-[500px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <p className="text-white text-base font-medium leading-tight">
//                     {photo.title}
//                   </p>
//                 </div>
//               </div>
//               {/* Click hint */}
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <p className="text-white text-sm font-medium bg-black/50 px-3 py-2 rounded">
//                   <Maximize2 />
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   // Fullscreen modal
//   const FullscreenModal = () => {
//     if (!isFullscreen) return null;

//     return (
//       <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
//         {/* Close button */}
//         <button
//           onClick={closeFullscreen}
//           className="absolute top-4 right-4 text-white hover:text-gray-300 z-60"
//         >
//           <X className="w-8 h-8" />
//         </button>

//         {/* Navigation buttons */}
//         <button
//           onClick={prevFullscreenImage}
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-60"
//         >
//           <ChevronLeft className="w-8 h-8" />
//         </button>
//         <button
//           onClick={nextFullscreenImage}
//           className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-60"
//         >
//           <ChevronRight className="w-8 h-8" />
//         </button>

//         {/* Image container */}
//         <div className="max-w-2xl max-h-full p-8 flex flex-col items-center">
//           <img
//             src={familyPhotos[fullscreenImageIndex].url}
//             alt={familyPhotos[fullscreenImageIndex].alt}
//             className="max-w-full max-h-full object-contain"
//           />
//           <h3 className="text-white text-xl font-semibold mt-4">
//             {familyPhotos[fullscreenImageIndex].title}
//           </h3>
//         </div>

//         {/* Dots indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
//           {familyPhotos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setFullscreenImageIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                 index === fullscreenImageIndex
//                   ? "bg-white w-6"
//                   : "bg-white/50 hover:bg-white/70"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-serif">
//       {/* Header Section */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="text-center">
//             <h1 className="text-4xl font-light text-gray-900 mb-4">Personal</h1>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="space-y-12">
//           {/* Our Story Section - Now at the top */}
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <div className="flex items-center mb-6">
//               <Globe className="w-6 h-6 text-gray-600 mr-3" />
//               <h2 className="text-xl font-semibold text-gray-900">Our Story</h2>
//             </div>

//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed text-lg">
//                 Amrik was born and raised in India. Olga comes from Poland, and
//                 is of Russian descent. Indiya was born to Olga and Amrik, and by
//                 virtue of her birth, is American. Amrik's parents continue to
//                 live in West Bengal, India, preserving the connection to our
//                 roots.
//               </p>
//             </div>
//           </div>

//           {/* Centered Image Gallery */}
//           <div className="flex justify-center">
//             <TileGallery />
//           </div>
//         </div>
//       </div>

//       {/* Fullscreen Modal */}
//       <FullscreenModal />
//     </div>
//   );
// };

// export default PersonalPage;

import { useState } from "react";
import { Globe, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const PersonalPage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);

  // Family photos - AVIF format images
  const familyPhotos = [
    {
      id: 1,
      url: "/personal_1.avif",
      alt: "Prescott, Arizona, 2017",
      title: "Prescott, Arizona, 2017",
    },
    {
      id: 2,
      url: "/personal_2.avif",
      alt: "Marriott, Hyderabad, 2016",
      title: "Marriott, Hyderabad, 2016",
    },
    {
      id: 3,
      url: "/personal_3.avif",
      alt: "Prescott, Arizona, 2017",
      title: "Prescott, Arizona, 2017",
    },
    {
      id: 4,
      url: "/personal_4.avif",
      alt: "Pekhri Summit, The Himalayas, 2024",
      title: "Pekhri Summit, The Himalayas, 2024",
    },
    {
      id: 5,
      url: "/personal_5.avif",
      alt: "Thiruvalluvar Statue, Kanyakumari, 2015",
      title: "Thiruvalluvar Statue, Kanyakumari, 2015",
    },
  ];

  const openFullscreen = (index) => {
    setFullscreenImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const nextFullscreenImage = () => {
    setFullscreenImageIndex((prev) =>
      prev === familyPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevFullscreenImage = () => {
    setFullscreenImageIndex((prev) =>
      prev === 0 ? familyPhotos.length - 1 : prev - 1
    );
  };

  // Horizontal Tile Gallery
  const TileGallery = () => {
    return (
      <div className="flex gap-4 overflow-x-auto pb-4">
        {familyPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="flex-shrink-0 relative group cursor-pointer transition-all duration-300"
            onClick={() => openFullscreen(index)}
          >
            <div className="relative">
              <img
                src={photo.url}
                alt={photo.alt}
                className="h-96 sm:h-[450px] lg:h-[500px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-base font-medium leading-tight">
                    {photo.title}
                  </p>
                </div>
              </div>
              {/* Click hint */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium bg-black/50 px-3 py-2 rounded">
                  <Maximize2 />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Fullscreen modal
  const FullscreenModal = () => {
    if (!isFullscreen) return null;

    return (
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
        {/* Close button */}
        <button
          onClick={closeFullscreen}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-60"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={prevFullscreenImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-60"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextFullscreenImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-60"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Image container */}
        <div className="max-w-2xl max-h-full p-8 flex flex-col items-start">
          {" "}
          {/* Changed items-center to items-start */}
          <img
            src={familyPhotos[fullscreenImageIndex].url}
            alt={familyPhotos[fullscreenImageIndex].alt}
            className="max-w-full max-h-full object-contain"
          />
          <h3 className="text-white text-xl font-semibold mt-4">
            {familyPhotos[fullscreenImageIndex].title}
          </h3>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-4 flex space-x-2">
          {" "}
          {/* Removed left-1/2 -translate-x-1/2 */}
          {familyPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => setFullscreenImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === fullscreenImageIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          {" "}
          {/* Removed mx-auto */}
          <div>
            {" "}
            {/* Removed text-center */}
            <h1 className="text-4xl font-light text-gray-900 mb-4 ml-4">
              Personal
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {" "}
        {/* Removed mx-auto */}
        <div className="space-y-12 ml-4">
          {/* Our Story Section - Now at the top */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Our Story</h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Amrik was born and raised in India. Olga comes from Poland, and
                is of Russian descent. Indiya was born to Olga and Amrik, and by
                virtue of her birth, is American. Amrik's parents continue to
                live in West Bengal, India.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            {" "}
            {/* Removed flex justify-center */}
            <TileGallery />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <FullscreenModal />
    </div>
  );
};

export default PersonalPage;
