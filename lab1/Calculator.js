import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import MyFooter from './Components/Footer';
import {Container, Content, Form, Item, Input, Label} from 'native-base';
import MyHeader from './Components/My Header';

function Calculate(props) {
  let [userData, setData] = useState({result: ''});

  function compute() {
    let firstNumber = userData.firstNumber;
    let secondNumber = userData.secondNumber;

    if (userData.operator == '+')
      setData(prev => {
        return {...prev, result: firstNumber + secondNumber};
      });
    else if (userData.operator == '-')
      setData(prev => {
        return {...prev, result: firstNumber - secondNumber};
      });
    else if (userData.operator == '*' || userData.operator == '×')
      setData(prev => {
        return {...prev, result: firstNumber * secondNumber};
      });
    else if (userData.operator == '/' || userData.operator == '÷')
      setData(prev => {
        return {...prev, result: firstNumber / secondNumber};
      });
    else
      setData(prev => {
        return {
          ...prev,
          result: 'Pleas Enter the numbers and operator correctly',
        };
      });
  }

  return (
    <Container>
      <MyHeader />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>First Number</Label>
            <Input
              keyboardType="numeric"
              value={userData.firstNumber}
              onChangeText={txt => {
                setData(prev => {
                  return {...prev, firstNumber: Number(txt)};
                });
              }}
            />
          </Item>

          <Item floatingLabel>
            <Label>Operator (+ , - , * or × , ÷ or / ) </Label>
            <Input
              value={userData.operator}
              onChangeText={txt => {
                setData(prev => {
                  return {...prev, operator: txt};
                });
              }}
            />
          </Item>

          <Item floatingLabel>
            <Label>Second Number</Label>
            <Input
               keyboardType="numeric"
			   value={userData.secondNumber}
              onChangeText={txt => {
                setData(prev => {
                  return {...prev, secondNumber: Number(txt)};
                });
              }}
            />
          </Item>

          <View style={{marginTop: '15%'}}>
            <Button title="Calculate" onPress={compute} />
          </View>

          <View style={{marginTop: '15%'}}>
            <Item last>
              <Label
                style={{
                  fontSize: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Result = {userData.result}
              </Label>
            </Item>
          </View>
        </Form>
      </Content>
      <MyFooter navigation= {props.navigation} C="C" />
    </Container>
  );
}

export default Calculate;
