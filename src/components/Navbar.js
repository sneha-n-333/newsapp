import React from 'react'

const Navbar = ({onSearch}) => {
    const handleSearch = (e) => {
        e.preventDefault();
       const category=e.target.elements.category.value;
        const language=e.target.elements.language.value;
        onSearch(category,language)
  };
  return (
<>

<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    
    <h2>NewsApp</h2>
    <form className="d-flex" onSubmit={handleSearch}>
      <input type="search" placeholder="Sports,Technology,Politics" aria-label="Search" name='category'/>
     
      <select name="language">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="ml">Malayalam</option>
          <option value="te">Telugu</option>
          <option value="kn">Kannada</option>
          <option value="mr">Marathi</option>
          <option value="gu">Gujarati</option>
      </select>
         <button className="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
</>
  )
}

export default Navbar
