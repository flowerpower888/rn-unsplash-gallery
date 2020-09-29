import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import * as actions from '../../redux/actions/actions';
import { THEME } from './../theme';
import { Post } from './../components/Post';
import { AppLoader } from '../components/AppLoader';

export const Home = ({ navigation }) => {
    const loading = useSelector(state => state.photos.loading)
    const error = useSelector(state => state.photos.error)
    const data = useSelector(state => state.photos.data)
    const dispatch = useDispatch()

    const renderItem = ({ item, index }) => {
        const post = {
            username: item.user.username,
            profileImageUrl: item.user.profile_image.small,
            imageUrls: {
                small: item.urls.small,
                regular: item.urls.regular
            },
            date: new Date(item.created_at).toISOString(),
            description: item.alt_description
        }
        return (
            <TouchableOpacity
                style={{ paddingTop: index === 0 ? 30 : 0, paddingBottom: 30 }}
                onPress={() => navigation.navigate('Details', { post })}
                key={item.key}
            >
                <Post post={post} />
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        dispatch(actions.fetchPhotos())
    }, [])

    return (
        <View style={styles.container}>
            {
                loading
                    ? <AppLoader />
                    : error
                        ? <Text>Error, try again</Text>
                        : (

                            <SafeAreaView style={styles.wrapper}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={data}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                />
                            </SafeAreaView>
                        )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.MAIN_COLOR
    },
    wrapper: {
        width: 250,
    }
})