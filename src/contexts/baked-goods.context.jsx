import { createContext, useState, useEffect } from "react";

import { addCollectionandDocuments, getBakedGoodsDocuments } from "../utils/firebase/firebase.utils";

 //import BAKED_GOODS_DATA from "../data/shop-data";

export const BakedGoodsContext = createContext({
    bakedGoodsMap: {},
})

export const BakedGoodsProvider = ({children}) => {
    const [bakedGoodsMap, setbakedGoodsMap] = useState({})

    useEffect(() => {
        const getBakedGoodsMap = async () => {
            const bakedGoodMap = await getBakedGoodsDocuments()
            setbakedGoodsMap(bakedGoodMap)
            console.log(bakedGoodMap)
        }

        getBakedGoodsMap()

    }, [])

    const value = { bakedGoodsMap }

    return (
        <BakedGoodsContext.Provider value={value}>{children}</BakedGoodsContext.Provider>
    )
}
