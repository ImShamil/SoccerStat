import React from 'react'
import { Form,FormControl} from 'react-bootstrap';

  function Searchbar({setFiltredList,setValue,setCurrentPage}) {
    
  function handleOnchange(event){
    setValue(event.target.value);
    setCurrentPage(1);
  }
  return (
    <Form class="mb-3">
        <FormControl
          type="search"
          placeholder="Поиск"
          className="me-2"
          aria-label="Search"
          onChange={(event)=>handleOnchange(event)}
        />
      </Form>
  )
}
export default Searchbar;
