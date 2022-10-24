export const getProductFile = async (ruta) => {
    const response = await fetch(ruta)
    const items = await response.json()
    return items
}