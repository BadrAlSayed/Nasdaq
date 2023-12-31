import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Spalsh from '../components/SplashScreen'

const queryClient = new QueryClient()

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(stocks)'
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout(): React.ReactElement | null {
  const [loaded, error] = useFonts({
    DMSans_Regular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMSans_Bold: require('../assets/fonts/DMSans-Bold.ttf')
  })
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
    setTimeout(() => {
      setShowSplashScreen(false)
    }, 3000)
  }, [loaded])

  if (!loaded) {
    return null
  }
  if (showSplashScreen) {
    return <Spalsh />
  }
  return <RootLayoutNav />
}

function RootLayoutNav(): React.ReactElement {
  return (
    <ThemeProvider value={DarkTheme}>
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
          <Stack>
            <Stack.Screen
              name='(stocks)'
              options={{
                headerTitle: '',
                headerLeft: () => (
                  <Image
                    source={require('../assets/images/NasdaqLogo.png')}
                    resizeMode='contain'
                    style={{ width: 105, height: 50 }}
                  />
                ),
                headerStyle: {
                  backgroundColor: '#191A28'
                }
              }}
            />
          </Stack>
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
