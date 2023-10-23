import { useState } from 'react';
import {View, TextInput} from 'react-native';
import { layoutStyles } from '../styles/layoutStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from '../styles/colors';

export default function Password() {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [visibility, setVisibility] = useState<string>('visibility-off');
    return (
        <View style={layoutStyles.usernameBox}>
            <MaterialIcons 
                name='lock'
                size={45}
                style={{marginTop: 5}}
                color={colors.white}
            />
            <TextInput
                secureTextEntry={showPassword}
                style={layoutStyles.passwordInput}
                placeholder='Password'
                placeholderTextColor={colors.white}
            />
            <MaterialIcons 
                name={visibility}
                size={45}
                style={{marginTop: 5}}
                color={colors.white}
                onPress={() => {
                    if(showPassword){
                        setVisibility('visibility')
                    } else {
                        setVisibility('visibility-off')
                    }
                    setShowPassword(!showPassword)
                }}
            />
        </View>
    );
}