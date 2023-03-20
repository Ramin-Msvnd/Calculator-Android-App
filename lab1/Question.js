import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function Question(props){

    let S={fontFamily:"arial", fontSize:22, textAlign: "center"}

return (

<View >
        <View>
            <Text style={S}>Hi</Text>
            <Text style={S}>Are you taking CMPE-277?</Text>
        </View>

        <View >
        <Button title='Yes' onPress={()=>{props.navigation.navigate('Instruction')} }/>
        <Button title='No' onPress={()=>{props.navigation.navigate('Instruction')}} />
        </View>


</View>


)

}

export default Question;