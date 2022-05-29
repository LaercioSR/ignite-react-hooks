# Tests pages/Cart/index.tsx

- **should be able to increase/decrease a product amount**
    
     For this test to pass, you must correctly render the quantity value of each product added to the cart and be able to increment and decrement the values when clicking
    
     in the buttons `<button *data-testid*="increment-product">` and `<button *data-testid*="decrement-product">` respect
    
- **should not be able to decrease a product amount when value is 1**
    
     For this test to pass you must disable the `<button*data-testid*="decrement-product">` button when the product quantity is equal to 1.
    
- **shod be able to remove a product**
    
     In order for this test to pass you must be able to remove the product from the cart by clicking the `<button*data-testid*="remove-product">` button