// Create two variables: a with value 15 and b with value 25. Then create a third variable sum that adds them together and display the result using console.log.

a = 15;
b = 25;

sum = a + b;
console.log(sum);

// Fix the invalid variable names in the code below. Remember the rules: variables can contain letters, numbers, $, and _, but cannot start with numbers or contain hyphens.
//Starting Code (Copy this to editor)
// 1student = "Alice"
// user-name = "bob123"
// $price = 100
// total_marks = 95
// class = "JavaScrip"


student1= "Alice"
userName = "bob123"
price$= 0
total_marks = 95
Class = "js"
console.log(student1,userName,price$,total_marks)

// Explore Data Types Create variables with different data types and use typeof() to display their types. Create: a number, a string, a boolean (true/false), and display each value with its type.

console.log("Hello, World!");
// a = Number
// ram = String 
c = 10;
console.log(typeof(c))

name = "aanad";
console.log(typeof(name))

tum = true ;
console.log(typeof(tum))


//Number vs String Create two versions of the number 100: one as a number and one as a string. Show the difference by displaying their types and what happens when you try to add them.

console.log("Hello, World!");

num1 = 100;
num2 = 100;

let str1="100";
str2="100";

console.log(typeof(str1+ str2))
//100 + "100" = 100100
//"100" + "100" = 200
console.log(typeof(num2))
console.log(typeof(str1))


//Personal Introduction Create variables for your name and age, then use template strings (backticks `) to create a nice introduction message.

console.log("Hello, World!");

name = "aanand"
age = 0
console.log(typeof(age))

//Calculator with Template Strings crate  simple calculator that performs addition, subtraction, multiplication, and division on two numbers. Display each result using template strings in a nice format.


console.log("Hello, World!");

x=5;
y=10;

console.log(`${x/y}`)


//udent Report Card
//crarte a student report ram. Use variables for student name, three subject marks, calculate total and average, then display a formatted report using template strings.

console.log("=== STUDENT REPORT CARD ===");

Student_Name = "aanand";
math=50;
phy=98;
chem=45;
Total_Marks = math+phy+chem
Average= Total_Marks/3 
console.log("Total Marks:"+ Total_Marks )
console.log("Average:"+ Math.round(Average ))

//Shopping Bill Calculator reate a shopping bill calculator. Use variables for 3 items with their prices and quantities. Calculate subtotal, apply 10% tax, and display a detailed bill with template strings.

apple = 2
Appleqty = 3
milk = 3.5
milkqty = 1
bread = 2
breadqty = 2
subtotal = apple*Appleqty + milk*milkqty + bread*breadqty
tax= subtotal/10
total = subtotal + tax
console.log("=== SHOPPING BILL ===")
console.log("Item 1: Apple × 3 = $" + (apple*Appleqty).toFixed(2) )
console.log("Item 3: bread × 1 = $" + (bread*breadqty).toFixed(2) )
console.log("Item 2: milk × 2 = $" + (milk*milkqty).toFixed(2) )
console.log("subtotal: $"  + subtotal )
console.log("tax (10%): $"+ tax)
console.log("Total: $" + total)











