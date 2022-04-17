/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]


// >>> კოდი დაწერეთ აქ 

const isFalse = [num1, boolean1, boolean2];
const isTrue = [num2, text, text2];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("abc" > "aah");  // ადარებს აფავიტურად და რადგანაც b დგას a-ს შემდგომ ანბანში abc > aah
console.log(2 == "02"); /* "==" ოპერატორი არ ადარებს ცვლადის ტიპებს ე.წ არამკაცრი ოპერატორია,
რის გამოც დაბრუნდება true */



// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 
age = 27;
let suggest = (age >= 18) ? "სასმელი გინდა?" : "ჯერ 18-ის გახდი";
console.log(suggest);
//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ
let grade = 50;
let result;
if (grade >= 51){
  result = "Passed";
} else {
  result = "Fail";
}
console.log(result);

let password = "123456789";
if (password.length >= 8) {
  console.log("Strong password");
} else {
  console.log("Bad password");
}
//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
(grade >= 51) ? console.log("Passed"): console.log("Fail");

(password.length >= 8) ? console.log("Strong password"): console.log("Bad password");
//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3;

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ

if (colorId === 0){
  console.log("შავი");
} 
else if (colorId === 1){
  console.log("ლურჯი");
}
else if (colorId === 2){
  console.log("მწვანე");
}
else if (colorId === 3){
  console.log("წითელი");
}
else if (colorId === 4){
  console.log("თეთრი");
} else {
  console.log(undefined)
}
//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
colorId = (colorId === 0) ? console.log("შავი") :
          (colorId === 1) ? console.log("ლურჯი") : 
          (colorId === 2) ? console.log("მწვანე") :
          (colorId === 3) ? console.log("წითელი") :
          (colorId === 4) ? console.log("თეთრი") : 
          console.log(undefined)

//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ
switch(colorId){
  case 0:
    console.log("შავი");
    break
  case 1:
    console.log("ლურჯი");
    break
  case 2:
    console.log("მწვანე");
    break;
  case 3:
    console.log("წითელი");
    break;
  case 4:
    console.log("თეთრი");
    break;
  default:
    console.log(undefined);
}

//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot")
bot.addEventListener("click", myFun())

function myFun() {
  let x = prompt("მე მზად არ ვარ პასუხისათვის")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
  switch(x){
    case "გამარჯობა":
      alert("გამარჯობა, რით შემიძლია დაგეხმაროთ?");
      break;
    case "პროდუქციის ფასი":
      alert("იხილეთ pricing სექციაში");
      break;
    case "მადლობა":
      alert("არაფრის :)");
      break;
    case "ადგილმდებარეობა":
      alert("საბურთალო, 67 იოსებიძის ქუჩა");
      break;
    case "კარგად":
      alert("ნახვამდის <3")
  }

  //

  // რეკურსიული ფუნქცია
  myFun()
}
myFun();