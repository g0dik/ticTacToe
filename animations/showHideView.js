import React from 'react';
import { Animated } from 'react-native';

export default class ShowHideView extends React.Component {
    state = {
        Anim: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(  
            this.state.Anim,           
        {
            toValue: 1,                 
            duration: 1000,              
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
                    transform: [{
                        translateY: this.state.Anim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [250, 0]  
                        }),
                    }],
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}