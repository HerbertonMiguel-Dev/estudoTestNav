import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from  '@react-navigation/native-stack'
import { Home } from './src/home'
import { Profile } from './src/profile'
import { User } from './src/user'

export type StackParamList = {
  home: undefined;
  profile: undefined;
  user: {
    name: string;
  }
}

const Stack = createNativeStackNavigator<StackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
        />

        <Stack.Screen
          name="user"
          component={User}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
