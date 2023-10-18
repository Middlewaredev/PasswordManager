import {SafeAreaView} from 'react-native'
import HeaderHighlight from '../components/headerHighlight';
import { layoutStyles } from '../styles/layoutStyles';
import TextHighlight from '../components/textHighlight';
import TextsBox from '../components/textsBox';
import Username from '../components/username';

export default function CreateCredential(){
    return (
        <SafeAreaView style={layoutStyles.container}>
            <HeaderHighlight
                text='Create Credential'
            />
            <TextHighlight
                text="This is the only one 'Username' and 'Password' you will need to remember"
            />
            <TextsBox
                mainText='You have no way to recover this usarname and password.'
                secondText="Store this in a safe place; you can't access this app without these credentials"
            />
            <Username

            />
        </SafeAreaView>
    );
}