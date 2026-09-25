import { Suspense } from "react";
import Cards from "./Cards";
import Carts from "./Carts";
import type { CardType } from "../type";

const cardsPromise = async (): Promise<CardType[]> => {
    const res = await fetch("https://gist.githubusercontent.com/yuvrajdip/600c149a1767c2745c219e849cf0fbfd/raw/29fbf55c013c811f6ee1a12a6c90594923b5ee7a/gistfile1.txt");
    const data = await res.json();

    return data;
}

export default function Technology() {
    return (
        <>
            <div className="max-w-7xl mx-auto flex justify-around items-center">
                <div className="w-[70%] font-mono text-indigo-200">
                    <div className="mx-3.5">
                        <h2>Never Stop Learning</h2>
                        <h3>You can learn from our amazing blogs..</h3>
                    </div>

                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Cards cardsPromise={cardsPromise()}></Cards>
                    </Suspense>
                </div>
                <div>
                    <Carts></Carts>
                </div>
            </div>
        </>
    )
}