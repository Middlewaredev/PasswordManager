import { View, KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import HeaderHighlight from '../components/headerHighlight';
import { layoutStyles } from '../styles/layoutStyles';
import TextHighlight from '../components/textHighlight';
import TextsBox from '../components/textsBox';
import Username from '../components/username';
import Password from '../components/password';
import ConfirmPassword from '../components/confirmPassword';
import colors from '../styles/colors';
import { textStyles } from '../styles/textStyles';


export default function CreateCredential(){
    return (
        <KeyboardAvoidingView 
            style={layoutStyles.container}
            behavior='position'
            keyboardVerticalOffset={-40}
        >
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
            <View 
                style={layoutStyles.credentialsBox}
            >
                <Username />
                <Password />
                <ConfirmPassword />
            </View>
            <Link href="/(tabs)/home" asChild>
                <TouchableOpacity 
                    style={layoutStyles.bottonHighlight}
                    >
                    <Text 
                        style={textStyles.textBottonHighlight}
                        >
                        Register
                    </Text>
                    <View style={layoutStyles.iconButton}>
                        <MaterialIcons 
                            name='arrow-forward'
                            color={colors.white}
                            size={30}
                            />
                    </View>
                </TouchableOpacity>
            </Link>
        </KeyboardAvoidingView>
    );
}