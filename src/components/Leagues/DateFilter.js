import "react-datepicker/dist/react-datepicker.css";
import React from 'react'
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale/";
import { addMonths } from 'date-fns'


 function DateFilter({startDate,finishDate,setStartDate,setFinishDate,setCurrentPage}) {

    function handleOnchange(date){
        setFinishDate(date);
        setCurrentPage(1);
    }

  return (
    <div style={{ display: 'flex' }}> 
        C
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} locale={ ru } dateFormat="P"/>
        По 
      <DatePicker selected={finishDate} onChange={(date) => handleOnchange(date) } locale={ ru } dateFormat="P" 
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      showDisabledMonthNavigation />
    </div>
  )
}
export default DateFilter;