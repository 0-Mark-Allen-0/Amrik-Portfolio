// import { useNavigate } from "react-router-dom";
// import {
//   Book,
//   Calculator,
//   FlaskConical,
//   LineChart,
//   Target,
//   ChevronRight,
//   DownloadCloud, // Import DownloadCloud icon
// } from "lucide-react";

// const TeachingPage = () => {
//   const navigate = useNavigate();

//   const courses = [
//     {
//       id: "pcl105-autumn2018",
//       name: "Statistical Methods and Algorithms (Autumn, 2018)",
//       icon: Book,
//       description:
//         "The course aims to introduce to the students, fundamental principles as well as advanced topics in statistics and sampling techniques",
//     },
//     {
//       id: "pcl105-autumn2019",
//       name: "Statistical Methods and Algorithms (Autumn, 2019)",
//       icon: Book,
//       description:
//         "The course aims to introduce to the students, fundamental principles as well as advanced topics in statistics and sampling techniques",
//     },
//     {
//       id: "uma003-math",
//       name: "Calculus for Engineers",
//       icon: Calculator,
//       description: "Calculus for Engineers",
//     },
//     {
//       id: "engg-math-in-action",
//       name: "Engg. Math in Action",
//       icon: FlaskConical,
//       description:
//         "This course will cover fundamental aspects of linear algebra and ordinary differential equations from the stand point of basic theoretical knowledge and practical applications",
//     },
//     {
//       id: "computational-linear-algebra",
//       name: "Computational Linear Algebra",
//       icon: LineChart,
//       description:
//         "This course will cover fundamental aspects of linear algebra from the stand point of basic theoretical knowledge and practical applications",
//     },
//     {
//       id: "mathematics-of-uncertainty",
//       name: "Mathematics of Uncertainty",
//       icon: Target,
//       description:
//         "This course will cover fundamental aspects of probability and statistics from the stand point of basic theoretical knowledge and practical applications",
//     },
//     {
//       id: "optimization-methods",
//       name: "Optimization Methods",
//       icon: Target,
//       description:
//         "This course provides an introduction to computational methods for solving optimization problems",
//     },
//     {
//       id: "numerical-analysis",
//       name: "Numerical Analysis",
//       icon: Calculator,
//       description: "Numerical Analysis",
//     },

//     {
//       id: "pma207-complexanalysis",
//       name: "Complex Analysis",
//       icon: Calculator,
//       description:
//         "The course aims to introduce the theory of complex analysis to graduate students with applications to solve problems in the mathematical sciences and engineering",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-serif">
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
//           <h1 className="text-4xl font-light text-gray-900 mb-4">Teaching</h1>
//           {/* Download Teaching Portfolio Button */}
//           <a
//             href="/testimonial.pdf"
//             download
//             className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full font-medium  mt-4"
//           >
//             <DownloadCloud className="w-5 h-5 mr-2" />
//             Download Testimonial
//           </a>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Courses</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => {
//             const Icon = course.icon;
//             return (
//               <div
//                 key={course.id}
//                 onClick={() => navigate(`/teaching/${course.id}`)}
//                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="bg-yellow-100 p-2 rounded-lg mr-3">
//                     <Icon className="w-6 h-6 text-yellow-600" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {course.name}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   {course.description}
//                 </p>
//                 <span className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
//                   View Course Details
//                   <ChevronRight className="w-3 h-3 ml-1" />
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeachingPage;

import { useNavigate } from "react-router-dom";
import {
  Book,
  Calculator,
  FlaskConical,
  LineChart,
  Target,
  ChevronRight,
  DownloadCloud, // Import DownloadCloud icon
} from "lucide-react";

const TeachingPage = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: "pcl105-autumn2018",
      name: "Statistical Methods and Algorithms (Autumn, 2018)",
      icon: Book,
      description:
        "The course aims to introduce to the students, fundamental principles as well as advanced topics in statistics and sampling techniques",
    },
    {
      id: "pcl105-autumn2019",
      name: "Statistical Methods and Algorithms (Autumn, 2019)",
      icon: Book,
      description:
        "The course aims to introduce to the students, fundamental principles as well as advanced topics in statistics and sampling techniques",
    },
    {
      id: "uma003-math",
      name: "Calculus for Engineers",
      icon: Calculator,
      description: "",
    },
    {
      id: "engg-math-in-action",
      name: "Engg. Math in Action",
      icon: FlaskConical,
      description:
        "This course will cover fundamental aspects of linear algebra and ordinary differential equations from the stand point of basic theoretical knowledge and practical applications",
    },
    {
      id: "computational-linear-algebra",
      name: "Computational Linear Algebra",
      icon: LineChart,
      description:
        "This course will cover fundamental aspects of linear algebra from the stand point of basic theoretical knowledge and practical applications",
    },
    {
      id: "mathematics-of-uncertainty",
      name: "Mathematics of Uncertainty",
      icon: Target,
      description:
        "This course will cover fundamental aspects of probability and statistics from the stand point of basic theoretical knowledge and practical applications",
    },
    {
      id: "optimization-methods",
      name: "Optimization Methods",
      icon: Target,
      description:
        "This course provides an introduction to computational methods for solving optimization problems",
    },
    {
      id: "numerical-analysis",
      name: "Numerical Analysis",
      icon: Calculator,
      description: "",
    },

    {
      id: "pma207-complexanalysis",
      name: "Complex Analysis",
      icon: Calculator,
      description:
        "The course aims to introduce the theory of complex analysis to graduate students with applications to solve problems in the mathematical sciences and engineering",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <div className="bg-white shadow-sm">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4 ml-2 flex flex-row gap-4 items-center">
          {" "}
          {/* Removed mx-auto and text-center */}
          <h1 className="text-4xl font-light text-gray-900 mb-4">Teaching</h1>
          {/* Download Teaching Portfolio Button */}
          <a
            target="_blank"
            href="/testimonial.pdf"
            className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full font-medium transition-colors -mt-2"
          >
            <DownloadCloud className="w-5 h-5 mr-2" />
            View
          </a>
        </div>
      </div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8 ml-2">
        {" "}
        {/* Removed mx-auto */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                onClick={() => navigate(`/teaching/${course.id}`)}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col justify-between min-h-[260px]" // 👈 added flex-col and min height
              >
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                      <Icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {course.name}
                    </h3>
                  </div>

                  {/* Description Block */}
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    {course.description}
                  </p>
                </div>

                {/* Button pinned to bottom */}
                <div>
                  <span className="text-yellow-500 font-medium text-sm flex items-center mt-auto">
                    View Course Details
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeachingPage;
