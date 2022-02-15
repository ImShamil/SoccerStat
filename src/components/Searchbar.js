import React from 'react'


 function Searchbar({setValue, setPage}) {
  
  function setNewValue(event){
    setValue(event.target.value);
    setPage(1);
    
  }
  return (
    <div>
        <form class="d-flex">
        <input class="form-control me-2" 
        type="search" 
        placeholder="Поиск" 
        aria-label="Search" 
        onChange={(event)=>setNewValue(event)}
        />
        </form>
    </div>
  )
}
export default Searchbar;
