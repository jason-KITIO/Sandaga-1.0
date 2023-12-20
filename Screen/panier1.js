import react from 'react';
import { View, StyleSheet, Text, Image, ScrollView, ProgressBarAndroid } from "react-native";

import * as Progress from 'react-native-progress';

const coeur = require('../assets/image/like.png');
const orange = require('../assets/image/orange.png');
const coeur1 = require('../assets/image/coeur.png');

const ProductInfo = ({ route }) => {
    return (
        <View style={styles.body}>
            <ScrollView  showsHorizontalScrollIndicator={false}>
                <View style={{ paddingLeft: 15, paddingRight: 15, }}>
                    <Text style={{ fontSize: 22 }}>Juicy Orange</Text>
                    <Text style={{ fontSize: 14, color: '#f0aca9' }}>Sweet and Juicy</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}>    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nobis non officia earum veniam velit tempore deleniti sit nostrum atque cupiditate voluptate, aut ratione iure! Iste perferendis suscipit vero ipsum!</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', }}>
                        <View style={{ borderWidth: 2, borderColor: '#ff9999', padding: 10, borderRadius: 25, }}>
                            <Image
                                source={coeur1}
                                style={{ width: 60, height: 50, resizeMode: 'contain', }}
                            />
                        </View>
                        <View style={{ backgroundColor: '#ff9999', padding: 10, borderRadius: 25, }}>
                            <Text style={{ color: '#fff', width: 200, fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginTop: 15, }}>Find Nearest Store</Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: '#fff', borderRadius: 25, marginTop: 130, height: 300, padding: 10, }}>
                    <View style={{ alignItems: 'center', marginTop: -90, }}>
                        <Image
                            source={orange}
                            style={{ width: 250, height: 200 }}
                        />
                    </View>
                    <Text style={{ fontSize: 22 }}>Nutrition Facts</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14 }}>Fiber</Text>
                            <Text style={{ fontSize: 14 }}>     3 g</Text>
                        </View>
                        <Text style={{ fontSize: 14 }}>7%</Text>
                    </View>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.3} style={{ color: '#ff9999', backgroundColor: '#fff', }} />

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14 }}>Good sugar</Text>
                            <Text style={{ fontSize: 14 }}>     12 g</Text>
                        </View>
                        <Text style={{ fontSize: 14 }}>5%</Text>
                    </View>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.6} style={{ color: '#ff9999', backgroundColor: '#fff', }} />

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Progress.Bar progress={0.3} width={200} />
                        <Progress.Pie progress={0.4} size={50} />
                        <Progress.Circle progress={0.5} size={100} />
                        <Progress.CircleSnail size={120} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FBD3CB',
        display: 'flex',
        flexDirection: 'column',
        // padding: 15,
    },
})

export default ProductInfo;