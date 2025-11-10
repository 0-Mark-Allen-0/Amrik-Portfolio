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

const MathOfUncertainty = () => {
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
            Math Of Uncertainty
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            All documents on this page are PDFs and are readily available for
            viewing, just click on them!
          </p>

          <div className="space-y-6">
            {/* Course Instructors Section */}
            <section className="mt-6">
              {" "}
              {/* Added mt-6 here */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 text-yellow-600 mr-2" />
                Course Instructors
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-lg">
                  <span className="font-bold">Amrik Sen</span>{" "}
                  (amriksen@thapar.edu)
                </p>
                <p className="text-lg">
                  <span className="font-bold">Rajat Singla</span>{" "}
                  (rajat.singla@plaksha.edu.in)
                </p>
                <p className="text-lg">
                  <span className="font-bold">Abishek Thakur</span>{" "}
                  (abhishek.thakur@plaksha.edu.in)
                </p>
                <p className="text-lg">
                  <span className="font-bold">Sushma</span>{" "}
                  (shushma.rani@plaksha.edu.in)
                </p>
                <p className="text-lg">
                  <span className="font-bold">Viraj D'Souza</span>{" "}
                  (viraj.dsouza@plaksha.edu.in)
                </p>
              </div>
            </section>

            {/* Course Syllabus Section */}
            <section className="mt-6">
              {" "}
              {/* Added mt-6 here */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
                Course Syllabus
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <a
                  href="/pdfs/mou/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Course Brochure (PDF)
                </a>
                <a
                  href="/pdfs/mou/matlab.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Matlab Tutorial (PDF)
                </a>
              </div>
            </section>

            {/* Two Column Layout for Notes and Materials */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Lecture Notes, Module 2, Module 3 */}
              <div>
                <section className="mt-6">
                  {" "}
                  {/* Added mt-6 here */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Module 1 Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Thinking in Probability",
                        file: "m1-1.pdf",
                      },
                      {
                        name: "Sanjay's lectures of 3/3/2022",
                        file: "m1-2.pdf",
                      },
                      {
                        name: "Complementary reading-1: solving recurrence relations",
                        file: "m1-3.pdf",
                      },
                      {
                        name: "Sanjay's lectures upto 15/3/2022 (here)",
                        file: "m1-4.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/mou/${doc.file}`}
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
                  {" "}
                  {/* Added mt-6 here */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Module 2 Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Probability Distributions",
                        file: "m2-1.pdf",
                      },
                      {
                        name: "Complementary file-1 (simulating binomial distribution)",
                        file: "m2-2.rtf",
                      },
                      {
                        name: "Sanjay's lectures",
                        file: "m2-3.pdf",
                      },
                      {
                        name: "Sanjay's lectures",
                        file: "m2-4.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/mou/${doc.file}`}
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
                  {" "}
                  {/* Added mt-6 here */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Module 3 Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Discrete Time Markov Chains",
                        file: "m5-1.pdf",
                      },
                      {
                        name: "Sanjay's lectures",
                        file: "m5-2.pdf",
                      },
                      {
                        name: "Central limit theorem lecture by Viraj Dsouza",
                        file: "m5-3.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/mou/${doc.file}`}
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
                  {" "}
                  {/* Added mt-6 here */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Module 5 Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Statistical Experiments",
                        file: "m5-1.pdf",
                      },
                      {
                        name: "Sanjay's lectures",
                        file: "m3-3.pdf",
                      },
                      {
                        name: "Complementary file-2 (game of evolution)",
                        file: "m3-4.pdf",
                      },
                      {
                        name: "Module 4 - Continuous Time Markov Chains & Queues",
                        file: "m4-1.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/mou/${doc.file}`}
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
                    Other Material
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Midterm Paper",
                        file: "midterm.pdf",
                      },
                      {
                        name: "World Bank Data on FDI and Internet Usage (CSV)",
                        file: "World_Bank_Data (1).csv",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/mou/${doc.file}`}
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

              {/* Right Column - Projects, Worksheets, Lab Worksheets, Other Materials */}
              <div>
                <section className="mt-6">
                  {" "}
                  {/* Added mt-6 here */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Module 6 Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "1D linear least squares regression",
                        file: "m6-1.pdf",
                      },
                      {
                        name: "Normal equations for least squares regression (here)",
                        file: "m6-2.pdf",
                      },
                      {
                        name: "Linear LS regression for multi-dimensional data (here)",
                        file: "m6-3.pdf",
                      },
                      {
                        name: "Code for quiz-2 (Python)",
                        file: "m6-4.txt",
                      },
                      {
                        name: "Code for quiz-2 (Matlab)",
                        file: "m6-5.txt",
                      },
                      {
                        name: "Jitesh's notes on 'Decision Making under Uncertainty'",
                        file: "m6-6.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/mou/${doc.file}`}
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
                  {" "}
                  {/* Added mt-6 here */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Laboratory-cum-Project Manual
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Lab/mini-project 1",
                        file: "mp1.pdf",
                      },
                      {
                        name: "Project 1 Grading Rubric",
                        file: "p1-rubric.pdf",
                      },
                      {
                        name: "Lab/mini-project 2 (Synopsis)",
                        file: "mp2_synopsis.pdf",
                      },
                      {
                        name: "Lab/mini-project 2 (Handout)",
                        file: "mp2_handout.pdf",
                      },
                      {
                        name: "Lab/mini-project 2 (Supplementary Material)",
                        file: "mp2_material.pdf",
                      },
                      {
                        name: "Project 2 Grading Rubric",
                        file: "p2-rubric.pdf",
                      },
                      {
                        name: "Treasure trove to the Viterbi bandwagon",
                        file: "viterbi.pdf",
                      },
                      {
                        name: "Lab/mini-project 3 (Handout)",
                        file: "mp3_handout.pdf",
                      },
                      {
                        name: "Project 3 Grading Rubric",
                        file: "p3-rubric.pdf",
                      },
                      {
                        name: "Project 4 Grading Rubric",
                        file: "p4-rubric.pdf",
                      },
                      {
                        name: "Lab/mini-project 5 (Handout)",
                        file: "mp5_handout.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/mou/${doc.file}`}
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

export default MathOfUncertainty;
