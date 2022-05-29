# Testes pages/Home/index.tsx

- **should be able to render each product quantity added to cart**
    
    Para que esse teste passe você deve renderizar corretamente a quantidade adicionada de cada produto adicionado ao carrinho dentro da tag `<div data-testid="cart-product-quantity">`. Sugerimos criar uma variável `cartItemsAmount` utilizando o método `reduce` para iterar sobre os produtos adicionados ao `cart` e gerar um array com o `
    
    Sugerimos criar uma variável `cartItemsAmount` utilizando o método `reduce` para iterar sobre os produtos adicionados ao `cart` e gerar um array com o `id` do produto e a quantidade adicionada ao carrinho. Exemplo:
    
    ```jsx
    [
    	0: 0,
    	1: 2,
    	2: 4
    ]
    ```
    
    Mostraria a quantidade 0 para o produto de `id` 1, 2 para o de `id e 4 para o último.
    
- **should be able to add a product to cart**
    
    Para que esse teste passe você deve clicar no botão `ADICIONAR AO CARRINHO` e o produto escolhido ser adicionado com sucesso ao carrinho. Além disso, a quantidade do produto no carrinho mostrada no botão deve representar o novo valor (incrementado de 1 unidade).