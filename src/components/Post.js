import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Description } from './Description';
import { Photo } from './Photo';
import { UserInfo } from './UserInfo';


export const Post = ({ post }) => {
    return (
            <View style={styles.post}>
                <UserInfo profileImageUrl={post.profileImageUrl} username={post.username} />
                <Photo imageUrl={post.imageUrls.small} imageHeight={250} />
                <Description description={post.description} date={post.date} />
            </View>
    )
}

const styles = StyleSheet.create({
    post: {
        flexDirection: 'column',
    }
})