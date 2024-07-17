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
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
      </select>
         <button className="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
</>
  )
}

export default Navbar
