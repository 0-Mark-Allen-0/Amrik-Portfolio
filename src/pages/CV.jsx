// import React from "react";
// import { Calendar, Award, Video, BookOpen, DownloadCloud } from "lucide-react"; // Added DownloadCloud

// const cvData = {
//   education: [
//     {
//       degree: "PhD, Applied Mathematics",
//       institution: "University of Colorado & NCAR, Boulder, USA",
//       year: "2014",
//     },
//     {
//       degree: "MS, Applied Mathematics",
//       institution: "University of Colorado, Boulder, USA",
//       year: "2009",
//     },
//     {
//       degree: "B.Tech, Electrical Engineering",
//       institution: "NIT Silchar, India",
//       year: "2006",
//     },
//   ],
//   grants: [
//     {
//       title:
//         "DST‑SERB Early Career Research Award: wave turbulence dispersion (SABL)",
//       description:
//         "PI in charge of investigating the role of wave turbulence in the dispersion of atmospheric pollutants in the SABL.",
//       year: "2019",
//       amount: "₹32,91,520",
//     },
//     {
//       title:
//         "Indo‑USA collaboration: model for hyperthermia‑based gastric cancer treatment",
//       description:
//         "Co-PI for developing a mathematical model for hyperthermia induced innate immunity strategy for gastric cancer treatment",
//       year: "2020",
//       amount: "₹25,10,000",
//     },
//     {
//       title: "DBT‑BiRAC COVID‑19 airborne contamination project",
//       description:
//         "PI and Project Co-ordinator in charge of a multi-university research grant on developing a COVID pandemic management technology for airborne contamination of hospitals by coronavirus",
//       year: "2020",
//       amount: "₹42,21,760",
//     },
//     {
//       title: "Seed Grant, quasicrystal growth models (Thapar University)",
//       description:
//         "PI of project on 'Construction of a new family of mathematical models to simulate quasicrystal growth' ",
//       year: "2020",
//       amount: "₹4,50,000",
//     },
//     {
//       title: "MITACS Summer Award",
//       description: "by Fields Institute and Carleton University, Canada",
//       year: "2009",
//       amount: "",
//     },
//     {
//       title: "Summer Fellowship",
//       description:
//         "by Inst. of Theoretical Physics, Cargese, Corsica, France, University of Colorado, Boulder, and NCAR, Boulder",
//       year: "2011",
//       amount: "",
//     },
//   ],
//   media: [
//     {
//       title: "Metaverse Catalyst Conference, IE University, Madrid, Spain",
//       date: "October 2022",
//       link: "https://www.youtube.com/watch?v=41luW6hEay4&t=126s",
//     },
//   ],
// };

// const CVPage = () => (
//   <div className="min-h-screen bg-gray-50 font-serif">
//     <header className="bg-white shadow-sm">
//       <div className="max-w-4xl text-center mx-auto py-8">
//         {/* text-center mx-auto*/}
//         <h1 className="text-4xl font-light text-gray-900">Curriculum Vitae</h1>
//         {/* Download Button */}
//         <a
//           href="/cv.pdf" // Placeholder path for your CV PDF
//           download
//           className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full font-medium transition-colors mt-4"
//         >
//           <DownloadCloud className="w-5 h-5 mr-2" />
//           Download
//         </a>
//       </div>
//     </header>

//     <main className="max-w-4xl mx-auto px-4 py-6 space-y-12 ">
//       {/* Education */}
//       <section>
//         <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
//           <BookOpen className="w-6 h-6 text-yellow-500 mr-2" /> Education
//         </h2>
//         <ul className="space-y-3">
//           {cvData.education.map((e, idx) => (
//             <li key={idx} className="text-gray-800">
//               <div className="flex justify-between">
//                 <span className="font-medium">{e.degree}</span>
//                 <span className="text-gray-600">{e.year}</span>
//               </div>
//               <div className="text-gray-600">{e.institution}</div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Awards & Grants */}
//       <section>
//         <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
//           <Award className="w-6 h-6 text-yellow-500 mr-2" /> Awards & Grants
//         </h2>
//         <ul className="space-y-4">
//           {cvData.grants.map((g, idx) => (
//             <li key={idx} className="text-gray-800">
//               <div className="flex justify-between items-baseline">
//                 <span className="font-medium">{g.title}</span>
//                 <span className="text-gray-600">{g.year}</span>
//               </div>
//               {/* {g.amount && (
//                 <div className="text-gray-600 mt-1">
//                   Funding:{" "}
//                   <span className="text-yellow-500 font-semibold">
//                     {g.amount}
//                   </span>
//                 </div>
//               )} */}
//               {g.description && (
//                 <div className="text-gray-600 mt-1 italic max-w-prose">
//                   {g.description}
//                 </div>
//               )}
//               {g.amount && (
//                 <div className="text-gray-600 mt-1">
//                   Funding:{" "}
//                   <span className="text-yellow-500 font-semibold">
//                     {g.amount}
//                   </span>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Media & Events */}
//       <section>
//         <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
//           <Calendar className="w-6 h-6 text-yellow-500 mr-2" /> Media & Events
//         </h2>
//         <ul className="space-y-2 text-gray-800">
//           {cvData.media.map((m, idx) => (
//             <li key={idx}>
//               <span className="font-medium">{m.title}</span>
//               <span className="text-gray-600 ml-2">({m.date})</span>
//               <span className="text-gray-600 ml-2">
//                 <a
//                   className="text-blue-500"
//                   href="https://www.youtube.com/watch?v=41luW6hEay4&t=126s"
//                 >
//                   (Watch)
//                 </a>
//               </span>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </main>
//   </div>
// );

// export default CVPage;

import React from "react";
import { Calendar, Award, Video, BookOpen, DownloadCloud } from "lucide-react"; // Added DownloadCloud

const cvData = {
  education: [
    {
      degree: "PhD, Applied Mathematics",
      institution: "University of Colorado & NCAR, Boulder, USA",
      year: "2014",
    },
    {
      degree: "MS, Applied Mathematics",
      institution: "University of Colorado, Boulder, USA",
      year: "2009",
    },
    {
      degree: "B.Tech, Electrical Engineering",
      institution: "NIT Silchar, India",
      year: "2006",
    },
  ],
  grants: [
    {
      title:
        "DST‑SERB Early Career Research Award: wave turbulence dispersion (SABL)",
      description:
        "PI in charge of investigating the role of wave turbulence in the dispersion of atmospheric pollutants in the SABL.",
      year: "2019",
      amount: "₹32,91,520",
    },
    {
      title:
        "Indo‑USA collaboration: model for hyperthermia‑based gastric cancer treatment",
      description:
        "Co-PI for developing a mathematical model for hyperthermia induced innate immunity strategy for gastric cancer treatment",
      year: "2020",
      amount: "₹25,10,000",
    },
    {
      title: "DBT‑BiRAC COVID‑19 airborne contamination project",
      description:
        "PI and Project Co-ordinator in charge of a multi-university research grant on developing a COVID pandemic management technology for airborne contamination of hospitals by coronavirus",
      year: "2020",
      amount: "₹42,21,760",
    },
    {
      title: "Seed Grant, quasicrystal growth models (Thapar University)",
      description:
        "PI of project on 'Construction of a new family of mathematical models to simulate quasicrystal growth' ",
      year: "2020",
      amount: "₹4,50,000",
    },
    {
      title: "MITACS Summer Award",
      description: "by Fields Institute and Carleton University, Canada",
      year: "2009",
      amount: "",
    },
    {
      title: "Summer Fellowship",
      description:
        "by Inst. of Theoretical Physics, Cargese, Corsica, France, University of Colorado, Boulder, and NCAR, Boulder",
      year: "2011",
      amount: "",
    },
  ],
  media: [
    {
      title: "Metaverse Catalyst Conference, IE University, Madrid, Spain",
      date: "October 2022",
      link: "https://www.youtube.com/watch?v=41luW6hEay4&t=126s",
    },
  ],
};

const CVPage = () => (
  <div className="min-h-screen bg-gray-50 font-serif">
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 py-6 ml-2 flex flex-row gap-4">
        {" "}
        {/* Removed text-center and mx-auto */}
        <h1 className="text-4xl font-light text-gray-900">Curriculum Vitae</h1>
        {/* Download Button */}
        <a
          target="_blank"
          href="/cv.pdf" // Placeholder path for your CV PDF
          className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full font-medium transition-colors "
        >
          <DownloadCloud className="w-5 h-5 mr-2" />
          View
        </a>
      </div>
    </header>

    <main className="max-w-full px-4 sm:px-6 lg:px-8 py-6 space-y-12 ml-2">
      {" "}
      {/* Removed mx-auto */}
      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
          <BookOpen className="w-6 h-6 text-yellow-500 mr-2" /> Education
        </h2>
        <ul className="space-y-3">
          {cvData.education.map((e, idx) => (
            <li key={idx} className="text-gray-800">
              <div className="flex justify-between">
                <span className="font-medium">{e.degree}</span>
                <span className="text-gray-600">{e.year}</span>
              </div>
              <div className="text-gray-600">{e.institution}</div>
            </li>
          ))}
        </ul>
      </section>
      {/* Awards & Grants */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
          <Award className="w-6 h-6 text-yellow-500 mr-2" /> Awards & Grants
        </h2>
        <ul className="space-y-4">
          {cvData.grants.map((g, idx) => (
            <li key={idx} className="text-gray-800">
              <div className="flex justify-between items-baseline">
                <span className="font-medium">{g.title}</span>
                <span className="text-gray-600">{g.year}</span>
              </div>
              {/* {g.amount && (
                <div className="text-gray-600 mt-1">
                  Funding:{" "}
                  <span className="text-yellow-500 font-semibold">
                    {g.amount}
                  </span>
                </div>
              )} */}
              {g.description && (
                <div className="text-gray-600 mt-1 italic max-w-full">
                  {g.description}
                </div>
              )}
              {g.amount && (
                <div className="text-gray-600 mt-1">
                  Funding:{" "}
                  <span className="text-yellow-500 font-semibold">
                    {g.amount}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
      {/* Media & Events */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
          <Calendar className="w-6 h-6 text-yellow-500 mr-2" /> Media & Events
        </h2>
        <ul className="space-y-2 text-gray-800">
          {cvData.media.map((m, idx) => (
            <li key={idx}>
              <span className="font-medium">{m.title}</span>
              <span className="text-gray-600 ml-2">({m.date})</span>
              <span className="text-gray-600 ml-2">
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=41luW6hEay4&t=126s"
                >
                  (Watch)
                </a>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </div>
);

export default CVPage;
