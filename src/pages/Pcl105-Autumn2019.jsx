// import React from "react";
// import {
//   ArrowLeft,
//   BookOpen,
//   GraduationCap,
//   DownloadCloud,
//   Users,
//   SquarePlay,
//   SquareArrowOutUpRight,
//   FileSpreadsheet,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Pcl105Autumn2019 = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 font-serif">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {" "}
//         {/* Changed max-w-5xl to max-w-7xl */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <Link
//             to="/teaching"
//             className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors mb-6"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to Teaching Overview
//           </Link>

//           <h2 className="text-3xl font-light text-gray-900 mb-4">
//             Statistical Methods and Algorithms (Autumn, 2019)
//           </h2>
//           <p className="text-lg text-gray-600 mb-6">
//             All documents on this page are PDFs and are readily available for
//              viewing, just click on them!
//           </p>

//           <div className="space-y-6">
//             {/* Course Instructors Section */}
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

//             {/* Course Syllabus Section */}
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
//                 Course Syllabus
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                 <a
//                   href="/pdfs/pcl105-autumn2019/syllabus.pdf"
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
//                   href="/pdfs/pcl105-autumn2019/lecture_plan.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Download Lecture Plan (PDF)
//                 </a>
//                 <a
//
//                   href="/pdfs/pcl105-autumn2019/lab_exp.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Download Lab Experiments (PDF)
//                 </a>
//                 <a
//
//                   href="/pdfs/pcl105-autumn2019/template.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Download Project Proposal Template (PDF)
//                 </a>{" "}
//                 <a
//
//                   href="/pdfs/pcl105-autumn2019/sessional_exam.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Download Sessional Exam (PDF)
//                 </a>
//                 <a
//
//                   href="/pdfs/pcl105-autumn2019/links.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Links To Pre-recorded Lectures (PDF)
//                 </a>
//               </div>
//             </section>

//             {/* Two Column Layout for Lecture Notes and Other Sections */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
//               {/* Left Column - Lecture Notes */}
//               <div>
//                 <section>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                     <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                     Lecture Notes
//                   </h3>
//                   {/* Removed grid layout from here, now single column */}
//                   <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
//                     {[
//                       {
//                         name: "Set 1 - Named Distributions",
//                         file: "set-1.pdf",
//                       },
//                       {
//                         name: "Set 1.0.1 - Basics of Probability",
//                         file: "set-1-0-1.pdf",
//                       },
//                       {
//                         name: "Set 1.0.2 - E.g. of Bayes Theorem",
//                         file: "set-1-0-2.pdf",
//                       },
//                       {
//                         name: "Set 1.1 - Random Walk on a Lonely Island",
//                         file: "set-1-1.pdf",
//                       },
//                       {
//                         name: "Set 1.2 - Recurrence Relations & Solutions",
//                         file: "set-1-2.pdf",
//                       },
//                       {
//                         name: "Set 1.3 - Reference Book on Basic Probability",
//                         file: "set-1-3.pdf",
//                       },
//                       {
//                         name: "Set 1.4 - Summary of Discrete Random Variables",
//                         file: "set-1-4.pdf",
//                       },
//                       {
//                         name: "Set 1.5 - Solutions to Numerical Problems on Discrete Probability Distribution",
//                         file: "set-1.pdf",
//                       },
//                       {
//                         name: "Set 2 - Basics of Probability",
//                         file: "set-2.pdf",
//                       },
//                       {
//                         name: "Set 2.1 - Summary of Continuous Random Variables",
//                         file: "set-2-1.pdf",
//                       },
//                       {
//                         name: "Set 2.2 - Problems on Composite Probability Distributions",
//                         file: "set-2-2.pdf",
//                       },
//                       {
//                         name: "Set 2.3 - Discrete vs Continuous",
//                         file: "set-2-3.pdf",
//                       },
//                       {
//                         name: "Set 3 - Discrete Markov Chains",
//                         file: "set-3.pdf",
//                       },
//                       {
//                         name: "Set 3.1 - Introduction to DMTC",
//                         file: "set-3-1.pdf",
//                       },
//                       {
//                         name: "Set 3.2 - Advanced Concepts In DMTC",
//                         file: "set-3-2.pdf",
//                       },
//                       {
//                         name: "Set 3.3 - Advanced Concepts In DMTC (Numerical Examples)",
//                         file: "set-3-3.pdf",
//                       },
//                       {
//                         name: "Set 4 - Motivating e.g. for CTMC (Server-Queue Problem)",
//                         file: "set-4.pdf",
//                       },
//                       {
//                         name: "Set 5 - Notes on CTMC (Concepts & Theory)",
//                         file: "set-5.pdf",
//                       },
//                       {
//                         name: "Set 6 - Applications of Kolmogorov Balance Eqns.",
//                         file: "set-6.pdf",
//                       },
//                       {
//                         name: "Set 7 - Sampling Distributions: For Mean & Variance",
//                         file: "set-7.pdf",
//                       },
//                       {
//                         name: "Set 7.1 - Slides on Sampling Distributions",
//                         file: "set-7-1.pdf",
//                       },
//                       {
//                         name: "Set 8 - Hypothesis Tests & ANOVA (1-Way)",
//                         file: "set-8.pdf",
//                       },
//                       {
//                         name: "Set 8.1 - Introduction to Hypothesis Tests",
//                         file: "set-8-1.pdf",
//                       },
//                       {
//                         name: "Set 8.2 - Two Sample t-Test for Means",
//                         file: "set-8-2.pdf",
//                       },
//                       { name: "Set 8.3 - 1-Way ANOVA", file: "set-8-3.pdf" },
//                       {
//                         name: "Set 9 - Time Series Analysis",
//                         file: "set-9.pdf",
//                       },
//                       {
//                         name: "Set 9.1 - Time Series: Introductory Concepts",
//                         file: "set-9-1.pdf",
//                       },
//                       {
//                         name: "Set 9.2 - Time Series: MA(1)",
//                         file: "set-9-2.pdf",
//                       },
//                       {
//                         name: "Set 9.3 - Time Series: AR(1)",
//                         file: "set-9-3.pdf",
//                       },
//                       {
//                         name: "Set 10 - Principal Component Analysis",
//                         file: "set-10.pdf",
//                       },
//                       {
//                         name: "Set 10.1 - Principal Component Analysis",
//                         file: "set-10-1.pdf",
//                       },
//                       {
//                         name: "Set 11 - Least Squares Regression",
//                         file: "set-11.pdf",
//                       },
//                     ].map((doc, idx) => (
//                       <a
//                         key={idx}
//
//                         href={`/pdfs/pcl105-autumn2019/${doc.file}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                       >
//                         <DownloadCloud className="w-5 h-5" />
//                         {doc.name}
//                       </a>
//                     ))}
//                   </div>
//                 </section>
//               </div>

//               {/* Right Column - CSV Data, Time Series Analysis, PCA */}
//               <div className="space-y-6">
//                 <section>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                     <FileSpreadsheet className="w-5 h-5 text-green-600 mr-2" />
//                     CSV Data
//                   </h3>
//                   <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
//                     {[
//                       {
//                         name: "Brooklyn COVID Data",
//                         file: "Data COVID Brooklyn.csv",
//                       },
//                       {
//                         name: "Coke-1",
//                         file: "Coke-1.csv",
//                       },
//                       {
//                         name: "Jobs",
//                         file: "JOBS.csv",
//                       },
//                       {
//                         name: "Energy Consumption MP 1996-2018",
//                         file: "EnergyConsumptionMP_1996-2018.csv",
//                       },
//                     ].map((doc, idx) => (
//                       <a
//
//                         key={idx}
//                         href={`/pdfs/pcl105-autumn2019/${doc.file}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                       >
//                         <DownloadCloud className="w-5 h-5" />
//                         {doc.name}
//                       </a>
//                     ))}
//                   </div>
//                 </section>

//                 <section>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                     <SquarePlay className="w-5 h-5 text-yellow-600 mr-2" />
//                     Time Series Analysis
//                   </h3>
//                   <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
//                     {[
//                       {
//                         name: "Lecture 20 (DMC 013, PCL 108)",
//                         link: "https://www.youtube.com/watch?v=GEtRVYBHnmQ&feature=youtu.be",
//                       },
//                       {
//                         name: "Lecture 21 (DMC 013, PCL 108)",
//                         link: "https://www.youtube.com/watch?v=MfguUPMqeQM",
//                       },
//                       {
//                         name: "Lecture 22 (DMC 013, PCL 108)",
//                         link: "https://www.youtube.com/watch?v=H1UEFw9tTPA",
//                       },
//                     ].map((doc, idx) => (
//                       <a
//                         key={idx}
//                         href={doc.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                       >
//                         <SquareArrowOutUpRight className="w-5 h-5" />
//                         {doc.name}
//                       </a>
//                     ))}
//                   </div>
//                 </section>

//                 <section>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                     <SquarePlay className="w-5 h-5 text-yellow-600 mr-2" />
//                     Principal Component Analysis
//                   </h3>
//                   <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
//                     {[
//                       {
//                         name: "Lecture 23 (PCL 108)",
//                         link: "https://www.youtube.com/watch?v=QUOh5689LbA",
//                       },
//                       {
//                         name: "Lecture 24 (PCL 108)",
//                         link: "https://www.youtube.com/watch?v=U_XNz98zTzc",
//                       },
//                     ].map((doc, idx) => (
//                       <a
//                         key={idx}
//                         href={doc.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-blue-500 hover:underline text-lg"
//                       >
//                         <SquareArrowOutUpRight className="w-5 h-5" />
//                         {doc.name}
//                       </a>
//                     ))}
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pcl105Autumn2019;

import React from "react";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  DownloadCloud,
  Users,
  SquarePlay,
  SquareArrowOutUpRight,
  FileSpreadsheet,
} from "lucide-react";
import { Link } from "react-router-dom";

const Pcl105Autumn2019 = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8 -ml-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <Link
            to="/teaching"
            className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Teaching Overview
          </Link>

          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Statistical Methods and Algorithms (Autumn, 2019)
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
                  href="/pdfs/pcl105-autumn2019/syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Syllabus (PDF)
                </a>
                <a
                  href="/pdfs/pcl105-autumn2019/lecture_plan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Lecture Plan (PDF)
                </a>
                <a
                  href="/pdfs/pcl105-autumn2019/lab_exp.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Lab Experiments (PDF)
                </a>
                <a
                  href="/pdfs/pcl105-autumn2019/template.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Project Proposal Template (PDF)
                </a>{" "}
                <a
                  href="/pdfs/pcl105-autumn2019/sessional_exam.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Sessional Exam (PDF)
                </a>
                <a
                  href="/pdfs/pcl105-autumn2019/links.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Links To Pre-recorded Lectures (PDF)
                </a>
              </div>
            </section>

            {/* Two Column Layout for Lecture Notes and Other Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left Column - Lecture Notes */}
              <div>
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Lecture Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Set 1 - Named Distributions",
                        file: "set-1.pdf",
                      },
                      {
                        name: "Set 1.0.1 - Basics of Probability",
                        file: "set-1-0-1.pdf",
                      },
                      {
                        name: "Set 1.0.2 - E.g. of Bayes Theorem",
                        file: "set-1-0-2.pdf",
                      },
                      {
                        name: "Set 1.1 - Random Walk on a Lonely Island",
                        file: "set-1-1.pdf",
                      },
                      {
                        name: "Set 1.2 - Recurrence Relations & Solutions",
                        file: "set-1-2.pdf",
                      },
                      {
                        name: "Set 1.3 - Reference Book on Basic Probability",
                        file: "set-1-3.pdf",
                      },
                      {
                        name: "Set 1.4 - Summary of Discrete Random Variables",
                        file: "set-1-4.pdf",
                      },
                      {
                        name: "Set 1.5 - Solutions to Numerical Problems on Discrete Probability Distribution",
                        file: "set-1.pdf",
                      },
                      {
                        name: "Set 2 - Basics of Probability",
                        file: "set-2.pdf",
                      },
                      {
                        name: "Set 2.1 - Summary of Continuous Random Variables",
                        file: "set-2-1.pdf",
                      },
                      {
                        name: "Set 2.2 - Problems on Composite Probability Distributions",
                        file: "set-2-2.pdf",
                      },
                      {
                        name: "Set 2.3 - Discrete vs Continuous",
                        file: "set-2-3.pdf",
                      },
                      {
                        name: "Set 3 - Discrete Markov Chains",
                        file: "set-3.pdf",
                      },
                      {
                        name: "Set 3.1 - Introduction to DMTC",
                        file: "set-3-1.pdf",
                      },
                      {
                        name: "Set 3.2 - Advanced Concepts In DMTC",
                        file: "set-3-2.pdf",
                      },
                      {
                        name: "Set 3.3 - Advanced Concepts In DMTC (Numerical Examples)",
                        file: "set-3-3.pdf",
                      },
                      {
                        name: "Set 4 - Motivating e.g. for CTMC (Server-Queue Problem)",
                        file: "set-4.pdf",
                      },
                      {
                        name: "Set 5 - Notes on CTMC (Concepts & Theory)",
                        file: "set-5.pdf",
                      },
                      {
                        name: "Set 6 - Applications of Kolmogorov Balance Eqns.",
                        file: "set-6.pdf",
                      },
                      {
                        name: "Set 7 - Sampling Distributions: For Mean & Variance",
                        file: "set-7.pdf",
                      },
                      {
                        name: "Set 7.1 - Slides on Sampling Distributions",
                        file: "set-7-1.pdf",
                      },
                      {
                        name: "Set 8 - Hypothesis Tests & ANOVA (1-Way)",
                        file: "set-8.pdf",
                      },
                      {
                        name: "Set 8.1 - Introduction to Hypothesis Tests",
                        file: "set-8-1.pdf",
                      },
                      {
                        name: "Set 8.2 - Two Sample t-Test for Means",
                        file: "set-8-2.pdf",
                      },
                      { name: "Set 8.3 - 1-Way ANOVA", file: "set-8-3.pdf" },
                      {
                        name: "Set 9 - Time Series Analysis",
                        file: "set-9.pdf",
                      },
                      {
                        name: "Set 9.1 - Time Series: Introductory Concepts",
                        file: "set-9-1.pdf",
                      },
                      {
                        name: "Set 9.2 - Time Series: MA(1)",
                        file: "set-9-2.pdf",
                      },
                      {
                        name: "Set 9.3 - Time Series: AR(1)",
                        file: "set-9-3.pdf",
                      },
                      {
                        name: "Set 10 - Principal Component Analysis",
                        file: "set-10.pdf",
                      },
                      {
                        name: "Set 10.1 - Principal Component Analysis",
                        file: "set-10-1.pdf",
                      },
                      {
                        name: "Set 11 - Least Squares Regression",
                        file: "set-11.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/pcl105-autumn2019/${doc.file}`}
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

              {/* Right Column - CSV Data, Time Series Analysis, PCA */}
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FileSpreadsheet className="w-5 h-5 text-green-600 mr-2" />
                    CSV Data
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Brooklyn COVID Data",
                        file: "Data COVID Brooklyn.csv",
                      },
                      {
                        name: "Coke-1",
                        file: "Coke-1.csv",
                      },
                      {
                        name: "Jobs",
                        file: "JOBS.csv",
                      },
                      {
                        name: "Energy Consumption MP 1996-2018",
                        file: "EnergyConsumptionMP_1996-2018.csv",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/pcl105-autumn2019/${doc.file}`}
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

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <SquarePlay className="w-5 h-5 text-yellow-600 mr-2" />
                    Time Series Analysis
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Lecture 20 (DMC 013, PCL 108)",
                        link: "https://www.youtube.com/watch?v=GEtRVYBHnmQ&feature=youtu.be",
                      },
                      {
                        name: "Lecture 21 (DMC 013, PCL 108)",
                        link: "https://www.youtube.com/watch?v=MfguUPMqeQM",
                      },
                      {
                        name: "Lecture 22 (DMC 013, PCL 108)",
                        link: "https://www.youtube.com/watch?v=H1UEFw9tTPA",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                      >
                        <SquareArrowOutUpRight className="w-5 h-5" />
                        {doc.name}
                      </a>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <SquarePlay className="w-5 h-5 text-yellow-600 mr-2" />
                    Principal Component Analysis
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Lecture 23 (PCL 108)",
                        link: "https://www.youtube.com/watch?v=QUOh5689LbA",
                      },
                      {
                        name: "Lecture 24 (PCL 108)",
                        link: "https://www.youtube.com/watch?v=U_XNz98zTzc",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-500 hover:underline text-lg"
                      >
                        <SquareArrowOutUpRight className="w-5 h-5" />
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

export default Pcl105Autumn2019;
