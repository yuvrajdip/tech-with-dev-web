import type { CardType } from "../type"

export interface CardProp {
    card: CardType
};

export default function Card({ card }: CardProp) {

    return (
        <>
            <div className="card text-black bg-base-100 max-w-70 mx-auto shadow-sm border-amber-700 border-2 rounded-2xl text-3xl">
                <div className="flex justify-between p-3">
                    <figure>
                        <img
                            className="h-12 w-12 bg-transparent"
                            src={card.icon}
                            alt="Shoes" />
                    </figure>
                    <button className="text-lg">{card.badge}</button>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{card.name}</h2>
                    <p>{card.description}</p>

                    <div className="mt-4 flex flex-col gap-3">
                        <div>
                            <p>{card.difficulty}</p>
                        </div>
                        <div>
                            <p>{card.category}</p>
                        </div>
                        <div className="inline">
                            <p>{card.rating}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>

                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-dash btn-secondary cursor-pointer">Add to Learnt</button>
                    </div>
                </div>
            </div>
        </>
    )
}