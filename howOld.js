 
// Calculating how old someone was in a past date or will be in future date based on thier current age:

const howOld = (age, year) =>  {
  let theCurrentDate = new Date();
  let theCurrentYear = theCurrentDate.getFullYear();
  const yearDifference = year - theCurrentYear;
  const newAge = age + yearDifference;

  if (newAge > age)  {
    return `You will be ${newAge} in the year ${year}`; 
  }  else if (newAge < 0)  {
    return `The year ${year} was ${(-newAge)} years before you were born`
  }  else (newAge < age)  
    return `You were ${newAge} in the year ${year}`;  
};

// Testing the code:

console.log(howOld(14, 2024));


