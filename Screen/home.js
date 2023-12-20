import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { ananas, boutique1, boutique2, coeur, fraise, grape, menu, orange, pp } from './images.js';

// export default function App() {
//   const [text, setText] = useState(Test); // définir l'état initial du texte

//   return (
//     <View style={{ margin: 20 }}>
//       <ScrollView>
//         <Text style={{ fontSize: 24 }}>{text}</Text>
//         <Button
//           title="Changer le texte"
//           onPress={() => setText(Test)} // changer le texte de l'état quand on clique sur le bouton
//         />
//         <Test />
//         <Button
//           title="Changer le texte"
//           onPress={() => setText('Texte')} // changer le texte de l'état quand on clique sur le bouton
//         />
//         <Button
//           title="Changer le texte"
//           onPress={() => setText(Test2)} // changer le texte de l'état quand on clique sur le bouton
//         />
//       </ScrollView>
//     </View>
//   );
// }

const Stack = createStackNavigator();


// const HomeScreen = ({ navigation }) => (
function HomeScreen({ navigation }) {

  const slide0 = () => {
    return (

      <View style={styles.test2}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
          // backgroundColor: 'red',
        }}>

          <View style={styles.viewOrange}>
            <Text style={{
              // fontFamily: 'arial',
              color: '#d17b79',
              fontSize: 20,
            }}>
              <View style={styles.coeur}>
                <Image
                  source={coeur}
                  style={{ width: 30, height: 30, }}
                />
              </View>
              <View style={styles.orange}>
                <Image
                  source={orange}
                  style={{ width: 150, height: 150, }}
                />
              </View>
              <View style={styles.viewText}>
                <Text style={styles.orangeText}>Orange</Text>
                <Text style={styles.orangeText}>$10</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <View style={styles.viewTextADD}>
                  <Text style={styles.orangeTextADD}>ADD</Text>
                </View>
              </TouchableOpacity>
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewGrape}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={grape}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.grapeText}>Grape</Text>
                  <Text style={styles.grapeText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.grapeTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewAnanas}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={ananas}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.ananasText}>Ananas</Text>
                  <Text style={styles.ananasText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.ananasTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewFraise}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={fraise}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.fraiseText}>Ananas</Text>
                  <Text style={styles.fraiseText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.fraiseTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>


        </ScrollView>
      </View>
    )
  }

  const slide1 = () => {
    return (
      <View style={styles.test1}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
          // backgroundColor: 'red',
        }}>
          <View style={styles.viewOrange}>
            <Text style={{
              // fontFamily: 'arial',
              color: '#d17b79',
              fontSize: 20,
            }}>
              <View style={styles.coeur}>
                <Image
                  source={coeur}
                  style={{ width: 30, height: 30, }}
                />
              </View>
              <View style={styles.orange}>
                <Image
                  source={orange}
                  style={{ width: 150, height: 150, }}
                />
              </View>
              <View style={styles.viewText}>
                <Text style={styles.orangeText}>Orange</Text>
                <Text style={styles.orangeText}>$10</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <View style={styles.viewTextADD}>
                  <Text style={styles.orangeTextADD}>ADD</Text>
                </View>
              </TouchableOpacity>
            </Text>
          </View>

          {/* 
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewGrape}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={grape}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.grapeText}>Grape</Text>
                  <Text style={styles.grapeText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.grapeTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewAnanas}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={ananas}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.ananasText}>Ananas</Text>
                  <Text style={styles.ananasText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.ananasTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewFraise}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={fraise}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.fraiseText}>Ananas</Text>
                  <Text style={styles.fraiseText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.fraiseTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity> */}

        </ScrollView>
      </View>
    )
  }

  const slide2 = () => {
    return (

      <View style={styles.test2}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
          // backgroundColor: 'red',
        }}>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewGrape}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={grape}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.grapeText}>Grape</Text>
                  <Text style={styles.grapeText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.grapeTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewAnanas}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={ananas}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.ananasText}>Ananas</Text>
                  <Text style={styles.ananasText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.ananasTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewFraise}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={fraise}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.fraiseText}>Ananas</Text>
                  <Text style={styles.fraiseText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.fraiseTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.viewOrange}>
            <Text style={{
              // fontFamily: 'arial',
              color: '#d17b79',
              fontSize: 20,
            }}>
              <View style={styles.coeur}>
                <Image
                  source={coeur}
                  style={{ width: 30, height: 30, }}
                />
              </View>
              <View style={styles.orange}>
                <Image
                  source={orange}
                  style={{ width: 150, height: 150, }}
                />
              </View>
              <View style={styles.viewText}>
                <Text style={styles.orangeText}>Orange</Text>
                <Text style={styles.orangeText}>$10</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <View style={styles.viewTextADD}>
                  <Text style={styles.orangeTextADD}>ADD</Text>
                </View>
              </TouchableOpacity>
            </Text>
          </View>*/}

        </ScrollView>
      </View>
    )
  }

  const slide3 = () => {
    return (

      <View style={styles.test2}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
          // backgroundColor: 'red',
        }}>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewAnanas}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={ananas}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.ananasText}>Ananas</Text>
                  <Text style={styles.ananasText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.ananasTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewFraise}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={fraise}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.fraiseText}>Ananas</Text>
                  <Text style={styles.fraiseText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.fraiseTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.viewOrange}>
            <Text style={{
              // fontFamily: 'arial',
              color: '#d17b79',
              fontSize: 20,
            }}>
              <View style={styles.coeur}>
                <Image
                  source={coeur}
                  style={{ width: 30, height: 30, }}
                />
              </View>
              <View style={styles.orange}>
                <Image
                  source={orange}
                  style={{ width: 150, height: 150, }}
                />
              </View>
              <View style={styles.viewText}>
                <Text style={styles.orangeText}>Orange</Text>
                <Text style={styles.orangeText}>$10</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <View style={styles.viewTextADD}>
                  <Text style={styles.orangeTextADD}>ADD</Text>
                </View>
              </TouchableOpacity>
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewGrape}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={grape}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.grapeText}>Grape</Text>
                  <Text style={styles.grapeText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.grapeTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>*/}
        </ScrollView>
      </View>
    )
  }

  const slide4 = () => {
    return (
      <View style={styles.test2}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
          // backgroundColor: 'red',
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewFraise}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={fraise}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.fraiseText}>Ananas</Text>
                  <Text style={styles.fraiseText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.fraiseTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          {/* <View style={styles.viewOrange}>
            <Text style={{
              // fontFamily: 'arial',
              color: '#d17b79',
              fontSize: 20,
            }}>
              <View style={styles.coeur}>
                <Image
                  source={coeur}
                  style={{ width: 30, height: 30, }}
                />
              </View>
              <View style={styles.orange}>
                <Image
                  source={orange}
                  style={{ width: 150, height: 150, }}
                />
              </View>
              <View style={styles.viewText}>
                <Text style={styles.orangeText}>Orange</Text>
                <Text style={styles.orangeText}>$10</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <View style={styles.viewTextADD}>
                  <Text style={styles.orangeTextADD}>ADD</Text>
                </View>
              </TouchableOpacity>
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewGrape}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={grape}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.grapeText}>Grape</Text>
                  <Text style={styles.grapeText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.grapeTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={styles.viewAnanas}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={ananas}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.ananasText}>Ananas</Text>
                  <Text style={styles.ananasText}>$10</Text>
                </View>
                <View style={styles.viewTextADD}>
                  <Text style={styles.ananasTextADD}>ADD</Text>
                </View>
              </Text>
            </View>
          </TouchableOpacity>*/}
        </ScrollView>
      </View>
    )
  }

  const [slide, setText] = useState(slide0);

  return (
    <View style={styles.body}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          {/* <TouchableOpacity onPress={() => console.log('Menu')}> */}
          <Image source={menu} style={styles.menu} />

          {/* <TouchableOpacity onPress={() => console.log('Icone')}> */}
          <TouchableOpacity onPress={() => navigation.navigate('User')}>
            <Image source={pp} style={styles.pp} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txtDiscover}>
            Discover Seasonal
          </Text>
          <Text style={styles.txtFruits}>
            Fruits and Vegitables
          </Text>
        </View>
        <View style={{ marginTop: 30, header: 50, }}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ backgroundColor: '#fff' }}>
            <TouchableOpacity onPress={() => setText(slide1)}>
              <View style={{
                backgroundColor: '#f6dfdd',
                borderRadius: 20,
                marginRight: 5,
                paddingTop: 3,
                paddingBottom: 10,
                paddingRight: 15,
                paddingLeft: 15,
                // justifyContent: 'space-around',
                //  alignItems: 'center',
              }}>
                <Text style={{
                  paddingTop: '3px',
                  // fontFamily: 'arial',
                  color: '#d17b79',
                  fontSize: 20,
                }}>Orange</Text>
              </View>
            </TouchableOpacity >

            <TouchableOpacity onPress={() => setText(slide2)}>
              <View style={{
                // backgroundColor: '#B1A9FF',
                borderRadius: 20,
                marginRight: 5,
                paddingTop: 3,
                paddingBottom: 10,
                paddingRight: 15,
                paddingLeft: 15,
                // justifyContent: 'space-around',
                //  alignItems: 'center',
              }}>
                <Text style={{
                  paddingTop: '3px',
                  // fontFamily: 'arial',
                  fontSize: 20,
                }}>Grape</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setText(slide3)}>
              <View style={{
                // backgroundColor: '#B1A9FF',
                borderRadius: 20,
                marginRight: 5,
                paddingTop: 3,
                paddingBottom: 10,
                paddingRight: 15,
                paddingLeft: 15,
                // justifyContent: 'space-around',
                //  alignItems: 'center',
              }}>
                <Text style={{
                  paddingTop: '3px',
                  // fontFamily: 'arial',
                  fontSize: 20,
                }}>Pineapple</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setText(slide4)}>
              <View style={{
                // backgroundColor: '#B1A9FF',
                borderRadius: 20,
                marginRight: 5,
                paddingTop: 3,
                paddingBottom: 10,
                paddingRight: 15,
                paddingLeft: 15,
                // justifyContent: 'space-around',
                //  alignItems: 'center',
              }}>
                <Text style={{
                  paddingTop: '3px',
                  // fontFamily: 'arial',
                  fontSize: 20,
                }}>Stawberry</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.test}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
            // backgroundColor: 'red',
          }}>
            <Text style={{ fontSize: 24 }}>{slide}</Text>
          </ScrollView>
        </View>

        {/* <View style={styles.test1}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
            // backgroundColor: 'red',
          }}>
            <View style={styles.viewOrange}>
              <Text style={{
                // fontFamily: 'arial',
                color: '#d17b79',
                fontSize: 20,
              }}>
                <View style={styles.coeur}>
                  <Image
                    source={coeur}
                    style={{ width: 30, height: 30, }}
                  />
                </View>
                <View style={styles.orange}>
                  <Image
                    source={orange}
                    style={{ width: 150, height: 150, }}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.orangeText}>Orange</Text>
                  <Text style={styles.orangeText}>$10</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                  <View style={styles.viewTextADD}>
                    <Text style={styles.orangeTextADD}>ADD</Text>
                  </View>
                </TouchableOpacity>
              </Text>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={styles.viewGrape}>
                <Text style={{
                  // fontFamily: 'arial',
                  color: '#d17b79',
                  fontSize: 20,
                }}>
                  <View style={styles.coeur}>
                    <Image
                      source={coeur}
                      style={{ width: 30, height: 30, }}
                    />
                  </View>
                  <View style={styles.orange}>
                    <Image
                      source={grape}
                      style={{ width: 150, height: 150, }}
                    />
                  </View>
                  <View style={styles.viewText}>
                    <Text style={styles.grapeText}>Grape</Text>
                    <Text style={styles.grapeText}>$10</Text>
                  </View>
                  <View style={styles.viewTextADD}>
                    <Text style={styles.grapeTextADD}>ADD</Text>
                  </View>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={styles.viewAnanas}>
                <Text style={{
                  // fontFamily: 'arial',
                  color: '#d17b79',
                  fontSize: 20,
                }}>
                  <View style={styles.coeur}>
                    <Image
                      source={coeur}
                      style={{ width: 30, height: 30, }}
                    />
                  </View>
                  <View style={styles.orange}>
                    <Image
                      source={ananas}
                      style={{ width: 150, height: 150, }}
                    />
                  </View>
                  <View style={styles.viewText}>
                    <Text style={styles.ananasText}>Ananas</Text>
                    <Text style={styles.ananasText}>$10</Text>
                  </View>
                  <View style={styles.viewTextADD}>
                    <Text style={styles.ananasTextADD}>ADD</Text>
                  </View>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={styles.viewFraise}>
                <Text style={{
                  // fontFamily: 'arial',
                  color: '#d17b79',
                  fontSize: 20,
                }}>
                  <View style={styles.coeur}>
                    <Image
                      source={coeur}
                      style={{ width: 30, height: 30, }}
                    />
                  </View>
                  <View style={styles.orange}>
                    <Image
                      source={fraise}
                      style={{ width: 150, height: 150, }}
                    />
                  </View>
                  <View style={styles.viewText}>
                    <Text style={styles.fraiseText}>Ananas</Text>
                    <Text style={styles.fraiseText}>$10</Text>
                  </View>
                  <View style={styles.viewTextADD}>
                    <Text style={styles.fraiseTextADD}>ADD</Text>
                  </View>
                </Text>
              </View>
            </TouchableOpacity>

          </ScrollView>
        </View>
        <View style={styles.test2}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
            // backgroundColor: 'red',
          }}>

            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={styles.viewGrape}>
                <Text style={{
                  // fontFamily: 'arial',
                  color: '#d17b79',
                  fontSize: 20,
                }}>
                  <View style={styles.coeur}>
                    <Image
                      source={coeur}
                      style={{ width: 30, height: 30, }}
                    />
                  </View>
                  <View style={styles.orange}>
                    <Image
                      source={grape}
                      style={{ width: 150, height: 150, }}
                    />
                  </View>
                  <View style={styles.viewText}>
                    <Text style={styles.grapeText}>Grape</Text>
                    <Text style={styles.grapeText}>$10</Text>
                  </View>
                  <View style={styles.viewTextADD}>
                    <Text style={styles.grapeTextADD}>ADD</Text>
                  </View>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={styles.viewAnanas}>
                <Text style={{
                  // fontFamily: 'arial',
                  color: '#d17b79',
                  fontSize: 20,
                }}>
                  <View style={styles.coeur}>
                    <Image
                      source={coeur}
                      style={{ width: 30, height: 30, }}
                    />
                  </View>
                  <View style={styles.orange}>
                    <Image
                      source={ananas}
                      style={{ width: 150, height: 150, }}
                    />
                  </View>
                  <View style={styles.viewText}>
                    <Text style={styles.ananasText}>Ananas</Text>
                    <Text style={styles.ananasText}>$10</Text>
                  </View>
                  <View style={styles.viewTextADD}>
                    <Text style={styles.ananasTextADD}>ADD</Text>
                  </View>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={styles.viewFraise}>
                <Text style={{
                  // fontFamily: 'arial',
                  color: '#d17b79',
                  fontSize: 20,
                }}>
                  <View style={styles.coeur}>
                    <Image
                      source={coeur}
                      style={{ width: 30, height: 30, }}
                    />
                  </View>
                  <View style={styles.orange}>
                    <Image
                      source={fraise}
                      style={{ width: 150, height: 150, }}
                    />
                  </View>
                  <View style={styles.viewText}>
                    <Text style={styles.fraiseText}>Ananas</Text>
                    <Text style={styles.fraiseText}>$10</Text>
                  </View>
                  <View style={styles.viewTextADD}>
                    <Text style={styles.fraiseTextADD}>ADD</Text>
                  </View>
                </Text>
              </View>
            </TouchableOpacity>

          </ScrollView>
        </View> */}
        <Text style={styles.txtFruits}>
          Nearby Shop
        </Text>
        <View style={{ marginTop: 20, }}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={{ borderWidth: 1, borderColor: '#f9bdbc', borderRadius: 20, width: 310, padding: 10, display: 'flex', flexDirection: 'row', marginRight: 10 }}>

              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <View style={{ padding: 10, backgroundColor: '#fddbda', borderRadius: 20, marginRight: 10, }}>
                  <Image
                    source={boutique1}
                    style={{ width: 80, height: 60, resizeMode: 'contain' }}
                  />
                </View>
              </TouchableOpacity>
              <View style={{ marginTop: 8, }}>
                <Text style={{ fontSize: 18 }}>Xenter Shop</Text>
                <Text style={{ fontSize: 18 }}>2356 Toltrican Street</Text>
                <Text style={{ fontSize: 18 }}>9Am - 7 Pm</Text>
              </View>
            </View>

            <View style={{ borderWidth: 1, borderColor: '#f9bdbc', borderRadius: 20, width: 310, padding: 10, display: 'flex', flexDirection: 'row', }}>
              <View style={{ padding: 10, backgroundColor: '#fddbda', borderRadius: 20, marginRight: 10, }}>
                <Image
                  source={boutique2}
                  style={{ width: 80, height: 60, resizeMode: 'contain' }}
                />
              </View>
              <View style={{ marginTop: 8, }}>
                <Text style={{ fontSize: 18 }}>Jason Kitio</Text>
                <Text style={{ fontSize: 18 }}>237 Ayanokoji </Text>
                <Text style={{ fontSize: 18 }}>8Am - 6 Pm</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        {/* <View style={{ margin: 20 }}>
          <ScrollView>
            <Text style={{ fontSize: 24 }}>{text}</Text>
            <Button
              title="Changer le texte"
              onPress={() => setText(slide1)} // changer le texte de l'état quand on clique sur le bouton
            />
            <Button
              title="Changer le texte"
              onPress={() => setText('Texte')} // changer le texte de l'état quand on clique sur le bouton
            />
            <Button
              title="Changer le texte"
              onPress={() => setText(slide2)} // changer le texte de l'état quand on clique sur le bouton
            />
          </ScrollView>
        </View> */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
    paddingRight: 0,
  },
  header: {
    // backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    marginTop: 15,
    width: 45,
    height: 38,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
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
  txtDiscover: {
    fontSize: 25,
  },
  txtFruits: {
    fontSize: 25,
  },
  viewOrange: {
    width: 200,
    height: 285,
    backgroundColor: '#fce9c8',
    marginTop: 10,
    margin: 10,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 15,
    borderRadius: 20,
  },
  coeur: {
    alignItems: 'flex-end',
    paddingTop: 10,
    width: 170,
  },
  orange: {
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    width: 170,
  },
  viewText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: 170,
  },
  viewTextADD: {
    alignItems: 'center',
    width: 170,
  },
  orangeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e8b475',
  },
  orangeTextADD: {
    color: '#fff',
    backgroundColor: '#fb9b13',
    width: 75,
    height: 30,
    borderRadius: 50,
    paddingTop: 7,
    textAlign: 'center',
    marginTop: 20,
  },
  viewGrape: {
    width: 200,
    height: 285,
    backgroundColor: '#d9defe',
    marginTop: 10,
    margin: 10,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 15,
    borderRadius: 20,
  },
  grapeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3443ab',
  },
  grapeTextADD: {
    color: '#fff',
    backgroundColor: '#3443ab',
    width: 75,
    height: 30,
    borderRadius: 50,
    paddingTop: 7,
    textAlign: 'center',
    marginTop: 20,
  },
  viewAnanas: {
    width: 200,
    height: 285,
    backgroundColor: '#ffffa3',
    marginTop: 10,
    margin: 10,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 15,
    borderRadius: 20,
  },
  ananasText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFE629',
  },
  ananasTextADD: {
    color: '#fff',
    backgroundColor: '#FFE629',
    width: 75,
    height: 30,
    borderRadius: 50,
    paddingTop: 7,
    textAlign: 'center',
    marginTop: 20,
  },
  viewFraise: {
    width: 200,
    height: 285,
    backgroundColor: '#f9bdbc',
    marginTop: 10,
    margin: 10,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 15,
    borderRadius: 20,
  },
  fraiseText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#eb7f7f',
  },
  fraiseTextADD: {
    color: '#fff',
    backgroundColor: '#eb7f7f',
    width: 75,
    height: 30,
    borderRadius: 50,
    paddingTop: 7,
    textAlign: 'center',
    marginTop: 20,
  },
  test1: {
    marginTop: 0,
    height: 320,
    display: 'none'
  },
  test2: {
    marginTop: 0,
    height: 320,
  },
  test: {
    marginTop: 0,
    height: 320,
  }
})

module.exports = HomeScreen