import { memo, use } from "react";
import type { CardType } from "../type";
import Card from "./Card";

export interface CardsProps {
    cardsPromise: Promise<CardType[]>,
    handleCarts: (newCart: CardType) => void
};

const Cards = memo(function Cards({ cardsPromise, handleCarts }: CardsProps) {

    const cards = use(cardsPromise);
    // console.log(cards);

    return (
        <>
            <div className="mx-3 my-8 max-h-screen overflow-y-scroll grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {
                    cards.map((card) => <>
                        <Card key={card.id} card={card} handleCarts={handleCarts}></Card>
                    </>)
                }
            </div>
        </>
    )
})

export default Cards;