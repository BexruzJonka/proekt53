const number1 = +prompt("1-raqamni kiriting");
const num12 = +prompt("Tanlang  1)x  2):  3)+  4)-");
const number2 = +prompt("2-raqamni kiriting");






let result;






if (num12 === 1) {
    result = number1 * number2;
} else if (num12 === 2) {
    result = number1 / number2;
} else if (num12 === 3) {
    result = number1 + number2;
} else if (num12 === 4) {
    result = number1 - number2;
} else {
    alert("Noto‘g‘ri amal");
}







// const yangiTag1 = document.createElement("h1")

// yangiTag1.textContent = number1;

// document.body.append(yangiTag1)

// console.log(yangiTag1);



// const yangiTag2 = document.createElement("h1")

// yangiTag2.textContent = number2;

// document.body.append(yangiTag2)

// console.log(yangiTag2);




// const yangiTag = document.createElement("h1")

// yangiTag.textContent = result;

// document.body.append(yangiTag)

// console.log(yangiTag);



const yangiTag = document.createElement("h1");

let amalBelgisi;

if (num12 === 1) amalBelgisi = "×";
else if (num12 === 2) amalBelgisi = "÷";        
else if (num12 === 3) amalBelgisi = "+";
else if (num12 === 4) amalBelgisi = "-";

yangiTag.className ="text-3xl w-173 bg-gray-900 text-white px-6 py-4 rounded-xl mt-6";

yangiTag.textContent = `${number1} ${amalBelgisi} ${number2} = ${result}`;

document.body.append(yangiTag);
console.log(yangiTag);
