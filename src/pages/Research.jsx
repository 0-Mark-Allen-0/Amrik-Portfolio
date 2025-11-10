// import { useState } from "react";
// import {
//   Users,
//   Briefcase,
//   Code,
//   Download,
//   BookOpen,
//   Zap,
//   Waves,
//   Atom,
//   Play,
//   ExternalLink,
//   ChevronRight,
//   Star,
//   Settings,
//   Brain,
//   User,
// } from "lucide-react";

// const ResearchPage = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const phdStudents = [
//     {
//       name: "Sandeep Kumar",
//       qualification: "UGC-CSIR NET JRF",
//       position: "Junior Research Fellow",
//     },
//   ];

//   const researchInterests = [
//     {
//       title: "Self Organizing Complex Systems",
//       icon: Brain,
//       description:
//         "Investigation of emergent behaviors in complex systems, focusing on self-organization principles and collective dynamics across various scales.",
//     },
//     {
//       title: "Wave Turbulence",
//       icon: Waves,
//       description:
//         "Mathematical modeling and computational analysis of wave turbulence phenomena, including energy cascades and spectral dynamics in fluid systems.",
//     },
//     {
//       title: "Dynamics of Aperiodic Order",
//       icon: Atom,
//       description:
//         "Study of non-periodic structures and their dynamic properties, including quasicrystals and other aperiodic systems with complex geometries.",
//     },
//   ];

//   const researchMethods = [
//     "Multiple scales perturbation theory",
//     "Asymptotics",
//     "Hamiltonian dynamics",
//     "Computational modeling (C, MPI, Matlab)",
//   ];

//   const videoSections = [
//     {
//       title: "Fluid Turbulence",
//       videos: [
//         "https://www.youtube.com/watch?v=7tYiL9_RRvw",
//         "https://www.youtube.com/watch?v=uv9a9B8iwpM",
//         "https://www.youtube.com/watch?v=FebFayDhnJY",
//       ],
//     },
//     {
//       title: "Multi-phase Flows",
//       videos: ["https://www.youtube.com/watch?v=bsjS0l0rQa8"],
//     },
//     {
//       title: "Self Organizing Complex Systems in Biology",
//       videos: [
//         "https://www.youtube.com/watch?v=FAOvr-fqFxo",
//         "https://www.youtube.com/watch?v=_KiP_n6oTUI",
//         "https://www.youtube.com/watch?v=YIOEao__mq0",
//         "https://www.youtube.com/watch?v=peuhuRmCChA",
//       ],
//     },
//     {
//       title: "Complex Systems and Aperiodic Order",
//       videos: [
//         "https://www.youtube.com/watch?v=MirQPchbo7Q",
//         "https://www.youtube.com/watch?v=N85_aDD_lUI",
//       ],
//     },
//   ];

//   const getYouTubeId = (url) => {
//     const match = url.match(
//       /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
//     );
//     return match ? match[1] : null;
//   };

//   const VideoCard = ({ url, index }) => {
//     const videoId = getYouTubeId(url);
//     const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//         <div className="relative group">
//           <img
//             src={thumbnailUrl}
//             alt={`Video ${index + 1}`}
//             className="w-full h-48 object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
//             <a
//               href={url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             >
//               <Play className="w-6 h-6 ml-1" />
//             </a>
//           </div>
//         </div>
//         <div className="p-4">
//           <a
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
//           >
//             View on YouTube
//             <ExternalLink className="w-3 h-3 ml-1" />
//           </a>
//         </div>
//       </div>
//     );
//   };

//   const tabs = [
//     { id: "overview", name: "Overview", icon: BookOpen },
//     { id: "team", name: "Team", icon: Users },
//     { id: "simulations", name: "Simulations", icon: Play },
//     { id: "code", name: "Code", icon: Code },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-serif">
//       {/* Header Section */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="text-center">
//             <h1 className="text-4xl font-light text-gray-900 mb-4">Research</h1>
//             {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Exploring the fundamental mechanisms of complex systems through
//               mathematical modeling, computational simulations, and theoretical
//               analysis.
//             </p> */}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Tab Navigation */}
//         <div className="mb-8">
//           <div className="border-b border-gray-200">
//             <nav className="-mb-px flex space-x-8">
//               {tabs.map((tab) => {
//                 const Icon = tab.icon;
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
//                       activeTab === tab.id
//                         ? "border-yellow-500 text-yellow-600"
//                         : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                     }`}
//                   >
//                     <Icon className="w-4 h-4" />
//                     <span>{tab.name}</span>
//                   </button>
//                 );
//               })}
//             </nav>
//           </div>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "overview" && (
//           <div className="space-y-12">
//             {/* Research Interests */}
//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Research Interests
//               </h2>
//               <div className="grid md:grid-cols-3 gap-6">
//                 {researchInterests.map((interest, index) => {
//                   const Icon = interest.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//                     >
//                       <div className="flex items-center mb-4">
//                         <div className="bg-yellow-100 p-2 rounded-lg mr-3">
//                           <Icon className="w-6 h-6 text-yellow-600" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-900">
//                           {interest.title}
//                         </h3>
//                       </div>
//                       <p className="text-gray-600 leading-relaxed">
//                         {interest.description}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//             {/* Research Methods */}
//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Research Methods and Expertise
//               </h2>
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {researchMethods.map((method, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
//                       <span className="text-gray-700">{method}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* Job Openings */}
//             <section>
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Job Openings
//               </h2>
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
//                 <div className="flex items-center mb-2">
//                   <Briefcase className="w-5 h-5 text-yellow-600 mr-2" />
//                   <h3 className="text-lg font-semibold text-yellow-800">
//                     Current Opportunities
//                   </h3>
//                 </div>
//                 <p className="text-yellow-700">
//                   Some openings are expected, they will be posted here!
//                 </p>
//               </div>
//             </section>
//           </div>
//         )}

//         {activeTab === "team" && (
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               PhD Students
//             </h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {phdStudents.map((student, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md p-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0">
//                       <User className="w-5 h-5 text-yellow-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                         {student.name}
//                       </h3>
//                       <div className="space-y-1">
//                         <div className="flex items-center">
//                           <Star className="w-4 h-4 text-yellow-500 mr-2" />
//                           <span className="text-sm text-gray-600">
//                             {student.qualification}
//                           </span>
//                         </div>
//                         <div className="flex items-center">
//                           <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
//                           <span className="text-sm text-gray-600">
//                             {student.position}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "simulations" && (
//           <div className="space-y-12">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Research Simulations
//               </h2>
//               <p className="text-gray-600 max-w-3xl mx-auto">
//                 Computational simulations and visualizations developed to
//                 explore various aspects of fluid dynamics, turbulence, and
//                 complex systems behavior.
//               </p>
//             </div>

//             {videoSections.map((section, sectionIndex) => (
//               <section key={sectionIndex}>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
//                   <div className="w-1 h-6 bg-yellow-500 mr-3 rounded"></div>
//                   {section.title}
//                 </h3>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {section.videos.map((video, videoIndex) => (
//                     <VideoCard
//                       key={videoIndex}
//                       url={video}
//                       index={videoIndex}
//                     />
//                   ))}
//                 </div>
//               </section>
//             ))}
//           </div>
//         )}

//         {activeTab === "code" && (
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Research Code
//             </h2>
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
//                   <Code className="w-6 h-6 text-yellow-600" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     Fibonacci Quasicrystal Model
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Computational implementation of the Hamiltonian model for
//                     Fibonacci quasicrystals using non-local interactions. This
//                     code includes simulations and spectral analysis tools.
//                   </p>
//                   <a
//                     href="https://www.amriksen.com/_files/archives/334434_787a8157153f44ecab596a2b26081763.zip?dn=Fibonacci_Ham_code_web.zip"
//                     className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
//                   >
//                     <Download className="w-4 h-4 mr-2" />
//                     Download Code
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Information */}
//             {/* <div className="mt-8 bg-gray-100 rounded-lg p-6">
//               <div className="flex items-center mb-4">
//                 <Settings className="w-5 h-5 text-gray-600 mr-2" />
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Development Experience
//                 </h3>
//               </div>
//               <p className="text-gray-700 leading-relaxed">
//                 I have diverse experience in mathematical modeling including
//                 developing high performance computational code using MPI and C.
//                 The research involves complex numerical simulations and
//                 theoretical analysis across multiple scales.
//               </p>
//             </div> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResearchPage;

import { useState } from "react";
import {
  Users,
  Briefcase,
  Code,
  Download,
  BookOpen,
  Zap,
  Waves,
  Atom,
  Play,
  ExternalLink,
  ChevronRight,
  Star,
  Settings,
  Brain,
  User,
  CircleSmall,
  Cpu,
} from "lucide-react";

const ResearchPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const phdStudents = [
    {
      name: "Sandeep Kumar",
      qualification: "UGC-CSIR NET JRF, Govt. of India",
      position:
        "Recipient of international research fellowship from Johann Wolfgang Goethe University, Germany (€34,000 | 9 months)",
    },
    {
      name: "Adharsh Gajendran",
      qualification: "Research Engineer",
      position: "Digital-twin technology and AI development",
    },
  ];

  const researchInterests = [
    {
      title: "Game-AI Trained on Episodic Impressions",
      icon: Cpu,
      description:
        "Study and development of an AI trained on non-temporal episodic inputs to play optimal moves in board games such as Othello and Tic-Tac-Toe.",
    },
    {
      title: "Self Organizing Complex Systems",
      icon: Brain,
      description:
        "Investigation of emergent behaviors in complex systems, focusing on self-organization principles and collective dynamics across various scales.",
    },
    {
      title: "Wave Turbulence",
      icon: Waves,
      description:
        "Mathematical modeling and computational analysis of wave turbulence phenomena, including energy cascades and spectral dynamics in fluid systems.",
    },
    {
      title: "Dynamics of Aperiodic Order",
      icon: Atom,
      description:
        "Study of non-periodic structures and their dynamic properties, including quasicrystals and other aperiodic systems with complex geometries.",
    },
  ];

  const researchMethods = [
    "Multiple scales perturbation theory",
    "Asymptotics",
    "Hamiltonian dynamics",
    "Computational modeling (C, MPI, Matlab)",
  ];

  const videoSections = [
    {
      title: "Fluid Turbulence",
      videos: [
        "https://www.youtube.com/watch?v=7tYiL9_RRvw",
        "https://www.youtube.com/watch?v=uv9a9B8iwpM",
        "https://www.youtube.com/watch?v=FebFayDhnJY",
      ],
    },
    {
      title: "Multi-phase Flows",
      videos: ["https://www.youtube.com/watch?v=bsjS0l0rQa8"],
    },
    {
      title: "Self Organizing Complex Systems in Biology",
      videos: [
        "https://www.youtube.com/watch?v=FAOvr-fqFxo",
        "https://www.youtube.com/watch?v=_KiP_n6oTUI",
        "https://www.youtube.com/watch?v=YIOEao__mq0",
        "https://www.youtube.com/watch?v=peuhuRmCChA",
      ],
    },
    {
      title: "Complex Systems and Aperiodic Order",
      videos: [
        "https://www.youtube.com/watch?v=MirQPchbo7Q",
        "https://www.youtube.com/watch?v=N85_aDD_lUI",
      ],
    },
  ];

  const getYouTubeId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    );
    return match ? match[1] : null;
  };

  const VideoCard = ({ url, index }) => {
    const videoId = getYouTubeId(url);
    const thumbnailUrl = `https://img.youtube.com/vi/$${videoId}/mqdefault.jpg`;

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative group">
          <img
            src={thumbnailUrl}
            alt={`Video ${index + 1}`}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Play className="w-6 h-6 ml-1" />
            </a>
          </div>
        </div>
        <div className="p-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
          >
            View on YouTube
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    );
  };

  const tabs = [
    { id: "overview", name: "Overview", icon: BookOpen },
    { id: "team", name: "Team", icon: Users },
    { id: "simulations", name: "Simulations", icon: Play },
    { id: "code", name: "Code", icon: Code },
  ];

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
            <h1 className="text-4xl font-light text-gray-900 mb-4 ml-2">
              Research
            </h1>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring the fundamental mechanisms of complex systems through
              mathematical modeling, computational simulations, and theoretical
              analysis.
            </p> */}
          </div>
        </div>
      </div>

      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8">
        {" "}
        {/* Removed mx-auto */}
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="-mb-px flex space-x-8 whitespace-nowrap px-1 sm:px-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-yellow-500 text-yellow-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            {/* Research Interests */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Research Interests
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {researchInterests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                          <Icon className="w-6 h-6 text-yellow-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {interest.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Research Methods */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Research Methods and Expertise
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {researchMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Job Openings */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Job Openings
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="text-lg font-semibold text-yellow-800">
                    Current Opportunities
                  </h3>
                </div>
                <p className="text-yellow-700">
                  Some openings are expected, they will be posted here!
                </p>
              </div>
            </section>
          </div>
        )}
        {activeTab === "team" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              PhD Students
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {phdStudents.map((student, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0">
                      <User className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {student.name}
                      </h3>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          <span className="text-md text-gray-600">
                            {student.qualification}
                          </span>
                        </div>
                        <div className="flex justify-start">
                          <CircleSmall className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-md text-gray-600">
                            {student.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "simulations" && (
          <div className="space-y-12">
            <div className="mb-8">
              {" "}
              {/* Removed text-center */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Research Simulations
              </h2>
              <p className="text-gray-600 max-w-3xl">
                {" "}
                {/* Removed mx-auto */}
                Computational simulations and visualizations developed to
                explore various aspects of fluid dynamics, turbulence, and
                complex systems behavior.
              </p>
            </div>

            {videoSections.map((section, sectionIndex) => (
              <section key={sectionIndex}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <div className="w-1 h-6 bg-yellow-500 mr-3 rounded"></div>
                  {section.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.videos.map((video, videoIndex) => (
                    <VideoCard
                      key={videoIndex}
                      url={video}
                      index={videoIndex}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
        {activeTab === "code" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Research Code
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                  <Code className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Fibonacci Quasicrystal Model
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Computational implementation of the Hamiltonian model for
                    Fibonacci quasicrystals using non-local interactions. This
                    code includes simulations and spectral analysis tools.
                  </p>
                  <a
                    href="Fibonacci_Ham_code_web.zip"
                    className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download (.zip)
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            {/* <div className="mt-8 bg-gray-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Settings className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Development Experience
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I have diverse experience in mathematical modeling including
                developing high performance computational code using MPI and C.
                The research involves complex numerical simulations and
                theoretical analysis across multiple scales.
              </p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchPage;
