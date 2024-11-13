const formatDate = (isoDate: any) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()]; // Get the month name
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export default formatDate;
