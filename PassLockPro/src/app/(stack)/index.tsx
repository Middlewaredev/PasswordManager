import { View } from 'react-native';
import HeaderHighlight from '../components/headerHighlight';
import { layoutStyles } from '../styles/layoutStyles';
import { useFonts } from 'expo-font';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import TextHighlight from '../components/textHighlight';
import TextsBox from '../components/textsBox';
import ConfirmButton from '../components/confirmButton';

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
      <TextsBox
        mainText='Keep in mind that none of your details will be shared!!'
        secondText='All of your passwords will be stored only in your device.'
      />
      <View style={{marginTop: '65%', justifyContent: 'space-between', height: 160}}>
        <ConfirmButton
          text='Sing in'
          link='/(stack)/login'
        />
        <ConfirmButton
          text='Sing up'
          link='/(stack)/createCredential'
        />
      </View>
    </View>
  );
}


