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

// const Pcl105Autumn2018 = () => {
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
//             Statistical Methods and Algorithms (Autumn, 2018)
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
//                 <p className="text-lg">
//                   <span className="font-bold">Ash Narayan Sah</span>{" "}
//                   (Ash.narayan@thapar.edu)
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
//                   href="/pdfs/pcl105-autumn2018/syllabus.pdf"
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
//                   href="/pdfs/pcl105-autumn2018/lecture_plan.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <DownloadCloud className="w-5 h-5" />
//                   Download Lecture Plan (PDF)
//                 </a>
//               </div>
//             </section>

//             {/* Learning Materials Section */}
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
//                 Lecture Notes
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 grid grid-cols-1 gap-3">
//                 {[
//                   {
//                     name: "Lecture 1 - Named Distributions",
//                     file: "lecture_1.pdf",
//                   },
//                   {
//                     name: "Lecture 2 - Basics of Probability",
//                     file: "lecture_2.pdf",
//                   },
//                   {
//                     name: "Lecture 3 - Discrete Markov Chains",
//                     file: "lecture_3.pdf",
//                   },
//                   {
//                     name: "Lecture 4 - Motivating e.g. for CTMC",
//                     file: "lecture_4.pdf",
//                   },
//                   { name: "Lecture 5 - Notes on CTMC", file: "lecture_5.pdf" },
//                   {
//                     name: "Lecture 6 - Applications of Kolomogorov Balance Eqns.",
//                     file: "lecture_6.pdf",
//                   },
//                   {
//                     name: "Lecture 7 - Sampling Distributions For Mean Variance",
//                     file: "lecture_7.pdf",
//                   },
//                   {
//                     name: "Lecture 8 - Hypothesis Tests & ANOVA (1-Way)",
//                     file: "lecture_8.pdf",
//                   },
//                   {
//                     name: "Lecture 9 - Time Series Analysis",
//                     file: "lecture_9.pdf",
//                   },
//                   {
//                     name: "Lecture 10 - Principal Component Analysis",
//                     file: "lecture_10.pdf",
//                   },
//                   {
//                     name: "Dr. A.N Sah's Notes - Introduction To Hypothesis Testing",
//                     file: "lecture_11.pdf",
//                   },
//                   { name: "Homework 1", file: "hw_1.pdf" },
//                   { name: "Homework 1 - Solutions", file: "hw_1_soln.pdf" },
//                   { name: "Homework 2 - 1-Way ANOVA", file: "hw_2.pdf" },
//                   { name: "Homework 3 - 2-Way ANOVA", file: "hw_3.pdf" },
//                   { name: "Midsemester Test", file: "midsem.pdf" },
//                   {
//                     name: "Midsemester Test - Solutions I",
//                     file: "midsem_1_soln.pdf",
//                   },
//                   {
//                     name: "Midsemester Test - Solutions II",
//                     file: "midsem_2_soln.pdf",
//                   },
//                   {
//                     name: "Discrete Markov Chain - Sample Problems ",
//                     file: "markov_chain.pdf",
//                   },
//                   {
//                     name: "Dr. A.N Sah's Question Bank",
//                     file: "ques_bank.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//                     key={idx}
//                     href={`/pdfs/pcl105-autumn2018/${doc.file}`}
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

// export default Pcl105Autumn2018;

import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Calendar,
  Info,
  DownloadCloud,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Pcl105Autumn2018 = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 py-8 -ml-4">
        {" "}
        {/* Removed mx-auto */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <Link
            to="/teaching"
            className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Teaching Overview
          </Link>

          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Statistical Methods and Algorithms (Autumn, 2018)
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            All documents on this page are PDFs and are readily available for
            viewing, just click on them!
          </p>

          <div className="space-y-6">
            {/* Syllabus Section */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 text-yellow-600 mr-2" />
                Course Instructors
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                {/* <p className="text-gray-700">
                  The syllabus outlines key physics topics, objectives, and
                  assessment methods.
                </p> */}
                <p className="text-lg">
                  <span className="font-bold">Amrik Sen</span>{" "}
                  (amriksen@thapar.edu)
                </p>
                <p className="text-lg">
                  <span className="font-bold">Ash Narayan Sah</span>{" "}
                  (Ash.narayan@thapar.edu)
                </p>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
                Course Syllabus
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                {/* <p className="text-gray-700">
                  The syllabus outlines key physics topics, objectives, and
                  assessment methods.
                </p> */}
                <a
                  href="/pdfs/pcl105-autumn2018/syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Syllabus (PDF)
                </a>
                <a
                  href="/pdfs/pcl105-autumn2018/lecture_plan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Lecture Plan (PDF)
                </a>
              </div>
            </section>

            {/* Learning Materials Section */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                Lecture Notes
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 grid grid-cols-1 gap-3">
                {[
                  {
                    name: "Lecture 1 - Named Distributions",
                    file: "lecture_1.pdf",
                  },
                  {
                    name: "Lecture 2 - Basics of Probability",
                    file: "lecture_2.pdf",
                  },
                  {
                    name: "Lecture 3 - Discrete Markov Chains",
                    file: "lecture_3.pdf",
                  },
                  {
                    name: "Lecture 4 - Motivating e.g. for CTMC",
                    file: "lecture_4.pdf",
                  },
                  { name: "Lecture 5 - Notes on CTMC", file: "lecture_5.pdf" },
                  {
                    name: "Lecture 6 - Applications of Kolomogorov Balance Eqns.",
                    file: "lecture_6.pdf",
                  },
                  {
                    name: "Lecture 7 - Sampling Distributions For Mean Variance",
                    file: "lecture_7.pdf",
                  },
                  {
                    name: "Lecture 8 - Hypothesis Tests & ANOVA (1-Way)",
                    file: "lecture_8.pdf",
                  },
                  {
                    name: "Lecture 9 - Time Series Analysis",
                    file: "lecture_9.pdf",
                  },
                  {
                    name: "Lecture 10 - Principal Component Analysis",
                    file: "lecture_10.pdf",
                  },
                  {
                    name: "Dr. A.N Sah's Notes - Introduction To Hypothesis Testing",
                    file: "lecture_11.pdf",
                  },
                  { name: "Homework 1", file: "hw_1.pdf" },
                  { name: "Homework 1 - Solutions", file: "hw_1_soln.pdf" },
                  { name: "Homework 2 - 1-Way ANOVA", file: "hw_2.pdf" },
                  { name: "Homework 3 - 2-Way ANOVA", file: "hw_3.pdf" },
                  { name: "Midsemester Test", file: "midsem.pdf" },
                  {
                    name: "Midsemester Test - Solutions I",
                    file: "midsem_1_soln.pdf",
                  },
                  {
                    name: "Midsemester Test - Solutions II",
                    file: "midsem_2_soln.pdf",
                  },
                  {
                    name: "Discrete Markov Chain - Sample Problems ",
                    file: "markov_chain.pdf",
                  },
                  {
                    name: "Dr. A.N Sah's Question Bank",
                    file: "ques_bank.pdf",
                  },
                ].map((doc, idx) => (
                  <a
                    key={idx}
                    href={`/pdfs/pcl105-autumn2018/${doc.file}`}
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
  );
};

export default Pcl105Autumn2018;
