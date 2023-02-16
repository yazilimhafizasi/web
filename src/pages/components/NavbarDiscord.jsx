import Logo from '../../assets/img/yazılımhafızasılogo.jpg';
import { SiDiscord } from 'react-icons/si';
import { Link } from "react-router-dom";
import Posts from '../Posts';

import { RiTeamLine } from 'react-icons/ri';


export default function Navbar() {
    return (
        <nav className='bg-dark'>
            <header className='flex justify-between items-center mx-64 h-20'>
                <nav>
                    <ul class="text-white">
                        <li className='inline-block pr-1 list-none font-medium'><a className="hover:bg-dark_label rounded-lg px-3 py-1.5" duration-200 href="#"><Link to="/">Ana Sayfa</Link></a></li>
                        <li className='inline-block pr-1 list-none font-medium'><a className="hover:bg-dark_label rounded-lg px-3 py-1.5" duration-200 href="#"><Link to="/Posts">Paylaşımlar</Link></a></li>
                        <li className='inline-block pr-1 list-none font-medium'><a className="hover:bg-dark_label rounded-lg px-3 py-1.5" duration-200 href="#"><Link to="/Team">Ekip</Link></a></li>
                    </ul>
                </nav>
                <button className="bg-dark_other rounded-lg px-6 py-2 justify-center flex items-center hover:bg-dark_label text-white"><SiDiscord/> <span className='font-semibold ml-2'>Giriş Yap</span></button>
            </header>
        </nav>
    )
}