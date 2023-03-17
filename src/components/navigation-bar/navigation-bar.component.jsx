import Navigation from "../../routes/navigation/navigation.component"

const NavigationBar = () => {
    return (
        <nav className="bg-darkestBrown shadow-md">
            <div className="container max-w-6xl mx-auto px-6 py-3">
                <Navigation className="text-white" borderLine="bg-white" />
            </div>
        </nav>
    )
}

export default NavigationBar
