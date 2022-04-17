/* <\ css generator />

   მოცემულია ჰტმლ ფაილი თავისი მარქაფით, დავალება მდგომარეობს შემდეგში
   უნდა დაიჭიროთ ყველა ინპუტი და შესაბამისად შეუცვალთ სტილი მთავარ კვადრატს,
   ასევე როცა რადიუსებს შეუცვლით გვერდითა სპანში უნდა გამოუტანოთ რეზულტატი.
*/
let color = document.querySelector("input");
let btn = document.querySelectorAll("button");
let box = document.querySelector(".main-box");
let span = document.querySelectorAll("span");
let inputs = document.querySelectorAll("input");


btn[0].onclick = function() {return box.style.background = color.value};

let top_radius = document.querySelectorAll("input[type=range]");

top_radius[0].onchange = function() {
   return box.style.borderTopLeftRadius = `${top_radius[0].value}px`,
          document.querySelector("#first").replaceChildren(top_radius[0].value);
}
top_radius[1].onchange = function() {
   return box.style.borderTopRightRadius = `${top_radius[1].value}px`,
          document.querySelector("#second").replaceChildren(top_radius[1].value);
}
top_radius[2].onchange = function() {
   return box.style.borderBottomLeftRadius = `${top_radius[2].value}px`,
          document.querySelector("#third").replaceChildren(top_radius[2].value);
}
top_radius[3].onchange = function() {
   return box.style.borderBottomRightRadius = `${top_radius[3].value}px`,
          document.querySelector("#forth").replaceChildren(top_radius[3].value);
}
inputs[5].onchange = function() {
   return box.style.position = "relative", box.style.left = `${inputs[5].value}px`
}
inputs[6].onchange = function() {
   return box.style.position = "relative", box.style.bottom = `${inputs[6].value}px`
}
inputs[7].onchange = function() {
   return box.style.filter = `blur(${inputs[7].value}px)`;
}
inputs[8].onchange = function() {
   return box.style.boxShadow = `0px 0px ${inputs[8].value}px`;
}
btn[1].onclick = function() {
   return box.style.boxShadow = `0px 0px ${inputs[8].value}px ${inputs[9].value}`;
}

/* <\ html generator />

   აქ უნდა შექმნათ დივი ამ დივში უნდა იყოს 1 select  რომელშიც უნდა იყოს ჰტმლ თეგების სია(5 ცალი მაინც)
   (სელექტიდან მნიშვნელობის ამოღება შეიძლება ჩვეულებრივ როგორც ინპუტიდან ველიუთი)
   სელექტის გვერდით უნდა იყოს ტექსტ 2 ცალი textarea და 1 button.
   button-ზე დაჭერისას უნდა შევუქმნათ html თეგი სელექტში იქნება თეგის სახელი, 
   პირველ ტექსტარეში ტექსტი რაც ჩაიწერება მაგ თეგში,
   მეორე ტექსტ არეში უნდა ჩაწეროს ცსს სტილები,
   ბა ღილაკს რომ დააჭერს შეიქმნას თეგი იუზერის აწერილი ინფოდან.
*/
// html - ის დაგენერირება
let div = document.createElement('div');
let selector = document.createElement('select');
let option1 = document.createElement("option");
let option2 = document.createElement("option");
let option3 = document.createElement("option");
let option4 = document.createElement("option");
let option5 = document.createElement("option");
let textarea1 = document.createElement("textarea");
let textarea2 = document.createElement("textarea");
let button = document.createElement("button");

option1.setAttribute("value", "P");
option1.innerHTML = "p"
option2.setAttribute("value", "a");
option2.innerHTML = "a"
option3.setAttribute("value", "article");
option3.innerHTML = "article"
option4.setAttribute("value", "h1");
option4.innerHTML = "h1"
option5.setAttribute("value", "div");
option5.innerHTML = "div"
button.innerHTML = "click";

selector.style.width = "25%";
div.style.display = "flex";


div.setAttribute('id', "select-wrapper");
document.querySelector('body').append(div);
document.querySelector("#select-wrapper").append(selector);
document.querySelector('select').append(option1);
document.querySelector('select').append(option2);
document.querySelector('select').append(option3);
document.querySelector('select').append(option4);
document.querySelector('select').append(option5);
document.querySelector('#select-wrapper').append(textarea1);
document.querySelector('#select-wrapper').append(textarea2);
document.querySelector('#select-wrapper').append(button);

// თეგის შექმნა იუზერის აღწერილობით
button.onclick = function() {
   let tag = document.createElement(`${selector.value}`)
   tag.innerHTML = `${textarea1.value}`;
   tag.style = `${textarea2.value}`;
   return document.querySelector("#select-wrapper").append(tag);}


