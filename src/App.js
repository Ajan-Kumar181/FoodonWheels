
import React from 'react'
import ReactDom from 'react-dom/client'
import {KeyForList} from './Components/Concept'
const root = ReactDom.createRoot(document.getElementById('root'));

const AppComponent = ()=>{
    return (<KeyForList MAPheading = 'Printing List elements' gConcepts ='General-Concepts'/>)
}

root.render(<AppComponent/>);
