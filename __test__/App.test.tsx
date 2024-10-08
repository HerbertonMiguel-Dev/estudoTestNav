import { render, waitFor } from '@testing-library/react-native'
import App from '../App'
import { NavigationContainer } from '@react-navigation/native'

beforeEach(() => {
  jest.clearAllMocks()
  jest.resetAllMocks();
})

describe("App component", () => {

  it("deve verificar o componente do aplicativo de renderização", async () => {

    await waitFor(() => {
      render(<NavigationContainer><App/></NavigationContainer>)
    })

  })

})