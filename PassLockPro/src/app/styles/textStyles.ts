import { StyleSheet} from 'react-native';
import colors from "./colors";
import fonts from './fonts';

export const textStyles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})