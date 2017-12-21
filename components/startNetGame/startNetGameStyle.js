import { StyleSheet } from 'react-native';
import CUSTOM_STYLE from '../../data/customStyle'
export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_STYLE.COLORS.BG
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    body: {
        flex: 9,
        backgroundColor: CUSTOM_STYLE.COLORS.BUTTON,
        borderColor: CUSTOM_STYLE.COLORS.BUTTON_BORDER,
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        marginTop: 0,
    }
}); 