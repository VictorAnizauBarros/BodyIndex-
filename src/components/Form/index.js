import React from "react";
import {View, Text, TextInput} from "react-native"; 

function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Altura em metros (Ex: 1.80)"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                placeholder="Peso em quilos (Ex: 80.129)"
                keyboardType="numeric"
                />
            </View>
        </View>
    ); 
}

export default Form; 