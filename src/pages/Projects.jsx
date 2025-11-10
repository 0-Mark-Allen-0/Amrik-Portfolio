// import { Users, Globe } from "lucide-react";

// const ProjectsPage = () => {
//   const projects = [
//     {
//       id: 1,
//       name: "Game AI using Episodic Training Impressions",
//       coverImage: "/game-ai.avif",
//       contributors: [
//         "Christopher George",
//         "Subham Jalan",
//         "Adharsh Gajendran",
//         "Amrik Sen",
//       ],
//       projectLink: "https://t5frontend.digitt.in/",
//     },
//     {
//       id: 2,
//       name: "Public Transport - Digital Twin (Ideation Stage)",
//       coverImage: "/public-trans.avif",
//       contributors: ["Adharsh Gajendran", "Amrik Sen"],
//       projectLink: "https://www.youtube.com/watch?v=25ZjotC8H54 ",
//     },
//     {
//       id: 3,
//       name: "Digital Twin of a Production Line (Model)",
//       coverImage: "/prod-line.avif",
//       contributors: [
//         "Chandan Yadav",
//         "Tanya Sravan",
//         "Malhar Bhise",
//         "Manan Chawla",
//         "Tejasvi Birdh",
//         "Aman Sa",
//         "Subham Jalan",
//         "Adharsh Gajendran",
//         "Amrik Sen",
//       ],
//       projectLink: "https://www.digitt.in/manufacturing-production-line",
//     },
//     {
//       id: 4,
//       name: "Squeaky",
//       coverImage: "/squeaky.avif",
//       contributors: ["Vishal Paudel (v1)", "Malhar Bhise (v2)", "Amrik Sen"],
//       projectLink: "https://metalabplaksha.github.io/Squeaky/web/",
//     },
//     {
//       id: 5,
//       name: "Queues",
//       coverImage: "/queue.avif",
//       contributors: [
//         "Chandan Yadav",
//         "Tanya Sravan",
//         "Malhar Bhise",
//         "Manan Chawla",
//         "Tejasvi Birdh",
//         "Aman Sa",
//         "Subham Jalan",
//         "Amrik Sen",
//       ],
//       projectLink: "https://metalabplaksha.github.io/queues/",
//     },
//     {
//       id: 6,
//       name: "Population Genetics",
//       coverImage: "/pop-gen.avif",
//       contributors: [
//         "Sandeep Kumar",
//         "Arpit Shukla",
//         "Anshuman Bhuchar",
//         "TechEnablers' Team",
//         "Amrik Sen",
//       ],
//       projectLink: "https://www.youtube.com/watch?v=FZSX9UreLD4",
//     },
//     {
//       id: 7,
//       name: "Digital Twin of Bicycle",
//       coverImage: "/bike.avif",
//       contributors: ["Subham Jalan", "Amrik Sen"],
//       projectLink: "https://metalabplaksha.github.io/bicycle/",
//     },
//     {
//       id: 8,
//       name: "Digital Twin of a Fidget Spinner",
//       coverImage: "/spin.avif",
//       contributors: ["Christopher George", "Tejasvi Birdh", "Amrik Sen"],
//       projectLink: "https://metalabplaksha.github.io/Spinner/",
//     },
//     {
//       id: 9,
//       name: "Digital Twin of a DC Motor",
//       coverImage: "/motor.avif",
//       contributors: [
//         "Tejasvi Birdh",
//         "Manan Chawla",
//         "Subham Jalan",
//         "Aman Sa",
//         "Amrik Sen",
//       ],
//       projectLink: "https://metalabplaksha.github.io/motor_build/",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-serif">
//       {/* Header */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-4 ml-2">
//           <h1 className="text-4xl font-light text-gray-900 mb-4">DigiTT Lab</h1>
//         </div>
//       </div>

//       {/* Projects Section */}
//       <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8 ml-2">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
//             >
//               {/* Image */}
//               <div className="relative bg-gray-100 h-56 flex items-center justify-center">
//                 <img
//                   src={project.coverImage}
//                   alt={project.name}
//                   className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src =
//                       "https://via.placeholder.com/400x300?text=Image+Unavailable";
//                   }}
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6 flex-1 flex flex-col">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
//                   {project.name}
//                 </h3>

//                 <div className="mb-4">
//                   <div className="flex items-center mb-2">
//                     <Users className="w-4 h-4 text-gray-500 mr-2" />
//                     <span className="text-sm font-medium text-gray-700">
//                       Contributors
//                     </span>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {project.contributors.map((contributor, index) => (
//                       <span
//                         key={index}
//                         className="inline-block bg-gray-100 text-black text-sm px-2 py-1 rounded-full"
//                       >
//                         {contributor}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-gray-100 mt-auto">
//                   <a
//                     href={project.projectLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-yellow-600 hover:text-yellow-600 font-medium text-sm transition-colors duration-200"
//                   >
//                     <Globe className="w-4 h-4 mr-2" />
//                     View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;

//v2
import { Users, Globe } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: "Game AI using Episodic Training Impressions",
      coverImage: "/game-ai.avif",
      contributors: [
        "Christopher George",
        "Subham Jalan",
        "Adharsh Gajendran",
        "Amrik Sen",
      ],
      projectLink: "https://t5frontend.digitt.in/",
    },
    {
      id: 2,
      name: "Public Transport - Digital Twin (Ideation Stage)",
      coverImage: "/public-trans.avif",
      contributors: ["Adharsh Gajendran", "Amrik Sen"],
      projectLink: "https://www.youtube.com/watch?v=25ZjotC8H54 ",
    },
    {
      id: 3,
      name: "Digital Twin of a Production Line (Model)",
      coverImage: "/prod-line.avif",
      contributors: [
        "Chandan Yadav",
        "Tanya Sravan",
        "Malhar Bhise",
        "Manan Chawla",
        "Tejasvi Birdh",
        "Aman Sa",
        "Subham Jalan",
        "Adharsh Gajendran",
        "Amrik Sen",
      ],
      projectLink: "https://www.digitt.in/manufacturing-production-line",
    },
    {
      id: 4,
      name: "Squeaky",
      coverImage: "/squeaky.avif",
      contributors: ["Vishal Paudel (v1)", "Malhar Bhise (v2)", "Amrik Sen"],
      projectLink: "https://metalabplaksha.github.io/Squeaky/web/",
    },
    {
      id: 5,
      name: "Queues",
      coverImage: "/queue.avif",
      contributors: [
        "Chandan Yadav",
        "Tanya Sravan",
        "Malhar Bhise",
        "Manan Chawla",
        "Tejasvi Birdh",
        "Aman Sa",
        "Subham Jalan",
        "Amrik Sen",
      ],
      projectLink: "https://metalabplaksha.github.io/queues/",
    },
    {
      id: 6,
      name: "Population Genetics",
      coverImage: "/pop-gen.avif",
      contributors: [
        "Sandeep Kumar",
        "Arpit Shukla",
        "Anshuman Bhuchar",
        "TechEnablers' Team",
        "Amrik Sen",
      ],
      projectLink: "https://www.youtube.com/watch?v=FZSX9UreLD4",
    },
    {
      id: 7,
      name: "Digital Twin of Bicycle",
      coverImage: "/bike.avif",
      contributors: ["Subham Jalan", "Amrik Sen"],
      projectLink: "https://metalabplaksha.github.io/bicycle/",
    },
    {
      id: 8,
      name: "Digital Twin of a Fidget Spinner",
      coverImage: "/spin.avif",
      contributors: ["Christopher George", "Tejasvi Birdh", "Amrik Sen"],
      projectLink: "https://metalabplaksha.github.io/Spinner/",
    },
    {
      id: 9,
      name: "Digital Twin of a DC Motor",
      coverImage: "/motor.avif",
      contributors: [
        "Tejasvi Birdh",
        "Manan Chawla",
        "Subham Jalan",
        "Aman Sa",
        "Amrik Sen",
      ],
      projectLink: "https://metalabplaksha.github.io/motor_build/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-4xl font-light text-gray-900 mb-4 ml-2">
            DigiTT Lab
          </h1>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 ml-2">Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/4 lg:w-1/5 bg-gray-100 flex items-center justify-center h-32 md:h-40">
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Image+Unavailable";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {project.name}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Users className="w-5 h-5 text-gray-500 mr-2" />
                      <span className="text-base font-medium text-gray-700">
                        Contributors
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.contributors.map((contributor, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-black text-sm px-3 py-1 rounded-full"
                        >
                          {contributor}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-base transition-colors duration-200"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
