

export const mockNavigate = jest.fn();
export const mockGoBack = jest.fn();

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
    useRoute: () => ({
      params: { name: "Herberton Miguel" }
    })
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