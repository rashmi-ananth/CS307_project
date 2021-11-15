import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
function MyDocument({data}) {
  const journalContentHTML = <div  dangerouslySetInnerHTML={{__html: data.text}} />
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{data.title}</Text>
        </View>
        <View style={styles.section}>
          <Text>{journalContentHTML}</Text>
        </View>
      </Page>
    </Document>
  );
}
export default MyDocument;