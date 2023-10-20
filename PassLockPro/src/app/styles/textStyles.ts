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
    },
    textHighlight: {
        fontSize: 18,
        fontFamily: fonts.text,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    mainText: {
        fontSize: 14,
        fontFamily: fonts.text,
        color: colors.white,
        textAlign: 'center',
        marginVertical: 10
    },
    secondText: {
        fontSize: 14,
        fontFamily: fonts.text,
        color: colors.white,
        textAlign: 'center',
        marginVertical: 10
    },
    mainButtonText: {
        fontSize: 18,
        fontFamily: fonts.text,
        color: colors.white,
        textAlign: 'center',
        marginVertical: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    textBottonHighlight: {
        color: colors.white,
        fontFamily: fonts.heading,
        fontSize: 36,
        fontWeight: 'bold'
    }
})