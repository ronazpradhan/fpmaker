import React from 'react';

function CoverPageGenerator({
  studentNames, selectedStudentName, setSelectedStudentName,
  subjectList, selectedSubjectCode, setSelectedSubjectCode,
  onGeneratePdf, isLoading
}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudentName || !selectedSubjectCode) {
      alert('Please make both student and subject selections!');
      return;
    }
    onGeneratePdf();
  };

  return (
    <div className="w-full max-w-md md:max-w-xl lg:max-w-3xl bg-surface p-8 rounded-xl shadow-xl shadow-black/30 border border-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="studentSelect" className="block text-text-secondary text-base font-medium mb-2">
            Select Student
          </label>
          <div className="relative">
            <select
              id="studentSelect"
              value={selectedStudentName}
              onChange={(e) => setSelectedStudentName(e.target.value)}
              className="w-full p-4 bg-background border border-border rounded-lg text-text-primary
                       focus:outline-none focus:ring-3 focus:ring-primary focus:border-primary
                       transition duration-300 ease-in-out text-lg appearance-none"
              required
              disabled={isLoading}
            >
              <option value="" disabled>Select Student</option>
              {studentNames.map((student) => (
                <option key={student} value={student}>
                  {student}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary opacity-70">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="subjectSelect" className="block text-text-secondary text-base font-medium mb-2">
            Choose Subject
          </label>
          <div className="relative">
            <select
              id="subjectSelect"
              value={selectedSubjectCode}
              onChange={(e) => setSelectedSubjectCode(e.target.value)}
              className="w-full p-4 bg-background border border-border rounded-lg text-text-primary
                       focus:outline-none focus:ring-3 focus:ring-primary focus:border-primary
                       transition duration-300 ease-in-out text-lg appearance-none"
              required
              disabled={isLoading}
            >
              <option value="" disabled>Select Subject</option>
              {subjectList.map((subj) => (
                <option key={subj.code} value={subj.code}>
                  {subj.name} ({subj.code}) - {subj.professor}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary opacity-70">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-hover text-text-primary font-bold py-4 px-4 rounded-lg text-lg
                     shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-primary focus:ring-offset-3 focus:ring-offset-surface
                     transition duration-300 ease-in-out transform hover:-translate-y-0.5
                     flex items-center justify-center space-x-3"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Generating PDF...</span>
            </div>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Generate PDF</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default CoverPageGenerator;