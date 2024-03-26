import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name , price , features } =  option;

    return (
        <div className='bg-blue-500 rounded-lg p-6 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/month</span>
            </h2>
            <h4 className='text-center text-3xl my-8'>{name}</h4>
            <div className='pl-6 '>
                {
                    features.map((feature , index)=> <Feature  key={index} feature={feature} ></Feature>)
                }
            </div>
            <button className='mt-6 bg-yellow-400 rounded-md p-3 w-full font-semibold hover:animate-bounce '>Buy Now</button>
        </div>
    );
};

PriceOption.propType = {
    option:PropTypes.object
}

export default PriceOption;