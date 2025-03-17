import { View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

function LayoutScreen({ children }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar style='dark' backgroundColor='#FFFFFF' />
      {children}
    </View>
  )
}

export default LayoutScreen