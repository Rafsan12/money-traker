function calcInput() {
    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;
    let totalExpenses = document.getElementById('total-exp');
    let balance = document.getElementById('balance');
    total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput) ;
    totalExpenses.innerText = total;
    remaining = parseFloat(incomeInput) - total;
    balance.innerText = remaining;
}

document.getElementById('calc-btn').addEventListener('click', function () {
    calcInput();
});


// calculate save money part
function saveMoney() {
    const incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    let balance = document.getElementById('balance').innerText;
    let remainingBalanceNumber = document.getElementById('remaining-balance');
    const saveMoneyInput = document.getElementById('save-input').value;
    const savingAmount = document.getElementById('saving-amount');
    let savesMoney = (incomeInputValue * saveMoneyInput) / 100;
    remainingBalance = parseFloat(balance) - savesMoney;
    savingAmount.innerText = savesMoney;
    remainingBalanceNumber.innerText =  remainingBalance;
}

document.getElementById('save-btn').addEventListener('click',function(){
    saveMoney();
})
    
