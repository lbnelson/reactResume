import React from 'react';
import PropTypes from 'prop-types';
import { pdfStyles, mediumGrayColor } from './PdfStyle';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const style = StyleSheet.create({
  item: {
    fontFamily: 'Times-Roman',
    paddingTop: 5,
    color: mediumGrayColor,
    fontSize: 12
  }
});

export const SideList = ({ items, title }) => {
  return (<View style={pdfStyles.column}>
      <Text style={pdfStyles.header}>{title}</Text>
      {items.map((item) => (
        <Text 
          style={style.item}
          key={`sidelist-${item}`}>
          {item}
        </Text>))}
    </View>  
  );
}

SideList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};
