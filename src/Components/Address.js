import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AddressSchema } from "../Utils/Schema/AddressSchema";
import { addAddress } from "../Utils/Redux/AddressSlice";
import { removeAddress } from "../Utils/Redux/AddressSlice";
export const AddressList = () => {
  const Address = useSelector((state) => state.Address);
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddressSchema),
  });

  const addTheAddress = (data) => {
    dispatch(addAddress(data));
    reset(); // clear form after submit
  };

  return (
    <div>
      {showForm && (
        <form
          onSubmit={handleSubmit(addTheAddress)}
          className="w-6/12 m-auto flex-col border-2 border-gray-300 rounded-2xl p-4"
        >
          <input
            id="flat"
            type="text"
            placeholder="Flat No"
            {...register("flat")}
            className="m-2 w-full border-2 border-gray-200 rounded-xl py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400"
          />
          <p className="text-red-500 ml-2">{errors.flat?.message}</p>

          <input
            id="building"
            type="text"
            placeholder="Building Name"
            {...register("building")}
            className="m-2 w-full border-2 border-gray-200 rounded-xl py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400"
          />
          <p className="text-red-500 ml-2">{errors.building?.message}</p>

          <input
            id="area"
            type="text"
            placeholder="Area"
            {...register("area")}
            className="m-2 w-full border-2 border-gray-200 rounded-xl py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400"
          />
          <p className="text-red-500 ml-2">{errors.area?.message}</p>

          <input
            id="Landmark"
            type="text"
            placeholder="Landmark"
            {...register("LandMark")}
            className="m-2 w-full border-2 border-gray-200 rounded-xl py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400"
          />
          <p className="text-red-500 ml-2">{errors.LandMark?.message}</p>

          <div className="flex m-4 gap-6">
            {["Home", "Office", "Other"].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value={type}
                  {...register("type")}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
          <p className="text-red-500 ml-2">{errors.type?.message}</p>

          <label className="flex items-center gap-2 cursor-pointer m-4">
            <input
              type="checkbox"
              {...register("isdefault")}
              className="w-4 h-4 accent-blue-600"
            />
            <span className="text-sm">Make This Default Address</span>
          </label>
          <p className="text-red-500 ml-2">{errors.isdefault?.message}</p>

          <button
            type="submit"
            className="ml-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}

      {/* 👇 Optional: Display all stored addresses */}
      <div className="w-6/12 m-auto mt-6">
        <h2 className="text-lg font-semibold mb-2">Saved Addresses:</h2>
        {Address.addressList.map((addr, index) => (
          <div key={index} className="p-4 mb-4 border rounded-xl bg-gray-50">
            <p><strong>id:</strong> {addr.id}</p>
            <p><strong>Type:</strong> {addr.address.type}</p>
            <p><strong>Flat:</strong> {addr.address.flat}</p>
            <p><strong>Building:</strong> {addr.address.building}</p>
            <p><strong>Area:</strong> {addr.address.area}</p>
            <p><strong>Landmark:</strong> {addr.address.LandMark}</p>
            <p><strong>Default:</strong> {addr.address.isdefault ? "Yes" : "No"}</p>
            <button className="px-4 m-4 bg-gray-200 " onClick={()=>{dispatch(removeAddress(addr.id))}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
