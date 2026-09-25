import { use } from "react";
import type { CardType } from "../type";
import Card from "./Card";

export interface CardsProps {
    cardsPromise: Promise<CardType[]>
};

export default function Cards({ cardsPromise }: CardsProps) {

    const cards = use(cardsPromise);
    // console.log(cards);

    return (
        <>
            <div className="mx-3 my-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {
                    cards.map((card) => <>
                        <Card card={card}></Card>
                    </>)
                }
            </div>
        </>
    )
}