import React from 'react'


  function Searchbar({setValue,setCurrentPage}) {
    
  function handleOnchange(event){
    setValue(event.target.value);
    setCurrentPage(1);
  }
  return (
    <div>
        <form class="d-flex">
        <input class="form-control me-2" 
        type="search" 
        placeholder="Поиск" 
        aria-label="Search" 
        onChange={(event)=>handleOnchange(event)}
        />
        </form>
    </div>
  )
}
export default Searchbar;
