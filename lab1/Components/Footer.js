
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base' ;

function MyFooter (props) { 
    
 let A= (props.A) ? <Button Active onPress={()=>{props.navigation.navigate('About')} }>
    <Text style={{color:"#000000"}}>About us</Text>
  </Button> : <Button onPress={()=>{props.navigation.navigate('About')} }>
  <Text>About us</Text>
</Button>;

let C= (props.C) ? <Button Active onPress={()=>{props.navigation.navigate('Calculator')} }>
    <Text style={{color:"#000000"}}>Calculator</Text>
  </Button> : <Button onPress={()=>{props.navigation.navigate('Calculator')} }>
  <Text>Calculator</Text>
</Button>;



let I= (props.I) ? <Button Active onPress={()=>{props.navigation.navigate('Instruction')} }>
<Text style={{color:"#000000"}}>Instruction</Text>
</Button> : <Button onPress={()=>{props.navigation.navigate('Instruction')} }>
<Text>Instruction</Text>
</Button>;


    return (
      
        
        <Footer>
          <FooterTab>
         
            {I}
            {C}
            {A}
          </FooterTab>
        </Footer>
      
    );
  }

  export default MyFooter;