import React from 'react'
import CandidatesList from './candidateslist'

function Home({homeData}) {
  return (
    <div>
      <h1>This is Home component</h1>
      <h3>Home Prop value: {homeData}</h3>
       <CandidatesList clData={homeData}/>
    </div>
  )
}

export default Home
