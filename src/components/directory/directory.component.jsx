import CategoryItem from '../category-item/category-item.component'
import { Fragment } from 'react'

const Directory = ({ categories }) => {
    return (
        <Fragment>
            {/* Categories */}
            <div className="my-20">
                <div className="container max-w-6xl mx-auto px-6 py-3">
                    {/* Grid Container */}
                    <div className="categories-container">
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-4 md:grid-row-2">
                            {categories.map((category) => (
                                <CategoryItem
                                    key={category.id}
                                    category={category}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Directory