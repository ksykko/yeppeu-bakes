import CategoryItem from '../category-item/category-item.component'
import { Fragment } from 'react'

const Directory = ({ yeppeuCookies }) => {
    return (
        <div className="grid gap-10 lg:grid-cols-3">
            {yeppeuCookies.map((cookies) => (
                <CategoryItem key={cookies.id} category={cookies} />
            ))}
        </div>
    )
}

export default Directory
