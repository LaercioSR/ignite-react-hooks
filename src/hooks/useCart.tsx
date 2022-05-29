import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: (data: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@RocketShoes:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      let stock = 0;
      await api.get(`stock/${productId}`).then((response) => {
        stock = response.data.amount;
      });
      const index = cart.findIndex((prod) => prod.id === productId);
      if (index > -1) {
        const product = cart[index];
        const amount = product.amount + 1;
        if (stock < amount) {
          toast.error("Quantidade solicitada fora de estoque");
        } else {
          cart.splice(index, 1);
          product.amount = amount;
          localStorage.setItem(
            "@RocketShoes:cart",
            JSON.stringify([...cart, product])
          );
          setCart([...cart, product]);
        }
      } else {
        const amount = 1;
        if (stock < amount) {
          toast.error("Quantidade solicitada fora de estoque");
        } else {
          await api.get(`products/${productId}`).then((response) => {
            const product = response.data as Product;
            if (product) {
              product.amount = amount;
              localStorage.setItem(
                "@RocketShoes:cart",
                JSON.stringify([...cart, product])
              );
              setCart([...cart, product]);
            }
          });
        }
      }
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const index = cart.findIndex((prod) => prod.id === productId);
      if (index > -1) {
        cart.splice(index, 1);
        setCart(cart);
        localStorage.setItem("@RocketShoes:cart", JSON.stringify(cart));
      } else {
        toast.error("Erro na remoção do produto");
      }
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount > 0) {
        let stock = 0;
        await api.get(`stock/${productId}`).then((response) => {
          stock = response.data.amount;
        });
        if (stock < amount) {
          toast.error("Quantidade solicitada fora de estoque");
        } else {
          const product = cart.find((prod) => prod.id === productId);
          if (product) {
            product.amount = amount;
            setCart([...cart]);
            localStorage.setItem("@RocketShoes:cart", JSON.stringify(cart));
          }
        }
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
