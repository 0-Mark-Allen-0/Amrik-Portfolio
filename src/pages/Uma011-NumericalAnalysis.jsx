// import {
//   ArrowLeft,
//   BookOpen,
//   GraduationCap,
//   Calendar,
//   Info,
//   DownloadCloud,
//   Users,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Uma101NumericalAnalysis = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 font-serif">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <Link
//             to="/teaching"
//             className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors mb-6"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to Teaching Overview
//           </Link>

//           <h2 className="text-3xl font-light text-gray-900 mb-4">
//             Numerical Analysis
//           </h2>
//           <p className="text-lg text-gray-600 mb-6">
//             All documents on this page are PDFs and are readily available for
//              viewing, just click on them!
//           </p>

//           <div className="space-y-6">
//             {/* Syllabus Section */}
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <Users className="w-5 h-5 text-yellow-600 mr-2" />
//                 Course Instructors
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                 {/* <p className="text-gray-700">
//                   The syllabus outlines key physics topics, objectives, and
//                   assessment methods.
//                 </p> */}
//                 <p className="text-lg">
//                   <span className="font-bold">Amrik Sen</span>{" "}
//                   (amriksen@thapar.edu)
//                 </p>
//               </div>
//             </section>

//             {/* Learning Materials Section */}
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Numerical Approximation, Error Analysis, Stability of Algorithms
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 grid grid-cols-1 gap-3">
//                 {[
//                   {
//                     name: "Set 1.1",
//                     file: "",
//                   },
//                   {
//                     name: "Set 1.2",
//                     file: "1-2.pdf",
//                   },
//                   {
//                     name: "Set 1.3",
//                     file: "1-3.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//                     key={idx}
//                     href={`/pdfs/uma101-numerical/${doc.file}`}
//
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                   >
//                     <DownloadCloud className="w-5 h-5" />
//                     {doc.name}
//                   </a>
//                 ))}
//               </div>
//             </section>
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Root Finding Algorithms
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 grid grid-cols-1 gap-3">
//                 {[
//                   {
//                     name: "Set 2.1",
//                     file: "2-1.pdf",
//                   },
//                   {
//                     name: "Set 2.1.1 (Compendium)",
//                     file: "2-1-1.pdf",
//                   },
//                   {
//                     name: "Set 2.1.2 (Compendium)",
//                     file: "2-1-2.pdf",
//                   },
//                   {
//                     name: "Set 2.2",
//                     file: "2-2.pdf",
//                   },
//                   {
//                     name: "Set 2.3",
//                     file: "2-3.pdf",
//                   },
//                   {
//                     name: "Set 2.4",
//                     file: "2-4.pdf",
//                   },
//                   {
//                     name: "Set 2.5",
//                     file: "2-5.pdf",
//                   },
//                   {
//                     name: "Set 2.5.1 - Problem Set",
//                     file: "2-5-1.pdf",
//                   },
//                   {
//                     name: "Set 2.5.2 - Solutions",
//                     file: "2-5-2.pdf",
//                   },
//                   {
//                     name: "Set 2.5.3 - Solutions",
//                     file: "2-5-3.pdf",
//                   },
//                   {
//                     name: "Set 2.6",
//                     file: "2-6.pdf",
//                   },
//                   {
//                     name: "Set 2.7",
//                     file: "2-7.pdf",
//                   },
//                   {
//                     name: "Set 2.8",
//                     file: "",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//                     key={idx}
//                     href={`/pdfs/uma101-numerical/${doc.file}`}
//
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                   >
//                     <DownloadCloud className="w-5 h-5" />
//                     {doc.name}
//                   </a>
//                 ))}
//               </div>
//             </section>
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Numerical Solutions to Systems of Linear Equations
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 grid grid-cols-1 gap-3">
//                 {[
//                   {
//                     name: "Set 3.1.1 - Direct Numerical Methods (Series)",
//                     file: "3-1-1.pdf",
//                   },
//                   {
//                     name: "Set 3.1.2",
//                     file: "3-1-2.pdf",
//                   },
//                   {
//                     name: "Set 3.1.4",
//                     file: "3-1-4.pdf",
//                   },
//                   {
//                     name: "Set 3.1.5",
//                     file: "3-1-5.pdf",
//                   },
//                   {
//                     name: "Set 3.1.6",
//                     file: "3-1-6.pdf",
//                   },
//                   {
//                     name: "Set 3.2.1 - Matrix Iterative Schemes (Series)",
//                     file: "3-1-1.pdf",
//                   },
//                   {
//                     name: "Set 3.2.2",
//                     file: "3-2-2.pdf",
//                   },
//                   {
//                     name: "Set 3.2.3",
//                     file: "3-2-3.pdf",
//                   },
//                   {
//                     name: "Set 3.2.4",
//                     file: "3-2-4.pdf",
//                   },
//                   {
//                     name: "Set 3.2.5",
//                     file: "3-2-5.pdf",
//                   },
//                   {
//                     name: "Set 3.2.6",
//                     file: "3-2-6.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//                     key={idx}
//                     href={`/pdfs/uma101-numerical/${doc.file}`}
//
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                   >
//                     <DownloadCloud className="w-5 h-5" />
//                     {doc.name}
//                   </a>
//                 ))}
//               </div>
//             </section>
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Numerical Interpolation of Functions
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 grid grid-cols-1 gap-3">
//                 {[
//                   {
//                     name: "Set 4.1",
//                     file: "4-1.pdf",
//                   },
//                   {
//                     name: "Set 4.2",
//                     file: "4-2.pdf",
//                   },
//                   {
//                     name: "Set 4.3",
//                     file: "4-3.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//                     key={idx}
//                     href={`/pdfs/uma101-numerical/${doc.file}`}
//
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                   >
//                     <DownloadCloud className="w-5 h-5" />
//                     {doc.name}
//                   </a>
//                 ))}
//               </div>
//             </section>
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Numerical Integration of Functions
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 grid grid-cols-1 gap-3">
//                 {[
//                   {
//                     name: "Set 5.1",
//                     file: "5-1.pdf",
//                   },
//                   {
//                     name: "Set 5.2",
//                     file: "5-2.pdf",
//                   },
//                   {
//                     name: "Set 5.3",
//                     file: "5-3.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//                     key={idx}
//                     href={`/pdfs/uma101-numerical/${doc.file}`}
//
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                   >
//                     <DownloadCloud className="w-5 h-5" />
//                     {doc.name}
//                   </a>
//                 ))}
//               </div>
//             </section>
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Numerical Solutions to ODEs
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 grid grid-cols-1 gap-3">
//                 {[
//                   {
//                     name: "Set 6.1",
//                     file: "6-1.pdf",
//                   },
//                   {
//                     name: "Set 6.2",
//                     file: "6-2.pdf",
//                   },
//                   {
//                     name: "Matlab Tutorial",
//                     file: "matlab.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//                     key={idx}
//                     href={`/pdfs/uma101-numerical/${doc.file}`}
//
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                   >
//                     <DownloadCloud className="w-5 h-5" />
//                     {doc.name}
//                   </a>
//                 ))}
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Uma101NumericalAnalysis;

import React from "react";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  DownloadCloud,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Uma101NumericalAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -ml-4">
        {/* Added -ml-4 */} {/* Changed max-w-5xl to max-w-7xl */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <Link
            to="/teaching"
            className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Teaching Overview
          </Link>

          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Numerical Analysis
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            All documents on this page are PDFs and are readily available for
            viewing, just click on them!
          </p>

          <div className="space-y-6">
            {/* Course Instructors Section */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 text-yellow-600 mr-2" />
                Course Instructors
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-lg">
                  <span className="font-bold">Amrik Sen</span>{" "}
                  (amriksen@thapar.edu)
                </p>
              </div>
            </section>

            {/* Two Column Layout for Numerical Analysis Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left Column */}
              <div>
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Numerical Approximation, Stability of Algorithms
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Set 1.1",
                        file: "",
                      },
                      {
                        name: "Set 1.2",
                        file: "1-2.pdf",
                      },
                      {
                        name: "Set 1.3",
                        file: "1-3.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/uma101-numerical/${doc.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                      >
                        <DownloadCloud className="w-5 h-5" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </section>

                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Root Finding Algorithms
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Set 2.1",
                        file: "2-1.pdf",
                      },
                      {
                        name: "Set 2.1.1 (Compendium)",
                        file: "2-1-1.pdf",
                      },
                      {
                        name: "Set 2.1.2 (Compendium)",
                        file: "2-1-2.pdf",
                      },
                      {
                        name: "Set 2.2",
                        file: "2-2.pdf",
                      },
                      {
                        name: "Set 2.3",
                        file: "2-3.pdf",
                      },
                      {
                        name: "Set 2.4",
                        file: "2-4.pdf",
                      },
                      {
                        name: "Set 2.5",
                        file: "2-5.pdf",
                      },
                      {
                        name: "Set 2.5.1 - Problem Set",
                        file: "2-5-1.pdf",
                      },
                      {
                        name: "Set 2.5.2 - Solutions",
                        file: "2-5-2.pdf",
                      },
                      {
                        name: "Set 2.5.3 - Solutions",
                        file: "2-5-3.pdf",
                      },
                      {
                        name: "Set 2.6",
                        file: "2-6.pdf",
                      },
                      {
                        name: "Set 2.7",
                        file: "2-7.pdf",
                      },
                      {
                        name: "Set 2.8",
                        file: "",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/uma101-numerical/${doc.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                      >
                        <DownloadCloud className="w-5 h-5" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </section>

                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Numerical Solutions to Systems of Linear Equations
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Set 3.1.1 - Direct Numerical Methods (Series)",
                        file: "3-1-1.pdf",
                      },
                      {
                        name: "Set 3.1.2",
                        file: "3-1-2.pdf",
                      },
                      {
                        name: "Set 3.1.4",
                        file: "3-1-4.pdf",
                      },
                      {
                        name: "Set 3.1.5",
                        file: "3-1-5.pdf",
                      },
                      {
                        name: "Set 3.1.6",
                        file: "3-1-6.pdf",
                      },
                      {
                        name: "Set 3.2.1 - Matrix Iterative Schemes (Series)",
                        file: "3-1-1.pdf",
                      },
                      {
                        name: "Set 3.2.2",
                        file: "3-2-2.pdf",
                      },
                      {
                        name: "Set 3.2.3",
                        file: "3-2-3.pdf",
                      },
                      {
                        name: "Set 3.2.4",
                        file: "3-2-4.pdf",
                      },
                      {
                        name: "Set 3.2.5",
                        file: "3-2-5.pdf",
                      },
                      {
                        name: "Set 3.2.6",
                        file: "3-2-6.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/uma101-numerical/${doc.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                      >
                        <DownloadCloud className="w-5 h-5" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Numerical Interpolation of Functions
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Set 4.1",
                        file: "4-1.pdf",
                      },
                      {
                        name: "Set 4.2",
                        file: "4-2.pdf",
                      },
                      {
                        name: "Set 4.3",
                        file: "4-3.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/uma101-numerical/${doc.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                      >
                        <DownloadCloud className="w-5 h-5" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </section>

                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Numerical Integration of Functions
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Set 5.1",
                        file: "5-1.pdf",
                      },
                      {
                        name: "Set 5.2",
                        file: "5-2.pdf",
                      },
                      {
                        name: "Set 5.3",
                        file: "5-3.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/uma101-numerical/${doc.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                      >
                        <DownloadCloud className="w-5 h-5" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </section>

                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Numerical Solutions to ODEs
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Set 6.1",
                        file: "6-1.pdf",
                      },
                      {
                        name: "Set 6.2",
                        file: "6-2.pdf",
                      },
                      {
                        name: "Matlab Tutorial",
                        file: "matlab.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/uma101-numerical/${doc.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                      >
                        <DownloadCloud className="w-5 h-5" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uma101NumericalAnalysis;
