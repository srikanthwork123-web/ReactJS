import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { lazy,Suspense } from 'react';


const Lazy1 = lazy(()=>import('./Lazy1'))
const Lazy2 = lazy(()=>import('./Lazy2'))
const Lazy3 = lazy(()=>import('./Lazy3'))



function LazyLoading() {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<div>Loading ..</div>}>

                    <Routes>
                        <Route path="/layz1" element={<Lazy1 />} />
                        <Route path="/layz2" element={<Lazy2 />} />
                        <Route path="/layz3" element={<Lazy3 />} />
                    </Routes>
                    </Suspense>

            </BrowserRouter>
        </>

    )
}
export default LazyLoading;