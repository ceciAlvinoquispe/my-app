export const getProducts = async () => {
  try{
    let url = `https://fakestoreapi.com/products`;
    const response = await fetch(url);

    const data = await response.json();
    return data
  }catch(err){
    console.log('Error :(')
  }
}


export const getProductData = async (url) => {
  try{
    const response = await fetch(url);
    const data = await response.json();

    return data
  }catch(err){
    console.error('No se encontró nada :(')
  }
}