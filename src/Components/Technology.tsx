import { memo, Suspense, useState } from "react";
import Cards from "./Cards";
import Carts from "./Carts";
import type { CardType } from "../type";

const cardsPromise = async (): Promise<CardType[]> => {
    const res = await fetch("https://gist.githubusercontent.com/yuvrajdip/600c149a1767c2745c219e849cf0fbfd/raw/29fbf55c013c811f6ee1a12a6c90594923b5ee7a/gistfile1.txt");
    const data = await res.json();

    return data;
}

const Technology = memo(function Technology() {

    const [carts, setCarts] = useState<CardType[]>([]);

    const handleCards = (newCart: CardType) => {
        setCarts([
            ...carts,
            newCart]
        );
    }

    return (
        <>
            <div className="mx-3.5">
                <h2>Never Stop Learning</h2>
                <h3>You can learn from our amazing blogs..</h3>
                <div className="max-w-7xl mx-auto flex justify-around gap-5">

                    <div className="w-[70%] font-mono text-indigo-200 p-10">


                        <Suspense fallback={<h2>Loading...</h2>}>
                            <Cards handleCarts={handleCards} cardsPromise={cardsPromise()}></Cards>
                        </Suspense>
                    </div>
                    <div className="w-[25%] max-h-screen overflow-y-scroll">
                        <Carts carts={carts} setCarts={setCarts}></Carts>
                    </div>
                </div>
            </div>

        </>
    )
})

export default Technology;