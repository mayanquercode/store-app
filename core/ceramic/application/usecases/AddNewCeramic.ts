import { Ceramic, CeramicRepository, NewCeramic } from "../../domain/entities";

export default class AddNewCeramic {
  constructor(private repo: CeramicRepository) {}

  async use(ceramic: NewCeramic): Promise<void> {
    
    const newCeramic: Ceramic = {
      ...ceramic,
      stock: {
        warehouse: 0,
        exhibition: 0,
        pending: 0,
      },
      dispatch: {
        meterPiece: 0,
      },
    };

    await this.repo.save(newCeramic);
    return Promise.resolve();
  }
}
