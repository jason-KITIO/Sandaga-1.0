import React from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Brocoli, Fish, Fruit, Fruit1, Meats, Vegetables,  coeur3,  dairies, micro, panier1, panier2, panier3, pomme, pp, sac, search, trait } from './images';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View>
                        <Text>Your Location</Text>
                        <Text style={styles.ListeDeroulante}>3692 Olen Thomas Drive, NY</Text>
                    </View>
                    <Image source={pp} style={styles.pp} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
                    <TextInput
                        style={{
                            height: 50,
                            borderColor: '#fff',
                            borderWidth: 1,
                            flex: 1,
                            paddingLeft: 40,
                            borderRadius: 50,
                            marginTop: '5px',
                            marginBottom: '5px',
                            backgroundColor: '#fff',
                            fontSize: 20,
                        }}
                        // onChangeText={text => setText(text)}
                        // value={text}
                        placeholder="Search"
                    />
                    <Image source={search} style={{ width: 24, height: 24, margin: 5, position: 'absolute', left: 10 }} />
                    <Image source={micro} style={{ width: 24, height: 30, margin: 5, position: 'absolute', right: 80 }} />
                    <View style={{ marginLeft: 15, borderRadius: 50, paddingLeft: 15, paddingRight: 15, paddingTop: 13, backgroundColor: '#04ad6a', width: 60, height: 50 }}>
                        <Image source={trait} style={{ width: 24, height: 24, }} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Categories</Text>
                    <Text style={{ color: '#04ad6a' }}>see all</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: 80 }}>
                                <Image source={Vegetables} style={styles.CategorieImage1} />
                                <Text>Vegetables</Text>
                            </View>
                            <View style={{ alignItems: 'center', width: 80 }}>
                                <Image source={dairies} style={styles.CategorieImage} />
                                <Text>dairies</Text>
                            </View>
                            <View style={{ alignItems: 'center', width: 80 }}>
                                <Image source={Meats} style={styles.CategorieImage} />
                                <Text>Meats</Text>
                            </View>
                            <View style={{ alignItems: 'center', width: 80 }}>
                                <Image source={Fish} style={styles.CategorieImage1} />
                                <Text>Fish</Text>
                            </View>
                            <View style={{ alignItems: 'center', width: 80 }}>
                                <Image source={pomme} style={styles.CategorieImage} />
                                <Text>Pomme</Text>
                            </View>
                            <View style={{ alignItems: 'center', width: 80 }}>
                                <Image source={Fruit} style={styles.CategorieImage} />
                                <Text>Fruit</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Deals</Text>
                    <Text style={{ color: '#04ad6a' }}>see all</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#def3ea', margin: 2, padding: 10, borderRadius: 10, justifyContent: 'space-between', width: 330, }}>
                                <View style={{ marginTop: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>50% OFF</Text>
                                    <Text>On Grocery Combo packs</Text>
                                    <View style={{ backgroundColor: '#fff', width: 90, margin: 10, padding: 10, borderRadius: 10, }}>
                                        <Text style={{ color: '#c6ffef', fontSize: 15 }}>Shop now</Text>
                                    </View>
                                </View>
                                <Image source={panier1} style={styles.panier} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#def3ea', margin: 2, padding: 10, borderRadius: 10, justifyContent: 'space-between', width: 330, }}>
                                <View style={{ marginTop: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>50% OFF</Text>
                                    <Text>On Grocery Combo packs</Text>
                                    <View style={{ backgroundColor: '#fff', width: 90, margin: 10, padding: 10, borderRadius: 10, }}>
                                        <Text style={{ color: '#c6ffef', fontSize: 15 }}>Shop now</Text>
                                    </View>
                                </View>
                                <Image source={panier2} style={styles.panier} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#def3ea', margin: 2, padding: 10, borderRadius: 10, justifyContent: 'space-between', width: 330, }}>
                                <View style={{ marginTop: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>50% OFF</Text>
                                    <Text>On Grocery Combo packs</Text>
                                    <View style={{ backgroundColor: '#fff', width: 90, margin: 10, padding: 10, borderRadius: 10, }}>
                                        <Text style={{ color: '#c6ffef', fontSize: 15 }}>Shop now</Text>
                                    </View>
                                </View>
                                <Image source={panier3} style={styles.panier} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Popular items</Text>
                    <Text style={{ color: '#04ad6a' }}>see all</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ display: 'flex', flexDirection: 'column', margin: 2, padding: 10, borderRadius: 10, justifyContent: 'space-between', }}>
                                <View style={{ display: 'flex', flexDirection: 'row', borderBottomWidth: 2, borderColor: '#e4e4e4' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Details4')}>
                                        <Image source={Fruit} style={styles.panier} />
                                    </TouchableOpacity>
                                    <Image source={coeur3} style={styles.coeur} />
                                </View>
                                <View style={{ marginTop: 10, marginRight: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontWeight: 'bold' }}>Bitroot</Text>
                                        <Text>§1.25</Text>
                                    </View>
                                    <Image source={sac} style={styles.coeur} />
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'column', margin: 2, padding: 10, borderRadius: 10, justifyContent: 'space-between', }}>
                                <View style={{ display: 'flex', flexDirection: 'row', borderBottomWidth: 2, borderColor: '#e4e4e4' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Details3')}>
                                        <Image source={Brocoli} style={styles.panier} />
                                    </TouchableOpacity>
                                    <Image source={coeur3} style={styles.coeur} />
                                </View>
                                <View style={{ marginTop: 10, marginRight: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontWeight: 'bold' }}>Brocoli</Text>
                                        <Text>§1.50</Text>
                                    </View>
                                    <Image source={sac} style={styles.coeur} />
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'column', margin: 2, padding: 10, borderRadius: 10, justifyContent: 'space-between', }}>
                                <View style={{ display: 'flex', flexDirection: 'row', borderBottomWidth: 2, borderColor: '#e4e4e4' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Details5')}>
                                        <Image source={Fruit1} style={styles.panier} />
                                    </TouchableOpacity>
                                    <Image source={coeur3} style={styles.coeur} />
                                </View>
                                <View style={{ marginTop: 10, marginRight: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontWeight: 'bold' }}>Bitroot</Text>
                                        <Text>§1.25</Text>
                                    </View>
                                    <Image source={sac} style={styles.coeur} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        flex: 1,
        display: 'flex',
        padding: 10,
        marginTop: 20,
    },
    ListeDeroulante: {
        fontWeight: 'bold'
    },
    pp: {
        marginTop: 5,
        width: 45,
        height: 45,
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    CategorieImage: {
        marginTop: 5,
        width: 45,
        height: 45,
        resizeMode: 'contain',
        backgroundColor: '#f8f8f8',
    },
    CategorieImage1: {
        marginTop: 5,
        width: 45,
        height: 45,
        resizeMode: 'contain',
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
    },
    panier: {
        marginTop: 5,
        width: 125,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    coeur: {
        marginTop: 5,
        width: 35,
        height: 35,
        resizeMode: 'contain',
    }
});

export default HomeScreen;