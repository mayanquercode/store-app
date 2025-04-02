import { View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Constants from "expo-constants";
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

function LayoutScreen({ children }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: Constants.statusBarHeight * 2 }}>
      <StatusBar style='dark' backgroundColor='#FFFFFF' />
      {children}
    </SafeAreaView>
  )
}

export default LayoutScreen