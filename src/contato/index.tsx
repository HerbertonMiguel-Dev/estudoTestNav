import { View, Text, StyleSheet, Button } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native'

type RouteContatoParams = {
  contato: {
    telefone: string;
  }
}

type ContatoRouteProps = RouteProp<RouteContatoParams, "contato">


export function Contato() {
  const route = useRoute<ContatoRouteProps>();

 return (
   <View style={styles.container}>
    <Text>{route.params.telefone}</Text>
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