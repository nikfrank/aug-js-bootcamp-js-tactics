/// learn javascript by writing functions!

// each exercise will challenge you to write a function that does some work and (usually) returns something useful
// if you don't know the answer already, the words you'll need to search in google are ALWAYS in the description!

// the test runner will not test anything you output that is falsy (functions are truthy)
// so just replace the null with your function and KILL EM ALL!

// be careful not to change the function names (the test runner only knows to look for the names given)



/// USING CONSOLE.LOG

export const logger = null;
// to pass this test, all we need to do is log something to the console in our function



export const declarer = null;
// to pass this test, we need to declare a constant variable and return it



export const stringer = null;
// this one will pass as long as we send back a string from a one line fat arrow



export const declareLogReturn = null;
// here we need to declare a constant, log it out, and return it



export const oneLineLogReturn = null;
// same as the first one... just log something to the console. This time do it in a one line fat arrow




/// STRINGS


export const capslocker = null;
// this function needs to take an input param string and convert it to ALL UPPERCASE
// example input: ('blah')
// example output: 'BLAH'



export const twoStringAdd = null;
// we'll get two params (both strings)... we need to concatenate them together (in order)
// example input: ('nik is the ', 'best')
// example output: 'nik is the best'



export const allStringAdd = null;
// this is the same as the last one, but we will receive a different number of parameters (all strings) each time
// we still need to concatenate them all together in order to pass the test
// example input: ('nik', ' ', 'is', ' ', 'the', ' ', 'best', ' ', '...I know it...')
// exmaple output: 'nik is the best ...I know it...'

// example input: ('what ', 'an ', 'egomaniac... *rolls eyes*')
// example output: 'what an egomaniac... *rolls eyes*'



export const stringContains = null;
// here we receive two strings
// we want our function to return true when the first one contains the second one... and false otherwise
// example input: ('funkadelic', 'funk')
// example output: true

// example input: ('parliament', 'funk')
// exmaple output: false


export const instancesInString = null;
// here we receive two string inputs, we want to return the number of times we find the second string in the first
// example input: ('blah blah blah monkey', 'blah')
// example output: 3


export const darken3HexColor = null;
// here we receive a valid CSS 3 digit hexcolor which we want to make darker by some amount
// (1 means paint it black, 0 means leave it the same, 0.5 means average the input with black, etc)
// we need to return a valid 3 digit hexcolor
// example input: ('#f8c', 0.25)
// example output: '#b69'

export const darken6HexColor = null;
// here we receive a valid CSS 6 digit hexcolor which we want to make darker by some amount
// (1 means paint it black, 0 means leave it the same, 0.5 means average the input with black, etc)
// we need to return a valid 6 digit hexcolor
// example input: ('#f880cc', 0.25)
// example output: '#b66099'


export const darkenHexColor = null;
// here we receive a valid CSS 3 digit OR 6 digit hexcolor which we want to make darker by some amount
// (1 means paint it black, 0 means leave it the same, 0.5 means average the input with black, etc)
// we need to return a valid 6 digit hex color, whichever input we received
// example input: ('#f880cc', 0.25)
// example output: '#b66099'

// example input: ('#f8c', 0.25)
// example output: '#bb6699'


export const convertHexToRGBA = hexColor=>
  'rgba(' +
  (hexColor.length === 5 ? (
    hexColor.slice(1).split('')
            .map(hexDigit=> hexDigit + hexDigit)
  ) : (
    [0, 1, 2, 3].map(i => (
      hexColor[2*i + 1] + hexColor[2*i + 2]
    ))
  )).map(hexCode=> parseInt(hexCode, 16)).join() + ')';





hexColor=>
  'rgba(' +
  (hexColor.length === 5 ? (
    hexColor.slice(1).split('')
            .map(hexDigit=> hexDigit + hexDigit)
  ) : (
    hexColor.slice(1).split('')
            .reduce((hexCodes, hexDigit, i)=> {
              if( !(i % 2) ) hexCodes.push( hexDigit );
              else hexCodes[ hexCodes.length-1 ] += hexDigit;

              return hexCodes;
            }, [])
  )).map(hexCode=> parseInt(hexCode, 16)).join() + ')';



(hexColor)=>{
  let hexCodes = [];

  if( hexColor.length === 5 ){
    for(let i=1; i<(hexColor.length); i++){
      hexCodes.push( hexColor[i] + hexColor[i] );
    }
  } else {
    for(let i=1; i<(hexColor.length); i++){
      if( (i % 2) === 1 ){
        hexCodes.push( hexColor[i] );
      } else {
        hexCodes[ hexCodes.length-1 ] += hexColor[i];
      }
    }
  }

  const decimals = hexCodes.map(hexCode=> parseInt(hexCode, 16));

  return 'rgba(' + decimals.join() + ')';
};
// here we will receive a #ABCD four digit CSS hex color, or a #AABBCCDD eight digit CSS hex color
// our job is to return the equivalent rgba(123, 123, 123, 123) CSS color
// example input: ('#8bc8')
// example output: 'rgba(136,187,204,136)'

// example input: ('#c64e82bd')
// example output: 'rgba(198,78,130,189)'


export const convertRGBAtoHex = (rgbaColor)=>
  '#'+ rgbaColor.replace('rgba(', '')
                .replace(')', '')
                .replace(/\s/g, '')
                .split(',')
                .map(sn => 1*sn)
                .map(n=> n.toString(16))
                .map(h=> h.padStart(2, '0'))
                .join('');

(rgbaColor)=>{
  const numbers = rgbaColor.replace('rgba(', '')
                           .replace(')', '')
                           .replace(/\s/g, '')
                           .split(',')
                           .map(sn => 1*sn);

  const hexCodes = numbers.map(n=> n.toString(16))
                          .map(h=> h.padStart(2, '0'));

  return '#'+hexCodes.join('');
};
// here we will receive an 'rgba(123, 123, 123, 123)' CSS color
// our job is to return the equivalent 8 digit hex color
// example input: ('rgba(90,30,14,249)')
// example output: '#5a1e0ef9'


export const splitWords = null;
// here we will receive a sentence (aka space separated words, like CSS classes)
// our job is to return an array of all the words from the sentence
// example input: ('nik is great and everybody knows it from all these examples')
// example output: ['nik', 'is', 'great', 'and', 'everybody', 'knows', 'it', 'from', 'all', 'these', 'examples']


export const joinWords = null;
// here we will receive an array of words, which we need to join together into a sentence (space separated)
// example input: ([ 'nik', 'is', 'hungry', 'all', 'of', 'a', 'sudden'])
// example output: 'nik is hungry all of a sudden'


export const censorSentence = null;
// here we will receive a sentence (space spearated words) and an array of words to censor
// we should return a new sentence with the words removed (not replaced with &*#@ or the like)
// example input: ('dirty girls like filthy beats', ['dirty', 'filthy'])
// example output: 'girls like beats'



/// NUMBERS


export const twoNumberAdd = (num1, num2)=> num1 + num2;

(num1, num2)=>{
  return num1 + num2;
};
// here we need to take two number inputs and add them
// example input: (12049, 157)
// example output: 12206



export const allNumberAdd = (...numbers)=>
  numbers.reduce((total, number)=> total + number, 0)
// this is the same as the last one, but we will receive a different number of parameters (all numbers) each time
// we still need to add them all together to pass the test
// example input: (1, 10, 100, 1000)
// example output: 1111

// example input: (5, 22.8, 3, 14, 17, 17, -100)
// example output: -22.2



export const greatest = numbers =>
  numbers.reduce((max, number)=> number > max ? number : max, numbers[0]);


numbers=> Math.max(...numbers);


numbers=> numbers.sort((a, b)=> a > b ? -1 : 1)[0];


(numbers)=> {
  const sortedNumbers = numbers.sort((a, b)=> a > b ? -1 : 1);
  return sortedNumbers[0];
};


(numbers)=> {
  let max = numbers[0];
  numbers.forEach(number=> {
    if( number > max ) max = number;
  });
  return max;
};



(numbers)=> {
  let max = numbers[0];
  for(let i=0; i<(numbers.length); i++){
    if(numbers[i] > max){
      max = numbers[i];
    }
  }
  return max;
};
// here we'll receive as input an array full of numbers
// out job will be to return the greatest (closest to Infinity) from them
// example input: ([ 1, 10, -100, 50 ])
// example output: 50



export const biggest = numbers =>
  numbers.reduce((big, number)=> (
    Math.abs(number) > Math.abs(big) ? number : big
  ), numbers[0]);


(numbers)=> {
  let big = numbers[0];

  numbers.forEach(number=> {
    if( Math.abs(number) > Math.abs(big) ) big = number;
  });

  return big;
};


(numbers)=> {
  let big = numbers[0];
  for(let i=0; i<(numbers.length); i++){
    if( Math.abs(numbers[i]) > Math.abs(big) ){
      big = numbers[i];
    }
  }
  return big;
};
// here we'll receive as input an array full of numbers
// out job will be to return the biggest (furthest from zero) from them
// example input: ([ 1, 10, -100, 50 ])
// example output: -100



export const indexOfGreatest = null;
// here we'll receive as input an array full of numbers
// out job will be to return the index in the array of the greatest (closest to Infinity) from them
// example input: ([ 1, 10, -100, 50 ])
// example output: 3


export const convertToInt = null;
// here we'll receive as input an array full of numbers
// out job will be to convert them to an integer close to the original value
// example input: ([ 1.5, 10, -10.1233, 5.9 ])
// example output: [1, 10, -10, 6]


export const formatAsMoney = number => '$'+number.toFixed(2);


(number)=> {
  const twoDigits = number.toFixed(2);
  return '$'+twoDigits;
};
// here we'll receive a float (a decimal number) or integer, our job is to return a formatted price string like $10.24
// example input: (3.5013)
// exmaple output '$3.50'

// example input: (999)
// example output: '$999.00'


export const inequality = null;
// here we'll receive two numbers. If the first is greater, return '>', if the second return '<', if equal return '='
// example input: (13, 5)
// example output: '>'

// example input: (5, 13)
// example output: '<'

// example input: (13, 13)
// example output: '='


export const isStringIntOrFloat = null;
// here we will receive a string which is either an int or a float (casted into a string)
// we must respond 'int' if it is an int, 'float' if it is a decimal number (float)
// example input: (01923)
// exmaple output: 'int'

// example input: (123.123)
// example output: 'float'


export const isXYinRadius = (x, y, r)=> !( x*x + y*y > r*r );


(x, y, r)=> (((x**2 + y**2) ** 0.5) <= r);


(x, y, r)=> {
  const radius = (x**2 + y**2) ** 0.5;
  return (radius <= r);
};


(x, y, r)=> {
  const radius = (x**2 + y**2) ** 0.5;
  return ( radius > r ) ? false : true;
};


(x, y, r)=> {
  const radius = (x**2 + y**2) ** 0.5;
  if( radius > r ) return false;
  else return true;
};
// here we will receive three number inputs: (x, y, r)
// our job is to determine if the coordinate (x, y) is within radius r of the origin (0, 0)
// and return a Boolean of whether it is
// example input: (5, 12, 14)
// example output: true


/// ARRAYS


export const twoArraysTogether = (arr1, arr2)=> [...arr1, ...arr2];

(arr1, arr2)=> arr1.concat(arr2);
// here we will receive two arrays, we'll return one array that has all the elements from both arrays (in order)
// example input: ([1, 2, 3], [4, 5, 'monkey'])
// example output: [1, 2, 3, 4, 5, 'monkey']



export const allArraysTogether = null;
// this is the same as the last exercise, but we'll get a different number of input arrays each time
// we'll still have to put the elements into one array (in order), now though from all the input arrays
// example input: ([1, 2, 3], [4, 5, 'monkey'], ['bidness'])
// example output: [1, 2, 3, 4, 5, 'monkey', 'bidness']

// example input: (['I', -1], ['think', null], ['these', 'examples'], ['are'], [], ['silly', 9])
// example output: ['I', -1, 'think', null, 'these', 'examples', 'are', 'silly', 9]



export const alphebetize = null;
// here we'll get an array of strings of lowercase letters, our job is to return an array with them in alphabetical order
// example input: (['nik', 'is', 'the', 'best'])
// example output: ['best', 'is', 'nik', 'the']



export const filterStrings = array=>
  array.filter(item => ( typeof item !== 'string' ) );


(array)=> {
  let result = [];
  array.forEach(item =>
    ( typeof item !== 'string' ) ? result.push( item ) : null
  );
  return result;
};


(array)=>{
  let result = [];
  for(let i=0; i<(array.length); i++){
    if( typeof array[i] !== 'string' ){
      result.push( array[i] );
    }
  }
  return result;
};
// here we receive an array that has strings and numbers (and maybe other stypes of stuff)
// our job is to return an array with all the elements from the input that aren't strings (in order)
// example input: (['blah', 1, {}, 'rawr'])
// example output: [1, {}]




export const filterByType = null;
// here we want to be able to choose the type of value to filter out
// the first param is still the array with everything in it, the second param is a type (string) to filter out
// example input: (['blah', 1, {}, 'rawr'], 'number')
// example output: ['blah', {}, 'rawr']



export const arrayContains = null;
// here we receive an array and some value to try to find in that array
// if we find it, we return true, otherwise false
// example input: (['blah', 1, {}, 'rawr'], 'rawr')
// example output: true

// example input: (['blah', 1, {}, 'rawr'], 144)
// example output: false



export const filterAllFalsy = null;
// here we want to return an array with all the falsy values from our input removed
// example input: ([-2, -1, 0, 1, 2, 'blah', '', null])
// example output: [-2, -1, 1, 2, 'blah']



export const filterAllTruthy = null;
// here we want to return an array with all the truthy value from out input removed
// example input: ([-2, -1, 0, 1, 2, 'blah', '', null])
// example output: [0, '', null]


export const leftTruncate = (array, number)=> array.slice(number);

// here we want to truncate (cut) some number (second param) of elements from the left (beginning) of the array (first param)
// example input: ([1, 2, 3, 4, 5, 6, 7, 8, 9, 'monkey'], 4)
// example output: [5, 6, 7, 8, 9, 'monkey']


export const dereferenceCircularArray = (array, index)=>
  array[  index  % array.length  ];



(array, index)=>{
  let i = index;

  while( array.length <= i ){
    i -= array.length;
  }

  return array[i];
};
// here we will get an array and an index to read out of the array
// however, the index may be past the end of the array
// when it is, we want to treat the array as a circle (array[array.length] === array[0]) and loop around it as long as we need
// example input: ([1, 2, 3, 'monkey'], 15)
// example output: 'monkey'

// example input: ([1, 2, 3, 'monkey'], 2)
// example output: 3


export const filterByAge = (people, minimumAge)=>
  people.filter( person=> (person.age >= minimumAge) );


(people, minimumAge)=> {
  let altekakkers = [];
  for(let i=0; i<(people.length); i++){
    if( people[i].age >= minimumAge ){
      altekakkers.push( people[i] );
    }
  }
  return altekakkers;
};
// here we'll receive an array of objects representing people
// each will have an age number field... like { age: 22 }
// we'll also receive a minimum age as a second param
// our job is to return s filtered array with only the people who are that age or older
// example input: ([{ name: 'nik', age: 28 }, { name: 'bibi', age: 69 }], 50)
// example output: [{ name: 'bibi', age: 69 }]



export const filterByAgeDestructure = null;
// this exercise is exactly like the previous one, but here we are required to use a fat arrow with a destructured param


export const filteredAges = (people, minimumAge)=>
  people.filter(person=> person.age >= minimumAge)
        .map(person=> person.age);


(people, minimumAge)=>{
  let oldPeopleAges = [];

  for( let i = 0; i < people.length; i++)
    if( people[i].age >= minimumAge )
      oldPeopleAges.push( people[i].age );

  return oldPeopleAges;
};
// this exercise is the same as the previous two, but here we are required to return the ages (not the people)
// example input: ([{ age: 14 }, { age: 20 }, { age: 35 }], 18)
// example output: [20, 35]



export const filterAgesAverage = null;
// this exercise is the same as the previous one, but here we are required to return the average of the ages we filtered in
// if there are no people old enough, return NaN
// example input: ([{ age: 14 }, { age: 20 }, { age: 35 }], 18)
// example output: 27.5

// example input: ([{ age: 14 }, { age: 20 }, { age: 35 }], 50)
// example output: NaN



export const filteredAgesAverageOneLine = null;
// this exercise is the same as the previous one, but we are not allow to use a function body! (one line fat arrow only!)



export const longerArray = null;
// here we receive two arrays of different length. All we need to do is return the longer of the two!
// example input: ([1, 2, 3, 'monkey'], [4, 5, 'platypus'])
// example output: [1, 2, 3, 'monkey']


export const arrayExcess = null;
// here we receive two arrays (may be the same length),
// we will need to return the slice of elements at the end of the longer array... past the length of the shorter
// example input: ([1, 2, 3, 'monkey'], [4, 5, 6, 7, 8, 'platypus'])
// example output: [8, 'platypus']


export const flattenArray = null;
// here we receive an array of arrays, and our job is to return all the contents from the internal arrays in one array
// example input: ([ [1, 2, 3, 'monkey'], [4, 5, 6, 'platypus'] ])
// example output: [1, 2, 3, 'monkey', 4, 5, 6, 'platypus']



export const uniquifyArray = array=>
  array.filter((item, i)=> array.indexOf(item) === i );



(array)=> {
  let result = [];
  array.forEach(item=> {
    if( !result.includes(item) )
      result.push(item);
  });
  return result;
};



(array)=> Array.from( new Set(array) );

// we will receive an array with arbitrary strings
// our job is to take out duplicates
// example input: (['nik is great', 'nik is great', 420, 2000, 2000])
// example output: ['nik is great', 420, 2000]




/// OBJECTS

export const dereference = null;
// here we'll receive an object as our first parameter, and a key (string) as our second
// we want to read that key from the object and return it
// example input: ({ great: 'success' }, 'great')
// example output: 'success'



export const objectTypeOrArray = null;
// here we receive some value whose type we don't know
// our job is return the type of the object, except if it's an array we want to return 'array'
// which is what most people think javascript does for us!
// example input: ({ whatever: 'object' })
// example output: 'object'

// example intput: (['typeof', 'says', 'this', 'is', 'an' ,'object', '...', 'wat?'])
// example output: 'array'


export const flattenObject = null;
// here we'll receive a nested object like { nik: { is: 'great' }, bender: { 'is also': 'great' } }
// we want to return a new object with all the contents of the inner objects merged together
// this will flatten the object from two levels deep to one
// example input: ({ nik: { is: 'great' }, bender: { 'is also': 'great' } })
// example output: { is: 'great', 'is also': 'great' }


export const mergeObjects = null
// here we will receive some (we don't know how many) objects as params
// our job is to merge each next one onto a single big object, which we will return
// example input: ({ nik: 'is great' }, { bender: 'also great' }, { bender: 'still great' })
// example output: { nik: 'is great', bender: 'still great' }


export const deepDereference = null;
// here we will receie an object and an array of keys
// our job is to read the nested value inside the object by dereferencing each key in the array
// example input: ({ nik: { is: { great: true }}}, ['nik', 'is', 'great'])
// example output: true


export const upperCaseObjectMap = null;
// here we will receive a dictionary (an object whose values are all the same type)
// the dictionary will have lowercase strings as that value
// our job is to map those strings to uppercase in place, returning the dictionary object full of uppercase strings
// example input: ({ blah: 'hmm', rawr: 'gwak' })
// example output: { blah: 'HMM', rawr: 'GWAK' }


export const upperCaseObjectMapKeys = null;
// here we will receive a dictionary (an object whose values are all the same type)
// the dictionary will have lowercase strings as that value
// our job is to map the keys in the object to uppercase, leaving the values the same
// example input: ({ blah: 'hmm', rawr: 'gwak' })
// example output: { BLAH: 'hmm', RAWR: 'gwak' }


/// FUNCTIONS

export const callWithParams = null;
// here our first param is a function
// then all the rest of the params (however many that is) are the params we want to call the function with
// example input: (Math.max, 1, 2, 3, 4, 10, 9)
// example output: 10


export const bakeItIn = null;
// here we will receive a function and a value
// our job is to return a new function that takes no params and calls the fn we received with the param we received
// example input: (l=> console.log(l), 'blah')
// example output: ()=> (l=> console.log(l))('blah')


export const dictionaryLogger = null;
// here we will receive a dictionary of functions { someKey: (some, params)=> 'some function', ... }
// our job is to decorate each function with a logger for all of its arguments
// aka we want to replace each function with a new function that logs the params, then calls the original function
// example input: ({ callUrl: url=> fetch(url) })
// example output: { callUrl: (...a)=> { console.log(...a); return (url => fetch(url))(...a); } }
