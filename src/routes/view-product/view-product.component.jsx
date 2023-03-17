import { Fragment } from "react"
import { useParams, useLocation } from "react-router-dom"

import NavigationBar from "../../components/navigation-bar/navigation-bar.component"

const ViewProduct = () => {
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } }

    console.log(from)


    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                <div className="mx-auto font-3xl"></div>
            </div>
        </Fragment>
    )
}

export default ViewProduct