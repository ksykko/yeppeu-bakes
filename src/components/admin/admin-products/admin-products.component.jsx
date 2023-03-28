import { Fragment, useContext, useState, useEffect } from 'react'

import { BakedGoodsContext } from '../../../contexts/baked-goods.context'

const AdminProducts = () => {
    const { bakedGoodsMap } = useContext(BakedGoodsContext)

    console.log(bakedGoodsMap)
    return (
        <Fragment>
            <div className="flex-1 mx-72 mr-16 mt-18">
                <div className="p-8">
                    <div className="text-4xl text-darkestBrown font-extrabold font-playfairDisplay my-3">
                        Product List
                    </div>
                    <div className=" overflow-x-auto shadow-lg rounded-xl">
                        <table className="w-full text-sm text-left text-white bg-lightBrown">
                            <thead className="text-md uppercase tracking-widest">
                                <tr className=" font-playfairDisplay text-center">
                                    <th scope="col" className="px-12 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 text-left py-3"
                                    >
                                        Product ID
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Selection
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(bakedGoodsMap).map(
                                    (bakedGoodId) => {
                                        return (
                                            <tr
                                                key={bakedGoodId}
                                                className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold"
                                            >
                                                <td className="px-6 py-4">
                                                    <img
                                                        src={
                                                            bakedGoodsMap[
                                                                bakedGoodId
                                                            ].imageUrl[1].url
                                                        }
                                                        alt="product"
                                                        className="h-28 w-28 object-cover rounded-xl"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 text-left">
                                                    #{bakedGoodId} <br />
                                                    {
                                                        bakedGoodsMap[
                                                            bakedGoodId
                                                        ].name
                                                    }
                                                </td>
                                                <td className="px-6 py-4">
                                                    {bakedGoodsMap[
                                                        bakedGoodId
                                                    ].price.map((price) => {
                                                        return (
                                                            <div>
                                                                {price.qty}{' '}
                                                                <br />
                                                            </div>
                                                        )
                                                    })}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {bakedGoodsMap[
                                                        bakedGoodId
                                                    ].price.map((price) => {
                                                        return (
                                                            <div>
                                                                ₱{price.cost}{' '}
                                                                <br />
                                                            </div>
                                                        )
                                                    })}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button className="bg-darkestBrown text-white font-semibold py-2 px-4 rounded-full">
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminProducts
