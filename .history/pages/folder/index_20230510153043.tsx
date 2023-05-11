import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Common/Layout';

export default function Folder() {
  const DUMMY_FOLDER = [1, 2, 3];
  const [folderList, setFolderList] = useState(DUMMY_FOLDER);

  return (
    <Layout title="폴더">
      <Text>Folder</Text>
    </Layout>
  );
}
