const categories = [
    {
        name: "უძრავი ქონება",
        id: 1
    },
    {
        name: "ბიზნესი",
        id: 2
    },
    {
        name: "მედია",
        id: 3
    }
]

const domainList = [
    {
        domainName: "example1",
        domainExtension: ".ge",
        price: 299,
        categories: [1,2]
    },
    {
        domainName: "example2",
        domainExtension: ".com.ge",
        price: 299,
        categories: [2,3]
    },
    {
        domainName: "example3",
        domainExtension: ".edu.ge",
        price: 299,
        categories: [2]
    },
    {
        domainName: "example4",
        domainExtension: ".ge",
        price: 299,
        categories: [3]
    },
    {
        domainName: "example5",
        domainExtension: ".org.ge",
        price: 299,
        categories: [1,3]
    }
]

let place = document.querySelector("#domains");
let domain;
let list;
let icon;
let div1;
let div2;
let div3;
let div4;
let div5;
let div6;
let price;
let currency_gel;
let bucket;
let span;
let span_text = document.createTextNode("დამატება");

for (let each of domainList){
    // leftside
    div1 = document.createElement('div');
    icon = document.createElement("img");
    icon.setAttribute("src", "./img/Shape.svg");
    icon.style.border = "1px solid transparent";
    domain = document.createElement("p");
    list = document.createElement("li");
    list.setAttribute("id", `${each.domainName}`);
    list.setAttribute("class", "domain-item");
    list.style.paddingLeft = "20px";
    list.style.cursor = "pointer";
    list.style.borderBottom = "solid 3px #F1F1F5"
    document.querySelector("#domains").append(list);
    div6 = document.createElement('div');
    div6.setAttribute("class", 'list-items-wrapper');
    document.querySelector(`#${each.domainName}`).append(div6);
    div1.setAttribute("class", "domain-wrapper");
    document.querySelector(`#${each.domainName} .list-items-wrapper`).append(div1);
    domain.innerHTML = `${each.domainName}${each.domainExtension}`;
    // domain.setAttribute('class', `${each.categories[0]}`);
    domain.classList.toggle(`${each.categories[1]}`);


    document.querySelector(`#${each.domainName} .domain-wrapper`).append(icon);
    document.querySelector(`#${each.domainName} .domain-wrapper`).append(domain);
    // rightside
    div2 = document.createElement("div");
    div2.setAttribute("class", "rightside-wrapper");
    document.querySelector(`#${each.domainName} .list-items-wrapper`).append(div2);
    div3 = document.createElement("div");
    div3.setAttribute("class", "prices-wrapper");
    document.querySelector(`#${each.domainName} .rightside-wrapper`).append(div3);

    price = document.createElement("p");
    price.innerHTML = `${each.price}`;
    document.querySelector(`#${each.domainName} .rightside-wrapper .prices-wrapper`).append(price);
    // currency
    currency_gel = document.createElement("span");
    currency_gel.innerHTML = "₾";
    
    price.appendChild(currency_gel);
    span = document.createElement("span");
    span.setAttribute("class", "span-text");
    document.querySelector(`#${each.domainName} .rightside-wrapper`).append(span);
    bucket = document.createElement("img");
    bucket.setAttribute("src", "./img/green_bucket.svg");
    bucket.setAttribute("alt", "green bucket");
    bucket.setAttribute("class", "green_bucket");
    bucket.style.backgroundColor = "#99CC66"
    document.querySelector(`#${each.domainName} .rightside-wrapper .span-text`).append(bucket);
}

let count = 1;
let buttonList = document.querySelectorAll(".span-text");
// ლისტებზე ქლიქის დადება
for(let each of document.querySelectorAll(".domain-item")){
    each.addEventListener('click', function myFunc() {
        if(count === 1){
            count++;
            return each.firstChild.firstChild.firstChild.style.border = "solid 1px #99CC66",
            each.style.backgroundColor = "#F5F5F8",
            each.style.borderRadius = "15px",
            each.lastChild.lastChild.lastChild.style.backgroundColor = "#99CC66",
            each.firstChild.lastChild.lastChild.appendChild(span_text),
            each.firstChild.lastChild.lastChild.style.paddingRight = '8px',
            each.firstChild.lastChild.lastChild.classList.toggle(".selected");
        }else if(each.firstChild.lastChild.lastChild.className === 'span-text .selected sold'){
            each.removeEventListener('click', myFunc);
            count = 1;
        }
        else if(2){
            count--;
            return each.firstChild.firstChild.firstChild.style.border = "solid 1px transparent",
            each.style.backgroundColor = "#FFFFFF",
            each.firstChild.lastChild.lastChild.removeChild(span_text),
            each.firstChild.lastChild.lastChild.style.paddingRight = '0px',
            buttonList.forEach(n => n.classList.remove(".selected"));
        }
    })
}

// ბურგერ მენიუ
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".below-nav-items");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
// ფილტრი
let price_input = document.querySelectorAll(".price-filter input");
let slider1 = document.getElementById("slider1");
let slider2 = document.getElementById("slider2");
slider1.onchange = () => {
    price_input[0].value = slider1.value;
}
slider2.onchange = () => {
    price_input[1].value = slider2.value;
}
price_input[0].onchange = () => {
    slider1.value = price_input[0].value;
}
price_input[1].onchange = () => {
    slider2.value = price_input[1].value;
}

let symbol_input = document.querySelectorAll(".symbols-filter input");
let slider3 = document.getElementById("slider3");
let slider4 = document.getElementById("slider4");
slider3.onchange = () => {
    symbol_input[0].value = slider3.value;
}
slider4.onchange = () => {
    symbol_input[1].value = slider4.value;
}
symbol_input[0].onchange = () => {
    slider3.value = symbol_input[0].value;
}
symbol_input[1].onchange = () => {
    slider4.value = symbol_input[1].value;
}
// ფილტრის ლოგიკა დასამთავრებელი
let domains_list = document.querySelectorAll(".domain-item");
let checkbox_arr = document.querySelectorAll(".categories-items li input");
let domains_place = document.querySelector('.filtered-domains-wrapper');

function setID() {
    for (let each of checkbox_arr){
        for (let n of categories){
            if (each.value === n.name){
                each.setAttribute('id', `${n.id}`);
            }
        }
    }
}
setID();
function appearDomains(){
    let list;
    let div1;
    let div2;
    let div3;
    let div4;
    let icon;
    let domain;
    for (let each of domainList){
        list = document.createElement('li');
        list.setAttribute("class", "filtered-list-item");
        list.style.paddingLeft = "20px";
        list.style.cursor = "pointer";
        list.style.borderBottom = "solid 3px #F1F1F5";
        list.setAttribute('id', `filtered-${each.domainName}`);
        list.setAttribute('category1', `${each.categories[0]}`);
        list.setAttribute('category2', `${each.categories[1]}`);
        document.getElementById('filtered-domains-list').append(list);
        div1 = document.createElement('div');
        div1.setAttribute('class', 'list-items-wrapper');
        list.appendChild(div1); 
        div2 = document.createElement('div');
        div2.setAttribute('class', 'domain-wrapper')
        div1.append(div2);
        div3 = document.createElement('div');
        div3.setAttribute('class', 'rightside-wrapper');
        div1.append(div3);
        icon = document.createElement("img");
        icon.setAttribute("src", "./img/Shape.svg");
        icon.style.border = "1px solid transparent";
        domain = document.createElement("p");
        domain.innerHTML = `${each.domainName}${each.domainExtension}`;
        div2.append(icon);
        div2.append(domain);
        div4 = document.createElement('div');
        div4.setAttribute('class', 'prices-wrapper');
        div3.append(div4);
    }
    // document.querySelectorAll(".filtered-list-item").forEach(n => n.style.display = 'none');
}
appearDomains();
let click_count = 1;
let filtered_list = document.querySelectorAll(".filtered-list-item");
let filterDomains = function(){
    for (let each of checkbox_arr){
            each.addEventListener('click', () => {
                for (let n of filtered_list){
                    if (each.id === n.getAttribute('category1')
                        || each.id === n.getAttribute('category2') ){
                            n.classList.toggle('active')
                        
                    }       
                }
           })
        }
    }


filterDomains();
// დომენების რაოდენობა საიტზე
domain_count = document.querySelector(".main-p");
domain_span = document.createElement("span");
domain_span.innerHTML = `${domainList.length}`;
domain_count.append(domain_span);

// ფილტრის ღილაკზე ქლიქის დადება რესფონსივზე
let filter = document.querySelector(".sorting-wrapper");
let static_filter = document.querySelector(".main-intro")
let btn1 = document.getElementById("sorting-l-button");
let btn2 = document.getElementById("intro-sorting-button");
btn1.addEventListener('click', () => {
    filter.classList.toggle("active");
})

btn2.addEventListener('click', () => {
    static_filter.classList.toggle("active");
})

// კალათაში დამატება
let text2 = document.createTextNode("კალათაშია");
let sold_count = document.getElementById("count");
let count2 = 0;
let buy = function(){
    buttonList.forEach( n => n.addEventListener('click', () => {
        if(n.className === 'span-text .selected'){ 
         n.innerHTML = "<img src='./img/check.svg' alt='check icon'>"
         n.style.backgroundColor = "#F5F5F8";
         n.appendChild(text2);    
         n.style.color = "#696974";
         n.classList.toggle("sold");
         count2++;
         sold_count.innerHTML = count2;
        count = 2;
        }
    }))
}
buy();
