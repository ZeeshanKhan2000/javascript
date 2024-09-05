
<h1>javascript Data Types class no 3</h1>
 
<P>there are 5 types of Data Types  in javascript </ P>

alert('hello world')
document.write('zeeshan')


alert('hello class');

var name = prompt('wellcome to javasrcipt');
console.log(neme);

difference between the 

var   use globaly
let   not use globaly use olny when need
const  use only for the specific values which can not be change for the 


data types
1 premitive
    (01) string   use for character in always in side the ""
    (02) number  use for the value  without ""
    (03) boolean condition false or true
    (04) null  a  empty variable
    (05) undefine value


Concatenating Strings with Plus Operator

In JavaScript, when the + operator is used with a String value, 
it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.
Example
const ourStr = "I come first. " + "I come second.";


    (01) string data type example  javascript  with  // Concatenating text strings
      let name = 'zeeshan'
      let age = 21
      let profession = 'developer'
      let exp = '4 year experience'
      let result = "i am " + name + " afzal and my age  is " + age +  " and i am working as a web " + profession + " having  a " + exp +  " resume ";

      console.log(result.toUpperCase());

      console.log(result.toLowerCase());

      console.log(result.length);

      console.log(result[6]);

      console.log(result.slice(0,5)); use to count the charcter  from index

      console.log(result.substr());  use to find out the character from the exate number and count all the given number

      console.log(result);

 (02)  number Data type  with example  javascript

armetic operator  + - / *
let val1 = 4 , val2 = 6;
console.log(val1 + val2);
console.log(val1 - val2);
console.log(val1 ** val2);
console.log(val1 / val2);
console.log(val1 % val2);

++  Addition

val1++;
3+1
++val1;
1+3

---  substration

val1--;
3-1 =2
--val1;
1-2 =1

/ Assignment operator  += -= *= /=

 val1 *= 5
ans 20

 val1 /= 5
ans 0.8

 val1 -= 5
ans -1

 val1 += 5
ans 9

example of NaN  in number
let x = val1 * 'zeeshan';
console.log(x);


 (03)  example of null  in  data type javascript

let age = null;
console.log(age + 2)



(04) boolean Data type in javascript

let age = 16;

16 === 16    double = indicate only the value result
ans true
16 === '16'   === indicate the value and also the typeoff  variable
ans false
console.log(age === 16 )
