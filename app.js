// Phone Plus
document.getElementById('phone-plus').addEventListener('click', function() {
    updateCaseNumber('phone', 1219, true);
});

// Phone Minus
document.getElementById('phone-minus').addEventListener('click', function() {
    updateCaseNumber('phone', 1219, false);
});

// Case Plus
document.getElementById('case-plus').addEventListener('click', function() {
    updateCaseNumber('case', 59, true);
});

// Case Minus
document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseNumber('case', 59, false);
});

// Function
function updateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product+'-input');
    let productNumber = productInput.value;

    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // Update Price
    const productPrice = document.getElementById(product+'-price');
    productPrice.innerText = productNumber * price;

    totalCalculate ();
}

// Total Calculation
function totalCalculate () {
    const phoneTotal = productInfo ('phone', 1219);
    const caseTotal = productInfo ('case', 59);

    const subTotal = document.getElementById('subtotal').innerText = phoneTotal + caseTotal;
    const tax = document.getElementById('tax').innerText = parseFloat((subTotal / 15).toFixed(2));
    const total = document.getElementById('total').innerText = subTotal + tax;
}

// Get Product Info 
function productInfo (product, price) {
    const productInput = document.getElementById(product + '-input').value;
    const productNumber = parseInt(productInput * price);
    return productNumber;
}