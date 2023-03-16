const CategoryItem = ({ category }) => {
    const { title, imageUrl, id, styling, midStyling } = category

    return (
        <div className={`relative overflow-hidden group ${styling}`}>
            <img src={imageUrl} alt="" />
            <div className={`item-gradient ${midStyling}`}></div>
            <div className={`category-title ${midStyling}`}>{title}</div>
        </div>
    )
}

export default CategoryItem
