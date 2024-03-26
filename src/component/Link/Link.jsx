import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-6 hover:bg-yellow-500 px-5 rounded-md shadow-2xl"><a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes={
    route:PropTypes.object
}

export default Link;