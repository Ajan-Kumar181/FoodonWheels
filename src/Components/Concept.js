import React from 'react'

//React element(React.createElement):js Object =render=> html element
const parent = React.createElement('h1' ,{} ,'Welcome to My react🚀');
// jsx =babel=> React element(React.createElement):js Object =render=> html element
const jsxheading = (<><h1 id ="heading">Hello from React using JSX syntax 🚀</h1>
<h3>Paper</h3></>
);

const jscode = <h3></h3>;
function FunctionalComponentDef(){
    return (<ul>
            <li>Functional Component Must Start With a Capital letter</li>
            <li>Functional Component is a function that returns a piece of jsx</li>
            <li>Functional Component Must return only single element i.e.. all elements should be enclosed in a tag</li>
            {/* {here jscode is elemt of js} */}
        </ul>
    )
}
const dataList = [
    'Always prefer MAP function to Display List in JSX',
    'Always put key inside the map and it is not recommonded to use index as a key',
    'If we donot add key to list element when a new element is added all the elements will be re rendered this is not acceptable'
]
const concepts = [
    'Config Driven UI is a UI thet changes with the changes in the back end data procided to the application',
    'if you want run any js code in jsx just enclose it in curly braces and anything you write in braces will be sanitized before running so it can prevent scriptinjection attacks'
]
export function KeyForList({ MAPheading ,gConcepts}) {
    return (
        <>
        {jscode}
        <h1>Functional Component 🚀</h1>
        <FunctionalComponentDef/>
        <h1>{gConcepts}</h1>
        <ul>
            {concepts.map((ele,index) => <li key={index}>{ele}</li>)}
        </ul>
        <h1>{MAPheading}</h1>
        <ul>
            {dataList.map((ele,index) => <li key={index}>{ele}</li>)}
        </ul>
        </>
    )
}

// //using one component in another component is called component composition
// export const JsxComponent = () => (<><h1>Functional Component 🚀</h1>
// <FunctionalComponentDef/>
// {/* {FunctionalComponentDef()}  you can run the functional component also in braces*/} 
// <KeyForList MAPheading = 'Printing List elements' gConcepts ='General-Concepts'/>
// </>);