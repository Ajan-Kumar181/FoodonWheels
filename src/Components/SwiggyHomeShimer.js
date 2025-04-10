export default function(){
    const sum =[1,2,3,4,5,6,7,8,9,10];
    return (
        <div className='flex flex-wrap gap-2.5'>
            {sum.map((sum) => <div key ={sum} className="w-[240px] p-4 bg-gray-100 rounded-lg h-64"></div>)}
        </div>
    )
}