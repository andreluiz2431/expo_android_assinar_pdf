import React from 'react';
import { ScrollView } from 'react-native';
import DownloadPDF from './DownloadPDF';
import UploadPDF from './UploadPDF';

const App = () => {
  return (
    <ScrollView>
      <DownloadPDF />
      <UploadPDF />
    </ScrollView>
  );
};

export default App;
