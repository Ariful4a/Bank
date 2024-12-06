document.getElementById("add-btn").addEventListener("click", function(event){
    event.preventDefault();

    const addMoney = addMoneyGetId('add-money');
    const pin = addMoneyGetId('pin');

    
    // pin number chack 
    if(pin === 1234){
        const balance = addMoneyInnerGetId('balance');
        const newBalance = balance + addMoney;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('add-money').value = '';
        document.getElementById('pin').value = '';

           
    }
    else{
        alert('Invalid PIN');
    }
    
});