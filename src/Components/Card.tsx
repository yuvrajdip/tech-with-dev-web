
export interface CardProp {
    card: {}
};

export default function Card({ card }: CardProp) {
    // const { id: string, name: string, category: string, description: string, icon: string, rating: number, difficulty: string, badge: string } = card;
    // console.log(card);
    return (
        <>
            <div className="card bg-base-100 image-full w-full shadow-sm border-b-amber-200 border-2 rounded-2xl">
                <div className="flex justify-between">
                    <figure>
                        <img
                            className="bg-amber-50 h-12 w-12 bg-transparent"
                            src={card.icon}
                            alt="Shoes" />
                    </figure>
                    <button className="btn btn btn-info">{card.difficulty}</button>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{card.name}</h2>
                    <p>{card.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-soft btn-primary">Add to Learnt</button>
                    </div>
                </div>
            </div>
        </>
    )
}