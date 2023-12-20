import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView  showsHorizontalScrollIndicator={false}>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <View style={styles.image}>
                        <TouchableOpacity onPress={() => console.log('route')}>
                            <Image
                                source={require('../assets/sac.png')}
                                style={{ height: 500 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ligne}>
                        <View style={styles.viewText}>
                            <Text style={styles.text}>Order Groceries</Text>
                            <Text style={styles.text}>and Get delivered</Text>
                            <Text style={styles.text}>in few minutes</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('route')}>
                                <Text style={styles.bouton}>Get Started</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
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
    ligne: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        // marginTop: 20,
        paddingTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    viewText: {
        width: '100%',
        height: 300,
        alignItems: 'center',
    },
    text: {
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bouton: {
        margin: 20,
        color: 'aqua',
        borderWidth: 2,
        borderColor: 'aqua',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 35,
        paddingLeft: 35,
        fontSize: 23,
        borderRadius: 20,
    },
    image: {
        // width: 100,
        height: 500,
    }
});

export default HomeScreen;