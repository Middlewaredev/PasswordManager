import {Text, TouchableOpacity } from 'react-native';
import { layoutStyles } from '../styles/layoutStyles';
import { textStyles } from '../styles/textStyles';
import { Link } from 'expo-router';

type Props ={
    text: string;
}

export default function ConfirmButton({text}: Props) {
    return (
        <Link href="/(stack)/createCredential" asChild>
            <TouchableOpacity 
            style={layoutStyles.mainButton}
            >
                    <Text style={textStyles.mainButtonText}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
}