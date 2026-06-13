import React from 'react'
import {useContext} from 'react'
import ThemeContext from './ThemeContext'


function CandidateDetails({cdData}) {
    const location = useContext(ThemeContext);

  return (
    <div>
      <h1>This is Candidate Details component</h1>
      <h3>Candidate Details Prop: {cdData}</h3>
      <h3>Consume pssing value: {location}</h3>
    </div>
  )
}

export default CandidateDetails
