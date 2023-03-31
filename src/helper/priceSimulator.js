

// Simulador de precios y precio por defecto para los amiibos que no tengan fecha asignada 
export const priceSimulator = (fecha) => {
  if (fecha === null) {
    //oferta black friday
    return "15500";
  } else {
    let dateObject = new Date(Date.parse(fecha));
    let unixTime = dateObject.getTime() / 1000;
    let convertString = unixTime.toString();
    let firstFive = convertString.substring(0, 5);
    return parseInt(firstFive);
  }
};
