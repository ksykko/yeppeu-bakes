import { Fragment } from 'react'


const Footer = () => {

    return (
        <Fragment>
            <footer className="mx-auto bg-darkestBrown py-8 px-8 border-t border-gray-400 ">
                <div className="container flex px-3 py-8 ">
                <div className="w-full mx-auto flex flex-wrap">
                    <div className="flex w-full lg:w-1/2 ">
                    <div className="px-3 md:px-0">
                        <h3 className="font-bold text-gray-900 text-heroPeach">About</h3>
                        <p className="py-4 text-heroPeach">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                        </p>
                    </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                    <div className="px-3 md:px-0">
                        <h3 className="font-bold text-gray-900 text-heroPeach">Social</h3>
                        <ul className="list-reset items-center pt-3">
                        <li>
                            <a className="inline-block no-underline hover:text-lightBrown py-1 text-heroPeach" href="https://www.facebook.com/yeppeubakes">Facebook</a>
                        </li>
                        <li>
                            <a className="inline-block no-underline hover:text-lightBrown py-1 text-heroPeach" href="https://www.instagram.com/yeppeubakes/">Instagram</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <hr></hr>
                <p className="text-center text-heroPeach py-3">COPYRIGHT © OUTLIERS. ALL RIGHTS RESERVED.</p>
            </footer>
        </Fragment>
    )
}

export default Footer
