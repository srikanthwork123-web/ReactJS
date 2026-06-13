import React from 'react'
import CandidateDetails from './CandidateDetails'


function CandidatesList({clData}) {
    
  return (
    <div>
       <h1>This is Candidate List component</h1>
       <h3>Candidate List Prop value: {clData}</h3>
       <CandidateDetails cdData={clData}/>
    </div>
  )
}

export default CandidatesList
