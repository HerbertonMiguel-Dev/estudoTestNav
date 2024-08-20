import { render } from '@testing-library/react-native'
import { Home } from '../../src/home'


describe("Test component Home", () => {

  it("deve renderizar o texto no componente inicial", () => {
    const { getByText } = render(<Home/>)
    expect(getByText("Página home!")).toBeTruthy();

  })

})