import { createContext, useState } from "react";

import BAKED_GOODS_DATA from "../data/shop-data";

export const BakedGoodsContext = createContext({
    bakedGoods: [],
})

export const BakedGoodsProvider = ({children}) => {
    const [bakedGoods, setbakedGoods] = useState(BAKED_GOODS_DATA)
    const value = { bakedGoods }

    return (
        <BakedGoodsContext.Provider value={value}>{children}</BakedGoodsContext.Provider>
    )
}
