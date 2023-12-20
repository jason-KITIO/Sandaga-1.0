import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { back, cadanar, fraise, orange, pomme, raisain } from './images';

// const back = require('../assets/image/back.png');
// const cadanar = require('../assets/cadanar.png');

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView  showsHorizontalScrollIndicator={false}>
                <View style={styles.autre}>
                    {/* <TouchableOpacity onPress={() => console.log('Back')}> */}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={back} style={styles.backCadanar} />
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => console.log('cadanar')}> */}
                    <Image source={cadanar} style={styles.cadanar} />

                </View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', }}>My</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Order</Text>
                <View style={{ display: 'flex', flexDirection: 'column', }}>
                    <View style={styles.ligne}>
                        <View style={styles.orange}>
                            <TouchableOpacity onPress={() => console.log('User')}>
                                <Image
                                    source={orange}
                                    style={{ width: 30, height: 30, marginTop: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text1}>1 x</Text>
                        <View style={styles.viewText}>
                            <Text style={styles.text}>Orange</Text>
                            <Text style={styles.text}>$10</Text>
                        </View>

                        <View style={styles.poubelle1}>
                            <TouchableOpacity onPress={() => console.log('User')}>
                                <Image
                                    source={require('../assets/image/poubelle.png')}
                                    style={styles.poubelleImage}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ligne}>
                        <View style={styles.fraise}>
                            <TouchableOpacity onPress={() => console.log('User')}>
                                <Image
                                    source={fraise}
                                    style={{ width: 30, height: 30, marginTop: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text1}>1 x</Text>
                        <View style={styles.viewText}>
                            <Text style={styles.text}>Strawberry</Text>
                            <Text style={styles.text}>$12</Text>
                        </View>

                        <View style={styles.poubelle2}>
                            <TouchableOpacity onPress={() => console.log('User')}>
                                <Image
                                    source={require('../assets/image/poubelle.png')}
                                    style={styles.poubelleImage}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ligne}>
                        <View style={styles.orange}>
                            <TouchableOpacity onPress={() => console.log('User')}>
                                <Image
                                    source={pomme}
                                    style={{ width: 30, height: 30, marginTop: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text1}>1 x</Text>
                        <View style={styles.viewText}>
                            <Text style={styles.text}>Green Apple</Text>
                            <Text style={styles.text}>$13</Text>
                        </View>

                        <View style={styles.poubelle3}>
                            <TouchableOpacity onPress={() => console.log('User')}>
                                <Image
                                    source={require('../assets/image/poubelle.png')}
                                    style={styles.poubelleImage}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ligne}>
                        <View style={styles.grape}>
                            <TouchableOpacity onPress={() => console.log('User')}>
                                <Image
                                    source={raisain}
                                    style={{ width: 30, height: 30, marginTop: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text1}>1 x</Text>
                        <View style={styles.viewText}>
                            <Text style={styles.text}>Grape</Text>
                            <Text style={styles.text}>$12</Text>
                        </View>

                        <View style={styles.poubelle4}>
                            <TouchableOpacity onPress={() => console.log('User')}>
                                <Image
                                    source={require('../assets/image/poubelle.png')}
                                    style={styles.poubelleImage}
                                />
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
        flex: 1,
        display: 'flex',
        padding: 20,
    },
    ligne: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'red',
    },
    orange: {
        width: 40,
        height: 45,
        backgroundColor: '#fce9c8',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
    },
    poubelle1: {
        width: 40,
        height: 45,
        backgroundColor: '#e2e2e2',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 80,
        marginTop: 10,
    },
    poubelle2: {
        width: 40,
        height: 45,
        backgroundColor: '#e2e2e2',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 40,
        marginTop: 10,
    },
    poubelle3: {
        width: 40,
        height: 45,
        backgroundColor: '#e2e2e2',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginTop: 10,
    },
    poubelle4: {
        width: 40,
        height: 45,
        backgroundColor: '#e2e2e2',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 90,
        marginTop: 10,
    },
    poubelleImage: {
        width: 30,
        height: 40,
    },
    text: {
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 20,
    },
    text1: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
    },
    fraise: {
        width: 40,
        height: 45,
        backgroundColor: '#f9bdbc',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
    },
    grape: {
        width: 40,
        height: 45,
        backgroundColor: '#d9defe',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
    },
    autre: {
        // backgroundColor: '#FBD3CB',
        height: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,
    },
    cadanar: {
        marginTop: 15,
        width: 45,
        height: 40,
        resizeMode: 'contain',
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 10,
        padding: 0,
    },
    backCadanar: {
        marginTop: 15,
        width: 45,
        height: 38,
        resizeMode: 'contain',
        // backgroundColor: '#f2a8a9',
        borderWidth: 2,
        borderRadius: 10,
        // marginLeft: 10,
        padding: 0,
    },
});

export default HomeScreen;