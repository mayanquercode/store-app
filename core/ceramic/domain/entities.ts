export interface Ceramic {
  code: string
  name: string
  box: {
    meterBox: number
    meterPiece: number
    numPieces: number
    format: string
  },
  stock: {
    warehouse: number
    exhibition: number
    pending: number
  },
  dispatch: {
    meterPiece: number
  }
}

export interface NewCeramic {
  code: string
  name: string
  box: {
    meterBox: number
    meterPiece: number
    numPieces: number
    format: string
  }
}

export interface CeramicRepository {
  getAll(): Promise<Ceramic[]>
  getOne(code:string): Promise<Ceramic|null>
  removeOne(code:string): Promise<boolean>
  save(ceramic:Ceramic):Promise<void>
} 
