import React, { useCallback, useMemo, useRef } from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { View, Text } from './Themed'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import BottomSheetComponent from './BottomSheet'
interface Props {
  ticker: string
  name: string
}

const TickerCard: React.FC<Props> = ({ ticker, name }) => {
  const screenWidth = Dimensions.get('window').width
  const itemWidth = (screenWidth - 60) / 2

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const snapPoints = useMemo(() => ['90%', '95%'], [])
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current?.close()
  }, [])
  return (
    <>
      <TouchableOpacity
        style={[styles.container, { width: itemWidth }]}
        onPress={handlePresentModalPress}
      >
        <View style={styles.logo}>
          <Text style={styles.logoInitials}>{ticker.slice(0, 2)}</Text>
        </View>
        <Text style={styles.initials}>{ticker}</Text>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>
          {name}
        </Text>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        handleStyle={{
          backgroundColor: '#1F202F',
          borderColor: '#1F202F'
        }}
      >
        <BottomSheetComponent ticker={ticker} closeModal={handleClosePress} />
      </BottomSheetModal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#323443',
    gap: 10,
    backgroundColor: '#242639',

    margin: 10
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    padding: 8,
    backgroundColor: '#242639',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#323443',
    justifyContent: 'center'
  },
  logoInitials: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'DMSans_Regular'
  },
  initials: {
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'DMSans_Bold',
    marginVertical: 5
  },
  name: {
    borderRadius: 5,
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: 'DMSans_Regular'
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  separator: {
    height: 1,
    width: '100%',
    marginVertical: 20
  },
  button: {
    marginTop: 'auto',
    marginBottom: 25
  },
  container2: {
    display: 'flex',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    height: '100%'
  }
})

export default TickerCard
