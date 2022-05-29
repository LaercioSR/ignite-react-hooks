# Test components/Header/index.tsx

- **should be able to render the amount of products added to cart**

For this test to pass you must render the correct value of the amount of **types** of products

```jsx
[
    {
        amount: 2,
        id: 1,
        image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        price: 179.9,
        title: 'Comfortable Light Walking Shoes',
    },
    {
        amount: 1,
        id: 2,
        image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        price: 139.9,
        title: 'Shoes VR Comfortable Walking Details Men's Leather',
    },
]
```

The correct value to display is `2 items`.