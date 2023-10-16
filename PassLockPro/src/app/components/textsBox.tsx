import {Text, View} from 'react-native';
import { layoutStyles } from '../styles/layoutStyles';
import { textStyles } from '../styles/textStyles';

type Props ={
    mainText: string;
    secondText?: string;
}

export default function TextsBox({mainText, secondText} : Props){
    return (
        <View style={layoutStyles.textsBox}>
            <Text style={textStyles.mainText}>{mainText}</Text>
            {secondText && <Text style={textStyles.secondText}>{secondText}</Text>}
        </View>
    );
}