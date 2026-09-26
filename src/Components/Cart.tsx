import { memo, type Dispatch, type SetStateAction } from "react";
import type { CardType, RestoredCart } from "../type"

export interface CartProps {
    cart: CardType,
    // setClickedDelete: Dispatch<SetStateAction<boolean>>
    handleCartsAfterDelete: (deletedCartId: string) => void,
};

const Cart = memo(function Cart({ cart, handleCartsAfterDelete }: CartProps) {

    const { icon, badge, name, id } = cart;
    return (
        <>
            <div className="p-1">
                <div className="text-yellow-300 card w-full bg-base-100 card-md shadow-sm">
                    <div className="card-body flex flex-row justify-between bg-black rounded-2xl">
                        <img className="w-7 rounded-sm bg-yellow-300" src={icon} alt="" />
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p>{badge}</p>
                        </div>
                        <div className="card-actions">

                            {/* //todo       Delete Button */}
                            <button
                                onClick={() => {
                                    handleCartsAfterDelete(id)
                                }}

                                className="btn btn-neutral text-pink-500 rounded-4xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Cart;