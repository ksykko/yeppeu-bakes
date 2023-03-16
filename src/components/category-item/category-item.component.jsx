const CategoryItem = ({ category }) => {
    const { title, imageUrl, id, styling, midStyling } = category

    return (
        <div className={`relative overflow-hidden group ${styling}`}>
            <img src={imageUrl} alt="" className="h-80 scale-110" />
            <div className={`item-gradient ${midStyling}`}></div>
            <div className={`category-title ${midStyling}`}>{title}</div>
        </div>
    )
}

export default CategoryItem
