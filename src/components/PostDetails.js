import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { Description } from './Description';
import { Photo } from './Photo';
import { UserInfo } from './UserInfo';


export const PostDetails = ({ username, imageUrl, profileImageUrl, date, description }) => {
    const window = useWindowDimensions();
    return (
        <ScrollView>
            <View style={styles.post}>
                <UserInfo profileImageUrl={profileImageUrl} username={username} />
                <Photo
                    imageUrl={imageUrl}
                    containerHeight={window.height}
                    imageHeight={"100%"}
                />
                <Description description={description} date={date} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    post: {
        height: window.height,
        flexDirection: 'column',
    }
})