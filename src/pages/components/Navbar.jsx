import Logo from '../../assets/img/yazılımhafızasılogo.jpg';
import { Link } from "react-router-dom";
import Posts from '../Posts';


import { SiDiscord } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';


export default function Navbar() {
    return (
        <nav className='bg-dark'>
            <header className='flex justify-between items-center pc:mx-64 h-20 phone:mx-16'>
                <nav className='flex items-center'>
                    <ul class="text-white flex items-center justify-between">
                        <li className='inline-block pr-1 list-none font-medium'><a className="hover:bg-dark_label rounded-lg px-3 py-1.5" duration-200 href="#"><Link to="/">Ana Sayfa</Link></a></li>
                        <li className='inline-block pr-1 list-none font-medium'><a className="hover:bg-dark_label rounded-lg px-3 py-1.5" duration-200 href="#"><Link to="/Posts">Paylaşımlar</Link></a></li>
                        <li className='inline-block pr-1 list-none font-medium'><a className="hover:bg-dark_label rounded-lg px-3 py-1.5" duration-200 href="#"><Link to="/Team">Ekip</Link></a></li>
                    </ul>
                    <div className='text-white justify-between flex items-center pc:ml-[569px] phone:-ml-[200px] phone:invisible pc:visible'>
                        <a className="bg-dark_other rounded-lg px-3 py-3 justify-center flex items-center mr-2 hover:bg-dark_label" href='https://discord.gg/7X9dPPucRz'><SiDiscord/></a>
                        <a className="bg-dark_other rounded-lg px-3 py-3 justify-center flex items-center mr-2 hover:bg-dark_label" href='https://www.instagram.com/yazilimhafizasi/'><BsInstagram/></a>
                        <a className="bg-dark_other rounded-lg px-3 py-3 justify-center flex items-center mr-2 hover:bg-dark_label" href='https://github.com/yazilimhafizasi'><AiFillGithub/></a>
                    </div>
                </nav>
            </header>
        </nav>
    )
}