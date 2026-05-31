import React from 'react';
import ReactDOM from 'react-dom/client';

export function PawanKalyan(){
    return(
        <p>Pawankalyan: named export example <br/>Konidela Pawan Kalyan[5] (born Konidela Kalyan Babu;[8] 2 September 1971)[2] is an Indian politician, actor, philanthropist, and martial artist serving as the 11th Deputy Chief Minister of Andhra Pradesh since June 2024. He is also the Minister of Panchayat Raj, Rural Development and Rural Water Supply; Environment, Forest, Science and Technology in the Government of Andhra Pradesh as MLA representing the Pithapuram constituency.[3] He is the founding president of the Janasena Party.</p>
  
    )   
}
//class component
class Header extends React.Component {
  render() {
    return (<><header><ul><li>Home</li><li>About</li><li>Contact</li></ul></header>
        <p>Konidela Pawan Kalyan[5] (born Konidela Kalyan Babu;[8] 2 September 1971)[2] is an Indian politician, actor, philanthropist, and martial artist serving as the 11th Deputy Chief Minister of Andhra Pradesh since June 2024. He is also the Minister of Panchayat Raj, Rural Development and Rural Water Supply; Environment, Forest, Science and Technology in the Government of Andhra Pradesh as MLA representing the Pithapuram constituency.[3] He is the founding president of the Janasena Party.</p>
   </>
    );
  }
}
export default Header;