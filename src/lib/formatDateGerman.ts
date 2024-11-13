const formatDateGerman = (isoDate: any) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  
  const month = date.getMonth()+1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export default formatDateGerman;
