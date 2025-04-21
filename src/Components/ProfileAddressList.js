import { useSelector, useDispatch } from "react-redux";
import { removeAddress } from "../Utils/Redux/AddressSlice";
export const AddressList = () => {
  const Address = useSelector((state) => state.Address);
  return (
    <div className="m-6 mt-12">
        <h2 className="text-lg font-semibold mb-2">Saved Addresses:</h2>
      <div className="mt-2 flex flex-wrap gap-5">
        {Address.addressList.map((addr, index) => (
          <div key={index} className="p-3 w-96  border-2 border-gray-300">
                <h1 className="bg-gray-900 text-white text-sm font-medium items-center py-0.5 px-2 w-fit mb-1">{addr.address.type}</h1>
                <div className="text-sm text-black mb-1">{[addr.address.flat, addr.address.building, addr.address.area, addr.address.LandMark].filter(Boolean).join(", ")}</div>
                <button className="pr-4 py-1 text-orange-400 font-bold">EDIT</button>
                <button className="px-4 py-1 text-orange-400 font-bold">DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};
