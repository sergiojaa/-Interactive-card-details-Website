let gray = document.getElementById('gray')
let numbers = document.getElementById('numbers')
let name = document.getElementById('name')
let date = document.getElementById('date')
let cardname = document.getElementById('cardname')
let cardnumber = document.getElementById('cardnumber')
let expdate = document.getElementById('expdate')
let monthyear = document.getElementById('monthyear')
let cvc = document.getElementById('cvc')
let confirmButton = document.getElementById('confirmButton')
let cardmonth = document.getElementById('cardmonth')
let cardyear = document.getElementById('cardyear')
// let cardnumber = document.getElementById('cardnumber');
// let numbers = document.getElementById('numbers');


cardname.addEventListener('input', function() {
    name.textContent = cardname.value;
});

cardnumber.addEventListener('input', function() {
    numbers.textContent = cardnumber.value;
});
cvc.addEventListener('input', ()=>{
    gray.textContent = cvc.value
   
})
expdate.addEventListener('input', ()=>{
    cardmonth.textContent = expdate.value
})
monthyear.addEventListener('input', ()=>{
    cardyear.textContent = monthyear.value
})

confirmButton.addEventListener('click', function() {
    nameDiv.textContent = cardname.value;
    numbers.textContent = cardnumber.value;
});