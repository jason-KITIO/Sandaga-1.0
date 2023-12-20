import React from 'react';
import { View, Button, Image, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Test } from './test';
import { Fruit, back1, carote, choux, etoile, information, partager1, sac3 } from './images';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.Detail}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={back1} style={styles.back} />
                    </TouchableOpacity>
                    <View style={styles.DetailDroite}>
                        <TouchableOpacity>
                            <Image source={partager1} style={styles.backDroite} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={information} style={styles.backDroite} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#e8e6fc', margin: 20, borderRadius: 10, }}>
                    <Image source={Fruit} style={styles.Fruit} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }} >
                    <View>
                        <Text style={{ color: '#65b195', borderWidth: 2, borderColor: '#65b195', borderRadius: 5, padding: 2, paddingLeft: 5, fontSize: 12, }}>Vegetables</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Broccoli</Text>
                        <Text style={{ fontSize: 10 }} >approx 100 gm</Text>
                    </View>
                    <Test />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ padding: 5, backgroundColor: '#e7f0ed', marginRight: 10, borderRadius: 5 }}>
                            <Image source={carote} style={styles.carote} />
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Agrifram Inc</Text>
                            <Text style={{ fontSize: 10 }} >F5JR+FGF Chiartakol</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                        <Image source={etoile} style={styles.etoile} />
                        <Text style={{ fontWeight: 'bold', color: '#909090' }} >4.9</Text>
                        <Text style={{ color: '#9d9d9d' }} > (89)</Text>
                    </View>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Broccoli</Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, at voluptatem eos, illum aliquam mollitia temporibus rerum ...
                        <Text style={{ fontWeight: 'bold', color: '#65b195' }} >Read more</Text>
                    </Text>

                </View>
                <View style={{ margin: 20, display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}>
                    <View style={{ borderWidth: 2, borderColor: '#dbdbdb', borderRadius: 10 }} >
                        <Image source={sac3} style={styles.sac3} />
                    </View>
                    <View style={{ borderWidth: 2, borderColor: '#65b195', borderRadius: 10 }} >
                        <Text style={{ color: '#65b195', marginTop: 15, marginLeft: 50, marginRight: 50 }} > Add to cart §1.50</Text>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#e6f1ed',
        backgroundColor: '#fff',
        flex: 1,
        display: 'flex',
        // padding: 20,
        // alignItems: 'center',
    },
    Detail: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    back: {
        marginTop: 20,
        marginLeft: 10,
        width: 20,
        height: 20,
    },
    backDroite: {
        marginTop: 20,
        marginRight: 20,
        width: 20,
        height: 20,
    },
    DetailDroite: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    Fruit: {
        width: 170,
        height: 200,
        margin: 20,
        padding:0,
    },
    carote: {
        width: 30,
        height: 40,
        backgroundColor: '#e7f0ed',
    },
    etoile: {
        width: 20,
        height: 20,
    },
    sac3: {
        width: 30,
        height: 30,
        margin: 10,
    }
});

export default HomeScreen;