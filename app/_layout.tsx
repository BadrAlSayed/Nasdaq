import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { useColorScheme, Image } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(stocks)'
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout(): React.ReactElement | null {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        SplashScreen.hideAsync()
      }, 3000)
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav(): React.ReactElement {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen
            name='(stocks)'
            options={{
              headerTitle: '',
              headerLeft: () => (
                <Image
                  source={require('../assets/images/NasdaqLogo.png')}
                  resizeMode='contain'
                />
              ),
              headerStyle: {
                backgroundColor: '#191A28'
              }
            }}
          />
          <Stack.Screen
            name='modal'
            options={{ presentation: 'modal', headerShown: false }}
          />
        </Stack>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
