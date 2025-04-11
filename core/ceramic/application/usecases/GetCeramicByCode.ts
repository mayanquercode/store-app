import { Ceramic, CeramicRepository } from "../../domain/entities";

export default class GetCeramicByCode {
  constructor(private repo: CeramicRepository) {}

  async use(code: string): Promise<Ceramic | null> {
    const data = await this.repo.getAll();

    const find = data.find((item) => item.code === code);

    if (!find) return Promise.resolve(null);

    return Promise.resolve(find);
  }
}
