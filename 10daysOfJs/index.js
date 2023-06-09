
// Day 0: Hello, World!

function greeting ( parameterVariable ) {
    // This line prints 'Hello, World!' to the console:
    console.log( 'Hello, World!' );

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log( parameterVariable )
}


// ##########################################

// Day 0: Data Types

function performOperation ( secondInteger, secondDecimal, secondString ) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log( `${firstInteger + +secondInteger}` )

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log( `${firstDecimal + +secondDecimal}` )

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log( `${firstString}${secondString}` )
}


// ##########################################

// Day 1: Arithmetic Operators

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea ( length, width ) {
    let area;
    // Write your code here
    area = length * width
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter ( length, width ) {
    let perimeter;
    // Write your code here
    perimeter = ( 2 * length ) + ( 2 * width )
    return perimeter;
}


// ##########################################

// Day 1: Functions

/*
 * Create the function factorial here
 */
function factorial ( n ) {
    let res = n
    while ( n > 1 ) {
        res *= n - 1
        n--
    }
    return res
}


// ##########################################

// Day 1: Let and Const

// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
const PI = Math.PI
// Print the area of the circle:
let r = readLine()
let area = r ** 2 * PI
console.log( area )
// Print the perimeter of the circle:
let perimeter = 2 * r * PI
console.log( perimeter )


// ##########################################

// Day 2: Conditional Statements: If-Else

function getGrade ( score ) {
    let grade;
    // Write your code here
    if ( score >= 0 && score <= 5 ) {
        grade = 'F'
    } else if ( score > 5 && score <= 10 ) {
        grade = 'E'
    } else if ( score > 10 && score <= 15 ) {
        grade = 'D'
    } else if ( score > 15 && score <= 20 ) {
        grade = 'C'
    } else if ( score > 20 && score <= 25 ) {
        grade = 'B'
    } else if ( score > 25 && score <= 30 ) {
        grade = 'A'
    }
    return grade;
}

// ##########################################

// Day 2: Conditional Statements: Switch

function getLetter ( s ) {
    let letter;
    // Write your code here
    switch ( true ) {
        case 'aeiou'.includes( s[0] ):
            letter = 'A'
            break
        case 'bcdfg'.includes( s[0] ):
            letter = 'B'
            break
        case 'hjklm'.includes( s[0] ):
            letter = 'C'
            break
        default:
            letter = 'D'
            break
    }
    return letter;
}


// ##########################################

// Day 2: Loops

function vowelsAndConsonants ( s ) {
    let v = 'aeiou'
    let cons = ''
    for ( let i = 0; i < s.length; i++ ) {
        if ( v.includes( s[i] ) ) {
            console.log( s[i] );
        } else {
            cons += s[i]
        }
    }
    for ( let i = 0; i < cons.length; i++ ) {
        console.log( cons[i] );
    }
}

// console.log( vowelsAndConsonants( 'javascriptloops' ) );


// ##########################################

// Day 3: Arrays

function getSecondLargest ( nums ) {
    // Complete the function
    let sorted = nums.sort( ( a, b ) => b - a )
    let max = sorted[0]
    for ( let n of sorted ) {
        if ( n < max ) {
            return n
        }
    }
}

// ##########################################

// Day 3: Try, Catch, and Finally

function reverseString ( s ) {
    try {
        // s = String(s)
        // console.log(typeof s, s)
        let rev = s.split( '' ).reverse().join( '' )
        console.log( rev )
    } catch ( error ) {
        console.log( error.message )
        console.log( s )
    }
}

// console.log( reverseString( '12345' ) );
// console.log( reverseString( 12345 ) );

// ##########################################

// Day 3: Throw

function isPositive ( a ) {
    if ( a > 0 ) {
        return 'YES'
    } else if ( a === 0 ) {
        throw new Error( 'Zero Error' )
    } else {
        throw new Error( 'Negative Error' )
    }
}


// ##########################################

// Day 4: Create a Rectangle Object

function Rectangle ( a, b ) {
    return {
        length: a,
        width: b,
        perimeter: 2 * a + 2 * b,
        area: a * b
    }
}

// ##########################################

// Day 4: Count Objects

function getCount ( objects ) {
    return objects.filter( ( o ) => o.x === o.y ).length
}

// ##########################################

// Day 4: Classes

class Polygon {
    constructor( lengths ) {
        this.lengths = lengths
    }
    perimeter () {
        return this.lengths.reduce( ( acc, cur ) => acc + cur, 0 )
    }
}

// ##########################################

// Day 5: Inheritance

Rectangle.prototype.area = function () {
    return this.h * this.w
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor( w ) {
        super( w, w )
    }
}


// ##########################################

// Day 5: Template Literals

function sides ( literals, ...expressions ) {
    let length = ( expressions[1] + ( Math.sqrt( expressions[1] ** 2 - 16 * expressions[0] ) ) ) / 4
    let hight = ( expressions[1] - ( Math.sqrt( expressions[1] ** 2 - 16 * expressions[0] ) ) ) / 4
    return [length, hight].sort( ( a, b ) => a - b )
}

// ##########################################

// Day 5: Arrow Functions

const modifyArray = ( nums ) => nums.map( n => {
    if ( n % 2 === 0 ) {
        return n * 2
    } else {
        return n * 3
    }
} )

// ##########################################

// Day 6: Bitwise Operators

function getMaxLessThanK ( n, k ) {
    let max = 0
    for ( let i = 1; i <= n; i++ ) {
        for ( let j = i + 1; j <= n; j++ ) {
            console.log( i & j )
            if ( ( i & j ) < k ) {
                max = Math.max( max, ( i & j ) )
            }
        }
    }
    return max
}

// console.log( getMaxLessThanK( 8, 5 ) );

// ##########################################

// Day 6: JavaScript Dates

function getDayName ( dateString ) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayName;
    // Write your code here
    let date = new Date( dateString )
    dayName = days[date.getDay()]
    return dayName;
}

// ##########################################

// Day 7: Regular Expressions I

function regexVar () {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).*\1$/
    /*
     * Do not remove the return statement
     */
    return re;
}

// ##########################################

// Day 7: Regular Expressions II

function regexVar () {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */

    let re = /^[MDE](rs|r|s)\.[A-Za-z]+$/g

    /*
     * Do not remove the return statement
     */
    return re;
}

// ##########################################

// Day 7: Regular Expressions III

function regexVar () {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

    let re = /[0-9]{1,}/g
    /*
     * Do not remove the return statement
     */
    return re;
}


// ##########################################

//  Day 8: Create a Button

/*
// CSS
#btn{
    width: 96px;
    height: 48px;
    font-size: 24px;
    cursor: pointer;
}

// JS
  let btn = document.getElementById('btn');
  let counter = 0;
  btn.innerHTML = counter;
  btn.onclick = ()=> {
      counter++
      btn.innerHTML = counter
  };

// html
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
        <button id="btn"></button>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>


*/

// ##########################################

//  Day 8: Buttons Container

/*
// CSS
#btns{
  width: 75%;
  position: relative;
  text-align: center;
}

.btn{
  width: 30%;
  height: 48px;
  font-size: 24px;
  color: black;
  position: relative;
  margin: 0 3px;
}

// JS
  let arr = [1,2,3,6,9,8,7,4]
  let ids = [1,2,3,6,9,8,7,4]

  let btns = document.getElementById('btns')

  for(let n = 1; n<=9; n++){
    let btn = document.createElement('button')
    btn.id = 'btn'+n
    btn.classList.add('btn')
    btn.innerText = n
    btns.appendChild(btn)
  }


  let btn5 = document.getElementById('btn5')
  const rotate = ()=>{
    arr.unshift(arr.pop())
    for(let i = 0; i <= 7; i++){
      document.getElementById('btn'+ids[i]).innerText = arr[i]
    }
  }
  btn5.addEventListener('click', rotate)

//   html
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
        <div id="btns">
        </div>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>

*/

// ##########################################

//  Day 9: Binary Calculator

/*

// HTML
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
<title>Binary Calculator</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    <body>
        <div id="container">
          <div id="res"></div>
          <div id="btns">
            <div id="row1">
              <button id="btn0" class="btns" onclick="display(0)">0</button>
              <button id="btn1" class="btns" onclick="display(1)">1</button>
              <button id="btnClr" class="btns" onclick="clearDis()">C</button>
              <button id="btnEql" class="btns" onclick="calculate()">=</button>
            </div>
            <div id="row2">
              <button id="btnSum" class="btns" onclick="display('+')">+</button>
              <button id="btnSub" class="btns" onclick="display('-')">-</button>
              <button id="btnMul" class="btns" onclick="display('*')">*</button>
              <button id="btnDiv" class="btns" onclick="display('/')">/</button>
            </div>
          </div>
        </div>
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>

// CSS
body{
  width: 33%;
}
#container{
  width: 100%;
  background-color: green;
  position: relative;
  text-align: center;
}
#res{
  background-color: lightgray;
  border: solid black;
  height: 48px;
  font-size: 20px;
}


.btns{
  width: 25%;
  height: 36px;
  font-size: 18px;
  position: relative;
  margin: 0;
  float: left;
}

#btn0, #btn1{
  background-color: lightgreen;
  color: brown;
}
#btnClr, #btnEql{
  background-color: darkgreen;
  color: white;
}

#btnSum, #btnSub, #btnMul, #btnDiv{
  background-color: black;
  color: red;
}

// JS

let dis = ''
let res


function display(n){
  dis += n
  document.getElementById('res').innerText = dis
}

function clearDis(){
  dis = ""
  document.getElementById('res').innerText = dis
}

function calculate(){
  let nums = dis.split(/[*+\-/]/)
let op = dis.replace( nums[0], '' ).replace( nums[1], '' )
// console.log(nums, op)
// console.log(nums[0].toString(10))
let n1 = parseInt( nums[0], 2 )
let n2 = parseInt( nums[1], 2 )
console.log( n1, n2 )
res = eval( `${n1}${op}${n2}` )
res = res.toString( 2 )
document.getElementById( 'res' ).innerText = res
}






*/



// ##########################################