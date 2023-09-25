import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from './Themed'

interface ButtonProps {
  title: string
  handlePress: () => void
  isDisabled: boolean
}
const Button: React.FC<ButtonProps> = ({ title, handlePress, isDisabled }) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.container, isDisabled ? styles.disabled : null]}
      onPress={isDisabled ? undefined : handlePress}
      activeOpacity={isDisabled ? 1 : 0.2}
    >
      <Text
        style={[styles.buttonText, isDisabled ? styles.disabledText : null]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 25,
    backgroundColor: '#1F202F',
    borderWidth: 0.5,
    borderColor: '#40AFFF',
    shadowColor: '#40AFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10
  },
  buttonText: {
    color: '#40AFFF',
    fontSize: 15,
    fontFamily: 'DMSans_Bold'
  },
  disabled: {
    backgroundColor: '#2E2F3F',
    borderColor: '#5E5F6F',
    shadowColor: '#5E5F6F',
    shadowOpacity: 0.5,
    elevation: 10
  },
  disabledText: {
    color: '#7E7F8F'
  }
})

export default Button
