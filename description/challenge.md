# Challenge 01 - Creating a shopping cart hook

# 💻 About the challenge

In this challenge, you must create an application to train what you have learned so far in ReactJS

This will be an application where your main objective is to create a shopping cart hook. You will have access to two pages, a component and a hook to implement the functionality requested in this challenge:

- Add a new product to the cart;
- Remove a product from the cart;
- Change the quantity of a product in the cart;
- Calculation of sub-total and total cart prices;
- Stock validation;
- Display of error messages;
- Between others.

Next we will see in more detail what and how it needs to be done 🚀

## Application template

To accomplish this challenge, we created this template for you that you should use as a GitHub template.

The template is available at the following URL:

[GitHub - rocketseat-education/ignite-template-reactjs-criando-um-carrinho-de-shopping-hook](https://github.com/rocketseat-education/ignite-template-reactjs-criando-um-shopping-cart-hook)

**Tip**: If you don't know how to use GitHub repositories as a template, we have a guide in **[our FAQ](https://www.notion.so/FAQ-Desafios-ddd8fcdf2339436a816a0d9e45767664).**

## Getting ready for the challenge

For this challenge, in addition to the concepts seen in class, we will use some new things to make our application even better. So, before going directly to the challenge code, we will explain a little bit of:

- Fake API with JSON Server;
- Preserve cart data with localStorage API;
- Show errors with toastify.

### Fake API with JSON Server

Just as we used MirageJS in module 2 to simulate an API with transaction data from the dtmoney application, we will use JSON Server to simulate an API that has product and stock information.

Navigate to the created folder, open it in Visual Studio Code and run the following commands in the terminal:

```bash
yarn
yarn server
```

Then you will see the message:

![https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/json-server.png](https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/json-server.png)

Note that he started a fake API with `/stock` and `/products` resources on `localhost` on port `3333` from the information in the file [server.json](https://github.com/rocketseat-education/ignite-template-reactjs-creating-a-shopping-cart-hook/blob/master/server.json) located at the root of your project. Accessing these routes in your browser, you can see the return of information already in JSON:

![https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/json-stock.png](https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/json-stock.png)

![https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/json-products.png](https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/json-products.png)

To access the listing of all products and stock, simply perform a GET request in the `/products` and `/stock` routes respectively. To access the data of a single item use the `route params`, for example: `/products/1` and `/stock/1` to access the product and stock data of the product id 1, respectively.

That way, just consume these API routes normally with axios. If you want to study more about **JSON Server**, take a look here:

[typicode/json-server](https://github.com/typicode/json-server)

### Preserving cart with localStorage API

To preserve cart data even if we close the application, we will use the **localStorage API**

This is an API that allows us to persist data in the browser in a key-value schema (similar to what we have with JSON objects). As this is a global API, you don't need to import anything before using it.

To save the data, you must use the `setItem` method. As the first argument you must enter the name you want to give the record, in the case of this challenge it is `mandatory` to use the name `@RocketShoes:cart`. The second argument is the value of the registry that **must** be in `string` format. Below is an example:

```bash
localStorage.setItem('@RocketShoes:cart', cart)
```

<aside>
💡 If you want to send a value to the record that is not in `string` format, you need to treat it (eg: `JSON.stringify`). This will cause an object, list, number or any other value to be converted to a string.

</aside>

To retrieve the data, you must use the `getItem` method passing it as an argument of the record which, in the case of this challenge, is `mandatory` to use as `@RocketShoes:cart`. Below is an example:

```jsx
const storagedCart = localStorage.getItem('@RocketShoes:cart');
```

<aside>
💡 The value returned by the `getItem` method is always in `string` format. If you want to use this data in another format, you need to process it (eg: `JSON.parse`). This will convert the information to the original state when it was saved with `JSON.strigify`, be it a list, an object or some other data type.

</aside>

If you want to learn more about the **localStorage API**, take a look here

[Window.localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

### Showing errors with toastify

To display errors on screen, we will use a package called **react-toastify**. It helps to show temporary and quick information in a very beautiful way.

Of all the methods, we will only use the `error` and it will be mandatory to use predefined messages for the tests to pass (we will see more about this)

If you want to learn more about **react-toastify**, take a look here

[fkhadra/react-toastify](https://github.com/fkhadra/react-toastify#readme)

## What should I edit in the application?

With the template already cloned, the dependencies installed and the [fake API running](https://www.notion.so/Desafio-01-Criando-um-hook-de-carrinho-de-compras-5769216778794019a83f544e79167b12), you should complete where there is no code with the code to achieve the goals of each test. The documents that must be edited are:

- [src/components/Header/index.tsx](https://github.com/rocketseat-education/ignite-template-reactjs-criando-um-hook-de-carrinho-de-pras/blob/main/src/components/Header/index.tsx);
- [src/pages/Home/index.tsx](https://github.com/rocketseat-education/ignite-template-reactjs-criando-um-hook-de-carrinho-de-compras/blob/main/src/pages/Home/index.tsx)
- [src/pages/Cart/index.tsx](https://github.com/rocketseat-education/ignite-template-reactjs-criando-um-hook-de-carrinho-de-compras/blob/main/src/pages/Cart/index.tsx);
- [src/hooks/useCart.tsx](https://github.com/rocketseat-education/ignite-template-reactjs-criando-um-hook-de-carrinho-de-compras/blob/main/src/hooks/useCart.tsx).

### components/Header/index.tsx

![https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/screen0.png](https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/screen0.png)

You must receive the `cart` array from the `useCart` hook and display the number of **different** products added to the cart on screen. Thus, if the cart has 4 units of item A and 1 unit of item B, the value to be displayed is `2 items`.

### pages/Home/index.tsx

![https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/screen1.png](https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/screen1.png)

You must render the products fetched from the fake API on the screen with the title, image, price and quantity information added to the cart. Finally, it is necessary to implement the functionality of adding the chosen product to the cart by clicking on the `ADD TO CART` button.

In this file, we have three important points to be implemented:

- **cartItemsAmount:** Must have quantity information for each product in the cart. We suggest creating an object using `reduce` where the key represents the product id and the value represents the quantity of the product in the cart. Example: if you have a product with id 1 and quantity 4 and another product with id 2 and quantity 3 in your cart, the object would look like this:

```jsx
{
1:4,
2: 3
}
```

- **loadProducts:** You must fetch Fake API products and format the price using the `utils/format` helper
- **handleAddProduct:** You must add the chosen product to the cart.

### pages/Cart/index.tsx

![https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/screen2.png](https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/screen2.png)

You must render a table with the image, title, unit price, quantity of units and subtotal price of each product in the cart. In addition, you also need to render the total cart price. Finally, it is necessary to implement the functionality of the buttons to decrement, increment and remove the affection product.

In this file, we have five important points to be implemented:

- **cartFormatted:** You must format the cart by adding the fields `priceFormatted` (product price) and `subTotal` (product price multiplied by quantity) both properly formatted with `utils/format`.
- **total:** It must have the information of the total value of the cart properly formatted with `utils/format`.
- **handleProductIncrement:** You must increase the quantity of the chosen product in the cart by 1 unit.
- **handleProductDecrement:** The quantity of the chosen product in the cart must be reduced by 1 unit, where the minimum value is 1 (in this case the button must be disabled).
- **handleRemoveProduct:** You must remove the chosen product from the cart.

### hooks/useCart.tsx

Although it doesn't directly return any rendering of elements in the interface like the other files, this is the heart of the challenge. He is responsible for:

- hook `useCart`;
- context `CartProvider`;
- handle `localStorage`;
- display `toasts`.

So this is where you will implement the features that will be used by the rest of the app. The main points are:

- **cart:** It must check if there is any record with the value `@RocketShoes:cart` and return this value if it exists. Otherwise, return an empty array.
- **addProduct:** You must add a product to the cart. However, you need to check a few things:
    - The updated cart value must be perpetuated in **localStorage** using the `setItem` method.
    - If the product already exists in the cart, you should not add a new repeated product, just increase the quantity by 1 unit;
    - Check if the desired quantity of the product is in stock. Otherwise, use **react-toastify**'s `error` method with the following message:
    
    ```jsx
    toast.error('Requested quantity out of stock');
    ```
    
    - Capture using `trycatch` the errors that occur during the method and, in the catch, use the `error` method of **react-toastify** with the following message:
    
    ```jsx
    toast.error('Error adding product');
    ```
    
- **removeProduct:** Must remove a product from the cart. However, you need to check a few things:
    - The updated cart value must be perpetuated in **localStorage** using the `setItem` method.
    - Capture using `trycatch` the errors that occur during the method and, in the catch, use the `error` method of **react-toastify** with the following message:
    
    ```jsx
    toast.error('Error removing product');
    ```
    
- **updateProductAmount:** Must update the quantity of a product in the cart. However, you need to check a few things:
    - The updated cart value must be perpetuated in **localStorage** using the `setItem` method.
    - If the product quantity is less than or equal to zero, exit the **updateProductAmount** function instantly.
    - Check if the desired quantity of the product is in stock. Otherwise, use **react-toastify**'s `error` method with the following message:
    
    ```jsx
    toast.error('Requested quantity out of stock');
    ```
    
    - Capture using `trycatch` the errors that occur during the method and, in the catch, use the `error` method of **react-toastify** with the following message:
    
    ```jsx
    toast.error('Error in product quantity change');
    ```
    

## Test specification

In each test, there is a brief description of what your application must comply with in order for the test to pass.

<aside>
💡 If you have any doubts as to what the tests are, and how to interpret them, take a look at **[our FAQ](https://www.notion.so/FAQ-Desafios-ddd8fcdf2339436a816a0d9e455767664)**

</aside>

For this challenge, we have the following tests:

[Teste components/Header/index.tsx](tests/test-header.md)

[Testes pages/Home/index.tsx](tests/test-home.md)

[Testes pages/Cart/index.tsx](tests/test-cart.md)

[Testes hooks/useCart.tsx](tests/test-hook.md)

## What should the application look like at the end?

Do you have doubts (or curious 👀) to see how the application should look at the end of the challenge? We leave below a video showing the main features that you should implement to help you (or kill your curiosity 👀).

[https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/challenge.mp4](https://raw.githubusercontent.com/LaercioSR/ignite-react-hooks/main/public/challenge.mp4)

# 📅 Delivery

This challenge must be delivered from the Rocketseat platform. Submit the link to the repository you made your changes to. After completing the challenge, in addition to having sent the code to GitHub, making a post on Linkedin is a good way to demonstrate your knowledge and efforts to evolve your career for future opportunities.

# Challenge solution

In case you want to see how to solve the challenge, we made a video explaining the step by step to fulfill all application requirements:

[https://youtu.be/NTeUIfUtKWw](https://youtu.be/NTeUIfUtKWw)

Made with 💜 by Rocketseat 👋 Join our [open community!](https://discord.gg/pUU3CG4Z)
