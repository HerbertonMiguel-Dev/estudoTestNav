import { View, Text, StyleSheet, Button } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native'

type RouteUserParams = {
  user: {
    name: string;
  }
}

type UserRouteProps = RouteProp<RouteUserParams, "user">


export function User() {
  const route = useRoute<UserRouteProps>();

 return (
   <View style={styles.container}> 
    <Text>Página Usuario!</Text>
    <Text>{route.params.name}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})