import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { Text } from 'react-native'
import { Image, ImageBackground, View } from 'react-native'

const CustomDrawerContent = (props:any) => {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{}} >
        <ImageBackground
          source={{uri: 'https://img.freepik.com/vector-gratis/fondo-abstracto-blanco_23-2148844576.jpg?t=st=1742186917~exp=1742190517~hmac=6f9a8f8207b32c3c03a6775116fca3228345e3fadbfe41e1369075ed2b9b0d76&w=996'}}
          style={{marginBottom: 10, padding: 20}}
        >
          <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/a/ACg8ocKY2uJQZvrwsi6lDZ05SNBc_Bd9Du9kSaYMRtSau69PBBM2TNko=s288-c-no'
          }}
            style={{width: 80, height: 80, borderRadius: 100, marginBottom: 10}}
          />
          <Text style={{fontSize: 20, fontWeight: "bold", marginBottom:6}}>Victor Hugo Santos</Text>
          <Text style={{fontSize: 16}}>Bodega Quininde</Text>
        </ImageBackground>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawerContent