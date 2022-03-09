import "react-datepicker/dist/react-datepicker.css";
import React from 'react'
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale/";
import { addMonths } from 'date-fns'


 function DateFilter({startDate,finishDate,setStartDate,setFinishDate,setCurrentPage}) {

    function handleOnchangeStart(date){
        if(!date){
            setStartDate(null);
            setFinishDate(null);
        }
        setStartDate(date);
        setCurrentPage(1);
    }
    function handleOnchangeFinish(date){
        if(!date){
            setStartDate(null);
            setFinishDate(null);
        }
        setFinishDate(date);
        setCurrentPage(1);
    }
  

  return (
    <div style={{ display: 'flex' }}> 
       
      <DatePicker
        selected={startDate} 
        onChange={(date) => handleOnchangeStart(date)} locale={ ru }
       dateFormat="P"
       placeholderText="с ДД.ММ.ГГГГ" 
       isClearable/>
        
      <DatePicker 
      selected={finishDate}
      onChange={(date) =>handleOnchangeFinish(date)} 
      locale={ ru } 
      dateFormat="P" 
      minDate={startDate}
      maxDate={addMonths(new Date(), 12)}
      showDisabledMonthNavigation
      placeholderText="по ДД.ММ.ГГГГ"
      isClearable
       />
    </div>
  )
}
export default DateFilter;