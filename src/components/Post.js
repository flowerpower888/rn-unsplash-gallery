import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Description } from './Description';
import { Photo } from './Photo';
import { UserInfo } from './UserInfo';


export const Post = ({ username, imageUrl, profileImageUrl, date, description }) => {
    return (
            <View style={styles.post}>
                <UserInfo profileImageUrl={profileImageUrl} username={username} />
                <Photo imageUrl={imageUrl} imageWidth={250} imageHeight={250} />
                <Description description={description} date={date} />
            </View>
    )
}

const styles = StyleSheet.create({
    post: {
        flexDirection: 'column',
    }
})