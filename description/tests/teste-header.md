# Teste components/Header/index.tsx

- **should be able to render the amount of products added to cart**

Para que esse teste passe você deve renderizar o valor correto da quantidade de **tipos** de produtos 

```jsx
[
	{
	  amount: 2,
	  id: 1,
	  image:
	    'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
	  price: 179.9,
	  title: 'Tênis de Caminhada Leve Confortável',
	},
	{
	  amount: 1,
	  id: 2,
	  image:
	    'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
	  price: 139.9,
	  title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
	},
]
```

O valor correto a ser exibido é `2 itens`.