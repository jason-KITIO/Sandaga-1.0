import React from 'react';
import { View, Button, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const pp = require('../assets/image/pp.jpg')

const back = require('../assets/image/back.png');
const partager = require('../assets/image/partager.png');
const cadanar = require('../assets/cadanar.png');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="fin" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6f1ed',
        flex: 1,
        display: 'flex',
        // padding: 20,
        alignItems: 'center',
    },
});

export default HomeScreen;