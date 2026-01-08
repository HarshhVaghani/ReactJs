export default function App() {
  const recipes = [
    {
      title: "Chicken Curry",
      desc: "Rich and creamy chicken curry with aromatic spices...",
      img: "https://images.unsplash.com/photo-1604908177522-402a0c4b9f92",
    },
    {
      title: "Vegetable Stir-Fry",
      desc: "Healthy vegetables tossed with Asian flavors...",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    },
    {
      title: "Chiski Salad",
      desc: "Fresh greens with light dressing and herbs...",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    {
      title: "Penne Blasset",
      desc: "Italian penne pasta in spicy tomato sauce...",
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    },
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Recipe Finder</h2>
        <div className="nav-links">
          <a>Home</a>
          <a className="active text-white ">Saved Recipes</a>
        </div>
      </nav>

      {/* TITLE */}
      <h1 className="page-title">Saved Recipes</h1>

      {/* CARDS */}
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.img} alt={recipe.title} />
            <div className="card-body">
              <h3>{recipe.title}</h3>
              <p>{recipe.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
