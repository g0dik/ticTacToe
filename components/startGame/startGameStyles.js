import { StyleSheet } from 'react-native';
import CUSTOM_STYLE from '../../data/customStyle'
export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_STYLE.COLORS.BG,
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    body: {
        flex: 9,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
        gameGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: CUSTOM_STYLE.COLORS.BUTTON,
            borderColor: CUSTOM_STYLE.COLORS.BUTTON_BORDER,
            borderRadius: 10,
            borderWidth: 1,
            marginTop: 0,
            padding: 3,
        },
            gameGridCell: {
                margin: 3,
                // backgroundColor: CUSTOM_STYLE.COLORS.CELL,
                borderColor: CUSTOM_STYLE.COLORS.BUTTON_BORDER,
                borderRadius: 10,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
        reset: {
            height: 70,
            width: 280,
            backgroundColor: CUSTOM_STYLE.COLORS.RESET_BUTTON,
            borderColor: CUSTOM_STYLE.COLORS.RESET_BUTTON_BORDER,
            borderRadius: 10,
            borderWidth: 1,
            margin: 9,
            alignItems: 'center',
            justifyContent: 'center',
        },
            resetText: {
                color: CUSTOM_STYLE.COLORS.TEXT,
                textAlign: 'center',
                fontSize: 24,
                textShadowRadius: 1,
                textShadowOffset: {width:1, height:1}
            },
        info: {
            height: 100,
            backgroundColor: CUSTOM_STYLE.COLORS.BUTTON,
            borderColor: CUSTOM_STYLE.COLORS.BUTTON_BORDER,
            borderRadius: 10,
            borderWidth: 1,
            margin: 9,
            padding: 10,
            justifyContent: 'center',
        },
            infoText: {
                color: CUSTOM_STYLE.COLORS.TEXT,
                fontSize: 17,
                fontFamily: 'monospace',
                textAlign: 'center',
            }
}); 