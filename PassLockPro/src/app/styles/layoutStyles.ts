import {StyleSheet, Dimensions} from 'react-native';
import colors from './colors';

export const layoutStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        alignItems: 'center'
    },
    headerBox: {
        width: Dimensions.get('window').width * 0.7,
        height: 60,
        marginTop: 54,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHighlightBox: {
        width: Dimensions.get('window').width * 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingHorizontal: 17,
    }
})