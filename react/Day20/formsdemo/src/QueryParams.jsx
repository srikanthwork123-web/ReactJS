import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'

function QueryParams() {
// let location= useLocation();
// let queryParams = new URLSearchParams(location.search);
// let title1 =queryParams.get('title');
// let price1 =queryParams.get('price');
  const [searchParams]=useSearchParams();
let title =
searchParams.get("title");
let price =
searchParams.get("price");
    return (
    <div>
      <h1>
{title}
</h1>

<h2>
{price}
</h2>

    </div>
  )
}

export default QueryParams
