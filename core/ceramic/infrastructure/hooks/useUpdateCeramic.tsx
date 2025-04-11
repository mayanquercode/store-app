import { updateCeramicByCode } from "../../dependencies";
import { NewCeramic } from "../../domain/entities";

export default function useUpdateCeramic(){
  return  (ceramicData:NewCeramic) => {
    console.log('Actualizar');
    updateCeramicByCode.use(ceramicData).then(res => {
      console.log(res);
    })
    
  }
}