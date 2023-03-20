import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MyFooter from './Components/Footer';
import MyHeader from './Components/My Header';
import { Container, Header, Content } from "native-base";
function About(props){

let S={fontFamily:"arial", fontSize:22}

return (

<Container>
    <MyHeader />
    <Content>
        <Text style={S}>Thanks for Choosing my app</Text>
        <Text style={S}>This app is designed as lab 1 for the course CMPE-277</Text>
        <Text style={S}>Hope you enjoyed it</Text>
        <Text style={S}>Ramin Mousivand </Text>
        </Content>        
        <MyFooter A="A" navigation={props.navigation} />

</Container>

)

}

export default About;