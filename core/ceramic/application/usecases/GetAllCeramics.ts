import { Ceramic, CeramicRepository } from "../../domain/entities";

export default class GetAllCeramics {
  constructor(private repo: CeramicRepository) {}

  async use(): Promise<Ceramic[]> {
    const data = await this.repo.getAll();
    return Promise.resolve(data);
  }
}
