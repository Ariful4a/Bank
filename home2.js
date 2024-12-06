// add money 
function addMoneyGetId(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};
// add money inner text
function addMoneyInnerGetId(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showbutton(id){
    // hidden all button 
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('login-cash').classList.add('hidden');
    document.getElementById('trans').classList.add('hidden');

    // click show button 
    document.getElementById(id).classList.remove('hidden');
}