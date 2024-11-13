const formatDateTime = (isoDate: any) => {
  const date = new Date(isoDate);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();


  return `${month}/${year}`;
};

export default formatDateTime;
