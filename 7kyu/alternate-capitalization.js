// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

// My solution

function capitalize(s){
    let evenCap=""
    let oddCap =''
    let arrAnswer=[]
    for(let i = 0; i<s.length; i++){
      if(i%2===0){
        evenCap+=(s[i].toUpperCase())
      } else evenCap+=(s[i].toLowerCase())
    }
    for(let i =0; i<evenCap.length; i++){
      if(i%2===0){
        oddCap += (evenCap[i].toLowerCase())
      } else oddCap+=(evenCap[i].toUpperCase())
    }
    arrAnswer.push(evenCap,oddCap)
    console.log(evenCap)
    console.log(oddCap)
    console.log(arrAnswer)
    return arrAnswer
  };