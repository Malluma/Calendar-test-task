export function createDaysArray(firstDate){
  
  const result = [];
  let currentDate = new Date (firstDate);
  for (let i=0; i<7; i++){
    const newDateString = formatDateToString(new Date(currentDate));
    result.push(newDateString);
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
  }
  
  return result;  
}

export function formatDigitToTime(digit){
  let result = digit.toString();

  if (result.length === 1){
    result = `0${result}:00`
  }else{
    result = `${result}:00`
  }

  return result;
}

function make2digit(digit){
  const digitStr = String(digit);
  return (digitStr.length === 1 ? '0'+digitStr : digitStr);
}

export function formatDateToString(date){
  const day2digit = make2digit(date.getDate());
  const month2digit = make2digit(date.getMonth()+1);
  return `${day2digit}${month2digit}${date.getFullYear()}`;
}

export function generateCellIndex(date, time){
  const dateIndex = date;
  const timeIndex = make2digit(time);
  const cellIndex = `${dateIndex}-${timeIndex}`;
  return cellIndex;
}

export function getCellIndex(dateTime){
  const year = dateTime.substring(0,4);
  const month = dateTime.substring(5,7);
  const day = dateTime.substring(8,10);
  const time = dateTime.substring(11, 13);
  const cellIndex = `${day}${month}${year}-${time}`;
  return cellIndex;
}