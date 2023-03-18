import Navigation from "../../routes/navigation/navigation.component"

const NavigationBar = () => {
    return (
        <nav className="bg-lightestPeach shadow-md">
            <div className="container max-w-6xl mx-auto px-6 py-3">
                <Navigation />
            </div>
        </nav>
    )
}

export default NavigationBar
