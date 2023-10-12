import {Text, View} from 'react-native'
import { layoutStyles } from '../styles/layoutStyles';
import { textStyles } from '../styles/textStyles';

type Props = {
    text: string;
}

export default function TextHighlight({text}: Props){
    return (
        <View style={layoutStyles.textHighlightBox}>
            <Text style={textStyles.textHighlight}>{text}</Text>
        </View>
    );
}