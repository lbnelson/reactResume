import React, { forwardRef } from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import roboto from '../style/Roboto/Roboto-Regular.ttf';
import sourceCodePro from '../style/Source_Code_Pro/SourceCodePro-MediumItalic.ttf';
import encodeSans from '../style/Encode_Sans/static/EncodeSansSemiExpanded-Regular.ttf';
import sourceSerifPro from '../style/Source_Serif_Pro/SourceSerifPro-Regular.ttf';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: roboto,
    }
  ],
});

Font.register({
  family: 'SourceCodePro',
  fonts: [
    {
      src: sourceCodePro
    }
  ]
});

Font.register({
  family: 'EncodeSans',
  fonts: [
    {
      src: encodeSans
    }
  ]
});

Font.register({
  family: 'SourceSerifPro',
  fonts: [
    {
      src: sourceSerifPro
    }
  ]
});

Font.registerHyphenationCallback(word => (
  [word]
));

const borderColor = '#d4d4d4';
const subHeaderColor = '#525252';
const subSubHeaderColor = '#6e6e6e';
const interpolatedColor = '#0c3575';
const stringColor = '#804400';
const variableColor = '#2d402f';
const fontColor = '#141414';

const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: fontColor
  },
  header: {
    fontSize: 16
  },
  subHeader: {
    fontSize: 12,
    color: subHeaderColor
  },
  subSubHeader: {
    color: subSubHeaderColor,
    fontSize: 10
  },
  line: {
    color: borderColor
  },
  headerSection: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: borderColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
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
  about: {
    padding: 10,
    fontSize: 12
  },
  separator: {
    backgroundColor: borderColor,
    height: 1,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 16,
    fontFamily: 'Times-Roman',
  },
  section: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  subSection: {
    paddingVertical: 5,
  },
  expRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  smallHeader: {
    fontSize: 14,
    color: subHeaderColor
  },
  body: {
    fontSize: 12
  },
  small: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  padding: {
    padding: 5
  },
  position: {
    fontFamily: 'Helvetica-Bold',
  },
  projDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noMargin: {
    marginHorizontal: 0
  },
  border: {
    borderLeftWidth: 3,
    marginLeft: -6,
    marginVertical: 4,
    borderRadius: 4,
    borderColor: borderColor,
    paddingHorizontal: 5,
  },
  tech: {
    paddingBottom: 3,
    flexBasis: '18%',
    textAlign: 'right',
  },
  desc: {
    flexBasis: '80%',
    paddingVertical: 4
  },
  projDesc: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
});

const PDF = ({ data }) => {
  const { info, education, skills, workExperience } = data;
  const { 
    name, 
    phoneNumber, 
    byline, 
    personalGithub, 
    companyGithub, 
    addressLine1,
    addressLine2, 
    cityStateZip, 
    about
  } = info;

  const { college, degree, capstone } = education;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.header}>{name}</Text>
            <Text style={styles.subHeader}>{byline}</Text>
            <Text style={styles.code}>
              <Text style={styles.codeString}>`github.com/</Text>
              <Text style={styles.interpolated}>{'${'}</Text>
              <Text style={styles.var}>personal</Text>
              <Text style={styles.plain}>{' ? '}</Text>
              <Text style={styles.codeString}>'{personalGithub}'</Text>
              <Text style={styles.plain}>{' : '}</Text>
              <Text style={styles.codeString}>'{companyGithub}'</Text>
              <Text style={styles.interpolated}>{'}'}</Text>
              <Text style={styles.codeString}>`</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.subSubHeader}>{phoneNumber}</Text>
            <Text style={styles.subSubHeader}>{addressLine1}</Text>
            <Text style={styles.subSubHeader}>{addressLine2}</Text>
            <Text style={styles.subSubHeader}>{cityStateZip}</Text>
          </View>
        </View>
        <Text style={styles.about}>{about}</Text>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.header}>Education</Text>
          <Text style={styles.subHeader}>{college}</Text>
          <Text>{degree}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Skills</Text>
          <View style={[ styles.row, styles.subHeader] }>
            {skills.map((skill, i) => i === skills.length - 1 ? 
              <Text key={skill}>{skill} </Text> :
              <Text key={skill}>{skill}, </Text>
            )}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Work Experience</Text>
          {workExperience.map((exp, i) => (
            <View style={styles.border}>
              <View style={styles.row}>
                <Text style={styles.smallHeader}>{exp.company}</Text>
                {!!exp.date && <Text style={[ styles.subSubHeader, styles.padding ]}>{exp.date}</Text>}
              </View>
              <View style={styles.expRow}>
                {exp.positions.map(pos => (
                  <View key={`${pos.title}-${pos.date}`}>
                    <Text style={styles.position}>{pos.title}</Text>
                    <Text style={styles.subSubHeader}>{pos.date}</Text>
                  </View>
                ))}
              </View>
              {exp.projects.map(proj => (
                  <View style={styles.subSection, styles.expRow} key={proj.title}> 
                    <View style={styles.desc}>
                      <Text style={styles.subHeader}>{proj.title}</Text>
                      <Text style={styles.body}>{proj.description}</Text>
                    </View>
                    <View style={styles.tech}>
                      <Text style={styles.small}>{proj.technology}</Text>
                    </View>
                  </View>
                ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDF;