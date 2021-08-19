function gettingMethod(idName) {
  const getproduct = document.getElementById(idName);
  const product = getproduct.innerText;
  return product;
}

function settingMethod(idValue, value) {
  const setValue = document.getElementById(idValue);
  setValue.innerText = value;
}

function totalCalculation(id1, id2, id3, id4, id5) {
  const phonePrice = gettingMethod(id1);
  const phonecasePrice = gettingMethod(id2);
  const subTotal = parseInt(phonePrice) + parseInt(phonecasePrice);
  settingMethod(id3, subTotal);
  const tax = Math.floor(subTotal * 0.1);
  settingMethod(id4, tax);
  const grandTotal = subTotal + tax;
  settingMethod(id5, grandTotal);
}

function IncreaseAndDecrease(id, isIncrease, price, idName) {
  const getproduct = document.getElementById(id + "-difference-number");
  let productNumber = parseInt(getproduct.value);
  if (isIncrease == true) {
    productNumber = productNumber + 1;
  }
  else {
    if (productNumber > 0) {
      productNumber = productNumber - 1;
    }
  }
  getproduct.value = productNumber;
  let productPrice = productNumber * price;
  const getPriceShow = document.getElementById(idName);
  getPriceShow.innerText = productPrice;
  totalCalculation("phone-price", "phonecase-price", "sub", "tax", "grand");
}

// click event in phone button
document.getElementById("phone-btn-increase").addEventListener('click', function () {
  IncreaseAndDecrease("phone", true, 1219, "phone-price");
});

document.getElementById("phone-btn-decrease").addEventListener('click', function () {
  IncreaseAndDecrease("phone", false, 1219, "phone-price");
});

// click phonecase button
document.getElementById("case-btn-increase").addEventListener('click', function () {
  IncreaseAndDecrease("phonecase", true, 59, "phonecase-price");
});

document.getElementById("case-btn-decrease").addEventListener('click', function () {
  IncreaseAndDecrease("phonecase", false, 59, "phonecase-price");
});