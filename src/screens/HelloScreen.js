import React from 'react';
import {StyleSheet, View, Text, Image, Platform} from 'react-native';
import {THEME} from '../theme';
import {AppButton} from '../components/ui/AppButton';

export default function HelloScreen({onPress}) {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    source={require('../img/Animal.png')}
                />
                <View style={styles.bottomContainer}>
                    <Text style={styles.title}>My Pets</Text>
                    <Text style={styles.text}>Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</Text>
                </View>
                <AppButton onPress={onPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: THEME.BC_COLOR
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 50,
        marginHorizontal: 10
    },
    backgroundImage: {
        marginTop: 50,
        width: 400,
        height: 400
    },
    bottomContainer: {
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 16,
        fontFamily: Platform.OS === 'android' ? 'lato_bold' : 'Avenir',
        fontWeight: '800'
    },
    text: {
        textAlign: 'center',
        color: THEME.GREY_COLOR,
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'lato_bold' : 'Avenir',
        fontWeight: '500'
    }
})
