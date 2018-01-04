import React from 'react';
import { Animated, View,Easing } from 'react-native';
import CUSTOM_STYLE from '../data/customStyle';

export default class XOAnimView extends React.Component {
    state = {
        Anim: new Animated.Value(0.3),
    }

    componentDidMount() {
        Animated.timing(  
            this.state.Anim,           
        {
            toValue: 1,     
            easing: Easing.bezier(0.56,-0.01,0.15,1.28),            
            duration: 500,   
            useNativeDriver: true,           
        }
        ).start();                        
    }

    render() {
        let { Anim } = this.state;
        return (
            <Animated.View                
                style={{
                    ...this.props.style,
                    opacity: Anim,     
                    transform: [
                        {scale: Anim},
                    ],
                }}
            >
                {(this.props.player === 1) ?
                (<View style = {{
                    height: 80,
                    width: 80,
                }}>
                    <View style = {{
                        backgroundColor: CUSTOM_STYLE.COLORS.X,
                        height: 20,
                        width: 100,
                        marginLeft: -10,
                        marginTop: 30,
                        transform: ([{ rotate: '45deg' }]),
                        position: 'absolute',
                    }}>
                    </View>
                    <View style = {{
                        backgroundColor: CUSTOM_STYLE.COLORS.X,
                        height: 20,
                        width: 100,
                        marginLeft: -10,
                        marginTop: 30,
                        transform: ([{ rotate: '-45deg' }]),
                        position: 'absolute',
                    }}>
                    </View>
                </View>) : (this.props.player === 2) ? 
                (<View style = {{
                    backgroundColor: CUSTOM_STYLE.COLORS.O,
                    height: 85,
                    width: 85,
                    borderRadius: 50,
                    alignItems: 'center', 
                    justifyContent: 'center',                
                }}>
                    <View style = {{
                        height: 50,
                        width: 50,
                        borderRadius: 30,   
                        backgroundColor: this.props.bgColor,        
                    }}>
                    </View>
                </View>) : (null)}
            </Animated.View>
        );
    }
}