import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment'

export const Description = ({ description, date }) => {
    return (
        <View style={styles.description}>
            {
                description && (
                    <Text style={styles.descriptionText}>{description}</Text>
                )
            }
            <Text style={styles.date}>
                {
                    moment(date).format("MMM Do")
                }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    description: {
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
    },
    date: {
        fontSize: 11
    },
    descriptionText: {
        fontSize: 14,
        paddingBottom: 3
    }
})