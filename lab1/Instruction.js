import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { Container, Header, Content } from "native-base";
import MyFooter from './Components/Footer';
import MyHeader from './Components/My Header';
function Instruction(props){
let S={fontFamily:"arial", fontSize:22}
return (

<Container>
    
        <MyHeader/>
        <Content>
        <Text style={S}>1. Press the calculator tab on the footer</Text>
        <Text style={S}>2. Enter your first number </Text>
        <Text style={S}>3. Enter desired operation in the operation input (+ , - , / or ÷ , * or ×) </Text>
        <Text style={S}>4. Enter your Second Number</Text>
        <Text style={S}>5. Press the Calculate Button to see the result</Text>
        
        </Content>
        <MyFooter I="I" navigation={props.navigation}/>
        


</Container>


)

}

export default Instruction;