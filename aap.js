// chapter 21-25

// 1. Merge first and last name, then greet the user
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

// 2. Find and display the length of the user's input
let phoneModel = prompt("Enter your favorite mobile phone model:");
let length = phoneModel.length;
alert("Length of your favorite mobile phone model: " + length);

// 3. Find the index of letter “n” in the word “Pakistani”
let word = "Pakistani";
let indexN = word.indexOf("n");
alert("Index of 'n' in 'Pakistani': " + indexN);

// 4. Find the last index of letter “l” in the word “Hello World”
let phrase = "Hello World";
let lastIndexL = phrase.lastIndexOf("l");
alert("Last index of 'l' in 'Hello World': " + lastIndexL);

// 5. Find the character at 3rd index in the word “Pakistani”
let character = word.charAt(3);
alert("Character at 3rd index in 'Pakistani': " + character);

// 6. Merge first and last name using concat()
// let fullNameConcat = firstName.concat(" ", lastName);
// alert("Hello, " + fullNameConcat + "!");

// 7. Replace “Hyder” with “Islam” in the word “Hyderabad”
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
alert("After replacement: " + newCity);

// 8. Replace all occurrences of “and” with “&”
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
alert("After replacement: " + newMessage);

// 9. Convert string “472” to a number
let stringNumber = "472";
let number = parseInt(stringNumber);
alert("Value: " + number + "\nType: " + typeof(number));

// 10. Convert user input to capital letters
let userInputCapital = prompt("Enter some text:");
let capitalText = userInputCapital.toUpperCase();
alert("Text in capital letters: " + capitalText);

// 11. Convert user input to title case
let userInputTitle = prompt("Enter some text:");
let titleCaseText = userInputTitle.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
alert("Text in title case: " + titleCaseText);

// 12. Convert the variable num to string and remove the dot
let num = 35.36;
let numString = num.toString().replace(".", "");
alert("Number without dot: " + numString);

// 13. Validate username for special symbols
let username = prompt("Enter username:");
let hasSpecialSymbol = /[.,!@]/.test(username);
if (hasSpecialSymbol) {
    alert("Please enter a valid username without special symbols.");
} else {
    alert("Username is valid.");
}

// 14. Search for item in array ignoring case sensitivity
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter item to search:").toLowerCase();
let found = false;
for (let item of A) {
    if (item.toLowerCase() === userInput) {
        found = true;
        break;
    }
}
if (found) {
    alert("Item found in the list.");
} else {
    alert("Item not found in the list.");
}

// 15. Validate password requirements
let password = prompt("Enter your password:");
let hasAlphabetsAndNumbers = /[a-zA-Z]/.test(password) && /\d/.test(password);
let notStartsWithNumber = /^[^0-9]/.test(password);
let lengthRequirement = password.length >= 6;
if (!hasAlphabetsAndNumbers || !notStartsWithNumber || !lengthRequirement) {
    alert("Please enter a valid password.");
} else {
    alert("Password is valid.");
}

// 16. Convert string to array using split method
let university = "University of Karachi";
let universityArray = university.split(" ");
alert("Array elements: " + universityArray.join(", "));

// 17. Display the last character of user input
let userInputLastChar = prompt("Enter some text:");
let lastChar = userInputLastChar.charAt(userInputLastChar.length - 1);
alert("Last character: " + lastChar);

// 18. Count occurrences of word “the” in a string
let text = "The quick brown fox jumps over the lazy dog";
let count = text.match(/\bthe\b/gi).length;
alert("Occurrences of 'the': " + count);


// Q 21-25

// 1. Correct the statement by calling the toLowerCase() function
var allLower = userInput.toLowerCase();

// 2. Convert string represented by x to lower-case
// x = x.toLowerCase();

// 3. Convert string represented by y to upper-case
// y = y.toUpperCase();

// 4. Convert string represented by a variable to lower-case and assign the result to a new variable
// var newVariable = oldVariable.toLowerCase();

// 5. Convert string represented by an array element to lower-case and assign it to a new variable
// var newVariable = arrayElement.toLowerCase();

// 6. Display the upper-case version of a variable in an alert
// alert(variable.toUpperCase());

// 7. Capitalize the first letter of cityName and convert the rest to lower-case
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// 22 - 25 (Strings):

// 1. Slice "ap" out of "captain"
// var slicedWord = sameWords.slice(2, 4);

// 2. Count the number of characters in the string
// var numChars = str.length;

// 3. Slice the middle four characters out of "elephant"
var animal = "elephant";
var seg = animal.slice(1, -1);

// 4. Find the number of characters in a variable and assign it to another variable
// var numChars = variable.length;

// 5. Measure the number of characters, then slice all but the first and last 3 characters of a string
// var numChars = variable.length;
// var slicedString = variable.slice(1, -3);

// 6. Find the index of the first occurrence of "be" in the string
var texte = "To be or not to be.";
var indx = text.indexOf("be");

// 7. Find the index of the last occurrence of "be" in the string
var texte = "To be or not to be.";
var indx = text.lastIndexOf("be");

// 8. Find the index of the first character of the last instance of "go" in the string
var indx = text.lastIndexOf("go");

// 9. Check if a segment exists in a string by testing its index
// if (string.indexOf(segment) !== -1) {}

// 10. Find the character at index 2 in the string "abcde"
var cha = "abcde".charAt(2);

// 11. Find the 10th character in a string and assign it to a variable
var cha = text.charAt(9);

// 12. Find the last character in a string and assign it to a variable
// var x = str.charAt(str.length - 1);

// 13. Find the 5th character in a string and assign it to a variable
// var cha = input.charAt(4);
