import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { SideList } from './SideList';
import { Experience } from './Experience';
import { Education } from './Education';
import { Header } from './Header';
import { pdfStyles } from './PdfStyle';

const PDF = ({ data: { 
  info, 
  education, 
  sideSections,
  workExperience  
}}) => {
  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <Header info={info} />
        <View style={pdfStyles.row}>
          <View style={pdfStyles.content}>
            <Text style={pdfStyles.header}>Work Experience</Text>
            {workExperience.map((experience) =>
              (<Experience key={`experience-${experience.company}`} experience={experience} />))}
            <Text style={pdfStyles.header}>Education</Text>
            <Education education={education} />
          </View>
        
          <View>
            {sideSections.map((section) => (
              <SideList items={section.items} title={section.title} key={`sideSection-${section.title}`} />
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;