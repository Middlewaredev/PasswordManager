import { Text, View } from "react-native";
import { layoutStyles } from "../styles/layoutStyles";
import { textStyles } from "../styles/textStyles";

type Props = {
    text: string;
}

export default function HeaderHighlight({text}: Props){
    return (
        <View style={layoutStyles.headerBox}>
            <Text style={textStyles.header}>{text}</Text>
        </View>
    )
}