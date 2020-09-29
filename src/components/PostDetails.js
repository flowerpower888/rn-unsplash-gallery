import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { Description } from './Description';
import { Photo } from './Photo';
import { UserInfo } from './UserInfo';


export const PostDetails = ({ post }) => {
    const window = useWindowDimensions();
    return (
        <ScrollView>
            <View style={styles.post}>
                <UserInfo profileImageUrl={post.profileImageUrl} username={post.username} />
                <Photo
                    imageUrl={post.imageUrls.regular}
                    containerHeight={window.height}
                    imageHeight={"100%"}
                />
                <Description description={post.description} date={post.date} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    post: {
        flexDirection: 'column'
    }
})