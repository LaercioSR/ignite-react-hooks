# Test hooks/useCart.tsx

- **should be able to initialize cart with localStorage value**
    
    For this test to pass you must initialize the `cart` state with the value of the localStorage `@RocketShoes:cart` key if it exists.
    
- **should be able to add a new product**
    
    For this test to pass you must use the `addProduct` function to add a new product to the cart and preserve the updated cart value in localStorage using `setItem`.
    
- **should not be able to add a product that does not exist**
    
    For this test to pass you must use the `addProduct` function to verify that the product does not exist, display a `toast.error` with the message `Error adding product` and exit the function without changing the `cart` and the value in localStorage.
    
- **should be able to increase a product amount when adding a product that already exists on cart**
    
    For this test to pass you must use the `addProduct` function to increase the quantity of a product in the cart by 1 unit instead of adding a new product. It should also preserve the updated cart value in localStorage using `setItem`.
    
- **should not be able to increase a product amount when running out of stock**
    
    For this test to pass you must use the `addProduct` function to verify that the desired quantity of the product is not in stock (Fake API `stock/id` route). It should also show a `toast.error` with the message `Requested quantity out of stock` and exit the function without changing the `cart` and the value in localStorage.
    
- **should be able to remove the product**
    
    For this test to pass you must use the `removeProduct` function to remove a product from the cart. It should also preserve the updated cart value in localStorage using `setItem`.
    
- **should not be able to remove a product that does not exist**
    
    For this test to pass you must use the `removeProduct` function to verify that the product does not exist in the cart and show a `toast.error` with the message `Error removing product`. You should also exit the function without changing the `cart` and the value in localStorage.
    
- **should be able to update a product amount**
    
    For this test to pass you must use the `updateProductAmount` function to increment and decrement the value of a product in the cart. It should also preserve the updated cart value in localStorage using `setItem`.
    
- **should not be able to update a product that does not exist**
    
    In order for this test to pass you must use the `updateProductAmount` function to verify that the product does not exist and show a `toast.error` with the message `Error in changing product quantity`. You should also exit the function without changing the `cart` and the value in localStorage.
    
- **should not be able to update a product amount when running out of stock**
    
    For this test to pass, you must use the `updateProductAmount` function to verify that the desired quantity of the product is not in stock (Fake API `stock/id` route). It should also show a `toast.error` with the message `Requested quantity out of stock` and exit the function without changing the `cart` and the value in localStorage.
    
- **should not be able to update a product amount to a value smaller than 1**
    
    For this test to pass you must use the `updateProductAmount` function to verify that the desired amount of the product is less than 1 and exit the function immediately without changing the `cart` and the value in localStorage.