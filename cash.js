document.getElementById('cash').addEventListener('click', function(e){
    e.preventDefault();

    const cashOutMoney = addMoneyGetId('cash-out-money');
    const pinNumber = addMoneyGetId('pin-cash-out');
    // console.log(cashOutMoney, pinNumber);

    if(pinNumber === 1234){
        const balance = addMoneyInnerGetId('balance');
        const newBalance = balance - cashOutMoney;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('cash-out-money').value = '';
        document.getElementById('pin-cash-out').value = '';
    }
    else{
        alert('Please enter a valid pin number')
    }
})