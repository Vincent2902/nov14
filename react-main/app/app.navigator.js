import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Loginscreen } from './screen/login/login.screen';
import { Homescreen } from './screen/Home/homescreen';
import { Aboutscreen } from './screen/About/aboutscreen';
import { Contactscreen } from './screen/Contact/contactscreen';
import { Menuscreen } from './screen/Menu/menuscreen';
import { Recipescreen } from './screen/Recipe/recipescreen';
import { Bmiscreen } from './screen/BMI/bmiscreen';
import { Exerscreen } from './screen/Exercise/exerscreen';
import { AuthProvider } from '../Context/authContext';
import { Registerscreen } from './screen/Register/registerscreen';
import { RecipeProvider } from '../Context/recipeContext';
import { Informationscreen } from './screen/information';
import { RecipeDetails } from './screen/Recipe/recipedetails';
import { ExerciseDetails } from './screen/Workout/exercisedetails';
import { ExerciseProvider } from '../Context/exerciseContext';
import { Exercisescreen } from './screen/Workout/exercisescreen';
import { Sensormenu } from './screen/Sensor/sensormenuscreen';
import { Squatsensor } from './screen/Sensor/squatsensor';
import {Dumbellsensor} from './screen/Sensor/dumbellsensor';
import {ProfileScreen} from './screen/Profile/ProfileScreen';
import SplashScreen from './Splashscreen';
import { Ionicons } from '@expo/vector-icons';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={Aboutscreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menuscreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="Profile" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };


export const AppNavigator = ({ navigation }) => {
  return (
    <NavigationContainer initialRouteName="Splashscreen">
      <AuthProvider>
        <RecipeProvider>
          <ExerciseProvider>
            <Stack.Navigator>
            <Stack.Screen
                options={{ headerTitle: 'Test', headerShown: false }}
                name="Splashscreen"
                component={SplashScreen}
              />
              <Stack.Screen options={{headerTitle: 'Test', headerShown: false}} name="Login" component={Loginscreen} />
        <Stack.Screen options={{headerTitle: 'Test', headerShown: false}} name="Register" component={Registerscreen} />
            <Stack.Screen options={{headerTitle: 'Information', headerShown: true}} name ='Information' component={Informationscreen}/>
            <Stack.Screen options={{headerTitle: 'Recipe Details', headerShown: true}} name ='RecipeDetails' component={RecipeDetails}/>
            <Stack.Screen options={{headerTitle: 'Exercise Details', headerShown: true}} name ='ExerciseDetails' component={ExerciseDetails}/>
            <Stack.Screen options={{headerTitle: 'Home', headerShown: false}} name ='Homes' component={HomeTabs}/>
            <Stack.Screen options={{headerTitle: 'About', headerShown: true}}name ='Abouts' component={HomeTabs}/>
            <Stack.Screen options={{headerTitle: 'Contact', headerShown: true}}name ='Contacts' component={Contactscreen}/>
            <Stack.Screen options={{headerTitle: 'Menu', headerShown: false}}name ='Menu' component={HomeTabs}/>
            <Stack.Screen options={{headerTitle: 'Recipes', headerShown: true}}name ='Recipescreen' component={Recipescreen}/>
            <Stack.Screen options={{headerTitle: 'Exercises', headerShown: true}}name ='Exercisescreen' component={Exercisescreen}/>
            <Stack.Screen options={{headerTitle: 'Pose Recognition', headerShown: true}}name ='Squatsensor' component={Squatsensor}/>
            <Stack.Screen options={{headerTitle: 'Pose Recognition', headerShown: true}}name ='Dumbellsensor' component={Dumbellsensor}/>
            <Stack.Screen options={{headerTitle: 'Pose Recognition Menu', headerShown: true}}name ='Sensormenu' component={Sensormenu}/>
            <Stack.Screen options={{headerTitle: 'Test', headerShown: false}}name ='Gymsc' component={Exerscreen}/>
            <Stack.Screen options={{headerTitle: 'Test', headerShown: false}}name ='BMI' component={Bmiscreen}/>
            <Stack.Screen name="Profile" component={HomeTabs} options={{ headerTitle: 'Profile' }}/>
            </Stack.Navigator>
          </ExerciseProvider>
        </RecipeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};
     
export default AppNavigator;