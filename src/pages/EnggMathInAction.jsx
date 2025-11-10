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

const EnggMathInAction = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -ml-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <Link
            to="/teaching"
            className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Teaching Overview
          </Link>

          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Engineering Math In Action
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
                <p className="text-lg">
                  <span className="font-bold">Rajat Singla</span>{" "}
                  (rajat.singla@plaksha.edu.in)
                </p>
                <p className="text-lg">
                  <span className="font-bold">Vijay Sahani</span>{" "}
                  (vijay.sahani@plaksha.edu.in)
                </p>
                <p className="text-lg">
                  <span className="font-bold">Sandeep Kumar</span>{" "}
                  (sandeep.kumar@plaksha.edu.in)
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
                  href="/pdfs/engg-math/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Course Brochure (PDF)
                </a>
                <a
                  href="/pdfs/engg-math/python.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Python Tutorial (PDF)
                </a>
                <a
                  href="/pdfs/engg-math/matlab.pdf"
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
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Lecture Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Lecture 1.1 & 1.2",
                        file: "lecture_1.pdf",
                      },
                      {
                        name: "Lecture 2.1",
                        file: "lecture_2_1.pdf",
                      },
                      {
                        name: "Lecture 2.1 (Saikat's Lecture)",
                        file: "lecture_2_1_saikat.pdf",
                      },
                      {
                        name: "Lecture 2.2",
                        file: "lecture_2_2.pdf",
                      },
                      {
                        name: "Lecture 3.1 Part I",
                        file: "lecture_3_1_1.pdf",
                      },
                      {
                        name: "Lecture 3.1 Part II",
                        file: "lecture_3_1_2.pdf",
                      },
                      {
                        name: "Lecture 3.2",
                        file: "lecture_3_2_1.pdf",
                      },
                      {
                        name: "Lecture 3.3",
                        file: "lecture_3_3.pdf",
                      },
                      {
                        name: "Lecture 4.1",
                        file: "lecture_4_1.pdf",
                      },
                      {
                        name: "Lecture 5.1",
                        file: "lecture_5_1.pdf",
                      },
                      {
                        name: "Lecture 5.2",
                        file: "lecture_5_2.pdf",
                      },
                      {
                        name: "Lecture 6.1",
                        file: "lecture_6_1.pdf",
                      },
                      {
                        name: "Lecture 6.2",
                        file: "lecture_6_2.pdf",
                      },
                      {
                        name: "Lecture 6.3",
                        file: "lecture_6_3.pdf",
                      },
                      {
                        name: "Lecture 6.4",
                        file: "lecture_6_4.pdf",
                      },
                      {
                        name: "Lecture 6.5 (Google Page Rank Algo.)",
                        file: "lecture_6_5.pdf",
                      },
                      {
                        name: "Lecture 7.3",
                        file: "lecture_7_3.pdf",
                      },
                      {
                        name: "Lecture 7.4",
                        file: "lecture_7_4.pdf",
                      },
                      {
                        name: "Lecture 7.5",
                        file: "lecture_7_5.pdf",
                      },
                      {
                        name: "Lecture 7.6 (Revision)",
                        file: "lecture_7_6.pdf",
                      },
                      {
                        name: "Quiz 1 - Set 1",
                        file: "quiz_1_set_1.pdf",
                      },
                      {
                        name: "Quiz 1 - Set 2",
                        file: "quiz_1_set_2.pdf",
                      },
                      {
                        name: "Quiz 1 - Set 1 (Solutions)",
                        file: "quiz_1_set_1_soln.pdf",
                      },
                      {
                        name: "Quiz 1 - Set 2 (Solutions)",
                        file: "quiz_1_set_2_soln.pdf",
                      },
                      {
                        name: "Quiz 2 - Set 1 (w/Solutions)",
                        file: "quiz_2_set_1.pdf",
                      },
                      {
                        name: "Quiz 2 - Set 2 (w/Solutions)",
                        file: "quiz_2_set_2.pdf",
                      },
                      {
                        name: "Midterm Question Paper",
                        file: "midterm.pdf",
                      },
                      {
                        name: "Midterm Solutions",
                        file: "midterm_soln.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/engg-math/${doc.file}`}
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
                    Module 2 Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Sanjay's Lecture 1-2 (I)",
                        file: "lecture_1-2_sanjay.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 1-2 (II)",
                        file: "lecture_1-2_2_sanjay.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 1-4",
                        file: "lecture_1-4_sanjay.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 1-6",
                        file: "lecture_1-6_sanjay.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 1-8",
                        file: "lecture_1-8_sanjay.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 4-5",
                        file: "lecture_4-5_sanjay.pdf",
                      },
                      {
                        name: "Amrik's Lecture 1-2",
                        file: "lecture_1-2.pdf",
                      },
                      {
                        name: "Amrik's Lecture 3",
                        file: "lecture_3.pdf",
                      },
                      {
                        name: "Amrik's Lecture 4",
                        file: "lecture_4.pdf",
                      },
                      {
                        name: "Amrik's Lecture 4 (2021)",
                        file: "lecture_4_21.pdf",
                      },
                      {
                        name: "Amrik's Lecture 5",
                        file: "lecture_5.pdf",
                      },
                      {
                        name: "Amrik's Lecture 5 (2021)",
                        file: "lecture_5_21.pdf",
                      },
                      {
                        name: "Amrik's Lecture 6",
                        file: "lecture_6.pdf",
                      },
                      {
                        name: "Amrik's Lecture 6 (2021)",
                        file: "lecture_6_21.pdf",
                      },
                      {
                        name: "Amrik's Lecture 7 (2021)",
                        file: "lecture_7_21.pdf",
                      },
                      {
                        name: "Amrik's Lecture 8 (2021)",
                        file: "lecture_8.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/engg-math/mod2/${doc.file}`}
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
                    Module 3 Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Sanjay's Lecture 1",
                        file: "lecture_1_sanjay.pdf",
                      },
                      {
                        name: "Amrik's Lecture 1",
                        file: "lecture_1.pdf",
                      },
                      {
                        name: "Lecture 1 Matlab Routine",
                        file: "lecture_1_matlab.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 2",
                        file: "lecture_2_sanjay.pdf",
                      },
                      {
                        name: "Amrik's Lecture 2",
                        file: "lecture_2.pdf",
                      },
                      {
                        name: "Lecture 2 Matlab Routine",
                        file: "lecture_2_matlab.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 3",
                        file: "lecture_3_sanjay.pdf",
                      },
                      {
                        name: "Amrik's Lecture 3",
                        file: "lecture_3.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 4",
                        file: "lecture_4_sanjay.pdf",
                      },
                      {
                        name: "Amrik's Lecture 4",
                        file: "lecture_4.pdf",
                      },
                      {
                        name: "Sanjay's Lecture 5",
                        file: "lecture_5_sanjay.pdf",
                      },
                      {
                        name: "Amrik's Lecture 5",
                        file: "lecture_5.pdf",
                      },
                      {
                        name: "Amrik's Lecture 6",
                        file: "lecture_6.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/engg-math/mod3/${doc.file}`}
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
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Semester Projects
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Project 1",
                        file: "project_1.pdf",
                      },
                      {
                        name: "Project 1 Grading Rubric",
                        file: "project_1_grading.pdf",
                      },
                      {
                        name: "Project 2",
                        file: "project_2.pdf",
                      },
                      {
                        name: "Project 2 Grading Rubric",
                        file: "project_2_grading.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/engg-math/projects/${doc.file}`}
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
                    Sample Projects
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Warm-Up Project 1",
                        file: "wu_project_1.pdf",
                      },
                      {
                        name: "Warm-Up Project 1 Grading Rubric",
                        file: "wu_project_1_grading.pdf",
                      },
                      {
                        name: "Sample Project 1",
                        file: "sample_project_1.pdf",
                      },
                      {
                        name: "Sample Project 1 Grading Rubric",
                        file: "sample_project_1_grading.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/engg-math/projects/${doc.file}`}
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
                    Worksheets
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Worksheet 1",
                        file: "w1.pdf",
                      },
                      {
                        name: "Worksheet 1 Solutions",
                        file: "w1_soln.pdf",
                      },
                      {
                        name: "Worksheet 2",
                        file: "w2.pdf",
                      },
                      {
                        name: "Worksheet 2 Solutions",
                        file: "w2_soln.pdf",
                      },
                      {
                        name: "Worksheet 3",
                        file: "w3.pdf",
                      },
                      {
                        name: "Worksheet 3 Solutions",
                        file: "w3_soln.pdf",
                      },
                      {
                        name: "Worksheet 4",
                        file: "w1.pdf",
                      },
                      {
                        name: "Worksheet 4 Solutions",
                        file: "w4_soln.pdf",
                      },
                      {
                        name: "Worksheet 5",
                        file: "w5.pdf",
                      },
                      {
                        name: "Worksheet 5 Solutions",
                        file: "w5_soln.pdf",
                      },
                      {
                        name: "Worksheet 6",
                        file: "w6.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/engg-math/worksheets/${doc.file}`}
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
                    Lab Worksheets
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Worksheet 1",
                        file: "w1.pdf",
                      },
                      {
                        name: "Worksheet 1 Solutions",
                        file: "w1_soln.pdf",
                      },
                      {
                        name: "Worksheet 2",
                        file: "w2.pdf",
                      },
                      {
                        name: "Worksheet 2 Solutions",
                        file: "w2_soln.pdf",
                      },
                      {
                        name: "Worksheet 3",
                        file: "w3.pdf",
                      },
                      {
                        name: "Worksheet 3 Solutions",
                        file: "w3_soln.pdf",
                      },
                      {
                        name: "Worksheet 4",
                        file: "w1.pdf",
                      },
                      {
                        name: "Worksheet 4 Solutions",
                        file: "w4_soln.pdf",
                      },
                      {
                        name: "Worksheet 5",
                        file: "w5.pdf",
                      },
                      {
                        name: "Worksheet 5 Solutions",
                        file: "w5_soln.pdf",
                      },
                      {
                        name: "Worksheet 6",
                        file: "w6.pdf",
                      },
                      {
                        name: "Worksheet 6 Solutions",
                        file: "w6_soln.pdf",
                      },
                      {
                        name: "Worksheet 7",
                        file: "w7.pdf",
                      },
                      {
                        name: "Worksheet 7 Solutions",
                        file: "w7_soln.pdf",
                      },
                      {
                        name: "Code For Euler's Method (rk1) & dsolve",
                        file: "euler.pdf",
                      },
                      {
                        name: "Code For rk2, rk4, ode45",
                        file: "ode45.pdf",
                      },
                      {
                        name: "End Term Exam Study Compendium",
                        file: "endterm.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/engg-math/lab/${doc.file}`}
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
                    <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
                    Other Materials
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <a
                      href="https://vod.video.cornell.edu/media/Calculus+review+for+differential+equations.++Nov+23%2C+2023/1_r5oeokb7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                    >
                      <SquareArrowOutUpRight className="w-5 h-5" />
                      Andy's Calculus Review
                    </a>
                    <a
                      href="https://homepages.bluffton.edu/~nesterd/apps/slopefields.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                    >
                      <SquareArrowOutUpRight className="w-5 h-5" />
                      Andy's Lecture 7.1 & 7.2
                    </a>
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

export default EnggMathInAction;
