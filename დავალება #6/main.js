/* <\ Text reverse />

  შექმენით ტექსტარეა და ღილაკი, იუზერი რა ტექსტსაც ჩაწერს დაუბრუნეთ მაგ ტექსტის შებრუნებული მნიშვნელობა
*/
let textarea = document.createElement("textarea");
let btn = document.createElement("button");
btn.innerHTML = "Reverse"
document.body.append(textarea);
document.body.append(btn);
btn.onclick = function () {
  let arr = textarea.value.split("").reverse();
  let reversed = arr.join("");
  return textarea.value = reversed;
}
/*
  ქვემოთ უნდა დავხატოთ ქარდები და მაგ ქარდების დაახლოებითი მაგალითი (ლინკი სურათზე)
  (https://previews.123rf.com/images/luplupme/luplupme1903/luplupme190300018/124682681-farm-animals-vector-business-card-set-domestic-farming-characters-cow-sheep-goat-cattle-farmer-anima.jpg)
*/

/* <\ Zoo />

  აქ უნდა შევქმნათ ზოოპარკი, უნდა შევქმნათ ობიექტების მასივი ყოველ ობიექტში
  უნდა იყოს ცხოველი: სახელი,ასაკი,დაბადების ადგილი,პირადი ნომერი,ტელეფონის ნომერი და სურათი 3x4.
  ამ მასივს უნდა გადავუაროთ, შევქმნათ ქარდები, რომელშიც იქნება ეს ინფო ჩასეტილი;
*/



let cards = [
  {"name": 'Lion',
  'age': 10,
  'birth_place': "Georgia",
  'private_num': "01024088321",
  'phone_num': "574767990",
  'img': "data:image/jpeg;base64,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"
 },
 {"name": 'Penguin',
  'age': 10,
  'birth_place': "Antarctida",
  'private_num': "01024021991",
  'phone_num': "599210381",
  'img': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxY8aQuFlQ52e7YqLl4MHIAN3I0tU-q97v6g&usqp=CAU"
 },
 {"name": 'Girrafe',
 'age': 10,
 'birth_place': "Quteisi",
 'private_num': "01024032991",
 'phone_num': "574829123",
 'img': "data:image/jpeg;base64,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"
},
{"name": 'Elephant',
 'age': 10,
 'birth_place': "oqroyana",
 'private_num': "01024032121",
 'phone_num': "574829991",
 'img': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfqyqFTcRCkxHZURAxTAfkkgfzQYx4O1BsA&usqp=CAU"
}
]
let body = document.querySelector("body");
body.style.background = "#f4dbdb"
let card;

for (let each of cards){
  card = document.createElement("div");
  card.setAttribute("id", `${each.name}`);
  document.body.append(card);
  card.style.width = "40%";
  card.style.height = "300px";
  card.style.overflow = "hidden";
  card.style.display = "flex";
  card.style.justifyContent ='space-between';
  card.style.margin ='40px auto';
  card.style.background = '#a46050';
  card.style.borderRadius = "20px";
  card.style.padding = "15px";

// ქარდის ჩარჩოს შექმნა
  let innerDiv = document.createElement("div");
  innerDiv.setAttribute("id", "inner-div1");
  document.querySelector(`#${each.name}`).append(innerDiv);
  innerDiv.style.display = 'flex';
  innerDiv.style.flexDirection = 'column';
  
  // ქარდზე გამოსატანი ინფორმაცია
  let animal = document.createElement("h1");
  document.querySelector(`#${each.name} #inner-div1`).append(animal);
  animal.innerHTML = each.name;
  let animal_age = document.createElement("p");
  animal_age.innerHTML = `age: ${each.age}`;
  document.querySelector(`#${each.name} #inner-div1`).append(animal_age);

  let animal_birth_place = document.createElement("p");
  animal_birth_place.innerHTML = `Birth Place: ${each.birth_place}`;
  document.querySelector(`#${each.name} #inner-div1`).append(animal_birth_place);

  let animal_private_num = document.createElement("p");
  animal_private_num.innerHTML = `Private number: ${each.private_num}`;
  document.querySelector(`#${each.name} #inner-div1`).append(animal_private_num);

  let animal_phone_num = document.createElement("p");
  animal_phone_num.innerHTML = `Phone Number: ${each.phone_num}`;
  document.querySelector(`#${each.name} #inner-div1`).append(animal_phone_num);

  let animal_photo = document.createElement("img");
  animal_photo.setAttribute("src", `${each.img}`);
  animal_photo.style.width = "200px";
  animal_photo.style.borderRadius = "10px";
  document.querySelector(`#${each.name}`).append(animal_photo);
}

/* <\ Zoo serch/>

  აქ უნდა გავაკეთოდ ჩევი ზოოპარკის სერჩი 
  შემდეგი პარამეტრებით: სახელით, ასაკით, დაბადების ადგილით,პირადი ნომერით,ტელეფონის ნომერით;
  უნდა იყოს 5 ინპუტი რომეშიც ჩაწერს ინფოს, ამ ინფოთი გაუფილტრავთ და დაუხატავთ ახალ ქარდებს,
*/
let search_div = document.createElement("div");
search_div.setAttribute("id", "search-div");
// search_div.display = "flex";
search_div.style.textAlign = 'center';
document.querySelector("body").append(search_div);

let search = document.createElement("input");
document.querySelector("#search-div").append(search);
search.style.display = "inline-block";
search.style.width = "15%";
search.style.height = "30px";

let search2 = document.createElement("input");
document.querySelector("#search-div").append(search2);
search2.style.display = "inline-block";
search2.style.width = "15%";
search2.style.height = "30px";

let search3 = document.createElement("input");
document.querySelector("#search-div").append(search3);
search3.style.display = "inline-block";
search3.style.width = "15%";
search3.style.height = "30px";

let search4 = document.createElement("input");
document.querySelector("#search-div").append(search4);
search4.style.display = "inline-block";
search4.style.width = "15%";
search4.style.height = "30px";

let search5 = document.createElement("input");
document.querySelector("#search-div").append(search5);
search5.style.display = "inline-block";
search5.style.width = "15%";
search5.style.height = "30px";
search5.style.borderRadius = "5px";
search5.style.outline = "none";


let button2 = document.createElement("button");
button2.innerHTML = "Search";
button2.style.display = "inline-block";
button2.style.height = "36px";
document.querySelector("#search-div").append(button2);




button2.onclick = function() {
  for (let each of cards){
    if (search.value == each.name && search2.value == each.age &&
        search3.value == each.birth_place && search4.value == each.phone_num &&
        search5.value == each.private_num)
      {
      let new_div = document.createElement("div");
      new_div.setAttribute("id", `new-${search.value}`);
      new_div.style.width = "40%";
      new_div.style.height = "300px";
      new_div.style.overflow = "hidden";
      new_div.style.display = "flex";
      new_div.style.justifyContent ='space-between';
      new_div.style.margin ='40px auto';
      new_div.style.background = '#a46050';
      new_div.style.borderRadius = "20px";
      new_div.style.padding = "15px";
      let newInnerDiv = document.createElement("div");
      newInnerDiv.setAttribute("id", "new-inner-div");
      newInnerDiv.style.display = 'flex';
      newInnerDiv.style.flexDirection = 'column';
      
      let animal = document.createElement("h1");
      animal.innerHTML = `${each.name}`;
      let animal_age = document.createElement("p");
      animal_age.innerHTML = `age: ${each.age}`;

      let animal_birth_place = document.createElement("p");
      animal_birth_place.innerHTML = `Birth Place: ${each.birth_place}`;

      let animal_private_num = document.createElement("p");
      animal_private_num.innerHTML = `Private number: ${each.private_num}`;

      let animal_phone_num = document.createElement("p");
      animal_phone_num.innerHTML = `Phone Number: ${each.phone_num}`;

      let animal_photo = document.createElement("img");
      animal_photo.setAttribute("src", `${each.img}`);
      animal_photo.style.width = "200px";
      animal_photo.style.borderRadius = "10px";

      return document.querySelector("body").append(new_div),
      document.querySelector( `#new-${search.value}`).append(newInnerDiv),
      document.querySelector(`#new-${search.value} #new-inner-div`).append(animal),
      document.querySelector(`#new-${search.value} #new-inner-div`).append(animal_age),
      document.querySelector(`#new-${search.value} #new-inner-div`).append(animal_birth_place),
      document.querySelector(`#new-${search.value} #new-inner-div`).append(animal_phone_num),
      document.querySelector(`#new-${search.value} #new-inner-div`).append(animal_private_num),
      document.querySelector(`#new-${search.value}`).append(animal_photo);
    }else if (document.querySelector(`#new-${search.value}`)!==null){
      return alert("ქარდი უკვე დაიხატა");
    }
  }
}

/*
  ძალიან სახალისო დავალება გამოვა და რეალურად ბევრ რამეს ისწავლით
  როგორც ჯავასკრიპტის მხრივ ასევე ჰტმლ და ცცს-ის მხრივ.
*/
