import { View, Text, StyleSheet, Button } from 'react-native';
import { StackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

export function Profile() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

 return (
   <View style={styles.container}>
    <Text>Página Perfil!</Text>

    <Button title="Voltar" onPress={() => navigation.goBack() }/>
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