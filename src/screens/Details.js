import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useWindowDimensions } from 'react-native';
import { THEME } from './../theme';
import { PostDetails } from './../components/PostDetails';


export const Details = ({ route }) => {
    const window = useWindowDimensions();
    const { item } = route.params

    return (
        <View style={styles.container}>
            <PostDetails
                username={item.user.username}
                profileImageUrl={item.user.profile_image.small}
                imageUrl={item.urls.regular}
                date={new Date(item.created_at)}
                description={item.alt_description}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.MAIN_COLOR
    }
})