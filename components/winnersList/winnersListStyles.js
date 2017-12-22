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
        margin: 10,
        marginTop: 0,
        padding: 0,
    },
        listHeader: {
            flex: 1,
            backgroundColor: CUSTOM_STYLE.COLORS.BUTTON,
            borderColor: CUSTOM_STYLE.COLORS.BUTTON_BORDER,
            borderRadius: 10,
            borderWidth: 1,
            padding:10,
            marginBottom: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
            listHeaderRight: {
                flex: 5,
            },
            listHeaderLeft: {
                flex: 3,
            },
            listHeaderText: {
                color: CUSTOM_STYLE.COLORS.TEXT,
                fontSize: 17,
                fontFamily: 'monospace',
                textAlign: 'center',

            },
        list: {
            flex: 24,   
        },
            listScroll: {
                overflow: 'scroll'
            },
                listItem: {
                    flex: 1,    
                    flexDirection: 'row',
                    backgroundColor: CUSTOM_STYLE.COLORS.BUTTON,
                    borderColor: CUSTOM_STYLE.COLORS.BUTTON_BORDER,
                    borderRadius: 10,
                    borderWidth: 1,
                    margin: 2,
                    padding: 7,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                    listPlayers: {
                        flex: 5,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row'
                    },
                        listVs: {
                            color: 'white',
                            width: 32,
                            fontFamily: 'monospace'

                        },
                        w1: {
                            color: CUSTOM_STYLE.COLORS.WINNER_X,
                            fontWeight: 'bold',
                            width: 100,
                            textAlign: 'right',
                            fontFamily: 'monospace'
                            
                        },
                        w2: {
                            color: CUSTOM_STYLE.COLORS.WINNER_O,
                            fontWeight: 'bold',
                            width: 100,
                            textAlign: 'left',
                            fontFamily: 'monospace'
                        },
                        uw1: {
                            color: 'white',
                            width: 100,
                            textAlign: 'right',
                            fontFamily: 'monospace'
                        },
                        uw2: {
                            color: 'white',
                            width: 100,
                            textAlign: 'left',
                            fontFamily: 'monospace'
                            
                        },
                    listDate: {
                        flex: 3,
                        color: 'white',
                        fontFamily: 'monospace',
                        textAlign: 'center'
                    }
}); 