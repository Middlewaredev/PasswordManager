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
    },
    textsBox: {
        width: Dimensions.get('window').width * 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingHorizontal: 40,
    },
    mainButton: {
        width: 240,
        height:70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80%',
        paddingHorizontal: 40,
        backgroundColor: colors.red,
        borderRadius: 40,
    },
    usernameBox: {
        backgroundColor: colors.gray,
        borderRadius: 10,
        width: '70%',
        height: 55,
        paddingHorizontal: 0,
        flexDirection: 'row'
    },
    usernameInput: {
        width: '65%',
        fontSize: 14,
        color: colors.white,
    }
})