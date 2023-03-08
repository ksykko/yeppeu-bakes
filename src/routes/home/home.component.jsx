import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/navigation.component'

const Home = () => {

    const categories = [
        {
            id: 1,
            title: 'Hobbies & Stationaries',

        }
    ]


    return (
        <div>
            <section id="hero">
                <div className="container max-w-6xl mx-auto px-6 py-3">
                    <Navigation />
                    <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-orangePeach uppercase border-2 border-orangePeach md:p-10 md:m-32 md:mx-0 md:text-6xl">
                        Where Learning Meets Convenience
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
