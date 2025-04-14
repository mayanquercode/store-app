import LocalCeramicRepository from "./infrastructure/repositoies/LocalCeramicRepository";
import AddNewCeramic from "./application/usecases/AddNewCeramic";
import GetAllCeramics from "./application/usecases/GetAllCeramics";
import GetCeramicByCode from "./application/usecases/GetCeramicByCode";
import UpdateCeramicByCode from "./application/usecases/UpdateCeramicByCode";
import RemoveCeramicByCode from "./application/usecases/RemoveCeramicByCode";

export const localRepository = new LocalCeramicRepository();

export const addNewCeramic = new AddNewCeramic(localRepository);
export const getAllCeramics = new GetAllCeramics(localRepository);
export const getCeramicByCode = new GetCeramicByCode(localRepository);
export const updateCeramicByCode = new UpdateCeramicByCode(localRepository);
export const removeCeramicByCode = new RemoveCeramicByCode(localRepository);
