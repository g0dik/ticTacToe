import { StyleSheet } from 'react-native';
import CUSTOM_STYLE from '../../data/customStyle'
export default Styles = StyleSheet.create({
    headerLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
        headerBackIcon: {
            textShadowOffset: {width:3, height:3},
            textShadowRadius: 7
        },
    headerCenter: {
        flex: 5,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
        headerText: {
            color: CUSTOM_STYLE.COLORS.TEXT,
            fontSize: 27,
            textShadowRadius: 7,
            textShadowOffset: {width:3, height:3}   
        },
    headerRight: {
        // flex: 1,
    }
}); 