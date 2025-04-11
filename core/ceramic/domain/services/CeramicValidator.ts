import { NewCeramic } from "../entities";
import { ErrorCeramiNum, ErrorCeramiInt, ErrorCeramiRequired } from "../errors";

export class CeramicValidator {
  static validate(ceramic: NewCeramic): void {
    if (!ceramic.name.trim()) {
      throw new ErrorCeramiRequired("name");
    }

    if (!ceramic.code.trim()) {
      throw new ErrorCeramiRequired("code");
    }

    if (isNaN(ceramic.box.meterBox)) {
      throw new ErrorCeramiNum("box.meterBox");
    }

    if (isNaN(ceramic.box.meterPiece)) {
      throw new ErrorCeramiNum("box.meterPiece");
    }

    if (!Number.isInteger(ceramic.box.numPieces)) {
      console.log('isInteger',ceramic.box.numPieces);
      
      throw new ErrorCeramiInt("box.numPieces");
    }

    if (!ceramic.box.format.trim()) {
      throw new ErrorCeramiRequired("box.format");
    }
  }
}
