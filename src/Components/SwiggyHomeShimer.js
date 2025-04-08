import './SwiggyHome.css'

export default function(){
    const sum =[1,2,3,4,5,6,7,8,9,10];
    return (
        <div className='Swiggy_card_layout'>
            {sum.map((sum) => <div key ={sum} style={{backgroundColor:'#f0f0f0'}} className="res_card"></div>)}
        </div>
    )
}