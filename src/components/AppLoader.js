import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native'


export const AppLoader = () => {
    return (
        <View style={styles.center}>
            <ActivityIndicator color="#000" size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})