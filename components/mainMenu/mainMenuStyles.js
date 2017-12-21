import { StyleSheet } from 'react-native';
import CUSTOM_STYLE  from '../../data/customStyle'
export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_STYLE.COLORS.BG

    },
    //HEADER
    header: {
        flex: 1,
        flexDirection: 'row',
        marginBottom:10
    },
        headerLeft:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
            headerLeftIcon:{
                textShadowOffset: {width:3, height:3},
                textShadowRadius: 7
            },
        headerCenter:{
            flex: 2,
            justifyContent: 'center',
            paddingLeft: 0
        },
            headerTitle: {
                color: CUSTOM_STYLE.COLORS.TEXT,
                fontSize: 30,
                // fontWeight:'bold',
                // textShadowColor: '#9e5901',
                textShadowRadius: 7,
                textShadowOffset: {width:3, height:3}                
            },
            headerSubTitle: {
                color: CUSTOM_STYLE.COLORS.TEXT,
                fontSize: 14,
                paddingLeft: 7
            },
        headerRigth: {
            flex: 2,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center'
        },
            icon: {
                width: 52, 
                height: 52,
                marginBottom:7
            },
    //BODY
    body: {
        flex: 8,
    },
        button: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: CUSTOM_STYLE.COLORS.BUTTON,
            borderColor: CUSTOM_STYLE.COLORS.BUTTON_BORDER,
            borderRadius: 10,
            borderWidth: 1,
            margin: 10,
            marginTop: 0,
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
            buttonText: {
                flex:5,
                color: 'white',
                textAlign: 'left',
                fontSize: 24,
                textShadowRadius: 1,
                textShadowOffset: {width:1, height:1}
            },
            buttonTextIcon: {
                flex: 1,
                margin: 10,
                textAlign: 'center'
            },

    }); 