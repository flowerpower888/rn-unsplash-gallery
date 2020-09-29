import React from 'react'
import { StyleSheet, View } from 'react-native'
import { THEME } from './../theme';
import { PostDetails } from './../components/PostDetails';


export const Details = ({ route }) => {
    const { post } = route.params

    return (
        <View style={styles.container}>
            <PostDetails post={post}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.MAIN_COLOR
    }
})