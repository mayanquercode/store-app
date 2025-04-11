export class ErrorCeramiNum extends Error {
  constructor(field: string) {
    super(`El valor de "${field}" debe ser un número válido.`);
    this.name = "ErrorCeramiNum";
  }
}

export class ErrorCeramiInt extends Error {
  constructor(field: string) {
    super(`El valor de "${field}" debe ser un número entero.`);
    this.name = "ErrorCeramiInt";
  }
}

export class ErrorCeramiRequired extends Error {
  constructor(field: string) {
    super(`El campo "${field}" es requerido.`);
    this.name = "ErrorCeramiRequired";
  }
}
