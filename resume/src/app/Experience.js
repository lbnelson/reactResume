import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import { pdfStyles } from './PdfStyle';
import { Projects } from './Projects';

export const Experience = ({ experience: { projects, company, date, position } }) => {    
  return (
    <View style={pdfStyles.border}>
      <Text style={pdfStyles.subHeader}>{company} — {position}</Text>
      {!!date && <Text style={pdfStyles.subSubHeader}>
        {date}
      </Text>}
      <Projects projects={projects} />
    </View>);
}

Experience.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technology: PropTypes.string.isRequired
    }))
  })
};
