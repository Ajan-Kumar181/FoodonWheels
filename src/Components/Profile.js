import { CreditCardOutline } from "../Utils/Icons"
import { LocationOnRounded } from "../Utils/Icons"
import { useState } from "react";
import { AddressList } from "./ProfileAddressList";
import {CardsList} from './Cards';

export const Profile= () => {
    const [activeTab, setActiveTab] = useState("Payments");

    const renderContent = (tab) =>{
        switch(tab){
            case 'Payments' : 
                return <CardsList/>
            case 'Address' :
                return <AddressList/>
        }
    }
    return(
        <div className="bg-[rgb(55,113,142)] flex w-full min-h-screen flex-col px-36 pt-10">
                <div className="text-white text-4xl font-bold font-stretch-100% pl-10">Ajan Kumar Chunduri</div>
                <div className="text-white text-lg font-bold font-stretch-100% mb-4 pl-10">ajankumar160@gmail.com . 9908707891</div>
                <div className="bg-white w-full min-h-screen">
                    <div className="flex p-10 gap-2">
                        <div className="bg-gray-200 w-3/12 min-h-screen flex-col items-center pl-4 pt-4">
                            <div className="w-full h-[70px] text-lg  flex pl-6 items-center gap-1 hover:font-medium" style={{backgroundColor:activeTab === 'Payments'?'white':''}} onClick ={()=>setActiveTab('Payments')}>
                                <CreditCardOutline width="1.5em" height="1.5em"/>
                                <h1>Payments</h1>
                            </div>
                            <div className="w-full h-[70px] text-lg  flex pl-6 items-center gap-1 hover:font-medium"style={{backgroundColor:activeTab === 'Address'?'white':''}} onClick ={()=>setActiveTab('Address')}>
                                <LocationOnRounded width="1.5em" height="1.5em"/>
                                <h1>Addresses</h1>
                            </div>                       
                        </div>
                        <div className="w-9/12 pl-3">
                            <div className="flex-col ml-6 mt-5">
                                <div className="text-2xl font-bold">{activeTab}</div>
                            </div>
                                {renderContent(activeTab)}
                        </div>
                    </div>
                </div>
        </div>
    )
}