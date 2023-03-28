import { Fragment, useState, useContext } from 'react'

import { UserContext } from '../../../contexts/user.context'

const AdminProfile = () => {
    const { usersMap } = useContext(UserContext)

    return (
        <Fragment>
            <div className="flex-1 mx-72 mr-16 mt-18">
                <div className="p-8">
                    <div className="text-4xl text-darkestBrown font-extrabold font-playfairDisplay my-3">
                        User Accounts
                    </div>
                    <div className="relative overflow-x-auto shadow-lg rounded-xl">
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
                                        Date Created
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Contact Number
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(usersMap).map((userId) => {
                                    return (
                                        <tr
                                            key={userId}
                                            className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold"
                                        >
                                            <td className="px-6 py-4">
                                                {usersMap[userId].displayName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {usersMap[userId].email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {usersMap[userId].createdAt &&
                                                    new Date(
                                                        usersMap[userId]
                                                            .createdAt.seconds *
                                                            1000
                                                    ).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                {/* if undefined, display not yet set */}
                                                {!usersMap[userId].contactNum
                                                    ? 'Not yet set'
                                                    : usersMap[
                                                          userId
                                                      ].contactNum.toString()}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminProfile
