import { Fragment } from 'react'
import HeaderStats from './components/header/header.component'
import CardLines from '../../../components/cards/CardLines'
import CardPageVisits from '../../../components/cards/CardPageVisits'
import CardSocialTraffic from '../../../components/cards/CardSocialTraffic'
import CardBarChart from '../../cards/CardBarChart'

const AdminDashboard = () => {
    return (
        <div className="flex-1 flex-col">
            <div className=" ml-[15.5rem] mr-5">
                <HeaderStats />
            </div>
            <div className="flex-1 mx-72 mr-16">
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardLines />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardBarChart />
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardPageVisits />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardSocialTraffic />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard
