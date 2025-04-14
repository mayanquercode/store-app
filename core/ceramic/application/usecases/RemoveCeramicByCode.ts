import { CeramicRepository } from "../../domain/entities";

export default class RemoveCeramicByCode {
  constructor(private repo: CeramicRepository) {}

  async use(code: string): Promise<boolean> {
    const data = await this.repo.removeOne(code);
    return Promise.resolve(data);
  }
}
