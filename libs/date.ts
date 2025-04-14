/**
 * Formatea una fecha en formato ISO a DD/MM/YYYY
 * @param isoString Cadena de fecha en formato ISO (opcional, usa fecha actual si no se proporciona)
 * @returns Fecha formateada como DD/MM/YYYY
 */
export function formatToDDMMYYYY(isoString?: string): string {
  const date = isoString ? new Date(isoString) : new Date();
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0-11
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}