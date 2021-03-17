import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { mediumGrayColor, pdfStyles } from './PdfStyle';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  title: {
    fontFamily: 'Times-Bold',
    fontSize: 12,
    color: mediumGrayColor,
    paddingTop: 10
  },
  body: {
    color: mediumGrayColor,
    fontSize: 12,
    fontFamily: 'Times-Roman'
  }
})

export const Projects = ({ projects }) => (<>
  {projects.map(proj => (
    <View style={pdfStyles.row} key={proj.title}> 
      <View style={pdfStyles.desc}>
        <Text style={style.title}>{proj.title} — {proj.technology}</Text>
        {!!proj.awards && <Text style={pdfStyles.emphasis}>{proj.awards}</Text>}
        <Text style={style.body}>{proj.description}</Text>
      </View>
    </View>
  ))}
  </>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    awards: PropTypes.string
  }))
};
