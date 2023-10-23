import {Text, TouchableOpacity } from 'react-native';
import { layoutStyles } from '../styles/layoutStyles';
import { textStyles } from '../styles/textStyles';
import { Link } from 'expo-router';

type Props ={
    text: string;
    link: string;
}

export default function ConfirmButton({text, link}: Props) {
    const dest = '/(stack)/'+link;
    return (
        <Link href={dest} asChild>
            <TouchableOpacity 
            style={layoutStyles.mainButton}
            >
                    <Text style={textStyles.mainButtonText}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
}