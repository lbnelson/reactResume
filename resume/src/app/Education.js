import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import { pdfStyles } from './PdfStyle';
import { Projects } from './Projects';

export const Education = ({ education: { college, degree, year, majors, awards, projects} }) => {  
  return (
    <View style={pdfStyles.border}>
      <View>
        <Text style={pdfStyles.subHeader}>{college} - {degree}, {year}</Text>
        <Text style={pdfStyles.subSubHeader}>Majors: {majors}</Text>
        <Text style={pdfStyles.emphasis}>{awards}</Text>
      </View>
      <Projects projects={projects} />
    </View>);
}

Education.propTypes = {
  education: PropTypes.shape({
    college: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    majors: PropTypes.string.isRequired,
    awards: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technology: PropTypes.string.isRequired,
      awards: PropTypes.string
    }))
  })
};
