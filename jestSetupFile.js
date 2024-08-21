

export const mockNavigate = jest.fn();
export const mockGoBack = jest.fn();

global.mockedRouteName = "user";

// Mock do Navigation
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return{
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack
    }),
    NavigationContainer: ({ children }) => <>{children}</>,
    useRoute: () => {
      if(global.mockedRouteName === "user"){
        return{
          params: { name: "Herberton Miguel" }
        }
      }

      if(global.mockedRouteName === "contato"){
        return{
          params: { telefone: "99101010" }
        }
      }

    }
  }
})


jest.mock("@react-navigation/native-stack", () => {
  return{
    createNativeStackNavigator: () => ({
      Navigator: ({ children }) => <>{children}</>,
      Screen: ({ children }) => <>{children}</>
    })
  }
})

