import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function FavoritesScreen() {
    return (
        <View style={styles.container}>
            <Text>FavoritesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
