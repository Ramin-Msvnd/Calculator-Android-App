import {createStackNavigator} from 'react-navigation';
import About from './About';
import Instruction from './Instruction';
import Calculator from './Calculator';
import Question from './Question';

const Routes= createStackNavigator( {
Question: {screen: Question},
Instruction : {screen: Instruction}, 
About: {screen: About} , 
    Calculator: {screen: Calculator}
} ,
{headerMode: 'none'}

);

export default Routes;