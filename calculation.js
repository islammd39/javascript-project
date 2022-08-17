

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const deposit = depositInput.value;
    const isString = parseFloat(deposit);
    depositInput.value = '';
    const depositValue = document.getElementById('deposit-value');
    const totalValue = depositValue.innerText;
    const isStringValue = parseFloat(totalValue);
    const mainDepositValue = isStringValue + isString;
    depositValue.innerText = mainDepositValue;
    const mainBalenceValue = document.getElementById('main-balence-value');
    const totalBalence = mainBalenceValue.innerText;
    const isStringBalence = parseFloat(totalBalence);
    const total = isStringBalence + isString;
    mainBalenceValue.innerText = total;
    
});