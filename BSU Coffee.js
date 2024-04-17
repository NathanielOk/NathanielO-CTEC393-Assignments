document.addEventListener('DOMContentLoaded', function() {
  const calculateTotalBtn = document.getElementById('calculate-total-btn');
  const totalCostInput = document.getElementById('total-cost');
  calculateTotalBtn.addEventListener('click', function() {
    let totalCost = 0;
    const espressoSize = document.getElementById('espresso-size').value;
    switch (espressoSize) {
      case 'small':
        totalCost += 2.00;
        break;
      case 'medium':
        totalCost += 3.00;
        break;
      case 'large':
        totalCost += 4.00;
        break;
    }
    const drinkType = document.getElementById('drink-type').value;
    switch (drinkType) {
      case 'coffee':
        totalCost += 2.50;
        break;
      case 'latte':
        totalCost += 3.50;
        break;
      case 'cappuccino':
        totalCost += 4.00;
        break;
    }
    if (document.getElementById('whipped-cream').checked) {
      totalCost += 0.50;
    }
    const extras = document.getElementById('extras').value;
    switch (extras) {
      case 'Scone':
        totalCost += 1.50;
        break;
      case 'muffin':
        totalCost += 2.00;
        break;
    }
    const taxRate = 0.06;
    const taxAmount = totalCost * taxRate;
    totalCost += taxAmount;
    totalCostInput.value = totalCost.toFixed(2);
  });
});
