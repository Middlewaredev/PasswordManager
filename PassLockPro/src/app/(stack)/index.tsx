import { View } from 'react-native';
import HeaderHighlight from '../components/headerHighlight';
import { layoutStyles } from '../styles/layoutStyles';
import { useFonts } from 'expo-font';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import TextHighlight from '../components/textHighlight';

export default function App() {
  const [fontsLoaded] = useFonts({
      Roboto_400Regular
    })
  
  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={layoutStyles.container}>
      <HeaderHighlight 
        text='Welcome'
      />
      <TextHighlight 
        text='Here you will store, organize, create, and see all your passwords in one place.'
      />
    </View>
  );
}


