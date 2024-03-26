import PropTypes from 'prop-types';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div className="text-xl">
            
            <p className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-green-700'></IoMdCheckmarkCircleOutline>{feature}</p>
        </div>
    );
};

Feature.propType = {
    feature:PropTypes.string
}

export default Feature;