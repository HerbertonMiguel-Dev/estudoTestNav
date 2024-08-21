import { render, waitFor } from '@testing-library/react-native'
import { Contato } from '../../src/contato'

describe("Component Contato", () => {
  afterEach(() => {
    (global as any).mockedRouteName = "user";
  })

  it("deve verificar a mensagem do telefone", async () => {
    (global as any).mockedRouteName = "contato";

    const { getByText } = render(<Contato/>)

    await waitFor(() => {
      expect(getByText("99101010")).toBeTruthy()
    })

  })

})