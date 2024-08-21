import { render, fireEvent } from '@testing-library/react-native'
import { User } from '../../src/user'
import { decrease } from '../../src/utils/math'

jest.mock("../../src/utils/math", () => {
  return{ 
    decrease: jest.fn(),
  }
})

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
})

describe("User component tests", () => {

  it("deve verificar o texto renderizado", () => {
    const { getByText } = render(<User/>)

    expect(getByText("Página Usuario!")).toBeTruthy();
    expect(getByText("Herberton Miguel")).toBeTruthy()

  })

  it("deve chamar a função handleCalculate", () => {
    const logSpy = jest.spyOn(console, "log")

    const { getByText } = render(<User/>)

    const buttonCalcular = getByText("Calcular")
    fireEvent.press(buttonCalcular);

    expect(logSpy).toHaveBeenCalledWith(30)

  })


  it("deve chamar a função de diminuição", () => {
    const { getByText } = render(<User/>)

    const buttonDiminuir = getByText("Diminuir")
    fireEvent.press(buttonDiminuir);

    expect(decrease).toHaveBeenCalledWith(50, 10)


  })

})