import { render } from '@testing-library/react-native'
import { User } from '../../src/user'

describe("User component tests", () => {

  it("deve verificar o texto renderizado", () => {
    const { getByText } = render(<User/>)

    expect(getByText("Página Usuario!")).toBeTruthy();
    expect(getByText("Herberton Miguel")).toBeTruthy()

  })

})