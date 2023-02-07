const date1 = new Date('3/13/2023');
const date2 = new Date();
const diffTime = date2 - date1;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
const ind = diffDays >= 0 ? diffDays : 0

export default ind