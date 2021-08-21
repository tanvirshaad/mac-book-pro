function updateCost(id, price) {
    const changingId = document.getElementById(id);
    changingId.innerText = price;
}
document.getElementById('memory-8gb').addEventListener('click', function() {
    updateCost('memory-cost', 0);
});
document.getElementById('memory-16gb').addEventListener('click', function() {
    updateCost('memory-cost', 180);
});
document.getElementById('ssd-256gb').addEventListener('click', function() {
    updateCost('storage-cost', 0);
});
document.getElementById('ssd-512gb').addEventListener('click', function() {
    updateCost('storage-cost', 400);
});
document.getElementById('ssd-1tb').addEventListener('click', function() {
    console.log('1tb clicked');
});
document.getElementById('free-delivery').addEventListener('click', function() {
    console.log('free clicked');
});
document.getElementById('early-delivery').addEventListener('click', function() {
    console.log('early clicked');
});
document.getElementById('promo-apply').addEventListener('click', function() {
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
    if (promoCode == 'stevekaku') {
        console.log('promo applied');
    }
    promoInput.value = '';
});
