import React, { useState } from 'react';
import { Button, Text, View, Alert  } from 'react-native';
import * as FileSystem from 'expo-file-system';

const DownloadPDF = () => {
    const [downloaded, setDownloaded] = useState(false);
    
    const downloadFile = async () => {
        Alert.alert('DOWN', 'Botão DOWNLOAD PRESSIONADO');
        const uri = 'https://example.com/sample.pdf'; // URL do arquivo
        const fileUri = FileSystem.documentDirectory + 'sample.pdf';
        
    try {
      const { uri } = await FileSystem.downloadAsync(uri, fileUri);
      console.log('Arquivo baixado em:', uri);
      setDownloaded(true);
    } catch (error) {
      console.error('Erro ao baixar arquivo:', error);
    }
  };

  return (
    <View>
      <Button title="Baixar PDF" onPress={downloadFile} />
      {downloaded && <Text>Arquivo baixado com sucesso!</Text>}
    </View>
  );
};

export default DownloadPDF;
