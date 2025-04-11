import { CeramicRepository, NewCeramic } from "../../domain/entities";

export default class UpdateCeramicByCode {
  constructor(private repo: CeramicRepository) {}

  async use(ceramic: NewCeramic): Promise<boolean> {
    
    const data = await this.repo.getOne(ceramic.code)

    if(!data){
      return Promise.resolve(false);
    }

    const newCeramic = {...data, ...ceramic}

    await this.repo.save(newCeramic)

    return Promise.resolve(true);
  }
}
