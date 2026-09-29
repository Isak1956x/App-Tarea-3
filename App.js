import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/homeScreen';
import SumadoraScreen from './screens/sumadoraScreen';
import MultiplicarScreen from './screens/multiplicarScreen';
import NumALetrasScreen from './screens/numALetrasScreen';
import ExperienciaScreen from './screens/experienciaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: '#1E293B' },
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'center',
          tabBarStyle: { backgroundColor: '#1E293B', height: 60, paddingBottom: 8, paddingTop: 4 },
          tabBarActiveTintColor: '#38BDF8',
          tabBarInactiveTintColor: '#94A3B8',
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        }}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Sumadora" component={SumadoraScreen} />
        <Tab.Screen name="Multiplicar" component={MultiplicarScreen} />
        <Tab.Screen name="Número a Letras" component={NumALetrasScreen} />
        <Tab.Screen name="Experiencia" component={ExperienciaScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
