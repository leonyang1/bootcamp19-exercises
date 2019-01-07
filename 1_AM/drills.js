const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  return str.split(' ');
};

const reverse = str => {
  reverse_string = ''
  for (let i = 0; i < str.length; i++) {
    reverse_string = reverse_string + str[str.length - i - 1];
  };
  return reverse_string
};

const uniqueOnes = arr => {
  const unique_arr = []
  for (let i = 0; i < arr.length; i++) {
    if (unique_arr.includes(arr[i]) == false) {
      unique_arr.push(arr[i])
    };
  };
  console.log(unique_arr)
  return unique_arr
};

const factorial = num => {
  let fact = 1;
  for (let i = 1; i < num + 1; i++) {
    fact = fact * i
  }
  return fact
};

const zip = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return -1;
  }
  else {
    const narray2 =[]
    for (let i = 0; i < arr1.length; i++)
    {
      const narray1 =[];
      narray1.push(arr1[i]);
      narray1.push(arr2[i]);
      narray2.push(narray1)
    }
    console.log(narray2)
    return narray2
  }
};

const unzip = arr => {
  arr1 = []
  arr2 = []
  for (i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0]);
    arr2.push(arr[i][1]);
  }
  return [arr1, arr2]
};

const shiftRight = (str, num) => {
  new_str = "";
  let shift = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i));
    if (str.charCodeAt(i) < 97)
    console.log(str.charCodeAt(i));
    {
      console.log((str.charCodeAt(i) + num) % 97);
      const shift = String.fromCharCode((str.charCodeAt(i) + num) % 97);
    }
    else {
      const shift = String.fromCharCode((str.charCodeAt(i) + num) % 65);
    }
    new_str += shift;
  }
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  var d = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  month = monthNames[d.getMonth()];
  const day = function(d){
    formatted_day = ""
    formatted_day += d.getDate();
    if (d.getDate()[-1] == 1) {
      formatted_day += "st";
    }
    else if (d.getDate()[-1] == 2) {
      formatted_day += "nd";
    }
    else if (d.getDate()[-1] == 3) {
      formatted_day += "rd";
    }
    else {
      formatted_day += "th";
    }
    return formatted_day
  }
  year = d.getFullYear();
  const hourNames = ["one", "two", "three", "four", "five", "six", "seven","eight","nine", "ten", "eleven", "twelve"]

  hour = d.getHours();
  minute = d.getMinutes();
  return `Today's date is ${month} ${day(d)}, ${year}. It is ${hour}:${minute}!`
};

// Write tests here:
//assert(['hello', 'world'] === tokenize('hello world'));
assert( 'yo' === reverse('oy'));
assert(6 === factorial(3));
console.log(unzip([[1, 2], [3, 4]]))
console.log(shiftRight("hello", 1))
console.log(announceDate())
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
