import { VscLocation } from 'react-icons/vsc';
import { TfiFlag } from 'react-icons/tfi';
import { BsArrowsAngleExpand, BsBookmark, BsMoonStars } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { MdGroups2 } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const Trending = () => {
    return (
        <div>
          <div className='flex justify-between my-5'>
          <span className="textColor font-bold ml-16 text-3xl ">Trending Tours</span>
          <div className='text-black mr-16 flex items-center justify-center'>

                <AiOutlineArrowLeft className='arrow text-5xl shadow-xl p-1 rounded-full'></AiOutlineArrowLeft>
                    <button className='shadow-black text-3xl rounded-full bg-slate-50'>View All</button>
                    <AiOutlineArrowRight className='arrow text-5xl shadow-xl p-1 rounded-full'></AiOutlineArrowRight>
                    
                </div>
          </div>
       <div className='grid grid-cols-4'>
       <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center ">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div className="bg-white shadow-xl p-5  rounded-2xl overflow-hidden">
            <div
              className="bg-cover bg-center h-56 p-4 rounded-2xl"
              style={{ backgroundImage: 'url(https://lp-cms-production.imgix.net/2022-03/iStock-628713402%20RFE.jpg' }}
            >
              <div className="flex justify-start top-20 mb-3">
              <BsArrowsAngleExpand className='text-2xl cursor-pointer' />
              </div>
              <div className="flex justify-end mb-3">
              <BsBookmark className='text-2xl cursor-pointer'/>
              </div>
              <div className="flex justify-end mb-3">
              <BiShareAlt className='text-2xl cursor-pointer' />
              </div>
              <div className="flex justify-end cursor-pointer">
                <svg
                  className="h-6 w-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-lg text-center tracking-wide  font-bold text-gray-700">
                Jaflong: Reveal The Border Land
              </h2>
            </div>
            <div className="flex p-2  border-gray-300 text-gray-700">
              <div className="flex-1 inline-flex items-center">
                <VscLocation className='text-xl mx-2'></VscLocation>
                <p className='text-xs'>
                   BhulaGanj, Sylhet
                </p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <TfiFlag className='text-xl mx-2'></TfiFlag>
                <p className='text-xs'>
                  Water Fun Hiking River
                </p>
              </div>
            </div>
            <div className="flex justify-between p-2  border-gray-300 text-gray-700">
              <div className='flex justify-between'>
              <div className="flex-1 rounded-lg bgSmall inline-flex items-center">
                <FiSun className='text-lg mx-2'></FiSun>
                <p className='text-xs'>
                   2
                </p>
              </div>
              <div className="flex-1 rounded-lg mx-2 bgSmall inline-flex items-center">
                <BsMoonStars className='text-lg mx-2'></BsMoonStars>
                <p className='text-xs'>
                  1
                </p>
              </div>
              </div>
              <div>
              <div className="flex-1 rounded-lg mx-2  inline-flex items-center">
                <MdGroups2 className='text-2xl mx-2'></MdGroups2>
                <p className='text-xs'>
                  40 member Group
                </p>
              </div>
              </div>
            </div>
            <h3 className='text-center text-black font-semibold'> <span className='text-3xl'>৳</span> Start From 3200/ Person</h3>
            <div className='flex mt-2 justify-evenly items-center'>
            <div className="flex -space-x-1 overflow-hidden">
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className='text-sm text-black pl-2 font-sans'>34 People <br /> Going...</span>
      </div>
      <div>
        <button className='p-2 rounded-full specifiqbuton text-white'>View Plan</button>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center ">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div className="bg-white shadow-xl p-5  rounded-2xl overflow-hidden">
            <div
              className="bg-cover bg-center h-56 p-4 rounded-2xl"
              style={{ backgroundImage: 'url(https://lp-cms-production.imgix.net/2022-03/iStock-628713402%20RFE.jpg' }}
            >
              <div className="flex justify-start top-20 mb-3">
              <BsArrowsAngleExpand className='text-2xl cursor-pointer' />
              </div>
              <div className="flex justify-end mb-3">
              <BsBookmark className='text-2xl cursor-pointer'/>
              </div>
              <div className="flex justify-end mb-3">
              <BiShareAlt className='text-2xl cursor-pointer' />
              </div>
              <div className="flex justify-end cursor-pointer">
                <svg
                  className="h-6 w-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-lg text-center tracking-wide  font-bold text-gray-700">
                Jaflong: Reveal The Border Land
              </h2>
            </div>
            <div className="flex p-2  border-gray-300 text-gray-700">
              <div className="flex-1 inline-flex items-center">
                <VscLocation className='text-xl mx-2'></VscLocation>
                <p className='text-xs'>
                   BhulaGanj, Sylhet
                </p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <TfiFlag className='text-xl mx-2'></TfiFlag>
                <p className='text-xs'>
                  Water Fun Hiking River
                </p>
              </div>
            </div>
            <div className="flex justify-between p-2  border-gray-300 text-gray-700">
              <div className='flex justify-between'>
              <div className="flex-1 rounded-lg bgSmall inline-flex items-center">
                <FiSun className='text-lg mx-2'></FiSun>
                <p className='text-xs'>
                   2
                </p>
              </div>
              <div className="flex-1 rounded-lg mx-2 bgSmall inline-flex items-center">
                <BsMoonStars className='text-lg mx-2'></BsMoonStars>
                <p className='text-xs'>
                  1
                </p>
              </div>
              </div>
              <div>
              <div className="flex-1 rounded-lg mx-2  inline-flex items-center">
                <MdGroups2 className='text-2xl mx-2'></MdGroups2>
                <p className='text-xs'>
                  40 member Group
                </p>
              </div>
              </div>
            </div>
            <h3 className='text-center text-black font-semibold'> <span className='text-3xl'>৳</span> Start From 3200/ Person</h3>
            <div className='flex mt-2 justify-evenly items-center'>
            <div className="flex -space-x-1 overflow-hidden">
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className='text-sm text-black pl-2 font-sans'>34 People <br /> Going...</span>
      </div>
      <div>
        <button className='p-2 rounded-full specifiqbuton text-white'>View Plan</button>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       
       
       
       
       <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center ">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div className="bg-white shadow-xl p-5  rounded-2xl overflow-hidden">
            <div
              className="bg-cover bg-center h-56 p-4 rounded-2xl"
              style={{ backgroundImage: 'url(https://lp-cms-production.imgix.net/2022-03/iStock-628713402%20RFE.jpg' }}
            >
              <div className="flex justify-start top-20 mb-3">
              <BsArrowsAngleExpand className='text-2xl cursor-pointer' />
              </div>
              <div className="flex justify-end mb-3">
              <BsBookmark className='text-2xl cursor-pointer'/>
              </div>
              <div className="flex justify-end mb-3">
              <BiShareAlt className='text-2xl cursor-pointer' />
              </div>
              <div className="flex justify-end cursor-pointer">
                <svg
                  className="h-6 w-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-lg text-center tracking-wide  font-bold text-gray-700">
                Jaflong: Reveal The Border Land
              </h2>
            </div>
            <div className="flex p-2  border-gray-300 text-gray-700">
              <div className="flex-1 inline-flex items-center">
                <VscLocation className='text-xl mx-2'></VscLocation>
                <p className='text-xs'>
                   BhulaGanj, Sylhet
                </p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <TfiFlag className='text-xl mx-2'></TfiFlag>
                <p className='text-xs'>
                  Water Fun Hiking River
                </p>
              </div>
            </div>
            <div className="flex justify-between p-2  border-gray-300 text-gray-700">
              <div className='flex justify-between'>
              <div className="flex-1 rounded-lg bgSmall inline-flex items-center">
                <FiSun className='text-lg mx-2'></FiSun>
                <p className='text-xs'>
                   2
                </p>
              </div>
              <div className="flex-1 rounded-lg mx-2 bgSmall inline-flex items-center">
                <BsMoonStars className='text-lg mx-2'></BsMoonStars>
                <p className='text-xs'>
                  1
                </p>
              </div>
              </div>
              <div>
              <div className="flex-1 rounded-lg mx-2  inline-flex items-center">
                <MdGroups2 className='text-2xl mx-2'></MdGroups2>
                <p className='text-xs'>
                  40 member Group
                </p>
              </div>
              </div>
            </div>
            <h3 className='text-center text-black font-semibold'> <span className='text-3xl'>৳</span> Start From 3200/ Person</h3>
            <div className='flex mt-2 justify-evenly items-center'>
            <div className="flex -space-x-1 overflow-hidden">
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className='text-sm text-black pl-2 font-sans'>34 People <br /> Going...</span>
      </div>
      <div>
        <button className='p-2 rounded-full specifiqbuton text-white'>View Plan</button>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center ">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div className="bg-white shadow-xl p-5  rounded-2xl overflow-hidden">
            <div
              className="bg-cover bg-center h-56 p-4 rounded-2xl"
              style={{ backgroundImage: 'url(https://lp-cms-production.imgix.net/2022-03/iStock-628713402%20RFE.jpg' }}
            >
              <div className="flex justify-start top-20 mb-3">
              <BsArrowsAngleExpand className='text-2xl cursor-pointer' />
              </div>
              <div className="flex justify-end mb-3">
              <BsBookmark className='text-2xl cursor-pointer'/>
              </div>
              <div className="flex justify-end mb-3">
              <BiShareAlt className='text-2xl cursor-pointer' />
              </div>
              <div className="flex justify-end cursor-pointer">
                <svg
                  className="h-6 w-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-lg text-center tracking-wide  font-bold text-gray-700">
                Jaflong: Reveal The Border Land
              </h2>
            </div>
            <div className="flex p-2  border-gray-300 text-gray-700">
              <div className="flex-1 inline-flex items-center">
                <VscLocation className='text-xl mx-2'></VscLocation>
                <p className='text-xs'>
                   BhulaGanj, Sylhet
                </p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <TfiFlag className='text-xl mx-2'></TfiFlag>
                <p className='text-xs'>
                  Water Fun Hiking River
                </p>
              </div>
            </div>
            <div className="flex justify-between p-2  border-gray-300 text-gray-700">
              <div className='flex justify-between'>
              <div className="flex-1 rounded-lg bgSmall inline-flex items-center">
                <FiSun className='text-lg mx-2'></FiSun>
                <p className='text-xs'>
                   2
                </p>
              </div>
              <div className="flex-1 rounded-lg mx-2 bgSmall inline-flex items-center">
                <BsMoonStars className='text-lg mx-2'></BsMoonStars>
                <p className='text-xs'>
                  1
                </p>
              </div>
              </div>
              <div>
              <div className="flex-1 rounded-lg mx-2  inline-flex items-center">
                <MdGroups2 className='text-2xl mx-2'></MdGroups2>
                <p className='text-xs'>
                  40 member Group
                </p>
              </div>
              </div>
            </div>
            <h3 className='text-center text-black font-semibold'> <span className='text-3xl'>৳</span> Start From 3200/ Person</h3>
            <div className='flex mt-2 justify-evenly items-center'>
            <div className="flex -space-x-1 overflow-hidden">
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className='text-sm text-black pl-2 font-sans'>34 People <br /> Going...</span>
      </div>
      <div>
        <button className='p-2 rounded-full specifiqbuton text-white'>View Plan</button>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       </div>
        </div>
    );
};

export default Trending;