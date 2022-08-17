
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdraw = withdrawInput.value;
    const isStringWithdraw = parseFloat(withdraw);
    withdrawInput.value = '';
    const withdrawValue = document.getElementById('withdraw-value');
    const withValue = withdrawValue.innerText;
    const isStringdrawValue = parseFloat(withValue);
    const totalWithdraw = isStringdrawValue + isStringWithdraw;
    withdrawValue.innerText = totalWithdraw;
    const mainBalenceValue = document.getElementById('main-balence-value');
    const mainBalence = mainBalenceValue.innerText;
    const isStringBalenceValue = parseFloat(mainBalence);
    const totalGrandBalence = isStringBalenceValue - isStringWithdraw;
    mainBalenceValue.innerText = totalGrandBalence;
    
})