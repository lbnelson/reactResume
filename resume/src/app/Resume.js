import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ErrorBoundary from './ErrorBoundary';
import PDF from './Pdf';

const Resume = ({ data }) => {
  return (
    <ErrorBoundary message="Invalid data provided in JSON file.">
      <PDFDownloadLink document={<PDF data={data} />} fileName="resume.pdf">
        {({ blob, url, loading, error }) => {
          if (error) {
            throw Error('Error generating pdf');
          }

          return (loading ? 'Loading document...' : 'Download now!')}
        }
      </PDFDownloadLink>

      <PDFViewer>
        <PDF data={data} />
      </PDFViewer>
    </ErrorBoundary>
  );
};

export default Resume;