import { memo, useState, type Dispatch, type SetStateAction } from "react";
import type { CardType } from "../type";
import Cart from "./Cart";

export interface CartsProps {
    carts: CardType[],
    setCarts: Dispatch<SetStateAction<CardType[]>>
};

export default function Carts({ carts, setCarts }: CartsProps) {
    // console.log(carts);

    // const [clickedDelete, setClickedDelete] = useState<boolean>(false);

    const handleCartsAfterDelete = (deletedCartId: string) => {

        const remainingCarts = carts.filter((cart) => cart.id !== deletedCartId)
        setCarts([...remainingCarts]);
    }

    return (
        <>
            <div className="flex flex-col justify-start my-8">

                <h3
                    className="text-yellow-400 pl-1 text-3xl mb-5"
                >Read {carts.length} of blogs still</h3>

                {
                    carts.map((cart) =>
                        <Cart
                            cart={cart}
                            handleCartsAfterDelete={handleCartsAfterDelete}
                        // setClickedDelete={setClickedDelete}
                        ></Cart>)
                }

                <button
                    onClick={() => setCarts([])}
                    className="my-7 btn btn-dash btn-secondary cursor-pointer"
                > Delete All</button>
            </div>

        </>
    )
};

// export default Carts;