import Navbar from "./components/Navbar";
import Container from './components/Container';
import Footer from './components/Footer';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
export default function Projects() {
    return (
        <>
        <div className='w-full h-[450px]  bg-dark text-white'>
        <Navbar />
        <div className='bg-dark_label my-6 pc:w-8/12 phone:w-[350px] h-72 pc:mx-64 phone:mx-6 rounded text-white'>
            <h1 className="font-bold text-2xl pt-7 pl-5">Gönderiler Arasında Ara</h1>
            <p className="pc:ml-5 pr-4 pt-2 text-dark_description phone:invisible pc:visible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas, esse minima itaque id maxime molestiae commodi, hic soluta modi dolor cupiditate nisi, saepe aliquid obcaecati incidunt ipsa temporibus perferendis?</p>
            <p className="phone:ml-5 pr-4 phone:-mt-36 text-dark_description phone:visible pc:invisible">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptates minima eum!</p>
            <input class="appearance-none block pc:w-96 pc:mt-40 phone:mt-8 phone:w-[310px] bg-dark_label2 text-dark_description border border-dark_label rounded ml-5 mt-12 py-2.5 px-4 leading-tight focus:outline-none focus:bg-label focus:border-purple" type="text" placeholder="Gönderiler arasında ara..." />
            <div className="pc:ml-2 phone:ml-0 pc:mt-6 phone:mt-6 flex px-4 items-center cursor-pointer">
                <div className="py-1 px-3 mr-3 rounded bg-dark_label2 hover:bg-dark_label hover:text-white">Javascript</div>
                <div className="py-1 px-3 mr-3 rounded bg-dark_label2 hover:bg-dark_label hover:text-white">Python</div>
                <div className="py-1 px-3 mr-3 rounded bg-dark_label2 hover:bg-dark_label hover:text-white">Geliştirme</div>
            </div>
        </div>
        </div>
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