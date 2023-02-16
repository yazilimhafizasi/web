import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function Footer() {

    function topFunction() {   
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera 
    }
    return (
    <>
    <div className='text-white'>
        <div className="pc:mx-64 pc:pt-12 flex items-center phone:mx-16 phone:mt-2">
        </div> 
        <ul className='flex items-center pc:mx-64 pc:mt-2 phone:mx-8'>
            <li className='pc:-mt-4 phone:mt-80'>
                <h1 className='text-lg font-extrabold'>Hakkımızda</h1>
                <p className='text-dark_description phone:w-96'>İlk olarak 2022 yılında kurmuş olduğumuz instagram sayfamıza şimdi daha kaliteli bir şekilde devam ediyoruz.</p>
            </li>
            <li className='pc:ml-[200px] phone:-ml-[850px] phone:mt-60 pc:-mt-0 phone:invisible pc:visible'>
            <h1 className='text-lg font-extrabold'>Linkler</h1>
                <ul className='text-dark_description'>
                    <li className='cursor-pointer'><a  href='https://discord.gg/7X9dPPucRz'>Discord</a></li>
                    <li className='cursor-pointer'><a  href='https://www.instagram.com/yazilimhafizasi/'>Instagram</a></li>
                    <li className='cursor-pointer'><a  href='https://github.com/yazilimhafizasi'>Github</a></li>
                </ul>
            </li>
            <li className='pc:ml-44 phone:mt-60 phone:ml-[120px] pc:-mt-0 phone:invisible pc:visible'>
            <h1 className='text-lg font-extrabold'>Sayfalar</h1>
                <ul className='text-dark_description'>
                    <li className='cursor-pointer'><Link to="/Home">Anasayfa</Link></li>
                    <li className='cursor-pointer'><Link to="/Posts">Paylaşımlar</Link></li>
                    <li className='cursor-pointer'><Link to="/Team">Ekip</Link></li>
                </ul>
            </li>
        </ul>
        <div className='pc:mx-64 border-t-2 border-dark_label2 mt-12 phone:mx-8'></div>
        <div className='pc:mx-64 text-dark_description pb-4 phone:mx-8'>
            <p className='pt-4 text-xs'>Copyright © 2023, Yazılım Hafızası.</p>
            <p className='text-xs'>Yazılım Hafızası ekibi tarafından geliştirildi.</p>
        </div>
        <button onClick={topFunction} className='bg-dark_label2 rounded w-12 h-12 pc:ml-[1300px] pc:-mt-[90px] phone:ml-80 phone:-mt-14 cursor-pointer hover:bg-border flex items-center justify-center'><AiOutlineArrowUp className='w-5 h-5'/></button>
    </div>
    </>
    )
}