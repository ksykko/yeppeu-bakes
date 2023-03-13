const CategoryItem = ({ category }) => {
    const { title, imageUrl, id, styling } = category

    return (
        <div
            className={styling}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="item-gradient"></div>
            <div className="category-title">{title}</div>
        </div>
    )
}

export default CategoryItem
