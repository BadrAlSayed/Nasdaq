import React from 'react'
import { View } from './Themed'
import { TextInput, StyleSheet } from 'react-native'

interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  searchTerm: string
}
const SearchBar: React.FC<Props> = ({ setSearchTerm, searchTerm }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search for stocks'
        placeholderTextColor='white'
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',

    // margin: 20

    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,

    width: '100%'
  },
  input: {
    // paddingLeft: 20,
    // paddingRight: 200,
    opacity: 0.3,
    borderRadius: 25,
    backgroundColor: '#323443',
    padding: 10,
    borderWidth: 1,
    borderColor: '#323443',
    color: 'white',
    width: '100%',
    fontSize: 15,
    fontFamily: 'DMSans_Regular'
  }
})

export default SearchBar
