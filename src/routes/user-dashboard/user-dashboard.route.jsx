import NavigationBar from '../../components/navigation-bar/navigation-bar.component'

import UserDashBoard from '../../components/user-dashboard/user-dashboard.component'

const UserDashboard = () => {
    return (
        <div className="h-screen bg-heroPeach">
            <NavigationBar />
            <UserDashBoard />
        </div>
    )
}

export default UserDashboard
