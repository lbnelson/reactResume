import { StyleSheet, Font } from '@react-pdf/renderer';
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

export const borderColor = '#d4d4d4';
export const interpolatedColor = '#0c3575';
export const stringColor = '#804400';
export const variableColor = '#2d402f';
export const mediumGrayColor = '#525252';

const subHeaderColor = '#525252';
const subSubHeaderColor = '#6e6e6e';
const fontColor = '#141414';
export const blueColor = '#006edb';

export const pdfStyles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: fontColor,
    lineHeight: 1.3
  },
  header: {
    fontSize: 12,
    color: blueColor,
    textTransform: 'uppercase',
    paddingTop: 10
  },
  subHeader: {
    fontSize: 14,
    fontFamily: 'Times-Bold',
  },
  subSubHeader: {
    color: subSubHeaderColor,
    fontSize: 10,
    textTransform: 'uppercase'
  },
  line: {
    color: borderColor
  },
  content: {
    flexBasis: '80%'
  },
  body: {
    fontSize: 12
  },
  row: {
    flexDirection: 'row',
  },
  border: {
    borderLeftWidth: 3,
    marginLeft: -6,
    marginVertical: 8,
    borderRadius: 4,
    borderColor: borderColor,
    paddingHorizontal: 5,
  },
  emphasis: {
    fontSize: 10
  }
});
