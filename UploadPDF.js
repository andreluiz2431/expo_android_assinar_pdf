import React from 'react';
import { Button, View, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const UploadPDF = () => {
    const pickDocument = async () => {
        Alert.alert('UP', 'Botão UPLOAD PRESSIONADO');
        let result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });

    if (result.type === 'success') {
      console.log('Arquivo selecionado:', result.uri);
      // Aqui você pode fazer o upload do arquivo usando fetch, axios, etc.
      uploadFile(result.uri);
    }
  };

  const uploadFile = async (fileUri) => {
    const formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      name: 'upload.pdf',
      type: 'application/pdf'
    });

    try {
        console.log('enviando');
      const response = await fetch('https://example.com/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Arquivo enviado com sucesso!');
      } else {
        Alert.alert('Erro', 'Falha ao enviar o arquivo.');
      }
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
    }
  };

  return (
    <View>
      <Button title="Enviar PDF" onPress={pickDocument} />
    </View>
  );
};

export default UploadPDF;
