import { uploadDB } from "./firebase";

export const getProductFile = async (ruta) => {
  const response = await fetch(ruta);
  const items = await response.json();
  return items;
};
/*A usar para cargar la base de datos en caso de necesitar hacerlo.
uploadDB()
*/
