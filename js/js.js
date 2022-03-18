
// GRADER I AARHUS

$(document).ready(function() {

    // get the weather data via query URI
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=61a3d08c3ff698fac7218f0fadf4427d").then(response => {
        return response.json();

    }).then(data => {

        // Work with JSON data here
        console.log(data); // show what's in the json

        console.log(data.weather[0].description)

        // vis skærm
       result.innerHTML = `
       <h2>${data.name}: ${data.main.temp} °</h2>
       `

    }).catch(err => {
        // Do something for an error here
        console.log('There was an error ...');
    });

}); // document ready end



// KIOSK: Vis bestillinger og regn prisen ud


let sum = 0

let gem = sessionStorage.setItem("test",23)

test1.addEventListener('click',
  function(){
    bestillinger.innerHTML += drink1.innerHTML
    sum = sum + 90
    ialt.innerHTML = "Total: " + sum + ",-";
})

test2.addEventListener('click',
  function(){
    bestillinger.innerHTML += drink2.innerHTML
    sum = sum + 95
    ialt.innerHTML = "Total: " + sum + ",-";
})

test3.addEventListener('click',
  function(){
    bestillinger.innerHTML += drink3.innerHTML
    sum = sum + 105
    ialt.innerHTML = "Total: " + sum + ",-";
})

test4.addEventListener('click',
  function(){
    bestillinger.innerHTML += drink4.innerHTML
    sum = sum + 90
    ialt.innerHTML = "Total: " + sum + ",-";
})

test5.addEventListener('click',
  function(){
    bestillinger.innerHTML += drink5.innerHTML
    sum = sum + 95
    ialt.innerHTML = "Total: " + sum + ",-";
})

test6.addEventListener('click',
  function(){
    bestillinger.innerHTML += drink6.innerHTML
    sum = sum + 120
    ialt.innerHTML = "Total: " + sum + ",-";
})

test7.addEventListener('click',
  function(){
    bestillinger.innerHTML += drink7.innerHTML
    sum = sum + 125
    ialt.innerHTML = "Total: " + sum + ",-";
})

test8.addEventListener('click',
  function(){
    bestillinger.innerHTML += drink8.innerHTML
    sum = sum + 140
    ialt.innerHTML = "Total: " + sum + ",-";
})

test9.addEventListener('click',
  function(){
    bestillinger.innerHTML += snack1.innerHTML
    sum = sum + 140
    ialt.innerHTML = "Total: " + sum + ",-";
})

test10.addEventListener('click',
  function(){
    bestillinger.innerHTML += snack2.innerHTML
    sum = sum + 140
    ialt.innerHTML = "Total: " + sum + ",-";
})

// Betal knap: Her hentes bestillingen ind i en anden browser (kvittering)

betal.addEventListener('click',function(){
  localStorage.setItem("liste",bestillinger.innerHTML)
  //localStorage.clear();
})


// Slet knap: Her ryddes bestillingen
slet.addEventListener('click',
  function(){
    bestillinger.innerHTML = " ";
    ialt.innerHTML = " ";
})

// DANSK/ENGELSK KNAP

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titelEl = document.querySelector('.titel');
const titel1El = document.querySelector('.titel1');
const titel2El = document.querySelector('.titel2');
const titel3El = document.querySelector('.titel3');
const introEl = document.querySelector('.intro');
const intro1El = document.querySelector('.intro1');
const intro2El = document.querySelector('.intro2');
const over1El = document.querySelector('.overskrift1');
const over2El = document.querySelector('.overskrift2');
const over3El = document.querySelector('.overskrift3');
const over4El = document.querySelector('.overskrift4');
const over5El = document.querySelector('.overskrift5');
const over6El = document.querySelector('.overskrift6');
const over7El = document.querySelector('.overskrift7');
const over8El = document.querySelector('.overskrift8');
const over9El = document.querySelector('.overskrift9');
const over10El = document.querySelector('.overskrift10');
const indhold1El = document.querySelector('.indhold1');
const indhold2El = document.querySelector('.indhold2');
const indhold3El = document.querySelector('.indhold3');
const indhold4El = document.querySelector('.indhold4');
const indhold5El = document.querySelector('.indhold5');
const indhold6El = document.querySelector('.indhold6');
const indhold7El = document.querySelector('.indhold7');
const indhold8El = document.querySelector('.indhold8');
const indhold9El = document.querySelector('.indhold9');
const indhold10El = document.querySelector('.indhold10');
const pris1El = document.querySelector('.pris1');
const pris2El = document.querySelector('.pris2');
const pris3El = document.querySelector('.pris3');
const pris4El = document.querySelector('.pris4');
const pris5El = document.querySelector('.pris5');
const pris6El = document.querySelector('.pris6');
const pris7El = document.querySelector('.pris7');
const pris8El = document.querySelector('.pris8');
const pris9El = document.querySelector('.pris9');
const pris10El = document.querySelector('.pris10');

link.forEach(el => {
  el.addEventListener('click' , () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');
    titelEl.textContent = data [attr].titel;
    titel1El.textContent = data [attr].titel1;
    titel2El.textContent = data [attr].titel2;
    titel3El.textContent = data [attr].titel3;
    introEl.textContent = data [attr].intro;
    intro1El.textContent = data [attr].intro1;
    intro2El.textContent = data [attr].intro2;
    over1El.textContent = data [attr].over1;
    over2El.textContent = data [attr].over2;
    over3El.textContent = data [attr].over3;
    over4El.textContent = data [attr].over4;
    over5El.textContent = data [attr].over5;
    over6El.textContent = data [attr].over6;
    over7El.textContent = data [attr].over7;
    over8El.textContent = data [attr].over8;
    over9El.textContent = data [attr].over9;
    over10El.textContent = data [attr].over10;
    indhold1El.textContent = data [attr].indhold1;
    indhold2El.textContent = data [attr].indhold2;
    indhold3El.textContent = data [attr].indhold3;
    indhold4El.textContent = data [attr].indhold4;
    indhold5El.textContent = data [attr].indhold5;
    indhold6El.textContent = data [attr].indhold6;
    indhold7El.textContent = data [attr].indhold7;
    indhold8El.textContent = data [attr].indhold8;
    indhold9El.textContent = data [attr].indhold9;
    indhold10El.textContent = data [attr].indhold10;
  })
});

var data = {
  "Danish":
  {
    "intro": "Alice's restaurant præsenterer",
    "titel": "THE COCKTAIL BAR",
    "titel1": "COCKTAILS",
    "intro1": "Vi serverer kendte klassikere med et moderne twist, og nye spændende skarpe kombinationer med noget for enhver smag. Klik på den cocktail du ønsker for at bestille den. Du kan se din bestilling nederst på siden.",
    "overskrift1": "Piña Con Crema",
    "indhold1": "Havana Rom, kondenseret mælk, ananas, Chartreuse & smør",
    "pris1": "95,-",
    "overskrift2": "Rosemary & Rue",
    "indhold2": "Absolut Vodka, eddike, rosmarin, salvie & tonic",
    "pris2": "105,-",
    "overskrift3": "Tommy’s Margarita",
    "indhold3": "Altos Plata Tequila, lime & agave",
    "pris3": "90,-",
    "overskrift4": "Rhubarb Rush",
    "indhold4": "Plymouth Gin, Lillet Blanc, rabarber & citron",
    "pris4": "90,-",
    "overskrift5": "Paloma",
    "indhold5": "Altos Plata Tequila, lime & Thomas Henry Grape",
    "pris5": "95,-",
    "overskrift6": "Danish Dive",
    "indhold6": "CPH aquavit, Cucielo Vermouth & appelsin",
    "pris6": "120,-",
    "overskrift7": "Monkey Fever",
    "indhold7": "Monkey 47 Sloe Gin, ananas, citron & appelsin",
    "pris7": "125,-",
    "overskrift8": "Passion Martini",
    "indhold8": "Mørk rom, passionsfrugtjuice, sirup, lime og frisk passionsfrugt",
    "pris8": "120,-",
    "titel2": "SNACKS",
    "intro2": "Vores 2 lækre luksus snackplatter er sammensat og tilpasset, således de komplimenterer vores cocktailkort. Klik på den snackplatte du ønsker for at bestille den. Du kan se din bestilling ude til venstre.",
    "overskrift9": "Det søde snackbord",
    "indhold9": "Osteplatte med sprøde kiks og honningmarinerede nødder. Serveres med årstidens bær og frugt",
    "pris9": "140,-",
    "overskrift10": "Det salte snackbord",
    "indhold10": "Osteplatte med hårde, salte oste og sprøde kiks. Serveres med kapersbær og hjemmelavet oliventapenade",
    "pris10": "140,-",
    "titel3": "Din bestilling:"
  },
  "English":
  {
    "intro": "Alice's restaurant presents",
    "titel": "THE COCKTAIL BAR",
    "titel1": "COCKTAILS",
    "intro1": "We serve well-known classics with a modern twist, and new exciting sharp combinations with something for everyone. Click on the cocktail you want to order it. You can see your order at the bottom of the page.",
    "overskrift1": "Piña Con Crema",
    "indhold1": "Havana Rum, Condensed Milk, Pineapple, Chartreuse & Butter",
    "pris1": "95,-",
    "overskrift2": "Rosemary & Rue",
    "indhold2": "Absolute Vodka, vinegar, rosmary, sage & tonic",
    "pris2": "105,-",
    "overskrift3": "Tommy’s Margarita",
    "indhold3": "Altos Plata Tequila, lime & agave",
    "pris3": "90,-",
    "overskrift4": "Rhubarb Rush",
    "indhold4": "Plymouth Gin, Lillet Blanc, rhubarb & lemon",
    "pris4": "90,-",
    "overskrift5": "Paloma",
    "indhold5": "Altos Plata Tequila, lime & Thomas Henry Grape",
    "pris5": "95,-",
    "overskrift6": "Danish Dive",
    "indhold6": "CPH aquavit, Cucielo Vermouth & orange",
    "pris6": "120,-",
    "overskrift7": "Monkey Fever",
    "indhold7": "Monkey 47 Sloe Gin, pineapple, lemon & orange",
    "pris7": "125,-",
    "overskrift8": "Passion Martini",
    "indhold8": "Dark rum, passionfruitjuice, sirup, lime and fresh passionfruit",
    "pris8": "120,-",
    "titel2": "SNACKS",
    "intro2": "Our 2 delicious luxury snack plates are composed and adapted so that they compliment our cocktail card. Click on the snack plate you want to order it. You can see your order on the left.",
    "overskrift9": "The sweet snack",
    "indhold9": "Cheese plate with crispy biscuits and honey marinated nuts. Served with seasonal berries and fruit",
    "pris9": "140,-",
    "overskrift10": "Det salty snack",
    "indhold10": "Cheese plate with crispy biscuits. Served with capers and homemade olive tapenade",
    "pris10": "140,-",
    "titel3": "Your order:"

  }
}



