import react from "react";
import { useState } from "react";
import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export const Test = () => {

    const [counter, setCounter] = useState(1)


    handleAddCount = () => {
        setCounter(prevCounter => prevCounter + 1)
    }
    handleRemovecount = () => {
        if (counter > 1) {
            setCounter(prevCounter => prevCounter - 1)
        }
    }

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap:8 }}>
                    {/* <Button onPress={handleAddCount} title="+" /> */}
                    <TouchableOpacity onPress={handleRemovecount}>
                        <Text style={{ color: '#65b195', borderWidth: 2, borderColor: '#65b195', borderRadius: 5, width: 30, height: 30, paddingLeft: 12, paddingTop: 5, }} >--</Text>
                    </TouchableOpacity>
                    <Text>{counter}</Text>
                    <TouchableOpacity onPress={handleAddCount} >
                        <Text style={{ color: '#65b195', borderWidth: 2, borderColor: '#65b195', borderRadius: 5, width: 30, height: 30, paddingLeft: 9, paddingTop: 5, }} >+</Text>
                    </TouchableOpacity>
                    {/* <Button onPress={handleRemovecount} title="-" /> */}
                </View>
            </View>
        </SafeAreaView>
    )
}

