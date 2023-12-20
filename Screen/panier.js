import React from 'react';
import { Button, View, Image, TouchableOpacity, StyleSheet, ScrollView, Text, ProgressBarAndroid } from 'react-native';

import * as Progress from 'react-native-progress';
import { back, coeur1, orange, partager, } from './images';




const DetailsScreen = ({ navigation }) => (
  // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //   <Button title="Retour" onPress={() => navigation.goBack()} />
  // </View>
  <View style={styles.body}>
    <ScrollView  showsHorizontalScrollIndicator={false}>
      <View style={styles.Detail}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} style={styles.back} />
        </TouchableOpacity>
        <Text style={{ marginTop: 25, fontSize: 20, }}>Product Detail</Text>
        {/* <TouchableOpacity onPress={() => console.log('partager')}> */}
        <Image source={partager} style={styles.partager} />

      </View>
      <View style={{ paddingLeft: 15, paddingRight: 15, marginTop: 30 }}>
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
            {/* <Button title="Retour" onPress={() => navigation.goBack()} /> */}

            <Text style={{ color: '#fff', width: 200, fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginTop: 15, }}>Find Nearest Store</Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: '#fff', borderRadius: 25, height: 300, marginTop: 120, padding: 10, }}>
        <View style={{ alignItems: 'center', marginTop: -90, }}>
          <Image
            source={orange}
            style={{ width: 250, height: 200, marginBottom: 30 }}
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
        <Progress.Bar progress={0.3} width={340} color="#ff9999" borderWidth={0} backgroundColor="#e8e8e8" />

        {/* <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.3} style={{ color: '#ff9999', backgroundColor: '#fff', }} /> */}

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontSize: 14 }}>Good sugar</Text>
            <Text style={{ fontSize: 14 }}>     12 g</Text>
          </View>
          <Text style={{ fontSize: 14 }}>5%</Text>
        </View>
        <Progress.Bar progress={0.7} width={340} color="#ff9999" borderWidth={0} backgroundColor="#e8e8e8" />
        {/* <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.6} style={{ color: '#ff9999', backgroundColor: '#fff', }} /> */}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FBD3CB',
    display: 'flex',
    flexDirection: 'column',
    // padding: 15,
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
    width: 40,
    height: 40,
  },
  partager: {
    marginTop: 20,
    marginRight: 10,
    width: 30,
    height: 30,
  }
})
module.exports = DetailsScreen