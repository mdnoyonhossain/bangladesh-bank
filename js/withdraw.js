/*
    1. add event handler with the withdraw button
    2. get the withdraw amount from the withdraw input field
    2-5. also make sure to convert the input into a number by using parseFloat
    3. get previous withdraw total
    4. calclute total withdraw amout
    4-5. set total withdraw amount
    5. get the privious balance total
    6. calclute new balance total
    6-5. set the new balance totla
    7. clear the input field
*/

// Step-1
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmoutString = withdrawField.value;
    const newWithdrawAmout = parseFloat(newWithdrawAmoutString);

    // Step-7
    withdrawField.value = "";

    if (isNaN(newWithdrawAmout)) {
        alert("Please Provide a valid Number");
        return;
    }

    // Step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmout > previousBalanceTotal) {
        alert("Balance Not Avaliable Dollar");
        return;
    }

    // Step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmout;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmout;
    balanceTotalElement.innerText = newBalanceTotal;


});