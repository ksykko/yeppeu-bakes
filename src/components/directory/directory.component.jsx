import CategoryItem from '../category-item/category-item.component'
import { Fragment } from 'react'

const Directory = ({ yeppeuCookies }) => {
    return (
        <div className="grid grid-cols-3 gap-10">
            {yeppeuCookies.map((cookies) => (
                <CategoryItem key={cookies.id} category={cookies} />
            ))}
        </div>
    )
}

export default Directory
