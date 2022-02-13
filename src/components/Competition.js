import React from 'react'

const Competition = ({competitions,loading})=> {
    if (loading){
        return<h2>Loading...</h2>
    }

    return (
        <a href='#'>
            {
                competitions.map((competition,i)=>(
                    <div className='competition' key={i}>
                        <p>{competition.name}</p>
                        <p>{competition.area.name}</p>
                    </div>   
                ))
            }
        </a>
    )
}
export default Competition