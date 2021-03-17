import React from 'react';
import PropTypes from 'prop-types';
import { pdfStyles, borderColor, blueColor, mediumGrayColor } from './PdfStyle';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { Github } from './Github';

const style = StyleSheet.create({
  headerSection: {
    borderColor: borderColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 30
  },
  leftCol: {
    flexBasis: '80%',
    paddingRight: 20
  },
  byline: {
    fontSize: 10,
    paddingBottom: 10,
    color: mediumGrayColor
  },
  name: {
    fontSize: 30,
    fontFamily: 'Times-Roman',
  },
  address: {
    fontSize: 10
  },
  phone: {
    fontFamily: 'Helvetica-Bold'
  },
  email: {
    color: blueColor,
    fontFamily: 'Helvetica-Bold'
  },
});

export const Header = ({ info: { 
  name, 
  byline,
  phoneNumber, 
  description,
  personalGithub, 
  companyGithub, 
  addressLine1,
  addressLine2,
  cityStateZip,
  email
}}) => (
  <View style={style.headerSection}>
    <View style={style.leftCol}>
      <Text style={style.name}>{name}</Text>
      <Github companyGithub={companyGithub} personalGithub={personalGithub} />
      <Text style={style.byline}>{byline}</Text>
      <Text>{description}</Text>
    </View>
    <View style={style.address}>
      <Text>{addressLine1}</Text>
      <Text>{addressLine2}</Text>
      <Text>{cityStateZip}</Text>
      <Text style={style.phone}>{phoneNumber}</Text>
      <Text style={style.email}>{email}</Text>
    </View>
  </View>
);

Header.propTypes = {
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  description: PropTypes.string,
  byline: PropTypes.string,
  personalGithub: PropTypes.string,
  companyGithub: PropTypes.string,
  addressLine1: PropTypes.string,
  addressLine2: PropTypes.string,
  cityStateZip: PropTypes.string
};
