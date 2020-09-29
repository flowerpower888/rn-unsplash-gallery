import React, { useRef, useEffect } from 'react';
import { Image, Animated } from 'react-native';


export const Photo = ({ imageUrl, containerHeight, imageHeight }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current 

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View style={{ opacity: fadeAnim, height: containerHeight }}>
            <Image
                resizeMode="cover"
                source={{ uri: imageUrl }}
                style={{ height: imageHeight }}
            />
        </Animated.View>
    )
};