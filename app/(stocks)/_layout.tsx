// import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Slot } from 'expo-router'
import { useColorScheme } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function HomeLayout(): React.ReactElement {
  const colorScheme = useColorScheme()

  return (
    <Slot
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint
      }}
    />
  )
}
