import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const Category = () => {
    return (
        <div>
            <div className="flex my-7 justify-around flex-wrap items-center">
                <AiOutlineArrowLeft className='text-black text-5xl shadow-xl p-1 rounded-full'></AiOutlineArrowLeft>
                <img src="https://i.ibb.co/Wx6k6cL/Desktop-2-6-5.jpg" alt="" />
                <img src="https://i.ibb.co/KjXZgNj/Desktop-2-6-4.jpg" alt="" />
                <img src="https://i.ibb.co/CMqbjzR/Desktop-2-6-3.jpg" alt="" />
                <img src="https://i.ibb.co/c2W4vPk/Desktop-2-6-2.jpg" alt="" />
                <AiOutlineArrowRight className='text-black text-5xl shadow-xl p-1 rounded-full'></AiOutlineArrowRight>
            </div>
        </div>
    );
};

export default Category;