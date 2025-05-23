
import React, { lazy, Suspense } from 'react'
import ReactDom from 'react-dom/client'
import {KeyForList} from './Components/Concept'
import { SwiggyHome } from './Components/SwiggyHome';
import Header from './Components/Header';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Hi from './Components/HI';
import Error from './Components/Error';
import Contact from './Components/Contact';
import RestrauntPage from './Components/RestrauntPage';
import GitHubUserData from './Components/User'
import './index.css'
import {Provider} from 'react-redux'
import store from './Utils/Redux/Store';
import CartPage from './Components/CartPage';
import { RestContextProvider } from './Components/useRestContext';
import { Profile } from './Components/Profile';
const Grocery = lazy(()=> import('./Components/Grocery'))
const Details = lazy(()=> import('./Components/Catogories'))

const root = ReactDom.createRoot(document.getElementById('root'));
const AppComponent = ()=>{
    return (
        <RestContextProvider>
        <Provider store ={store}>
        <Router>
        <Header/>
            <Routes>
                <Route path='/' element ={<SwiggyHome/>}/>
                <Route path='/concepts' element ={<KeyForList gConcepts ='General Concepts' MAPheading ='MAP Concepts'/>}/>
                <Route path='/hi' element ={<Hi/>}>
                    <Route path='/hi/name' element ={<Error/>}/>
                </Route>
                <Route path='contact' element={<Contact/>}/>
                <Route path='restraunt/:restId' element={<RestrauntPage/>}/>
                <Route path='UserData' element={<GitHubUserData/>}/>
                <Route path='cart' element={<CartPage/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='grocery' element={<Suspense fallback ={<h1>Loading ........</h1>}><Grocery/></Suspense>}>
                </Route>
            </Routes>
        </Router>
        </Provider>
        </RestContextProvider>
)
}
// const appRouter = createBrowserRouter([
//     {
//         path : '/',
//         element : <AppComponent/>,
//         children :[
//             {
//                 path: '/',
//                 element : <SwiggyHome/>
//             },
//             {
//                 path : "/Hi",
//                 element : <Hi></Hi>,
//                 children :[
//                     {
//                         path : '/Hi/concepts',
//                         element : <KeyForList gConcepts ='General Concepts' MAPheading ='MAP Concepts'/>
//                     }
//                 ]
//             },
//             {
//                 path : '/Concepts',
//                 element : <KeyForList gConcepts ='General Concepts' MAPheading ='MAP Concepts'/>
//             }
//         ],
//         errorElement : <Error/>
        
//     },
// ])
root.render(<AppComponent/>);


