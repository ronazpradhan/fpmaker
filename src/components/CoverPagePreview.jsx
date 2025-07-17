import React from 'react';

function CoverPagePreview({ downloadPdfUrl, generatedDisplayData, isLoading }) {
  const isReadyForDownload = downloadPdfUrl && !isLoading;

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-surface rounded-lg shadow-xl shadow-black/30 border border-border p-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-6">
        PDF Status
      </h2>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[200px] text-primary">
          <svg className="animate-spin h-10 w-10 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-xl font-semibold text-primary">Generating PDF...</p>
          <p className="text-sm text-text-secondary mt-2">This might take a few seconds.</p>
        </div>
      ) : isReadyForDownload && generatedDisplayData ? (
        <>
          <p className="text-text-secondary mb-4">
            A PDF for <span className="font-bold text-text-primary">{generatedDisplayData.studentName}</span>: <br />
            <span className="font-bold text-text-primary">{generatedDisplayData.subjectDisplay}</span> <br />
            with <span className="font-bold text-text-primary">{generatedDisplayData.professorName}</span> <br />
            is ready.
          </p>
          <p className="text-success text-lg font-bold mb-6">PDF created successfully!</p>
          <a
            href={downloadPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-primary hover:bg-primary-hover text-text-primary font-bold py-3 px-6 rounded-lg text-base
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface
                       transition duration-300 ease-in-out mt-4 block"
          >
            Download PDF
          </a>
        </>
      ) : (
        <div className="bg-background text-text-secondary text-center p-8 rounded-lg border border-border italic w-full flex items-center justify-center min-h-[200px]">
          <p>Select a student and subject, then click 'Generate PDF'.</p>
        </div>
      )}
    </div>
  );
}

export default CoverPagePreview;