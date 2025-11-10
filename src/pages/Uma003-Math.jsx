// import {
//   ArrowLeft,
//   BookOpen,
//   GraduationCap,
//   Calendar,
//   Info,
//   DownloadCloud,
//   Send,
//   SendHorizontal,
//   SquareArrowOutUpRight,
//   Users,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Uma003Math = () => {
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
//             Calculus for Engineers
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
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
//                 Official Page
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                 {/* <p className="text-gray-700">
//                   The syllabus outlines key physics topics, objectives, and
//                   assessment methods.
//                 </p> */}
//                 <a
//                   href="https://sites.google.com/a/thapar.edu/uma003/3-questions-for-practice"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                 >
//                   <SquareArrowOutUpRight className="w-5 h-5" />
//                   Go To UMA003's Official Page
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
//                     name: "Lecture 1 - Up To Optimization",
//                     file: "lecture_1.pdf",
//                   },
//                   {
//                     name: "Lecture 2 - Up To Polar Coordinates",
//                     file: "lecture_2.pdf",
//                   },
//                   {
//                     name: "Lecture 3 - Sequences, Partial Sums, & Introduction To Finite Series",
//                     file: "lecture_3.pdf",
//                   },
//                   {
//                     name: "Lecture 4 - Integral Test For Convergence of Series",
//                     file: "lecture_4.pdf",
//                   },
//                   {
//                     name: "Lecture 5 - Harmonic Series & Comparison Tests | Application of Divergent Series",
//                     file: "lecture_5.pdf",
//                   },
//                   {
//                     name: "Lecture 6 - Alternating Series Test (Proof) | Absolute & Conditional Convergence",
//                     file: "lecture_6.pdf",
//                   },
//                   {
//                     name: "Lecture 7 - Excerpts of Power (Taylor) Series | Interval of Convergence & Applications From Textbook",
//                     file: "lecture_7.pdf",
//                   },
//                   {
//                     name: "Lecture 8 - Multi-variate Calculus & Directional Derivatives",
//                     file: "lecture_8.pdf",
//                   },
//                   {
//                     name: "Lecture 9 - Double & Triple Integrals",
//                     file: "lecture_9.pdf",
//                   },
//                   {
//                     name: "Lecture 10 - Review on Series Convergence | Q & A",
//                     file: "lecture_10.pdf",
//                   },
//                 ].map((doc, idx) => (
//                   <a
//
//                     key={idx}
//                     href={`/pdfs/uma003-math/${doc.file}`}
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

//             {/* Schedule Section */}
//             {/* <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <Calendar className="w-5 h-5 text-yellow-600 mr-2" />
//                 Schedule & Assessments
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                 <p className="text-gray-700">
//                   Lectures: Mon/Wed/Fri - 10:00 AM
//                   <br />
//                   Quiz 1: 15 Sept | Midterm: 15 Oct | Final Exam: 10 Dec
//                 </p>
//               </div>
//             </section> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Uma003Math;

import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Calendar,
  Info,
  DownloadCloud,
  Send,
  SendHorizontal,
  SquareArrowOutUpRight,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Uma003Math = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 py-8 -ml-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <Link
            to="/teaching"
            className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Teaching Overview
          </Link>

          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Calculus for Engineers
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
              </div>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
                Official Page
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                {/* <p className="text-gray-700">
                  The syllabus outlines key physics topics, objectives, and
                  assessment methods.
                </p> */}
                <a
                  href="https://sites.google.com/a/thapar.edu/uma003/3-questions-for-practice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <SquareArrowOutUpRight className="w-5 h-5" />
                  Go To UMA003's Official Page
                </a>
              </div>
            </section>

            {/* Learning Materials Section */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                Lecture Notes
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                {[
                  {
                    name: "Lecture 1 - Up To Optimization",
                    file: "lecture_1.pdf",
                  },
                  {
                    name: "Lecture 2 - Up To Polar Coordinates",
                    file: "lecture_2.pdf",
                  },
                  {
                    name: "Lecture 3 - Sequences, Partial Sums, & Introduction To Finite Series",
                    file: "lecture_3.pdf",
                  },
                  {
                    name: "Lecture 4 - Integral Test For Convergence of Series",
                    file: "lecture_4.pdf",
                  },
                  {
                    name: "Lecture 5 - Harmonic Series & Comparison Tests | Application of Divergent Series",
                    file: "lecture_5.pdf",
                  },
                  {
                    name: "Lecture 6 - Alternating Series Test (Proof) | Absolute & Conditional Convergence",
                    file: "lecture_6.pdf",
                  },
                  {
                    name: "Lecture 7 - Excerpts of Power (Taylor) Series | Interval of Convergence & Applications From Textbook",
                    file: "lecture_7.pdf",
                  },
                  {
                    name: "Lecture 8 - Multi-variate Calculus & Directional Derivatives",
                    file: "lecture_8.pdf",
                  },
                  {
                    name: "Lecture 9 - Double & Triple Integrals",
                    file: "lecture_9.pdf",
                  },
                  {
                    name: "Lecture 10 - Review on Series Convergence | Q & A",
                    file: "lecture_10.pdf",
                  },
                ].map((doc, idx) => (
                  <a
                    key={idx}
                    href={`/pdfs/uma003-math/${doc.file}`}
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

            {/* Schedule Section */}
            {/* <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 text-yellow-600 mr-2" />
                Schedule & Assessments
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700">
                  Lectures: Mon/Wed/Fri - 10:00 AM
                  <br />
                  Quiz 1: 15 Sept | Midterm: 15 Oct | Final Exam: 10 Dec
                </p>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uma003Math;
