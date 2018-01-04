import { StyleSheet } from 'react-native';
import CUSTOM_STYLE from '../../data/customStyle'
export default Styles = StyleSheet.create({
    input: {
        backgroundColor: CUSTOM_STYLE.COLORS.BUTTON,
        borderColor: CUSTOM_STYLE.COLORS.BUTTON_BORDER,
        borderRadius: 10,
        borderWidth: 1,
        margin: 50,
        padding: 10,
        alignItems: 'center'
    },
        inputText: {
            textAlign: 'center',
            color: CUSTOM_STYLE.COLORS.TEXT,
            fontSize: 17,
        },
        inputTextInput: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'monospace',
        lineHeight: 20,
        textAlign: 'center',
        width: 240,
        }
});