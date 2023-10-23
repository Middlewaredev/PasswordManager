import { View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { layoutStyles } from '../styles/layoutStyles';
import colors from '../styles/colors';
import Username from '../components/username';
import Password from '../components/password';
import ConfirmButton from '../components/confirmButton';

export default function Login(){
    return (
        <View style={layoutStyles.container}>
            <MaterialIcons
                name='lock-open'
                size={200}
                style={{marginVertical: 55}}
                color={colors.blue}
            />
            <View style={layoutStyles.loginBox}>
                <Username/>
                <Password/>
            </View>
            <ConfirmButton 
                text='Sign in'
                link='home'
            />
        </View>
    );
}