import logo from '../../../assets/logo.png' 
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
             <img className='mx-auto mt-12 mb-5' src={logo} alt=""/> 
             <p className='text-lg font-normal text-[#706F6F] mb-3'>Journalism Without Fear or Favour</p>
             <p className='font-medium text-xl mb-7'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;