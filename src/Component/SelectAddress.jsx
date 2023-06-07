import { BiPlus } from "react-icons/bi";
import { MdFilterList } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

const SelectAddress = () => {
    return (
       <div>
         <div className="text-black ml-16 grid grid-cols-6 bg-white">
    <div>
    <select className="bg-white text-gray-500 border p-2 rounded-lg">
  <option>Mountain & Hills</option>
  <option>No</option>
  <option>Maybe</option>
</select>
    </div>
    <div>
    <select className="bg-white text-gray-500 border p-2 rounded-lg">
  <option>Sylhet</option>
  <option>No</option>
  <option>Maybe</option>
</select>
    </div>
    <div>
    <select className="bg-white text-gray-500 border p-2 rounded-lg">
  <option>Moulovi Bazar</option>
  <option>No</option>
  <option>Maybe</option>
</select>
    </div>
    <div>
    <select className="bg-white text-gray-500 border p-2 rounded-lg">
  <option>Srimangal</option>
  <option>No</option>
  <option>Maybe</option>
</select>
    </div>
    <div>
    <select className="bg-white text-gray-500 border p-2 rounded-lg">
  <option>25-27 June</option>
  <option>No</option>
  <option>Maybe</option>
</select>
    </div>
    <div>
    <select className="bg-white text-gray-500 border p-2 rounded-lg">
  <option>02 Adult</option>
  <option>No</option>
  <option>Maybe</option>
</select>
    </div>
        </div>
        <div className="flex mt-5 justify-end mr-44 text-black ">
          <span className="flex items-center justify-center mx-3">
         <MdFilterList className="mx-2 text-2xl"/>More Filter
          </span>
          <span className="flex items-center justify-center mx-3">
          <BiPlus className="mx-2 text-2xl"/>Add Promo Code
          </span>
          <span className="specifiqbuton text-white p-3 rounded-lg cursor-pointer flex items-center justify-center mx-3">
       <FaLocationArrow className="mx-2 text-2xl"/> Search Tours
        </span>
        </div>
       </div>
    );
};

export default SelectAddress;