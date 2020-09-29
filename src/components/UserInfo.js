import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export const UserInfo = ({ profileImageUrl, username }) => {
    return (
        <View style={styles.userInfo}>
            <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
            <Text>{username}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff',
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 8
    }
})