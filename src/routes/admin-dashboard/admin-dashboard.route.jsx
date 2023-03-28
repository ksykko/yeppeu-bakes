import { Fragment, useState, useContext, useEffect } from 'react'

import { getBakedGoodsDocuments } from '../../utils/firebase/firebase.utils'

import { getUserAccounts } from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../contexts/user.context'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import { Link } from 'react-router-dom'
import React from "react";

import Logo from '../../assets/yeppeubakes-nobg.png'


const AdminDashboard = () => {
    const { currentUser } = useContext(UserContext)
    const [bakedGoods, setbakedGoods] = useState([])
    const [users, setUsers] = useState([])


    useEffect(() => {
        // Call the function to retrieve cart items
        getBakedGoodsDocuments().then((bakedGoods) => {
            console.log('bakedGoods:', bakedGoods)
            setbakedGoods(Object.values(bakedGoods))
        })
    }, [currentUser])


    const renderOrderRow = (bakedGood) => {
        const { id, name, desc, price, imageUrl } = bakedGood;

        // Check if price is an array and contains a productName, priceId and cost value
        const priceWithProductData = Array.isArray(price) && price.filter(p => p.productName && p.priceId && p.cost && p.qty);

        // Create a row for each priceWithProductData object
        const rows = priceWithProductData.map(p => (
          <tr
            key={`${id}-${p.priceId}`}
            className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold"
          >
            <td className="px-6 py-4">{`#${p.priceId}`}</td>
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4">{p.productName}</td>
            <td className="px-6 py-4">{p.qty}</td>
            <td className="px-6 py-4">{desc}</td>
            <td className="px-6 py-4">{`₱${p.cost}`}</td>
            <td className="px-6 py-4"></td>
          </tr>
        ));

        if (priceWithProductData.length === 0) {
          return (
            <tr
              key={id}
              className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold"
            >
              <td className="px-6 py-4">{`#${id}`}</td>
              <td className="px-6 py-4">{name}</td>
              <td className="px-6 py-4">{name}</td>
              <td className="px-6 py-4">{desc}</td>
              <td className="px-6 py-4">{`₱${price}`}</td>
              <td className="px-6 py-4"></td>
            </tr>
          );
        }

        return rows;
    };


    const tabs = [
        {
          name: 'Profile',
          content: (
            <div className='p-8'>
              <div className="text-2xl text-darkestBrown font-extrabold font-playfairDisplay my-3">
                User Accounts
              </div>
              <div className="relative overflow-x-auto shadow-lg ">
                <table className="w-full text-sm text-left text-white bg-lightBrown">
                  <thead className="text-md uppercase tracking-widest">
                    <tr className=" font-playfairDisplay text-center">
                      <th scope="col" className="px-6 py-3">
                        Display Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date Created
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Contact Number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {users.map((user, index) => renderUserRow(user, index))} */}
                  </tbody>
                </table>
              </div>
            </div>
          ),
        },
    ];

    const tabs2 = [
        {
            name: 'Products List',
            content: (
                <div className='p-8'>
                    <div className="text-2xl text-darkestBrown font-extrabold font-playfairDisplay my-3">
                        List of Products
                    </div>

                    <div className="relative overflow-x-auto shadow-lg ">
                        <table className="w-full text-sm text-left text-white bg-lightBrown">
                            <thead className="text-md uppercase tracking-widest">
                                <tr className=" font-playfairDisplay text-center">
                                    <th scope="col" className="px-6 py-3">
                                        Product ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Selection
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
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
                                {bakedGoods.map((bakedGood) => renderOrderRow(bakedGood))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },
        {
            name: 'Orders',
            content: (
                <div className='p-8'>
                    <div className="text-2xl my-3">Track Orders</div>
                </div>
            ),
        },
    ]

    const tabs3 = [

        {
            name: 'Sales Analytics',
            content: (
                <div className='p-8'>
                    <div className="text-2xl my-3">Profile</div>
                </div>
            ),
        }
    ]

    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleTabClick = (tab) => {
            setActiveTab(tab)
    }

    const handleTabClick2 = (tab2) => {
        setActiveTab(tab2)
    }

    const handleTabClick3 = (tab3) => {
        setActiveTab(tab3)
    }

    return (
        <Fragment>
            <div className="h-full bg-heroPeach">
                <NavigationBar />
                {/*  */}
                {/* Tab navigation */}
                <div className="mx-auto">
                    <div className="grid grid-cols-[1fr,4fr] h-screen bg-white shadow-lg mx-auto">
                        <div className="text-md font-normal text-center text-gray-500 border-b border-gray-200 bg-darkestBrown">
                            <ul className="grid grid-rows-auto text-left -mb-px px-10">
                                <li className='px-20 py-10'>
                                    <img
                                        src={Logo}
                                        alt="Shop"
                                        className="object-cover w-full"
                                    />
                                </li>
                                <li className='font-playfairDisplay text-lg font-bold text-[#F8CEB0] '>Accounts</li>
                                {tabs.map((tab, index) => (
                                    <li key={index} className=" mr-2 ">
                                        <Link
                                            href="#"
                                            className={`inline-block rounded-t-lg text-white hover:text-brown  ${
                                                activeTab.name === tab.name
                                                    ? 'text-lightBrown font-bold border-lightBrown rounded-t-lg active'
                                                    : ''
                                            }`}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className='font-playfairDisplay text-lg font-bold  text-[#F8CEB0] mt-4'>Inventory</li>
                                {tabs2.map((tab2, index) => (
                                    <li key={index} className=" mr-2">
                                        <Link
                                            href="#"
                                            className={`inline-block rounded-t-lg text-white hover:text-brown  ${
                                                activeTab.name === tab2.name
                                                    ? 'text-lightBrown font-bold border-lightBrown rounded-t-lg active'
                                                    : ''
                                            }`}
                                            onClick={() => handleTabClick2(tab2)}
                                        >
                                            {tab2.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className='font-playfairDisplay text-lg font-bold text-[#F8CEB0] mt-4'>Analytics</li>
                                {tabs3.map((tab3, index) => (
                                    <li key={index} className=" mr-2">
                                        <Link
                                            href="#"
                                            className={`inline-block rounded-t-lg text-white hover:text-brown  ${
                                                activeTab.name === tab3.name
                                                    ? 'text-lightBrown font-bold border-lightBrown rounded-t-lg active'
                                                    : ''
                                            }`}
                                            onClick={() => handleTabClick3(tab3)}
                                        >
                                            {tab3.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Render the content of the active tab */}
                        {activeTab.content}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminDashboard
