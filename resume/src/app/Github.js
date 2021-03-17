import React from 'react';
import PropTypes from 'prop-types';
import { interpolatedColor, stringColor, variableColor } from './PdfStyle';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  code: {
    fontFamily: 'Courier-Bold',
    fontSize: 12,
  },
  interpolated: {
    color: interpolatedColor,
  },
  codeString: {
    color: stringColor,
  },
  var: {
    color: variableColor
  },
});

export const Github = ({ companyGithub, personalGithub }) => (
  <Text style={styles.code}>
    <Text style={styles.codeString}>`github.com/</Text>
    <Text style={styles.interpolated}>{'${'}</Text>
    <Text style={styles.var}>isWork</Text>
    <Text style={styles.plain}>{' ? '}</Text>
    <Text style={styles.codeString}>'{companyGithub}'</Text>
    <Text style={styles.plain}>{' : '}</Text>
    <Text style={styles.codeString}>'{personalGithub}'</Text>
    <Text style={styles.interpolated}>{'}'}</Text>
    <Text style={styles.codeString}>`</Text>
  </Text>
);

Github.propTypes = {
  companyGithub: PropTypes.string.isRequired,
  personalGithub: PropTypes.string.isRequired
};
