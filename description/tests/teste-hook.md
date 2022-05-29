# Testes hooks/useCart.tsx

- **should be able to initialize cart with localStorage value**
    
    Para que esse teste passe você deve inicializar o estado `cart` com o valor da key `@RocketShoes:cart` do localStorage caso ele exista.
    
- **should be able to add a new product**
    
    Para que esse teste passe você deve utilizar a função `addProduct` para adicionar um novo produto ao carrinho e preservar o valor atualizado do carrinho no localStorage utilizando o `setItem`.
    
- **should not be able add a product that does not exist**
    
    Para que esse teste passe você deve utilizar a função `addProduct` para verificar que o produto não existe, mostrar um `toast.error` com a mensagem `Erro na adição do produto` e sair da função sem alterar o `cart` e o valor no localStorage.
    
- **should be able to increase a product amount when adding a product that already exists on cart**
    
    Para que esse teste passe você deve utilizar a função `addProduct` para incrementar em 1 unidade a quantidade de um produto no carrinho em vez de adicionar um novo produto. Deve também preservar o valor atualizado do carrinho no localStorage utilizando o `setItem`.
    
- **should not be able to increase a product amount when running out of stock**
    
    Para que esse teste passe você deve utilizar a função `addProduct` para verificar que a quantidade desejada do produto não possui em estoque (rota `stock/id` da Fake API). Deve também mostrar um `toast.error` com a mensagem `Quantidade solicitada fora de estoque` e sair da função sem alterar o `cart` e o valor no localStorage.
    
- **should be able to remove a product**
    
    Para que esse teste passe você deve utilizar a função `removeProduct` para remover um produto do carrinho. Deve também preservar o valor atualizado do carrinho no localStorage utilizando o `setItem`.
    
- **should not be able to remove a product that does not exist**
    
    Para que esse teste passe você deve utilizar a função `removeProduct` para verificar que o produto não existe no carrinho e mostrar um `toast.error` com a mensagem `Erro na remoção do produto`. Deve também sair da função sem alterar o `cart` e o valor no localStorage.
    
- **should be able to update a product amount**
    
    Para que esse teste passe você deve utilizar a função `updateProductAmount` para incrementar e decrementar o valor de um produto no carrinho. Deve também preservar o valor atualizado do carrinho no localStorage utilizando o `setItem`.
    
- **should not be able to update a product that does not exist**
    
    Para que esse teste passe você deve utilizar a função `updateProductAmount` para verificar que o produto não existe e mostrar um `toast.error` com a mensagem `Erro na alteração de quantidade do produto`. Deve também sair da função sem alterar o `cart` e o valor no localStorage.
    
- **should not be able to update a product amount when running out of stock**
    
    Para que esse teste passe você deve utilizar a função `updateProductAmount` para verificar que a quantidade desejada do produto não possui em estoque (rota `stock/id` da Fake API). Deve também mostrar um `toast.error` com a mensagem `Quantidade solicitada fora de estoque` e sair da função sem alterar o `cart` e o valor no localStorage.
    
- **should not be able to update a product amount to a value smaller than 1**
    
    Para que esse teste passe você deve utilizar a função `updateProductAmount` para verificar que a quantidade desejada do produto é menor que 1 e sair imediatamente da função sem alterar o `cart` e o valor no localStorage.