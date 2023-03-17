import { Fragment } from "react"
import { useLocation } from "react-router-dom"

import NavigationBar from "../../components/navigation-bar/navigation-bar.component"

const ViewProduct = () => {
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } }

    console.log(from)


    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                {/* Turn this into Product Component later */}

            </div>
        </Fragment>
    )
}

export default ViewProduct