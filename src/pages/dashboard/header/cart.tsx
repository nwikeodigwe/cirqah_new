import { CiShoppingCart } from "react-icons/ci";
import { DropdownMenu } from "radix-ui";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import clsx from "clsx";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import {
  addProductToCart,
  decreaseProductInCart,
  removeProductFromCart,
} from "@/features/cart/slice";

const Cart = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="text-xl rounded-md bg-chicago-900 text-white p-2 shadow-md hover:scale-105 outline-none">
        <CiShoppingCart />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="rounded-md bg-chicago-900 mt-3 mr-3 text-white text-sm z-30">
          <div
            className={clsx(
              "px-2 py-8 w-[300px] flex flex-col items-center justify-center space-y-2",
              products?.length && "hidden"
            )}
          >
            <MdOutlineRemoveShoppingCart className="text-2xl" />
            <p>Your cart is currently empty</p>
          </div>
          {products?.map((product, i) => (
            <DropdownMenu.DropdownMenuItem
              key={i}
              className="flex items-center justify-between"
            >
              <div>
                <h4>{product.name}</h4>
                <button
                  onClick={() => dispatch(removeProductFromCart(product.id))}
                  className="hover:underline text-xs"
                >
                  Remove
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  disabled={product.number === 1}
                  onClick={() => decreaseProductInCart(product.id)}
                >
                  -
                </button>
                <span>{product.number}</span>
                <button onClick={() => addProductToCart(product)}>+</button>
              </div>
            </DropdownMenu.DropdownMenuItem>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Cart;
