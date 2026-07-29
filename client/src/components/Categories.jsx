import '../App.css';
function handleCategoryClick(category) {
    alert(`You clicked on ${category.name}`);
}
function Categories(){
    const categories = [
    { id: 1, icon: "📚", name: "Books" },
    { id: 2, icon: "💻", name: "Electronics" },
    { id: 3, icon: "🎮", name: "Gaming" },
    { id: 4, icon: "👕", name: "Clothes" },
    { id: 5, icon: "🪑", name: "Furniture" },
    { id: 6, icon: "📱", name: "Accessories" }
    
];
return(
    <section className='category-parent'>
        {categories.map(
            (category=>{
                return (
                <div className='category-card' key={category.id} 
                onClick={()=>handleCategoryClick(category)}>
                    <span>{category.icon}</span> 
                    <p>{category.name}</p>
                </div>
                );
                

        })
    )
        }
    </section>
);
}
export default Categories;