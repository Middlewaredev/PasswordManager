import { Text, View } from "react-native";
import { layoutStyles } from "../styles/layoutStyles";
import { textStyles } from "../styles/textStyles";

export default function HeaderHighlight(){
    return (
        <View style={layoutStyles.headerBox}>
            <Text style={textStyles.header}>Welcome</Text>
        </View>
    )
}