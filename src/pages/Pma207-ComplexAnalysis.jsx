// import {
//   ArrowLeft,
//   BookOpen,
//   GraduationCap,
//   Calendar,
//   Info,
//   DownloadCloud,
//   Users,
//   SquarePlay,
//   SquareArrowOutUpRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Pma207ComplexAnalysis = () => {
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
//             Complex Analysis
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
//                 <p className="text-lg">
//                   <span className="font-bold">Amrik Sen</span>{" "}
//                   (amriksen@thapar.edu)
//                 </p>
//               </div>
//             </section>
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
//                 Course Syllabus
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                 {/* <p className="text-gray-700">
//                   The syllabus outlines key physics topics, objectives, and
//                   assessment methods.
//                 </p> */}
//                 <a
//                   href="/pdfs/pma207-complex/syllabus.pdf"
//
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Download Syllabus (PDF)
//                 </a>
//                 <a
//
//                   href="/pdfs/pma207-complex/lecture_plan.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Download Lecture Plan (PDF)
//                 </a>
//                 <a
//
//                   href="/pdfs/pma207-complex/eval.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Download Evaluation Plan (PDF)
//                 </a>
//                 <a
//                   href="https://www.youtube.com/watch?v=cOzUdOE9Tzk"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <SquareArrowOutUpRight className="w-5 h-5" />
//                   Introduction to Complex Numbers
//                 </a>
//               </div>
//             </section>

//             {/* Learning Materials Section */}
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Lecture Notes
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
//                 {[
//                   {
//                     name: "Set 1 - Geometry of Complex Plane",
//                     file: "set-1.pdf",
//                   },
//                   {
//                     name: "Set 2 - Basics Calculus on Complex Plane",
//                     file: "set-2.pdf",
//                   },
//                   {
//                     name: "Set 3.1 - Cauchy Reimann Eqns. Analyticity",
//                     file: "set-3-1.pdf",
//                   },
//                   {
//                     name: "Set 3.2 - More e.g. on CR Eqns.",
//                     file: "set-3-2.pdf",
//                   },
//                   {
//                     name: "Set 3.3 - Flow Around a Cylinder",
//                     file: "set-3-3.pdf",
//                   },
//                   {
//                     name: "Set 4.1 - Multi-Valuedness & Branch Cuts",
//                     file: "set-4-1.pdf",
//                   },
//                   {
//                     name: "Set 4.2 - Analyticity of log z on Cut Plan",
//                     file: "set-4-2.pdf",
//                   },
//                   {
//                     name: "Set 4.3 - Riemann Surface & Univalence",
//                     file: "set-4-3.pdf",
//                   },
//                   {
//                     name: "Set 5.1 - Introduction to Complex Integration",
//                     file: "set-5-1.pdf",
//                   },
//                   {
//                     name: "Set 5.2 - Cauchy-Goursat Theorem & Proof",
//                     file: "set-5-2.pdf",
//                   },
//                   {
//                     name: "Set 5.3 - Deformation of Contour",
//                     file: "set-5-3.pdf",
//                   },
//                   {
//                     name: "Set 5.4 - Maximum Principle",
//                     file: "set-5-4.pdf",
//                   },
//                   {
//                     name: "Set 5.5 - Cauchy Integral Formula | Liouville Theorem & DBAR Derivative",
//                     file: "set-5-5.pdf",
//                   },
//                   {
//                     name: "Set 6.1 - Introduction to Laurent Series",
//                     file: "set-6-1.pdf",
//                   },
//                   {
//                     name: "Set 6.2 - Laurent Series Theorem & Proof",
//                     file: "set-6-2.pdf",
//                   },
//                   {
//                     name: "Set 6.3 - Singularities in C",
//                     file: "set-6-3.pdf",
//                   },
//                   {
//                     name: "Set 6.4 - Analytic Continuation",
//                     file: "set-6-4.pdf",
//                   },
//                   {
//                     name: "Set 7.1 - Introduction to Residue Calculus",
//                     file: "set-7-1.pdf",
//                   },
//                   {
//                     name: "Set 7.2 - Principal Value Integrals & Their Applications",
//                     file: "set-7-2.pdf",
//                   },
//                   {
//                     name: "Set 7.3 - Application of Residue Calculus",
//                     file: "set-7-3.pdf",
//                   },
//                   {
//                     name: "Set 7.4 - Roche's Theorem & The Argument Principle",
//                     file: "set-7-4.pdf",
//                   },
//                   {
//                     name: "Set 8.1 - Introduction to Conformal Maps",
//                     file: "set-8-1.pdf",
//                   },

//                   {
//                     name: "Homework 1",
//                     file: "hw-1.pdf",
//                   },

//                   {
//                     name: "Homework 2",
//                     file: "hw-2.pdf",
//                   },

//                   {
//                     name: "Homework 3",
//                     file: "hw-3.pdf",
//                   },

//                   {
//                     name: "Homework 4",
//                     file: "hw-4.pdf",
//                   },

//                   {
//                     name: "Homework 5",
//                     file: "hw-5.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//
//                     key={idx}
//                     href={`/pdfs/pma207-complex/${doc.file}`}
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

//             {/* Online Assessments */}
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Online Assessments
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
//                 {[
//                   {
//                     name: "Online Assessment 1",
//                     file: "oa-1.pdf",
//                   },
//                   {
//                     name: "Online Assessment 2",
//                     file: "oa-2.pdf",
//                   },
//                   {
//                     name: "Online Assessment 3",
//                     file: "oa-3.pdf",
//                   },
//                   {
//                     name: "Online Assessment 4",
//                     file: "oa-4.pdf",
//                   },
//                   {
//                     name: "Online Assessment 5",
//                     file: "oa-5.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//
//                     key={idx}
//                     href={`/pdfs/pma207-complex/${doc.file}`}
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

// export default Pma207ComplexAnalysis;

import React from "react";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  DownloadCloud,
  Users,
  SquareArrowOutUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const Pma207ComplexAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -ml-4">
        {/* Added -ml-4 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <Link
            to="/teaching"
            className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Teaching Overview
          </Link>

          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Complex Analysis
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

            {/* Course Syllabus Section */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
                Course Syllabus
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <a
                  href="/pdfs/pma207-complex/syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Syllabus (PDF)
                </a>
                <a
                  href="/pdfs/pma207-complex/lecture_plan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Lecture Plan (PDF)
                </a>
                <a
                  href="/pdfs/pma207-complex/eval.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Evaluation Plan (PDF)
                </a>
                <a
                  href="https://www.youtube.com/watch?v=cOzUdOE9Tzk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <SquareArrowOutUpRight className="w-5 h-5" />
                  Introduction to Complex Numbers
                </a>
              </div>
            </section>

            {/* Two Column Layout for Lecture Notes and Other Sections */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Left Column - Lecture Notes */}
              <section className="flex-shrink-0 w-full lg:w-auto lg:min-w-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                  Lecture Notes
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                  {[
                    {
                      name: "Set 1 - Geometry of Complex Plane",
                      file: "set-1.pdf",
                    },
                    {
                      name: "Set 2 - Basics Calculus on Complex Plane",
                      file: "set-2.pdf",
                    },
                    {
                      name: "Set 3.1 - Cauchy Reimann Eqns. Analyticity",
                      file: "set-3-1.pdf",
                    },
                    {
                      name: "Set 3.2 - More e.g. on CR Eqns.",
                      file: "set-3-2.pdf",
                    },
                    {
                      name: "Set 3.3 - Flow Around a Cylinder",
                      file: "set-3-3.pdf",
                    },
                    {
                      name: "Set 4.1 - Multi-Valuedness & Branch Cuts",
                      file: "set-4-1.pdf",
                    },
                    {
                      name: "Set 4.2 - Analyticity of log z on Cut Plan",
                      file: "set-4-2.pdf",
                    },
                    {
                      name: "Set 4.3 - Riemann Surface & Univalence",
                      file: "set-4-3.pdf",
                    },
                    {
                      name: "Set 5.1 - Introduction to Complex Integration",
                      file: "set-5-1.pdf",
                    },
                    {
                      name: "Set 5.2 - Cauchy-Goursat Theorem & Proof",
                      file: "set-5-2.pdf",
                    },
                    {
                      name: "Set 5.3 - Deformation of Contour",
                      file: "set-5-3.pdf",
                    },
                    {
                      name: "Set 5.4 - Maximum Principle",
                      file: "set-5-4.pdf",
                    },
                    {
                      name: "Set 5.5 - Cauchy Integral Formula | Liouville Theorem & DBAR Derivative",
                      file: "set-5-5.pdf",
                    },
                    {
                      name: "Set 6.1 - Introduction to Laurent Series",
                      file: "set-6-1.pdf",
                    },
                    {
                      name: "Set 6.2 - Laurent Series Theorem & Proof",
                      file: "set-6-2.pdf",
                    },
                    {
                      name: "Set 6.3 - Singularities in C",
                      file: "set-6-3.pdf",
                    },
                    {
                      name: "Set 6.4 - Analytic Continuation",
                      file: "set-6-4.pdf",
                    },
                    {
                      name: "Set 7.1 - Introduction to Residue Calculus",
                      file: "set-7-1.pdf",
                    },
                    {
                      name: "Set 7.2 - Principal Value Integrals & Their Applications",
                      file: "set-7-2.pdf",
                    },
                    {
                      name: "Set 7.3 - Application of Residue Calculus",
                      file: "set-7-3.pdf",
                    },
                    {
                      name: "Set 7.4 - Roche's Theorem & The Argument Principle",
                      file: "set-7-4.pdf",
                    },
                    {
                      name: "Set 8.1 - Introduction to Conformal Maps",
                      file: "set-8-1.pdf",
                    },
                    {
                      name: "Homework 1",
                      file: "hw-1.pdf",
                    },
                    {
                      name: "Homework 2",
                      file: "hw-2.pdf",
                    },
                    {
                      name: "Homework 3",
                      file: "hw-3.pdf",
                    },
                    {
                      name: "Homework 4",
                      file: "hw-4.pdf",
                    },
                    {
                      name: "Homework 5",
                      file: "hw-5.pdf",
                    },
                  ].map((doc, idx) => (
                    <a
                      key={idx}
                      href={`/pdfs/pma207-complex/${doc.file}`}
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

              {/* Right Column - Other Sections */}
              <div className="flex-1 space-y-6 min-w-0">
                {/* Online Assessments */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Online Assessments
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Online Assessment 1",
                        file: "oa-1.pdf",
                      },
                      {
                        name: "Online Assessment 2",
                        file: "oa-2.pdf",
                      },
                      {
                        name: "Online Assessment 3",
                        file: "oa-3.pdf",
                      },
                      {
                        name: "Online Assessment 4",
                        file: "oa-4.pdf",
                      },
                      {
                        name: "Online Assessment 5",
                        file: "oa-5.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/pma207-complex/${doc.file}`}
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

export default Pma207ComplexAnalysis;
