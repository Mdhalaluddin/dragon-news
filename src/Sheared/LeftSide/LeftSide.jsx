import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone1 from '../../assets/qZone1.png';
import QZone2 from '../../assets/qZone2.png';
import QZone3 from '../../assets/qZone3.png'

const LeftSide = () => {
    return (
        <div>
            <div className='p-4'>
                <h2 className="text-2xl mb-3 font-medium">Login with</h2>
                <button className="btn w-full my-3">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4'>
                <h2 className="text-2xl mb-3 font-medium">Find Us On</h2>
                <a className='flex items-center space-x-2 text-lg border rounded-t-lg p-2' href=""><FaFacebook className='mr-3'></FaFacebook> FaceBook</a>
                <a className='flex items-center space-x-2 text-lg border-x  p-2' href=""><FaTwitter className='mr-3'></FaTwitter> Twitter</a>
                <a className='flex items-center space-x-2 text-lg border rounded-b-lg p-2' href=""><FaInstagram className='mr-3'></FaInstagram> Instagram</a>
            </div>
        {/* -----------------Q-Zone----------------------- */}
            <div className='p-4 bg-[#F3F3F3]'>
                <h2 className="text-2xl mb-3 font-medium">Q-Zone</h2>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />

            </div>
        </div>
    );
};

export default LeftSide;