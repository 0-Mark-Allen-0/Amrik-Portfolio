// import { useState } from "react";
// import {
//   FileText,
//   ExternalLink,
//   Download,
//   Award,
//   Calendar,
//   Users,
//   BookOpen,
//   Newspaper,
//   Presentation,
// } from "lucide-react";

// const PublicationsPage = () => {
//   const [activeSection, setActiveSection] = useState("all");

//   const journalPublications = [
//     {
//       id: 6,
//       authors: "Sen, A., and Perelman, C.",
//       title:
//         "A Hamiltonian model of the Fibonacci quasicrystal using non-local interactions: simulations and spectral analysis",
//       journal: "Eur. Phys. J. B",
//       volume: "93",
//       pages: "67",
//       year: "2020",
//       pdf: "/pdfs/publications/A Hamiltonian model of the Fibonacci quasicrystal using non-local interactions simulations and spectral analysis.pdf",
//       type: "journal",
//     },
//     {
//       id: 5,
//       authors: "Sen, A.",
//       title:
//         "Anisotropic Wave Turbulence for Reduced Hydrodynamics with Rotationally Constrained Slow Inertial Waves",
//       journal: "Fluids",
//       volume: "2",
//       pages: "28",
//       year: "2017",
//       pdf: "/pdfs/publications/Anisotropic Wave Turbulence for Reduced Hydrodynamics with Rotationally Constrained Slow Inertial Waves.pdf",
//       html: "http://www.mdpi.com/2311-5521/2/2/28",
//       type: "journal",
//     },
//     {
//       id: 4,
//       authors: "Sen, A., Aschheim, R., and Irwin, K.",
//       title:
//         "Emergence of an Aperiodic Dirichlet Space from the Tetrahedral Units of an Icosahedral Internal Space",
//       journal: "Mathematics",
//       volume: "5",
//       pages: "29",
//       year: "2017",
//       pdf: "/pdfs/publications/Emergence of an Aperiodic Dirichlet Space from the Tetrahedral Units of an Icosahedral Internal Space.pdf",
//       html: "http://www.mdpi.com/2227-7390/5/2/29",
//       special:
//         "This paper has been nominated as the journal cover page article",
//       coverImage:
//         "http://www.mdpi.com/data/covers/mathematics/big_cover-mathematics-v5-i2.png",
//       type: "journal",
//     },
//     {
//       id: 3,
//       authors:
//         "Pouquet, A., Sen, A., Rosenberg, D., Mininni, P., and Baerenzung, J.",
//       title: "Inverse cascades in turbulence and the case of rotating flows",
//       journal: "Phys. Scr.",
//       volume: "T 155",
//       pages: "014032",
//       year: "2013",
//       pdf: "/pdfs/publications/Inverse cascades in turbulence and the case of rotating flows.pdf",
//       type: "journal",
//     },
//     {
//       id: 2,
//       authors: "Sen, A., Mininni, P., Rosenberg, D., and Pouquet, A.",
//       title:
//         "Anisotropy and non-universality in scaling laws of the large-scale energy spectrum in rotating turbulence",
//       journal: "Phys. Rev. E",
//       volume: "86",
//       pages: "036319",
//       year: "2012",
//       pdf: "/pdfs/publications/Anisotropy and non-universality in scaling laws of the large-scale energy spectrum in rotating turbulence.pdf",
//       type: "journal",
//     },
//     {
//       id: 1,
//       authors:
//         "Sen, A.; Ananthakrishnan, G.; Sundaram, S.; Ramakrishnan, A. G.",
//       title:
//         "Dynamic Space Warping of Strokes for Recognition of Online Handwritten Characters",
//       journal: "Intl. Jour. of Patt. Recog. and Art. Intell.",
//       volume: "23",
//       issue: "5",
//       year: "2009",
//       pdf: "/pdfs/publications/Dynamic Space Warping of Strokes for Recognition of Online Handwritten Characters.pdf",
//       type: "journal",
//     },
//   ];

//   const technicalReports = [
//     {
//       id: 1,
//       authors: "Sen, A.",
//       title: "Analysis of fractal representation of genetic sequences",
//       publication:
//         "Essays in Chaotic Dynamics: Spring 2010, Technical Report CUCS 106610, Boulder",
//       editor: "Elizabeth Bradley",
//       year: "2010",
//       fullReport:
//         "/pdfs/publications/Analysis of fractal representation of genetic sequences-report.pdf",
//       paper:
//         "/pdfs/publications/Analysis of fractal representation of genetic sequences-paper.pdf",
//       type: "technical",
//     },
//   ];

//   const dissertation = [
//     {
//       id: 1,
//       authors: "Sen, A.",
//       title: "A Tale of Waves and Eddies in a Sea of Rotating Turbulence",
//       publication: "Applied Mathematics Graduate Theses & Dissertations. 46",
//       year: "2014",
//       html: "https://scholar.colorado.edu/appm_gradetds/46/",
//       pdf: "/pdfs/publications/A Tale of Waves and Eddies in a Sea of Rotating Turbulence.pdf",
//       type: "dissertation",
//     },
//   ];

//   const popularPress = [
//     {
//       id: 1,
//       authors: "Sen, A.",
//       title:
//         "Developing AI based predictive technologies for epidemic management and preparedness",
//       publication: "Financial Express",
//       year: "September 2021",
//       html: "https://www.financialexpress.com/lifestyle/health/developing-ai-based-predictive-technologies-for-epidemic-management-and-preparedness/2334123/",
//       type: "popular",
//     },
//   ];

//   const conferenceProceedings = [
//     {
//       id: 3,
//       authors: "Sen, A. et. al.",
//       title:
//         "Hamiltonian wave turbulence theory on the genesis of eddies from waves in rotating flows",
//       conference: "American Geophysical Union, Spring Meeting 2013",
//       location: "Denver, Colorado, USA",
//       year: "2013",
//       type: "conference",
//     },
//     {
//       id: 2,
//       authors: "Sen, A.",
//       title:
//         "Poisson Approximation & its Application in Pattern Matching Problems",
//       conference:
//         "Fields-MITACS meet, School of Applied Probability (Fields Institute & Carleton University, Canada)",
//       date: "May 11-21, 2009",
//       year: "2009",
//       type: "conference",
//     },
//     {
//       id: 1,
//       authors: "Ananthakrishnan, G., Sen, A., et. al.",
//       title:
//         "Dynamic Space Warping of Sub-Strokes for Recognition of Online Handwritten Characters",
//       conference:
//         "International Graphonomics Society (IGS2007) 13th IGS conference",
//       date: "11-14 Nov. 2007",
//       location: "Melbourne, Australia",
//       year: "2007",
//       type: "conference",
//     },
//   ];

//   const allPublications = [
//     ...journalPublications,
//     ...technicalReports,
//     ...dissertation,
//     ...popularPress,
//     ...conferenceProceedings,
//   ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

//   const sections = [
//     {
//       id: "all",
//       name: "All Publications",
//       icon: BookOpen,
//       count: allPublications.length,
//     },
//     {
//       id: "journal",
//       name: "Journal Articles",
//       icon: FileText,
//       count: journalPublications.length,
//     },
//     {
//       id: "technical",
//       name: "Technical Reports",
//       icon: FileText,
//       count: technicalReports.length,
//     },
//     {
//       id: "dissertation",
//       name: "Dissertation",
//       icon: Award,
//       count: dissertation.length,
//     },
//     {
//       id: "popular",
//       name: "Popular Press",
//       icon: Newspaper,
//       count: popularPress.length,
//     },
//     {
//       id: "conference",
//       name: "Conference Proceedings",
//       icon: Presentation,
//       count: conferenceProceedings.length,
//     },
//   ];

//   const getPublications = () => {
//     switch (activeSection) {
//       case "journal":
//         return journalPublications;
//       case "technical":
//         return technicalReports;
//       case "dissertation":
//         return dissertation;
//       case "popular":
//         return popularPress;
//       case "conference":
//         return conferenceProceedings;
//       default:
//         return allPublications;
//     }
//   };

//   const PublicationCard = ({ publication }) => {
//     const getIcon = () => {
//       switch (publication.type) {
//         case "journal":
//           return <FileText className="w-5 h-5 text-blue-600" />;
//         case "technical":
//           return <FileText className="w-5 h-5 text-green-600" />;
//         case "dissertation":
//           return <Award className="w-5 h-5 text-purple-600" />;
//         case "popular":
//           return <Newspaper className="w-5 h-5 text-orange-600" />;
//         case "conference":
//           return <Presentation className="w-5 h-5 text-red-600" />;
//         default:
//           return <FileText className="w-5 h-5 text-gray-600" />;
//       }
//     };

//     return (
//       <div className="font-serif bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
//         <div className="flex items-start space-x-3">
//           <div className="flex-shrink-0 mt-1">{getIcon()}</div>
//           <div className="flex-1 min-w-0">
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">
//               {publication.title}
//             </h3>

//             <div className="flex items-center text-sm text-gray-600 mb-2">
//               <Users className="w-4 h-4 mr-1" />
//               <span>{publication.authors}</span>
//             </div>

//             <div className="text-sm text-gray-700 mb-3">
//               {publication.journal && (
//                 <span className="font-medium">{publication.journal}</span>
//               )}
//               {publication.publication && (
//                 <span className="font-medium">{publication.publication}</span>
//               )}
//               {publication.conference && (
//                 <span className="font-medium">{publication.conference}</span>
//               )}
//               {publication.volume && <span>, {publication.volume}</span>}
//               {publication.issue && <span>({publication.issue})</span>}
//               {publication.pages && <span>, {publication.pages}</span>}
//               {publication.location && <span>, {publication.location}</span>}
//               {publication.date && <span>, {publication.date}</span>}
//               {publication.editor && (
//                 <span>, editor: {publication.editor}</span>
//               )}
//             </div>

//             <div className="flex items-center text-sm text-gray-500 mb-4">
//               <Calendar className="w-4 h-4 mr-1" />
//               <span>{publication.year}</span>
//             </div>

//             {publication.special && (
//               <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
//                 <div className="flex items-center">
//                   <Award className="w-4 h-4 text-yellow-600 mr-2" />
//                   <span className="text-sm text-yellow-800">
//                     {publication.special}
//                   </span>
//                 </div>
//                 {publication.coverImage && (
//                   <a
//                     href={publication.coverImage}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-yellow-700 hover:text-yellow-900 text-sm underline mt-1 inline-block"
//                   >
//                     View cover page
//                   </a>
//                 )}
//               </div>
//             )}

//             <div className="flex flex-wrap gap-2">
//               {publication.pdf && (
//                 <a
//
//                   href={publication.pdf}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
//                 >
//                   <Download className="w-3 h-3 mr-1" />
//                   PDF
//                 </a>
//               )}
//               {publication.html && (
//                 <a
//                   href={publication.html}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
//                 >
//                   <ExternalLink className="w-3 h-3 mr-1" />
//                   HTML
//                 </a>
//               )}
//               {publication.fullReport && (
//                 <a
//
//                   href={publication.fullReport}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors"
//                 >
//                   <Download className="w-3 h-3 mr-1" />
//                   Full Report
//                 </a>
//               )}
//               {publication.paper && (
//                 <a
//
//                   href={publication.paper}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors"
//                 >
//                   <Download className="w-3 h-3 mr-1" />
//                   Paper
//                 </a>
//               )}
//             </div>
//           </div>
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
//             <h1 className="text-4xl font-light text-gray-900 mb-4">
//               Publications
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Navigation */}
//           <div className="lg:w-1/4">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">
//                 Filter Publications
//               </h2>
//               <nav className="space-y-2">
//                 {sections.map((section) => {
//                   const Icon = section.icon;
//                   return (
//                     <button
//                       key={section.id}
//                       onClick={() => setActiveSection(section.id)}
//                       className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                         activeSection === section.id
//                           ? "bg-gray-100 text-black"
//                           : "text-gray-700 hover:bg-gray-100"
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         <Icon className="w-4 h-4 mr-2" />
//                         {section.name}
//                       </div>
//                       <span
//                         className={`px-2 py-1 text-xs rounded-full ${
//                           activeSection === section.id
//                             ? "bg-gray-200 text-black"
//                             : "bg-gray-200 text-gray-600"
//                         }`}
//                       >
//                         {section.count}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </nav>

//               {/* Statistics */}
//               <div className="mt-8 pt-6 border-t border-gray-200">
//                 {/* <h3 className="text-sm font-semibold text-gray-900 mb-3">
//                   Statistics
//                 </h3> */}
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Total Publications:</span>
//                     <span className="font-semibold">
//                       {allPublications.length}
//                     </span>
//                   </div>
//                   {/* <div className="flex justify-between">
//                     <span className="text-gray-600">Years Active:</span>
//                     <span className="font-semibold">2007-2021</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Latest:</span>
//                     <span className="font-semibold">2021</span>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:w-3/4">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 {sections.find((s) => s.id === activeSection)?.name ||
//                   "All Publications"}
//               </h2>
//               <p className="text-gray-600">
//                 Showing {getPublications().length} publication
//                 {getPublications().length !== 1 ? "s" : ""}
//               </p>
//             </div>

//             <div className="space-y-6">
//               {getPublications().map((publication) => (
//                 <PublicationCard
//                   key={`${publication.type}-${publication.id}`}
//                   publication={publication}
//                 />
//               ))}
//             </div>

//             {getPublications().length === 0 && (
//               <div className="text-center py-12">
//                 <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">
//                   No publications found
//                 </h3>
//                 <p className="text-gray-600">
//                   Try selecting a different category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PublicationsPage;

//v2
// import { useState } from "react";
// import {
//   FileText,
//   ExternalLink,
//   Download,
//   Award,
//   Calendar,
//   Users,
//   BookOpen,
//   Newspaper,
//   Presentation,
// } from "lucide-react";

// const PublicationsPage = () => {
//   const [activeSection, setActiveSection] = useState("all");

//   const journalPublications = [
//     {
//       id: 6,
//       authors: "Sen, A., and Perelman, C.",
//       title:
//         "A Hamiltonian model of the Fibonacci quasicrystal using non-local interactions: simulations and spectral analysis",
//       journal: "Eur. Phys. J. B",
//       volume: "93",
//       pages: "67",
//       year: "2020",
//       pdf: "/pdfs/publications/A Hamiltonian model of the Fibonacci quasicrystal using non-local interactions simulations and spectral analysis.pdf",
//       type: "journal",
//     },
//     {
//       id: 5,
//       authors: "Sen, A.",
//       title:
//         "Anisotropic Wave Turbulence for Reduced Hydrodynamics with Rotationally Constrained Slow Inertial Waves",
//       journal: "Fluids",
//       volume: "2",
//       pages: "28",
//       year: "2017",
//       pdf: "/pdfs/publications/Anisotropic Wave Turbulence for Reduced Hydrodynamics with Rotationally Constrained Slow Inertial Waves.pdf",
//       html: "http://www.mdpi.com/2311-5521/2/2/28",
//       type: "journal",
//     },
//     {
//       id: 4,
//       authors: "Sen, A., Aschheim, R., and Irwin, K.",
//       title:
//         "Emergence of an Aperiodic Dirichlet Space from the Tetrahedral Units of an Icosahedral Internal Space",
//       journal: "Mathematics",
//       volume: "5",
//       pages: "29",
//       year: "2017",
//       pdf: "/pdfs/publications/Emergence of an Aperiodic Dirichlet Space from the Tetrahedral Units of an Icosahedral Internal Space.pdf",
//       html: "http://www.mdpi.com/2227-7390/5/2/29",
//       special:
//         "This paper has been nominated as the journal cover page article",
//       coverImage:
//         "http://www.mdpi.com/data/covers/mathematics/big_cover-mathematics-v5-i2.png",
//       type: "journal",
//     },
//     {
//       id: 3,
//       authors:
//         "Pouquet, A., Sen, A., Rosenberg, D., Mininni, P., and Baerenzung, J.",
//       title: "Inverse cascades in turbulence and the case of rotating flows",
//       journal: "Phys. Scr.",
//       volume: "T 155",
//       pages: "014032",
//       year: "2013",
//       pdf: "/pdfs/publications/Inverse cascades in turbulence and the case of rotating flows.pdf",
//       type: "journal",
//     },
//     {
//       id: 2,
//       authors: "Sen, A., Mininni, P., Rosenberg, D., and Pouquet, A.",
//       title:
//         "Anisotropy and non-universality in scaling laws of the large-scale energy spectrum in rotating turbulence",
//       journal: "Phys. Rev. E",
//       volume: "86",
//       pages: "036319",
//       year: "2012",
//       pdf: "/pdfs/publications/Anisotropy and non-universality in scaling laws of the large-scale energy spectrum in rotating turbulence.pdf",
//       type: "journal",
//     },
//     {
//       id: 1,
//       authors:
//         "Sen, A.; Ananthakrishnan, G.; Sundaram, S.; Ramakrishnan, A. G.",
//       title:
//         "Dynamic Space Warping of Strokes for Recognition of Online Handwritten Characters",
//       journal: "Intl. Jour. of Patt. Recog. and Art. Intell.",
//       volume: "23",
//       issue: "5",
//       year: "2009",
//       pdf: "/pdfs/publications/Dynamic Space Warping of Strokes for Recognition of Online Handwritten Characters.pdf",
//       type: "journal",
//     },
//   ];

//   const technicalReports = [
//     {
//       id: 1,
//       authors: "Sen, A.",
//       title: "Analysis of fractal representation of genetic sequences",
//       publication:
//         "Essays in Chaotic Dynamics: Spring 2010, Technical Report CUCS 106610, Boulder",
//       editor: "Elizabeth Bradley",
//       year: "2010",
//       fullReport:
//         "/pdfs/publications/Analysis of fractal representation of genetic sequences-report.pdf",
//       paper:
//         "/pdfs/publications/Analysis of fractal representation of genetic sequences-paper.pdf",
//       type: "technical",
//     },
//   ];

//   const dissertation = [
//     {
//       id: 1,
//       authors: "Sen, A.",
//       title: "A Tale of Waves and Eddies in a Sea of Rotating Turbulence",
//       publication: "Applied Mathematics Graduate Theses & Dissertations. 46",
//       year: "2014",
//       html: "https://scholar.colorado.edu/appm_gradetds/46/",
//       pdf: "/pdfs/publications/A Tale of Waves and Eddies in a Sea of Rotating Turbulence.pdf",
//       type: "dissertation",
//     },
//   ];

//   const popularPress = [
//     {
//       id: 1,
//       authors: "Sen, A.",
//       title:
//         "Developing AI based predictive technologies for epidemic management and preparedness",
//       publication: "Financial Express",
//       year: "September 2021",
//       html: "https://www.financialexpress.com/lifestyle/health/developing-ai-based-predictive-technologies-for-epidemic-management-and-preparedness/2334123/",
//       type: "popular",
//     },
//   ];

//   const conferenceProceedings = [
//     {
//       id: 3,
//       authors: "Sen, A. et. al.",
//       title:
//         "Hamiltonian wave turbulence theory on the genesis of eddies from waves in rotating flows",
//       conference: "American Geophysical Union, Spring Meeting 2013",
//       location: "Denver, Colorado, USA",
//       year: "2013",
//       type: "conference",
//     },
//     {
//       id: 2,
//       authors: "Sen, A.",
//       title:
//         "Poisson Approximation & its Application in Pattern Matching Problems",
//       conference:
//         "Fields-MITACS meet, School of Applied Probability (Fields Institute & Carleton University, Canada)",
//       date: "May 11-21, 2009",
//       year: "2009",
//       type: "conference",
//     },
//     {
//       id: 1,
//       authors: "Ananthakrishnan, G., Sen, A., et. al.",
//       title:
//         "Dynamic Space Warping of Sub-Strokes for Recognition of Online Handwritten Characters",
//       conference:
//         "International Graphonomics Society (IGS2007) 13th IGS conference",
//       date: "11-14 Nov. 2007",
//       location: "Melbourne, Australia",
//       year: "2007",
//       type: "conference",
//     },
//   ];

//   const allPublications = [
//     ...journalPublications,
//     ...technicalReports,
//     ...dissertation,
//     ...popularPress,
//     ...conferenceProceedings,
//   ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

//   const sections = [
//     {
//       id: "all",
//       name: "All Publications",
//       icon: BookOpen,
//       count: allPublications.length,
//     },
//     {
//       id: "journal",
//       name: "Journal Articles",
//       icon: FileText,
//       count: journalPublications.length,
//     },
//     {
//       id: "technical",
//       name: "Technical Reports",
//       icon: FileText,
//       count: technicalReports.length,
//     },
//     {
//       id: "dissertation",
//       name: "Dissertation",
//       icon: Award,
//       count: dissertation.length,
//     },
//     {
//       id: "popular",
//       name: "Popular Press",
//       icon: Newspaper,
//       count: popularPress.length,
//     },
//     {
//       id: "conference",
//       name: "Conference Proceedings",
//       icon: Presentation,
//       count: conferenceProceedings.length,
//     },
//   ];

//   const getPublications = () => {
//     switch (activeSection) {
//       case "journal":
//         return journalPublications;
//       case "technical":
//         return technicalReports;
//       case "dissertation":
//         return dissertation;
//       case "popular":
//         return popularPress;
//       case "conference":
//         return conferenceProceedings;
//       default:
//         return allPublications;
//     }
//   };

//   const PublicationCard = ({ publication }) => {
//     const getIcon = () => {
//       switch (publication.type) {
//         case "journal":
//           return <FileText className="w-5 h-5 text-blue-600" />;
//         case "technical":
//           return <FileText className="w-5 h-5 text-green-600" />;
//         case "dissertation":
//           return <Award className="w-5 h-5 text-purple-600" />;
//         case "popular":
//           return <Newspaper className="w-5 h-5 text-orange-600" />;
//         case "conference":
//           return <Presentation className="w-5 h-5 text-red-600" />;
//         default:
//           return <FileText className="w-5 h-5 text-gray-600" />;
//       }
//     };

//     return (
//       <div className="font-serif bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
//         <div className="flex items-start space-x-3">
//           <div className="flex-shrink-0 mt-1">{getIcon()}</div>
//           <div className="flex-1 min-w-0">
//             <h3 className="text-md font-semibold text-gray-900 mb-2">
//               {publication.title}
//             </h3>

//             <div className="flex items-center text-sm text-gray-600 mb-2">
//               <Users className="w-4 h-4 mr-1" />
//               <span>{publication.authors}</span>
//             </div>

//             <div className="text-sm text-gray-700 mb-3">
//               {publication.journal && (
//                 <span className="font-medium">{publication.journal}</span>
//               )}
//               {publication.publication && (
//                 <span className="font-medium">{publication.publication}</span>
//               )}
//               {publication.conference && (
//                 <span className="font-medium">{publication.conference}</span>
//               )}
//               {publication.volume && <span>, {publication.volume}</span>}
//               {publication.issue && <span>({publication.issue})</span>}
//               {publication.pages && <span>, {publication.pages}</span>}
//               {publication.location && <span>, {publication.location}</span>}
//               {publication.date && <span>, {publication.date}</span>}
//               {publication.editor && (
//                 <span>, editor: {publication.editor}</span>
//               )}
//             </div>

//             <div className="flex items-center text-sm text-gray-500 mb-4">
//               <Calendar className="w-4 h-4 mr-1" />
//               <span>{publication.year}</span>
//             </div>

//             {publication.special && (
//               <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
//                 <div className="flex items-center">
//                   <Award className="w-4 h-4 text-yellow-600 mr-2" />
//                   <span className="text-sm text-yellow-800">
//                     {publication.special}
//                   </span>
//                 </div>
//                 {publication.coverImage && (
//                   <a
//                     href={publication.coverImage}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-yellow-700 hover:text-yellow-900 text-sm underline mt-1 inline-block"
//                   >
//                     View cover page
//                   </a>
//                 )}
//               </div>
//             )}

//             <div className="flex flex-wrap gap-2">
//               {publication.pdf && (
//                 <a
//                   href={publication.pdf}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
//                 >
//                   <Download className="w-3 h-3 mr-1" />
//                   PDF
//                 </a>
//               )}
//               {publication.html && (
//                 <a
//                   href={publication.html}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
//                 >
//                   <ExternalLink className="w-3 h-3 mr-1" />
//                   HTML
//                 </a>
//               )}
//               {publication.fullReport && (
//                 <a
//                   href={publication.fullReport}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors"
//                 >
//                   <Download className="w-3 h-3 mr-1" />
//                   Full Report
//                 </a>
//               )}
//               {publication.paper && (
//                 <a
//                   href={publication.paper}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors"
//                 >
//                   <Download className="w-3 h-3 mr-1" />
//                   Paper
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-serif">
//       {/* Header Section */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4">
//           {" "}
//           {/* Removed mx-auto */}
//           <div>
//             <h1 className="text-4xl font-light text-gray-900 mb-4 ml-2">
//               Publications
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8">
//         {" "}
//         {/* Removed mx-auto */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Navigation */}
//           <div className="lg:w-1/4">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">
//                 Filter Publications
//               </h2>
//               <nav className="space-y-2">
//                 {sections.map((section) => {
//                   const Icon = section.icon;
//                   return (
//                     <button
//                       key={section.id}
//                       onClick={() => setActiveSection(section.id)}
//                       className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                         activeSection === section.id
//                           ? "bg-gray-100 text-black"
//                           : "text-gray-700 hover:bg-gray-100"
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         <Icon className="w-4 h-4 mr-2" />
//                         {section.name}
//                       </div>
//                       <span
//                         className={`px-2 py-1 text-xs rounded-full ${
//                           activeSection === section.id
//                             ? "bg-gray-200 text-black"
//                             : "bg-gray-200 text-gray-600"
//                         }`}
//                       >
//                         {section.count}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </nav>

//               {/* Statistics */}
//               <div className="mt-8 pt-6 border-t border-gray-200">
//                 {/* <h3 className="text-sm font-semibold text-gray-900 mb-3">
//                   Statistics
//                 </h3> */}
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Total Publications:</span>
//                     <span className="font-semibold">
//                       {allPublications.length}
//                     </span>
//                   </div>
//                   {/* <div className="flex justify-between">
//                     <span className="text-gray-600">Years Active:</span>
//                     <span className="font-semibold">2007-2021</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Latest:</span>
//                     <span className="font-semibold">2021</span>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:w-3/4">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 {sections.find((s) => s.id === activeSection)?.name ||
//                   "All Publications"}
//               </h2>
//               <p className="text-gray-600">
//                 Showing {getPublications().length} publication
//                 {getPublications().length !== 1 ? "s" : ""}
//               </p>
//             </div>

//             <div className="space-y-6">
//               {getPublications().map((publication) => (
//                 <PublicationCard
//                   key={`${publication.type}-${publication.id}`}
//                   publication={publication}
//                 />
//               ))}
//             </div>

//             {getPublications().length === 0 && (
//               <div className="text-center py-12">
//                 <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">
//                   No publications found
//                 </h3>
//                 <p className="text-gray-600">
//                   Try selecting a different category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PublicationsPage;

//v3
import { useState } from "react";
import {
  FileText,
  ExternalLink,
  Download,
  Award,
  Calendar,
  Users,
  BookOpen,
  Newspaper,
  Presentation,
  Link,
} from "lucide-react";

const PublicationsPage = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [popoutVisible, setPopoutVisible] = useState(null);

  const journalPublications = [
    {
      id: 6,
      authors: "Sen, A., and Perelman, C.",
      title:
        "A Hamiltonian model of the Fibonacci quasicrystal using non-local interactions: simulations and spectral analysis",
      journal: "Eur. Phys. J. B",
      volume: "93",
      pages: "67",
      year: "2020",
      pdf: "/pdfs/publications/A Hamiltonian model of the Fibonacci quasicrystal using non-local interactions simulations and spectral analysis.pdf",
      type: "journal",
    },
    {
      id: 5,
      authors: "Sen, A.",
      title:
        "Anisotropic Wave Turbulence for Reduced Hydrodynamics with Rotationally Constrained Slow Inertial Waves",
      journal: "Fluids",
      volume: "2",
      pages: "28",
      year: "2017",
      pdf: "/pdfs/publications/Anisotropic Wave Turbulence for Reduced Hydrodynamics with Rotationally Constrained Slow Inertial Waves.pdf",
      html: "http://www.mdpi.com/2311-5521/2/2/28",
      type: "journal",
    },
    {
      id: 4,
      authors: "Sen, A., Aschheim, R., and Irwin, K.",
      title:
        "Emergence of an Aperiodic Dirichlet Space from the Tetrahedral Units of an Icosahedral Internal Space",
      journal: "Mathematics",
      volume: "5",
      pages: "29",
      year: "2017",
      pdf: "/pdfs/publications/Emergence of an Aperiodic Dirichlet Space from the Tetrahedral Units of an Icosahedral Internal Space.pdf",
      html: "http://www.mdpi.com/2227-7390/5/2/29",
      special:
        "This paper has been nominated as the journal cover page article",
      coverImage:
        "http://www.mdpi.com/data/covers/mathematics/big_cover-mathematics-v5-i2.png",
      type: "journal",
    },
    {
      id: 3,
      authors:
        "Pouquet, A., Sen, A., Rosenberg, D., Mininni, P., and Baerenzung, J.",
      title: "Inverse cascades in turbulence and the case of rotating flows",
      journal: "Phys. Scr.",
      volume: "T 155",
      pages: "014032",
      year: "2013",
      pdf: "/pdfs/publications/Inverse cascades in turbulence and the case of rotating flows.pdf",
      type: "journal",
    },
    {
      id: 2,
      authors: "Sen, A., Mininni, P., Rosenberg, D., and Pouquet, A.",
      title:
        "Anisotropy and non-universality in scaling laws of the large-scale energy spectrum in rotating turbulence",
      journal: "Phys. Rev. E",
      volume: "86",
      pages: "036319",
      year: "2012",
      pdf: "/pdfs/publications/Anisotropy and non-universality in scaling laws of the large-scale energy spectrum in rotating turbulence.pdf",
      type: "journal",
    },
    {
      id: 1,
      authors:
        "Sen, A.; Ananthakrishnan, G.; Sundaram, S.; Ramakrishnan, A. G.",
      title:
        "Dynamic Space Warping of Strokes for Recognition of Online Handwritten Characters",
      journal: "Intl. Jour. of Patt. Recog. and Art. Intell.",
      volume: "23",
      issue: "5",
      year: "2009",
      pdf: "/pdfs/publications/Dynamic Space Warping of Strokes for Recognition of Online Handwritten Characters.pdf",
      type: "journal",
    },
  ];

  const technicalReports = [
    {
      id: 1,
      authors: "Sen, A.",
      title: "Analysis of fractal representation of genetic sequences",
      publication:
        "Essays in Chaotic Dynamics: Spring 2010, Technical Report CUCS 106610, Boulder",
      editor: "Elizabeth Bradley",
      year: "2010",
      fullReport:
        "/pdfs/publications/Analysis of fractal representation of genetic sequences-report.pdf",
      paper:
        "/pdfs/publications/Analysis of fractal representation of genetic sequences-paper.pdf",
      type: "technical",
    },
  ];

  const dissertation = [
    {
      id: 1,
      authors: "Sen, A.",
      title: "A Tale of Waves and Eddies in a Sea of Rotating Turbulence",
      publication: "Applied Mathematics Graduate Theses & Dissertations. 46",
      year: "2014",
      html: "https://scholar.colorado.edu/appm_gradetds/46/",
      pdf: "/pdfs/publications/A Tale of Waves and Eddies in a Sea of Rotating Turbulence.pdf",
      type: "dissertation",
    },
  ];

  const popularPress = [
    {
      id: 1,
      authors: "Sen, A.",
      title:
        "Developing AI based predictive technologies for epidemic management and preparedness",
      publication: "Financial Express",
      year: "September 2021",
      html: "https://www.financialexpress.com/lifestyle/health/developing-ai-based-predictive-technologies-for-epidemic-management-and-preparedness/2334123/",
      type: "popular",
    },
  ];

  const conferenceProceedings = [
    {
      id: 3,
      authors: "Sen, A. et. al.",
      title:
        "Hamiltonian wave turbulence theory on the genesis of eddies from waves in rotating flows",
      conference: "American Geophysical Union, Spring Meeting 2013",
      location: "Denver, Colorado, USA",
      year: "2013",
      type: "conference",
    },
    {
      id: 2,
      authors: "Sen, A.",
      title:
        "Poisson Approximation & its Application in Pattern Matching Problems",
      conference:
        "Fields-MITACS meet, School of Applied Probability (Fields Institute & Carleton University, Canada)",
      date: "May 11-21, 2009",
      year: "2009",
      type: "conference",
    },
    {
      id: 1,
      authors: "Ananthakrishnan, G., Sen, A., et. al.",
      title:
        "Dynamic Space Warping of Sub-Strokes for Recognition of Online Handwritten Characters",
      conference:
        "International Graphonomics Society (IGS2007) 13th IGS conference",
      date: "11-14 Nov. 2007",
      location: "Melbourne, Australia",
      year: "2007",
      type: "conference",
    },
  ];

  const allPublications = [
    ...journalPublications,
    ...technicalReports,
    ...dissertation,
    ...popularPress,
    ...conferenceProceedings,
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const sections = [
    {
      id: "all",
      name: "All Publications",
      icon: BookOpen,
      count: allPublications.length,
    },
    {
      id: "journal",
      name: "Journal Articles",
      icon: FileText,
      count: journalPublications.length,
    },
    {
      id: "technical",
      name: "Technical Reports",
      icon: FileText,
      count: technicalReports.length,
    },
    {
      id: "dissertation",
      name: "Dissertation",
      icon: Award,
      count: dissertation.length,
    },
    {
      id: "popular",
      name: "Popular Press",
      icon: Newspaper,
      count: popularPress.length,
    },
    {
      id: "conference",
      name: "Conference Proceedings",
      icon: Presentation,
      count: conferenceProceedings.length,
    },
  ];

  const getPublications = () => {
    switch (activeSection) {
      case "journal":
        return journalPublications;
      case "technical":
        return technicalReports;
      case "dissertation":
        return dissertation;
      case "popular":
        return popularPress;
      case "conference":
        return conferenceProceedings;
      default:
        return allPublications;
    }
  };

  const getAvailableLinks = (publication) => {
    const links = [];

    if (publication.pdf) {
      links.push({
        type: "PDF",
        url: publication.pdf,
        icon: Download,
        color: "red",
      });
    }
    if (publication.html) {
      links.push({
        type: "HTML",
        url: publication.html,
        icon: ExternalLink,
        color: "blue",
      });
    }
    if (publication.fullReport) {
      links.push({
        type: "Full Report",
        url: publication.fullReport,
        icon: Download,
        color: "green",
      });
    }
    if (publication.paper) {
      links.push({
        type: "Paper",
        url: publication.paper,
        icon: Download,
        color: "purple",
      });
    }

    return links;
  };

  const handleLinkClick = (publicationKey, e) => {
    e.stopPropagation();
    setPopoutVisible(popoutVisible === publicationKey ? null : publicationKey);
  };

  const PublicationCard = ({ publication }) => {
    const publicationKey = `${publication.type}-${publication.id}`;
    const availableLinks = getAvailableLinks(publication);

    return (
      <div className="font-serif bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 border border-gray-200 relative">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-1 relative">
            <button
              onClick={(e) => handleLinkClick(publicationKey, e)}
              className="text-gray-600 hover:text-yellow-500 transition-colors p-1 rounded-md hover:bg-gray-100"
            >
              <Link className="w-5 h-5" />
            </button>

            {/* Pop-out menu */}
            {popoutVisible === publicationKey && availableLinks.length > 0 && (
              <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-48">
                <div className="p-2">
                  <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
                    Options
                  </div>
                  {availableLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-3 py-2 text-sm rounded-md hover:bg-${link.color}-50 text-${link.color}-700 transition-colors w-full`}
                        onClick={() => setPopoutVisible(null)}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {link.type}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-md font-semibold text-gray-900 mb-2">
              {publication.title}
            </h3>

            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Users className="w-4 h-4 mr-1" />
              <span>{publication.authors}</span>
            </div>

            <div className="text-sm text-gray-700 mb-3">
              {publication.journal && (
                <span className="font-medium">{publication.journal}</span>
              )}
              {publication.publication && (
                <span className="font-medium">{publication.publication}</span>
              )}
              {publication.conference && (
                <span className="font-medium">{publication.conference}</span>
              )}
              {publication.volume && <span>, {publication.volume}</span>}
              {publication.issue && <span>({publication.issue})</span>}
              {publication.pages && <span>, {publication.pages}</span>}
              {publication.location && <span>, {publication.location}</span>}
              {publication.date && <span>, {publication.date}</span>}
              {publication.editor && (
                <span>, editor: {publication.editor}</span>
              )}
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{publication.year}</span>
            </div>

            {publication.special && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-yellow-800">
                    {publication.special}
                  </span>
                </div>
                {publication.coverImage && (
                  <a
                    href={publication.coverImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-700 hover:text-yellow-900 text-sm underline mt-1 inline-block"
                  >
                    View cover page
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Overlay to close popout when clicking outside */}
        {popoutVisible === publicationKey && (
          <div
            className="fixed inset-0 z-0"
            onClick={() => setPopoutVisible(null)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4">
          {" "}
          {/* Removed mx-auto */}
          <div>
            <h1 className="text-4xl font-light text-gray-900 mb-4 ml-2">
              Publications
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8">
        {" "}
        {/* Removed mx-auto */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Filter Publications
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === section.id
                          ? "bg-gray-100 text-black"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className="w-4 h-4 mr-2" />
                        {section.name}
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          activeSection === section.id
                            ? "bg-gray-200 text-black"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {section.count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Statistics */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                {/* <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Statistics
                </h3> */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Publications:</span>
                    <span className="font-semibold">
                      {allPublications.length}
                    </span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-600">Years Active:</span>
                    <span className="font-semibold">2007-2021</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Latest:</span>
                    <span className="font-semibold">2021</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {sections.find((s) => s.id === activeSection)?.name ||
                  "All Publications"}
              </h2>
              <p className="text-gray-600">
                Showing {getPublications().length} publication
                {getPublications().length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="space-y-6">
              {getPublications().map((publication) => (
                <PublicationCard
                  key={`${publication.type}-${publication.id}`}
                  publication={publication}
                />
              ))}
            </div>

            {getPublications().length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No publications found
                </h3>
                <p className="text-gray-600">
                  Try selecting a different category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
