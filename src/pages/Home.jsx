import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';



export default function Home() {
    return (
        <>
        <Navbar />
        <Container />
        <div className='w-full h-96 bg-dark_other text-white'>
            <div>
                <div className='pc:mx-64 pt-12 phone:mx-8'>
                    <h1 className='flex  items-center font-bold text-2xl'><AiOutlineCompass /> <span className='ml-2'>Paylaşımları Keşfet</span></h1>
                    <p className='text-base font-medium text-dark_description'>En popülerden geriye doğru sıralanmaktadır.</p>
                    <button className="ml-[845px] -mt-12 bg-dark_label rounded-lg px-6 py-3 justify-center flex items-center hover:bg-border"><BsArrowRight /> <span className='font-semibold ml-1'>Daha Fazla</span></button>
                </div>
                <div className='pt-6 pc:mx-64 grid grid-rows-2 grid-flow-col gap-5 phone:mx-8'>
                    <div className='w-/5 pc:h-16 phone:h-20 bg-dark_label2 border-2 border-dark_label2 rounded'>
                        <div className='flex items-center mt-3 phone:mt-4 ml-4 text-dark_description'>
                            <p><AiOutlineInfoCircle className='w-8 h-8'/></p>
                            <h1 className='ml-5 font-medium'>Bu kısım yakın zamanda aktif edilecektir.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}