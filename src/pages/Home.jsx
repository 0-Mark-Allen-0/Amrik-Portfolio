// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";

// const HomePage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [fullscreenSlide, setFullscreenSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   // Replace these with your actual file paths
//   const slides = [
//     {
//       src: "/home_2.gif",
//       alt: "Gravity capillary waves in multi-phase flows",
//       title: "Gravity Capillary Waves",
//       description:
//         "Advanced simulation of gravity-capillary waves in multi-phase flows, demonstrating the complex interactions between surface tension and gravitational forces.",
//       type: "gif",
//     },
//     {
//       src: "/home_3.avif",
//       alt: "Resonant manifold of three wave interaction",
//       title: "Resonant Manifold Analysis",
//       description:
//         "Visualization of the resonant manifold structure in three-wave interactions within hydrodynamic turbulence systems, revealing fundamental wave coupling mechanisms.",
//       type: "avif",
//     },
//     {
//       src: "/home_1.avif",
//       alt: "Swarming mill kinetics visualization",
//       title: "Swarming Mill Kinetics",
//       description:
//         "Dynamic representation of swarming mill kinetics, showcasing collective behavior patterns and emergent dynamics in complex fluid systems.",
//       type: "avif",
//     },
//   ];

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlaying && !isFullscreen) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoPlaying, isFullscreen, slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const openFullscreen = (index) => {
//     setFullscreenSlide(index);
//     setIsFullscreen(true);
//     setIsAutoPlaying(false);
//   };

//   const closeFullscreen = () => {
//     setIsFullscreen(false);
//     setIsAutoPlaying(true);
//   };

//   const nextFullscreenSlide = () => {
//     setFullscreenSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevFullscreenSlide = () => {
//     setFullscreenSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="min-h-screen bg-white font-serif">
//       {/* Hero Section */}
//       <section className="pt-16 pb-8">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className=" text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
//             Welcome to my website. Here you will find information about my
//             scientific work, peer-reviewed publications, and insights into the
//             fascinating world of fluid dynamics.
//           </p>
//         </div>
//       </section>

//       {/* Carousel Section */}
//       <section className="py-12">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
//             {/* Carousel Controls Header */}
//             <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Research Visualizations
//               </h2>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                   className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"
//                   title={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
//                 >
//                   {isAutoPlaying ? (
//                     <Pause className="w-4 h-4" />
//                   ) : (
//                     <Play className="w-4 h-4" />
//                   )}
//                 </button>
//                 <div className="text-sm text-gray-500">
//                   {currentSlide + 1} / {slides.length}
//                 </div>
//               </div>
//             </div>

//             {/* Carousel Container */}
//             <div className="relative w-full">
//               <div className="overflow-hidden rounded-lg">
//                 <div
//                   className="flex transition-transform duration-500 ease-in-out"
//                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                 >
//                   {slides.map((slide, index) => (
//                     <div key={index} className="min-w-full">
//                       <img
//                         src={slide.src}
//                         alt={slide.alt}
//                         className="w-full h-96 sm:h-[500px] lg:h-[500px] pt-4 object-contain cursor-pointer hover:opacity-90 transition-opacity"
//                         onClick={() => openFullscreen(index)}
//                         loading={index === 0 ? "eager" : "lazy"}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
//                 aria-label="Next image"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Slide Information */}
//             <div className="p-6 bg-white">
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 {slides[currentSlide].title}
//               </h3>
//               <p className="text-black leading-relaxed">
//                 {slides[currentSlide].description}
//               </p>
//               <button
//                 onClick={() => openFullscreen(currentSlide)}
//                 className="mt-4 text-yellow-400 hover:text-yellow-800 font-medium transition-colors"
//               >
//                 View Full Screen →
//               </button>
//             </div>

//             {/* Slide Indicators */}
//             <div className="flex justify-center space-x-2 p-4 bg-gray-50">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                     index === currentSlide
//                       ? "bg-yellow-400 scale-110"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Fullscreen Modal */}
//       {isFullscreen && (
//         <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
//           <div className="relative w-full h-full flex items-center justify-center p-4">
//             {/* Close Button */}
//             <button
//               onClick={closeFullscreen}
//               className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-10 backdrop-blur-sm"
//               aria-label="Close fullscreen"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* Fullscreen Image */}
//             <div className="relative max-w-7xl max-h-full">
//               <img
//                 src={slides[fullscreenSlide].src}
//                 alt={slides[fullscreenSlide].alt}
//                 className="max-w-full max-h-[80vh] object-contain"
//               />

//               {/* Fullscreen Navigation */}
//               <button
//                 onClick={prevFullscreenSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={nextFullscreenSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
//                 aria-label="Next image"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Fullscreen Info */}
//             <div className="absolute bottom-4 left-4 right-4 text-center">
//               <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {slides[fullscreenSlide].title}
//                 </h3>
//                 <p className="text-gray-200 text-sm">
//                   {slides[fullscreenSlide].description}
//                 </p>
//                 <div className="flex justify-center space-x-2 mt-4">
//                   {slides.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setFullscreenSlide(index)}
//                       className={`w-2 h-2 rounded-full transition-all ${
//                         index === fullscreenSlide
//                           ? "bg-white"
//                           : "bg-white/50 hover:bg-white/75"
//                       }`}
//                       aria-label={`Go to slide ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenSlide, setFullscreenSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Replace these with your actual file paths
  const slides = [
    {
      src: "/home_2.gif",
      alt: "Gravity capillary waves in multi-phase flows",
      title: "Gravity Capillary Waves",
      description:
        "Advanced simulation of gravity-capillary waves in multi-phase flows, demonstrating the complex interactions between surface tension and gravitational forces.",
      type: "gif",
    },
    {
      src: "/home_3.avif",
      alt: "Resonant manifold of three wave interaction",
      title: "Resonant Manifold Analysis",
      description:
        "Visualization of the resonant manifold structure in three-wave interactions within hydrodynamic turbulence systems, revealing fundamental wave coupling mechanisms.",
      type: "avif",
    },
    {
      src: "/home_1.avif",
      alt: "Swarming mill kinetics visualization",
      title: "Swarming Mill Kinetics",
      description:
        "Dynamic representation of swarming mill kinetics, showcasing collective behavior patterns and emergent dynamics in complex fluid systems.",
      type: "avif",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isFullscreen) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isFullscreen, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const openFullscreen = (index) => {
    setFullscreenSlide(index);
    setIsFullscreen(true);
    setIsAutoPlaying(false);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setIsAutoPlaying(true);
  };

  const nextFullscreenSlide = () => {
    setFullscreenSlide((prev) => (prev + 1) % slides.length);
  };

  const prevFullscreenSlide = () => {
    setFullscreenSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white font-serif ml-2">
      {/* Hero Section */}
      <section className="pt-16 pb-8">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          {" "}
          {/* Removed mx-auto and text-center */}
          <p className="text-xl text-black -mb-8 -mt-8 max-w-3xl leading-relaxed">
            {" "}
            {/* Removed mx-auto */}
            Welcome to my website. Here you will find information about my
            scientific work, peer-reviewed publications, and insights into the
            fascinating world of mathematics, artificial intelligence, and fluid
            dynamics.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12">
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8">
          {" "}
          {/* Removed mx-auto */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Carousel Controls Header */}
            <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Research Visualizations
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"
                  title={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
                <div className="text-sm text-gray-500">
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="min-w-full">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-96 sm:h-[500px] lg:h-[500px] pt-4 object-contain cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openFullscreen(index)}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Information */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {slides[currentSlide].title}
              </h3>
              <p className="text-black leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <button
                onClick={() => openFullscreen(currentSlide)}
                className="mt-4 text-yellow-400 hover:text-yellow-800 font-medium transition-colors"
              >
                View Full Screen →
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2 p-4 bg-gray-50">
              {" "}
              {/* Removed justify-center */}
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-yellow-400 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-10 backdrop-blur-sm"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Fullscreen Image */}
            <div className="relative max-w-7xl max-h-full">
              <img
                src={slides[fullscreenSlide].src}
                alt={slides[fullscreenSlide].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Fullscreen Navigation */}
              <button
                onClick={prevFullscreenSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextFullscreenSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Fullscreen Info */}
            <div className="absolute bottom-4 left-4 right-4">
              {" "}
              {/* Removed text-center */}
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-2xl">
                {" "}
                {/* Removed mx-auto */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {slides[fullscreenSlide].title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {slides[fullscreenSlide].description}
                </p>
                <div className="flex space-x-2 mt-4">
                  {" "}
                  {/* Removed justify-center */}
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setFullscreenSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === fullscreenSlide
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
