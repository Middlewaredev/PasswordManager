import {View, TextInput} from 'react-native';
import { layoutStyles } from '../styles/layoutStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import colors from '../styles/colors';

export default function Username() {
    return (
        <View style={layoutStyles.usernameBox}>
            <MaterialIcons 
                name='person'
                size={45}
                style={{marginTop: 5}}
                color={colors.white}
            />
            <TextInput
                secureTextEntry
                style={layoutStyles.usernameInput}
                placeholder='Username'
                placeholderTextColor={colors.white}
            />
        </View>
    );
}