import {Text, TouchableOpacity } from 'react-native';
import { layoutStyles } from '../styles/layoutStyles';
import { textStyles } from '../styles/textStyles';

type Props ={
    text: string;
}

export default function ConfirmButton({text}: Props) {
    return (
        <TouchableOpacity 
            style={layoutStyles.mainButton}
        >
                <Text style={textStyles.mainButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}