import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import CoverPageGenerator from './components/CoverPageGenerator';
import CoverPagePreview from './components/CoverPagePreview';
import Footer from './components/Footer';
import InfoModal from './components/InfoModal';

const subjectList = [
  { code: 'MTH 168', name: 'Mathematics-II', professor: 'Hari Pokhrel', filePart: 'mathsii' },
  { code: 'CSC 162', name: 'Microprocessor', professor: 'Santosh Rauniyar', filePart: 'mp' },
  { code: 'CSC 165', name: 'DS', professor: 'Sujan Sharma', filePart: 'ds' },
  { code: 'CSC 166', name: 'OOP', professor: 'Harendra Bist', filePart: 'cpp' },
  { code: 'CSC 167', name: 'Microprocessor', professor: 'Er. Santosh Rauniyar', filePart: 'mp' },
  { code: 'STA 169', name: 'Statistics-I', professor: 'Prabin Gyawali', filePart: 'stats' },
];

const studentNames = [
  'Aakriti Maharjan',
  'Ronaj Pradhan',
];

function App() {
  const [selectedStudentName, setSelectedStudentName] = useState(studentNames[0] || '');
  const [selectedSubjectCode, setSelectedSubjectCode] = useState(subjectList[0]?.code || '');
  const [isLoading, setIsLoading] = useState(false);
  const [finalDownloadUrl, setFinalDownloadUrl] = useState(null);
  const [generatedDisplayData, setGeneratedDisplayData] = useState(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const { currentSubjectDisplayName, currentProfessorName } = useMemo(() => {
    const selected = subjectList.find(s => s.code === selectedSubjectCode);
    return {
      currentSubjectDisplayName: selected ? `${selected.name} (${selected.code})` : '____________________',
      currentProfessorName: selected ? selected.professor : '____________________',
    };
  }, [selectedSubjectCode]);

  const generateAndSetDownloadUrl = useCallback(() => {
    setFinalDownloadUrl(null);
    setGeneratedDisplayData(null);
    setIsLoading(true);

    const studentFolder = selectedStudentName.replace(/ /g, '%20');
    const subjectFile = subjectList.find(s => s.code === selectedSubjectCode)?.filePart;

    let url = null;
    if (studentFolder && subjectFile) {
      const fileNamePrefix = selectedStudentName === 'Aakriti Maharjan' ? 'AAKRITI-' : 'Ronaz-';
      url = `/students/${studentFolder}/${fileNamePrefix}${subjectFile}.pdf`;
    }

    const dataToDisplay = {
      studentName: selectedStudentName,
      subjectDisplay: currentSubjectDisplayName,
      professorName: currentProfessorName,
    };

    setTimeout(() => {
      setFinalDownloadUrl(url);
      setGeneratedDisplayData(dataToDisplay);
      setIsLoading(false);
    }, 1500);
  }, [selectedStudentName, selectedSubjectCode, currentSubjectDisplayName, currentProfessorName]);

  const handleClearAll = () => {
    setSelectedStudentName(studentNames[0] || '');
    setSelectedSubjectCode(subjectList[0]?.code || '');
    setFinalDownloadUrl(null);
    setGeneratedDisplayData(null);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary font-sans overflow-hidden">
      <Header onInfoClick={() => setIsInfoModalOpen(true)} />

      <main className="flex-grow flex flex-col md:flex-row items-start justify-center
                       gap-6 md:gap-12 px-4 py-4 md:px-8 lg:px-12">

        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
          <CoverPageGenerator
            studentNames={studentNames}
            selectedStudentName={selectedStudentName}
            setSelectedStudentName={setSelectedStudentName}
            subjectList={subjectList}
            selectedSubjectCode={selectedSubjectCode}
            setSelectedSubjectCode={setSelectedSubjectCode}
            onGeneratePdf={generateAndSetDownloadUrl}
            isLoading={isLoading}
            onClearAll={handleClearAll}
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center md:justify-start">
          <CoverPagePreview
            downloadPdfUrl={finalDownloadUrl}
            generatedDisplayData={generatedDisplayData}
            isLoading={isLoading}
          />
        </div>
      </main>

      <Footer />
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
    </div>
  );
}

export default App;