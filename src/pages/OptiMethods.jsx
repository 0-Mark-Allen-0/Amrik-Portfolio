import React from "react";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  DownloadCloud,
  Users,
  SquareArrowOutUpRight,
  SquarePlay,
} from "lucide-react";
import { Link } from "react-router-dom";

const OptiMethods = () => {
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
            Optimization Methods
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            All documents on this page are PDFs and are readily available for
            viewing, just click on them!
          </p>

          <div className="space-y-6">
            {/* Two Column Layout for Notes and Materials */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                {/* Course Instructors Section */}
                <section className="mt-6">
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
                      <span className="font-bold">Viraj D'Souza</span>{" "}
                      (viraj.dsouza@plaksha.edu.in)
                    </p>
                  </div>
                </section>

                {/* Course Syllabus Section */}
                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 text-yellow-600 mr-2" />
                    Course Syllabus
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <a
                      href="/pdfs/optimization/brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                    >
                      <DownloadCloud className="w-5 h-5" />
                      Download Course Brochure (PDF)
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=5VgYgcb1HV4&list=PLfGixC1ScdE44AZkuo5lDEXw1JopQNsox&index=4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                    >
                      <SquarePlay className="w-5 h-5" />
                      Computational Methods & Optimization Video Playlist
                    </a>
                  </div>
                </section>

                {/* Lecture Notes Section */}
                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Lecture Notes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Vector calculus fundamentals - set 1",
                        file: "s1.pdf",
                      },
                      {
                        name: "Vector calculus fundamentals - set 2",
                        file: "s2.pdf",
                      },
                      {
                        name: "Calculus based optimization notes (here)",
                        file: "s3.pdf",
                      },
                      {
                        name: "The simplex method for LPP - geometry & algebra",
                        file: "s4.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/optimization/${doc.file}`}
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

                {/* Python Code Repository Section */}
                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Python Code Repository
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Root finding techniques: script",
                        file: "main_script_root_finding.txt",
                      },
                      {
                        name: "Root finding techniques: functions",
                        file: "my_root_finding_Module.txt",
                      },
                      {
                        name: "Roots with multiplicity: functions",
                        file: "my_Root_Finding_ComplexPlane_Module.txt",
                      },
                      {
                        name: "Gradient descent algorithm (1D): code",
                        file: "Grad_Descent_1D-prog1.rtf",
                      },
                      {
                        name: "BATCH Gradient descent algorithm",
                        file: "Grad_Descent_Incremental-BATCH.rtf",
                      },
                      {
                        name: "STOCHASTIC Gradient descent algorithm: code",
                        file: "Grad_Descent_Stochastic_LSreqression_v2.rtf",
                      },
                      {
                        name: "BATCH Gradient descent method for solving systems of equations: code",
                        file: "BGD_solvingSystems.zip",
                      },
                      {
                        name: "Simplex method (matrix form): code",
                        file: "simplex_module.txt",
                      },
                      {
                        name: "Main script for LPP",
                        file: "main_LPP_matSimplex.txt",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/optimization/${doc.file}`}
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

              {/* Right Column */}
              <div>
                {/* Worksheets Section */}
                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Worksheets
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Practice problems: Gradient Descent Method",
                        file: "w1.pdf",
                      },
                      {
                        name: "Practice problems: LPP (graphical method)",
                        file: "w2.pdf",
                      },
                      {
                        name: "Practice problems: BIP (Branch and Bound approach)",
                        file: "w3.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/optimization/${doc.file}`}
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

                {/* Projects Section */}
                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Projects
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Project 1",
                        file: "p1.pdf",
                      },
                      {
                        name: "Project 1 Rubric",
                        file: "p1-rubric.pdf",
                      },
                      {
                        name: "Project 2",
                        file: "p2.pdf",
                      },
                      {
                        name: "Project 2 Rubric",
                        file: "p2-rubric.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/optimization/${doc.file}`}
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

                {/* Bulletin Section */}
                <section className="mt-6 p-6 bg-gray-50 border-l-4 border-yellow-500 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <BookOpen className="w-6 h-6 mr-3 text-yellow-600" />
                    Bulletin
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-xl font-medium text-gray-800 mb-3">
                      Mid-Sem Exam Preparation: Practice Problems
                    </h4>
                    <p className="text-base text-gray-700 font-semibold mb-2">
                      Numerical analysis by Burden and Faires (9th edition)
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>
                        <span className="font-medium">Bisection</span>
                        <ul className="list-disc list-inside ml-6">
                          <li>Book page: 54</li>
                          <li>Practice set 2.1: 1, 3, 4</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">Fixed Point</span>
                        <ul className="list-disc list-inside ml-6">
                          <li>Book page: 65</li>
                          <li>Practice set 2.2: 3, 5, 7</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">Newton & Secant</span>
                        <ul className="list-disc list-inside ml-6">
                          <li>Book Page: 75</li>
                          <li>Practice set 2.3: 1, 5, 6, 13</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">Multiple Roots</span>
                        <ul className="list-disc list-inside ml-6">
                          <li>Book Page: 85</li>
                          <li>Practice set 2.4: 2, 4, 6, 7</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">
                          Trapezoidal & Simpsons
                        </span>
                        <ul className="list-disc list-inside ml-6">
                          <li>Book Page: 202</li>
                          <li>Practice set 4.3: 1, 5, 9</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">Gaussian Quadrature</span>
                        <ul className="list-disc list-inside ml-6">
                          <li>Book Page: 234</li>
                          <li>
                            Practice set 4.7: 1, 5 (in case you really want to
                            test yourself if you got GQ)
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p className="text-base text-gray-700 mt-3">
                      For **vector calculus**, practice all solved problems from
                      ch 14 of **Thomas' Calculus by Hass et. al. (15th
                      edition)**.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-3">
                      Quiz-1 Preparation: Practice Problems
                    </h4>
                    <p className="text-base text-gray-700 font-semibold mb-2">
                      Thomas' Calculus, Early Transcendentals, 13th Edition.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>
                        Section 14.7 (pp 851-853), solved problems 3, 4, 6
                      </li>
                      <li>Ex 14.7 (pg. 855) - 10, 20, 32</li>
                      <li>
                        Section 14.8, Ex 14.8 (pp. 864-865) - 3, 15, 22, 29
                      </li>
                    </ul>
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

export default OptiMethods;
