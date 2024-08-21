import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { Home } from '../../src/home'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../App'


describe("Test component Home", () => {

  afterEach(() => {
    (global as any).mockedRouteName = "user";
  })

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

  it("deve navegar para a tela do usuário quando o botão for pressionado", async () => {
    (global as any).mockedRouteName = "user";

    const { getByText } = render(<Home/>)

    const button = getByText("User")
    fireEvent.press(button);

    const { navigate } = useNavigation<NativeStackNavigationProp<StackParamList>>();

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("user", { name: "Herberton Miguel"} )
    })


  })

  it("deve navegar até a tela de contato quando o botão for pressionado", async () => {
    (global as any).mockedRouteName = "contato";

    const { getByText } = render(<Home/>)

    const buttonContato = getByText("Contato")
    fireEvent.press(buttonContato);

    const { navigate } = useNavigation<NativeStackNavigationProp<StackParamList>>();

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("contato", { telefone: "99101010"} )
    })

  })

})