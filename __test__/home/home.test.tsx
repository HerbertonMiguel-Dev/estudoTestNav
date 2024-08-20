import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { Home } from '../../src/home'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../App'


describe("Test component Home", () => {

  it("deve renderizar o texto no componente inicial", () => {
    const { getByText } = render(<Home/>)
    expect(getByText("Página home!")).toBeTruthy();

  })

  it("deve navegar para a tela Perfil quando o botão é pressionado", async () => {
    const { getByText } = render(<Home/>)

    const button = getByText("Perfil")
    fireEvent.press(button);

    const { navigate } = useNavigation<NativeStackNavigationProp<StackParamList>>();

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("profile")
    })

  })

})