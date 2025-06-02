const cart = ["shirt", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then(function (orderSummary) {
    console.log(orderSummary);
    return updateWalletBalance(orderSummary);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function (data) {
    console.log(data);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Invalid Cart Items"));
    }
    orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment completed");
  });
}

function showOrderSummary(orderId, paymentInfo) {
  return new Promise(function (resolve, reject) {
    resolve("order summary");
  });
}

function updateWalletBalance(orderId, paymentInfo) {
  return new Promise(function (resolve, reject) {
    resolve("wallet balance updated");
  });
}
