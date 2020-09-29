import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import * as actions from '../../redux/actions/actions';
import { THEME } from './../theme';
import { Post } from './../components/Post';
import { AppLoader } from '../components/AppLoader';

export const Home = (props) => {
    const loading = useSelector(state => state.photos.loading)
    const error = useSelector(state => state.photos.error)
    const data = useSelector(state => state.photos.data)
    const dispatch = useDispatch()

    const { navigation } = props

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ paddingBottom: 30 }}
            onPress={() => navigation.navigate('Details', { item })}
            key={item.key}
        >
            <Post
                username={item.user.username}
                profileImageUrl={item.user.profile_image.small}
                imageUrl={item.urls.small}
                date={new Date(item.created_at)}
                description={item.alt_description}
            />
        </TouchableOpacity>
    )
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
        paddingTop: 30,
        width: 250,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.MAIN_COLOR
    }
})