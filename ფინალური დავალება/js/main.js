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
let count = 2;
for(let each of document.querySelectorAll(".domain-item")){
    each.addEventListener('click', function() {
        if(count % 2 === 0){
            count++;
            return each.firstChild.firstChild.firstChild.style.border = "solid 1px #99CC66",
            each.style.backgroundColor = "#F5F5F8",
            each.style.borderRadius = "15px",
            each.lastChild.lastChild.lastChild.style.backgroundColor = "#99CC66",
            console.log(each.lastChild.lastChild.lastChild),
            each.firstChild.lastChild.lastChild.appendChild(span_text),
            each.firstChild.lastChild.lastChild.style.paddingRight = '8px';
        }else {
            count++;
            return each.firstChild.firstChild.firstChild.style.border = "solid 1px transparent",
            each.style.backgroundColor = "#FFFFFF",
            each.firstChild.lastChild.lastChild.removeChild(span_text),
            each.firstChild.lastChild.lastChild.style.paddingRight = '0px';
        }
    })
}

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

domain_count = document.querySelector(".main-p");
domain_span = document.createElement("span");
domain_span.innerHTML = `${domainList.length}`;
domain_count.append(domain_span);

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