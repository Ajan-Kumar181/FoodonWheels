import { useSelector , useDispatch } from "react-redux"
import { deleteCard } from "../Utils/Redux/PaymentsSlice";
export const CardsList = ()=>{
  const dispatch = useDispatch();
  const banks ={
    sbi : 'https://thebranvetica.com/assets/img/SBI_Logo.webp',
    hdfc : 'https://www.liblogo.com/img-logo/hd6833h547-hdfc-bank-logo-hdfc-bank-logo-and-symbol-meaning-history-png.png',
    amex : 'https://logowik.com/content/uploads/images/amex-card1708.jpg',
  }
    const cardList = useSelector(state => state.cardSlice);
    console.log(cardList);
    return (
  <div className="m-6 mt-12">
      <h2 className="text-lg font-semibold mb-2">Saved Cards:</h2>
      {cardList.CardsList.length!==0 ?<div className="mt-2 flex flex-wrap gap-5">
        {cardList.CardsList.map((card, index) => (
                <div key={index} className="flex border-2 border-gray-300 w-96 p-3 justify-between items-center overflow-hidden" >
                    <div className="flex items-center">
                        <img src={banks[card.bankName.toLowerCase()]} className="w-10 h-10  object-cover"></img>
                        <div className="pl-2">
                              <h1 className="font-bold">XXXX-XXXX-XXXX-{card.cardNumber}</h1>
                              <div className="text-sm font-medium"> Valid Till {card.expirydate}</div>
                        </div>
                    </div>
                    <button className="px-4 py-1 text-orange-400 font-bold cursor-pointer" onClick={() => dispatch(deleteCard(card.cardId))}>DELETE</button>
                </div>
        ))}
      </div> : <h1 className ="font-bold text-lg">No Cards to Tap !!!!!!!!!</h1>}
  </div>)
}