import React from 'react'
import {useSearchParams} from 'react-router-dom'

function QueryParams() {
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
