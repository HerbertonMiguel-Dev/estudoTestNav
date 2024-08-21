import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();


 return (
   <View style={styles.container}>
    <Text>Página home!</Text>

    <Button title="Perfil" onPress={() => navigation.navigate("profile") }/>

    <Button title="User" onPress={() => navigation.navigate("user", { name: "Herberton Miguel"}) }/>

    <Button title="Contato" onPress={() => navigation.navigate("contato", { telefone: "99101010" }) }/>
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