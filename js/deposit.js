// step 1: add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function () {
    // step 2: get the deposite amount from the deposite input field
    // For input field use .value to the value inside the input field
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // step 3: get the current deposite total 
    // for non-input (element other than input, textarea) use innerText to get the text.
    const depositeTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositeTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step 4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositeAmount;
    // set the deposit total
    depositeTotalElement.innerText = currentDepositTotal;

    // get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7: clear the deposit field
    depositeField.value = '';
});