import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Accueil from "./components/Accueil"
import Statistique from "./components/Statistique"
import Add from "./components/Add"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const CustomBarButton = ({children, onPress})=>(
  <TouchableOpacity 
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onPress={onPress}
  >
    <view 
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'red'
      }}
    >
      {children}
    </view>
  </TouchableOpacity>
)

export default function App() {
  return (

      <NavigationContainer >
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
          }}
          screenOptions={{
            tabBarStyle: { 
              position: 'absolute', 
              backgroundColor: "#ffffff",
              position: 'absolute',
              boderRadius: 15,
            },
          }}
        >
          <Tab.Screen name="Accueil" component={Accueil} options={{
            tabBarIcon: ({focused}) => (            
              <Image
                source={require('./assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94"
                  }}
              />
            ),
          }}/>
          <Tab.Screen name="Add" component={Add}
            options={{
              tabBarIcon: ({focused}) => (            
                <Image
                  source={require('./assets/icons/statistics.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white'
                    }}
                />
              ),

            }}
          />
          <Tab.Screen name="Statistique" component={Statistique} options={{
            tabBarIcon: ({focused}) => (            
              <Image
                source={require('./assets/icons/statistics.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94"
                  }}
              />
            ),
          }}/>
          {/* Ajoutez d'autres onglets si nécessaire */}
        </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

