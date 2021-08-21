const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');

//update cost
function updateCost(id, price) {
    const changingId = document.getElementById(id);
    changingId.innerText = price;
}
//update total
function updateTotal(isPromoApplied) {
    const memoryCostValue = parseInt(memoryCost.innerText);
    const storageCostValue = parseInt(storageCost.innerText);
    const deliveryCostValue = parseInt(deliveryCost.innerText);
    const total = 1299 + memoryCostValue + storageCostValue + deliveryCostValue;
    totalPrice.innerText = total;
    const bottomTotal = document.getElementById('bottom-total');
    bottomTotal.innerText = total;
    if (isPromoApplied == true) {
        bottomTotal.innerText = total - (total * 0.2);
    }
}

//adding event listener and calling function
document.getElementById('memory-8gb').addEventListener('click', function() {
    updateCost('memory-cost', 0);
    updateTotal();
});
document.getElementById('memory-16gb').addEventListener('click', function() {
    updateCost('memory-cost', 180);
    updateTotal();
});

document.getElementById('ssd-256gb').addEventListener('click', function() {
    updateCost('storage-cost', 0);
    updateTotal();
});
document.getElementById('ssd-512gb').addEventListener('click', function() {
    updateCost('storage-cost', 100);
    updateTotal();

});
document.getElementById('ssd-1tb').addEventListener('click', function() {
    updateCost('storage-cost', 180);
    updateTotal();
});
document.getElementById('free-delivery').addEventListener('click', function() {
    updateCost('delivery-cost', 0);
    updateTotal();
});
document.getElementById('early-delivery').addEventListener('click', function() {
    updateCost('delivery-cost', 20);
    updateTotal();
});

//promo code
document.getElementById('promo-apply').addEventListener('click', function() {
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
    if (promoCode == 'stevekaku') {
        updateTotal(true);
        promoInput.setAttribute('disabled', false);
    }
    promoInput.value = '';
});
