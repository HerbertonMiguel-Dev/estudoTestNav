import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { Profile } from '../../src/profile'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../App'

beforeEach(() => {
  jest.clearAllMocks();
})

describe("Profile Component tests", () => {

  it("deve verificar o texto renderizado", () => {
    const { getByText } = render(<Profile/>)
  
    expect(getByText("Página Perfil!")).toBeTruthy();
  })

  it("deve navegar para casa quando clicar no botão Voltar", async () => {
    const { getByText } = render(<Profile/>)

    const backButton = getByText("Voltar");
    fireEvent.press(backButton);

    const { goBack } = useNavigation<NativeStackNavigationProp<StackParamList>>()

    await waitFor(() => {
      expect(goBack).toHaveBeenCalledTimes(1);
    })

  })

})