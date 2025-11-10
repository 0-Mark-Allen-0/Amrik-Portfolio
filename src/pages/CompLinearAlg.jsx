import React from "react";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  DownloadCloud,
  Users,
  SquareArrowOutUpRight,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const CompLinearAlg = () => {
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
            Computational Linear Algebra
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
                  <span className="font-bold">Sakshi Jaiswal</span>{" "}
                  (sakshi.jaiswal@plaksha.edu.in)
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
                  href="/pdfs/complinalg/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Course Brochure (PDF)
                </a>
                <a
                  href="/pdfs/complinalg/etiquette.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Course Etiquette (PDF)
                </a>
                <a
                  href="/pdfs/complinalg/python.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Download Python Tutorial (PDF)
                </a>
                <a
                  href="/pdfs/complinalg/matlab.pdf"
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
                    Course Materials
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {/* Data for this section, now including title, notes, code, and recording */}
                    {[
                      {
                        title: "Set 1 - Spring-Mass Dynamical System",
                        notes: "1-notes.pdf",
                        code: "1-code.zip",
                        recording:
                          "https://www.youtube.com/watch?v=0s2wQYoolh8",
                      },
                      {
                        title: "Set 2 - Spring-Mass Dynamical System",
                        notes: "",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=lJsRImfbf2w",
                      },
                      {
                        title: "Set 3 - Vector Spaces",
                        notes: "3-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=lJsRImfbf2w",
                      },
                      {
                        title:
                          "Set 4 - Linear Independence | Span | Bases of Vector Spaces",
                        notes: "4-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=kwxzO-YK2ac&feature=youtu.be",
                      },
                      {
                        title: "Set 5 - Row & Column Pictures of Ax = b",
                        notes: "5-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=B05F3OBfeOk&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 6 - Column Space of a Matrix | Geometrical Interpretation",
                        notes: "6-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=Pg-Aq6QLuJ0&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 7 - RREF | Solving Ax = b Using GJ Method | Pivots, Rank",
                        notes: "7-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=ljHXtAYvnsA&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 8 - Null Space of a Matrix | Rank-Nullity Theorem",
                        notes: "8-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=m9SlyDRGFSE%E2%80%8B&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 9 - Banking & Accounting System as a Vector Space",
                        notes: "9-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=tq-YXjN7d7g&feature=youtu.be",
                      },
                      {
                        title: "Set 10 - Col(A) ≡ Col(AA')",
                        notes: "10-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=gIsW46m4GY0",
                      },
                      {
                        title:
                          "Set 11 - Linear Transformation | Inverse of a Matrix (GJ Method)",
                        notes: "11-notes-1.pdf",
                        code: "11-notes-2.pdf",
                        recording:
                          "https://www.youtube.com/watch?v=gIsW46m4GY0",
                      },
                      {
                        title: "Set 12 - Examples of linear transformation",
                        notes: "12-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=sZHsw6QTRm4&feature=youtu.be",
                      },
                      {
                        title: "Set 13 - Change of bases matrices",
                        notes: "13-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=bXcxcRHDWpg&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 14 - Abstraction | Introduction to eigenspace of a matrix",
                        notes: "14-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=_2GDZ5q8WEQ&feature=youtu.be",
                      },
                      {
                        title: "Set 15 - Eigenvalues and eigenvectors",
                        notes: "15-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=IHfU4BqHfSA&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 16 - Similarity transformation | Diagonalisable matrices ",
                        notes: "16-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=WAAZ9tXgqUY",
                      },
                      {
                        title:
                          "Set 17 - Similarity transformation | Diagonalisable matrices ",
                        notes: "17-notes-1.pdf",
                        code: "17-notes-2.pdf",
                        recording:
                          "https://www.youtube.com/watch?v=xWhbeL2bVg4&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 18 - Similarity transformation | Diagonalisable matrices ",
                        notes: "",
                        code: "18-notes.rtf",
                        recording:
                          "https://www.youtube.com/watch?v=d1cy7rURacU",
                      },
                      {
                        title:
                          "Set 19 - Orthogonal projection | Orthonormal (ON) bases ",
                        notes: "19-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=wiSYsYa4Lmg&feature=youtu.be",
                      },
                      {
                        title: "Set 20 - Gram-Schmidt procedure for ON bases",
                        notes: "20-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=tPdfXnFrIvg&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 21 - QR factorization and Gram-Schmidt process",
                        notes: "21-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=I9Q0kM5xxH0&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 22 - Matrix model of least squares regression",
                        notes: "22-notes.pdf",
                        code: "22-code.txt",
                        recording:
                          "https://www.youtube.com/watch?v=FtEMk-FCP3w&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 23 - Application of QR factorization for least squares regression | Norms of vectors",
                        notes: "23-notes.pdf",
                        code: "23-code.txt",
                        recording:
                          "https://www.youtube.com/watch?v=pjC1ZDO3P7w&feature=youtu.be",
                      },
                      {
                        title:
                          "Set 24 - Jacobi and Gauss-Seidel iterative method",
                        notes: "24-notes.pdf",
                        code: "",
                        recording:
                          "https://www.youtube.com/watch?v=thMe4JOcdsk",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
                      >
                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <div className="space-y-1">
                          {item.notes && (
                            <a
                              href={`/pdfs/complinalg/${item.notes}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline text-base"
                            >
                              <DownloadCloud className="w-4 h-4" />
                              Notes (PDF)
                            </a>
                          )}
                          {item.code && (
                            <a
                              href={`/pdfs/complinalg/${item.code}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline text-base"
                            >
                              <DownloadCloud className="w-4 h-4" />
                              Code
                            </a>
                          )}
                          {item.recording && (
                            <a
                              href={item.recording}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline text-base"
                            >
                              <SquareArrowOutUpRight className="w-4 h-4" />
                              Recording
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column - Projects, Worksheets, Lab Worksheets, Other Materials */}
              <div>
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Worksheets
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {/* Data for Semester Projects with new fields */}
                    {[
                      {
                        title: "Week 2 - Basic matrix operations",
                        notes1: "w2-1.pdf",
                        notes2: "w2-2.pdf",
                        notes3: "w2-3.pdf",
                        notes4: "w2-4.pdf",
                        notes5: "w2-5.pdf",
                      },
                      {
                        title: "Week 3 - Vector space",
                        notes1: "w3-1.pdf",
                        notes2: "w3-2.pdf",
                        notes3: "w3-3.pdf",
                        notes4: "w3-4.pdf",
                        notes5: "",
                      },
                      {
                        title: "Week 4 - Bases of vector spaces",
                        notes1: "w4-1.pdf",
                        notes2: "w4-2.pdf",
                        notes3: "w4-3.pdf",
                        notes4: "w4-4.pdf",
                        notes5: "",
                      },
                      {
                        title:
                          "Week 5 - RREF | Rank of a matrix | Row transformations",
                        notes1: "w5-1.pdf",
                        notes2: "",
                        notes3: "",
                        notes4: "",
                        notes5: "",
                      },
                      {
                        title:
                          "Week 6 - RREF | Bases of column & null spaces of a matrix",
                        notes1: "w6-1.pdf",
                        notes2: "",
                        notes3: "",
                        notes4: "",
                        notes5: "",
                      },
                      {
                        title:
                          "Week 7 - Echelon form | Gauss-Jordan elimination",
                        notes1: "w7-1.pdf",
                        notes2: "",
                        notes3: "",
                        notes4: "",
                        notes5: "",
                      },
                      {
                        title:
                          "Week 11 - Eigenvalues and Eigenvectors as a Linear Transformation",
                        notes1: "w11-1.pdf",
                        notes2: "",
                        notes3: "",
                        notes4: "",
                        notes5: "",
                      },
                      {
                        title: "Week 12 - Power method to find evs and EVs",
                        notes1: "w12-1.pdf",
                        notes2: "",
                        notes3: "",
                        notes4: "",
                        notes5: "",
                      },
                      {
                        title:
                          "Week 14 - Power method and orthogonal projections",
                        notes1: "w14-1.pdf",
                        notes2: "",
                        notes3: "",
                        notes4: "",
                        notes5: "",
                      },
                      {
                        title: "Week 15 - Gram-Schmidt and QR factorisation",
                        notes1: "w15-1.pdf",
                        notes2: "",
                        notes3: "",
                        notes4: "",
                        notes5: "",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
                      >
                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <div className="space-y-1">
                          {item.notes1 && (
                            <a
                              href={`/pdfs/complinalg/${item.notes1}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline text-base"
                            >
                              <DownloadCloud className="w-4 h-4" />
                              File 1
                            </a>
                          )}
                          {item.notes2 && (
                            <a
                              href={`/pdfs/complinalg/${item.notes2}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline text-base"
                            >
                              <DownloadCloud className="w-4 h-4" />
                              File 2
                            </a>
                          )}
                          {item.notes3 && (
                            <a
                              href={`/pdfs/complinalg/${item.notes3}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline text-base"
                            >
                              <DownloadCloud className="w-4 h-4" />
                              File 3
                            </a>
                          )}
                          {item.notes4 && (
                            <a
                              href={`/pdfs/complinalg/${item.notes4}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline text-base"
                            >
                              <DownloadCloud className="w-4 h-4" />
                              File 4
                            </a>
                          )}
                          {item.notes5 && (
                            <a
                              href={`/pdfs/complinalg/${item.notes5}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline text-base"
                            >
                              <DownloadCloud className="w-4 h-4" />
                              File 5
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    Question Papers
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Sample practice problems for mid-sem exam",
                        file: "qp1.pdf",
                      },
                      {
                        name: "Mid-term examination paper",
                        file: "qp-midterm.pdf",
                      },
                      {
                        name: "Sample practice problems for end-sem exam",
                        file: "qp-2.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/complinalg/${doc.file}`}
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
                    Quizzes
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Quiz 1 - L1",
                        file: "q1l1.pdf",
                      },
                      {
                        name: "Quiz 1 - L2",
                        file: "q1l2.pdf",
                      },
                      {
                        name: "Quiz 2 - L1",
                        file: "q2l1.pdf",
                      },
                      {
                        name: "Quiz 2 - L2",
                        file: "q2l2.pdf",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/pdfs/complinalg/${doc.file}`}
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
                    Gen-AI Friendly Assessments
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                    {[
                      {
                        name: "Computational Assessment-L1",
                        file: "/pdfs/complinalg/a1.pdf",
                      },
                      {
                        name: "Computational Assessment-L1 Soln.",
                        file: "/pdfs/complinalg/a1-soln.pdf",
                      },
                      {
                        name: "Computational Assessment-L1 Python Soln.",
                        file: "/pdfs/complinalg/a1-py.pdf",
                      },
                      {
                        name: "Computational Assessment-L2",
                        file: "/pdfs/complinalg/ca2.pdf",
                      },

                      {
                        name: "Computational Assessment-L2 Python Soln.",
                        file: "/pdfs/complinalg/ca2-py.pdf",
                      },

                      {
                        name: "Phenomenology Assessment L2 (Multi-modal Cue)",
                        file: "/videos/phen-l2.mp4",
                      },
                      {
                        name: "Phenomenology Assessment L2 (Questionnaire)",
                        file: "/pdfs/complinalg/a2.pdf",
                      },
                      {
                        name: "Phenomenology Assessment L1 (Multi-modal Cue)",
                        file: "https://www.youtube.com/watch?v=FsI4tC9rKDw",
                      },
                      {
                        name: "Phenomenology Assessment L1 (Questionnaire)",
                        file: "/pdfs/complinalg/a3.pdf",
                      },
                      {
                        name: "Phenomenology Assessment L1 Python Code",
                        file: "/pdfs/complinalg/a3-py.txt",
                      },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.file}
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
                    <Video className="w-5 h-5 text-yellow-600 mr-2" />
                    Phenomenology Assessment 1 - Session Snippet
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <video
                        controls
                        muted
                        className="w-full h-auto rounded-lg"
                        preload="metadata"
                      >
                        <source src="/phen-l1.mp4" type="video/mp4" />
                        <source src="/phen-l1.webm" type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
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

export default CompLinearAlg;
