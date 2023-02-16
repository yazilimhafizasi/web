import Navbar from './components/Navbar';
import { Modal, Button } from "@voidpkg/react-ui";
import Footer from './components/Footer';

import { FaDiscord } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';

export default function Team() {
    return(
        <>
        <Navbar />
        <div className='w-full h-[370px] bg-dark text-white'>
            <div className='h-96 pc:mx-64 phone:mx-8'>
                <div className='text-4xl font-bold text-white leading-[55px] pt-12'>Ekibimize Katılmak İster Misin?</div>
                <div className='text-dark_description'>Ekibimize katılıp içerik oluşturmaya hazırsan herhangi bir kısıtlama olmadan aşağıdaki formdan bizlere başvurunu gönderebilirsin.</div>
                <button className='mt-6 bg-dark_other font-medium rounded-lg px-6 py-3 justify-center flex items-center hover:bg-dark_label'><BsStars className="mr-3"/>Ekip Başvuru Formu</button>
            </div>
        </div>
        <div className="pc:mx-64 phone:mx-8 mt-4 mb-12 flex items-center justify-between grid gap-x-4 gap-y-4 pc:grid-cols-3 phone:grid-cols-1 text-white">



        <Modal
    content={({ close }) => {
        return (
            <>
    <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Hüseyin Emre "h3k" Keskin</h2>
        <Button onClick={close} size="sm" variant="text" className='w-8 h-8 flex items-center justify-center'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </Button>
    </div>
    <p className="mt-2 text-dark_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quo veritatis, libero quis earum blanditiis, harum incidunt corrupti id, corporis doloribus eius architecto fugit explicabo pariatur! Unde facere velit vel?</p>
    <div className='pt-4 flex items-center justify-between'>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiFillGithub className="mr-3"/>Github</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiOutlineInstagram className="mr-3"/>Instagram</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiOutlineTwitter className="mr-3"/>Twitter</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><FaDiscord className="mr-3"/>Discord</button>
    </div>
    <div className="pl-6 pt-12">
        <iframe
        src="https://linkcord.js.org/api/v3/widget/916609895267205120?type=vsc&theme=dark&background=0C0F16"
        width="500"
        height="120"
        allowtransparency="true"
        frameborder="0"
        />
    </div>
            </>
        );
    }}
    className="bg-dark_label rounded-lg shadow-lg p-4 max-w-xl w-full"
>

    <div className="group w-80 h-20 bg-dark_label rounded-lg p-2.5 px-4 flex items-center justify-start transition-all">
        <img src="https://cdn.discordapp.com/avatars/916609895267205120/26e1cecbd453273e183815e601e117f4.png?size=1024" className="h-12 w-12 rounded-md group-hover:scale-y-125 group-hover:scale-x-125  transition-all duration-200"/>
        <div className='ml-4'>
            <h1 className="font-semibold">h3k</h1>
            <h1 className="text-sm">Full-Stack Developer</h1>
        </div>
    </div>
</Modal>


<Modal
    content={({ close }) => {
        return (
            <>
    <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Hasan "Thendra" Erdem</h2>
        <Button onClick={close} size="sm" variant="text" className='w-8 h-8 flex items-center justify-center'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </Button>
    </div>
    <p className="mt-2 text-dark_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quo veritatis, libero quis earum blanditiis, harum incidunt corrupti id, corporis doloribus eius architecto fugit explicabo pariatur! Unde facere velit vel?</p>
    <div className='pt-4 flex items-center justify-between'>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiFillGithub className="mr-3"/>Github</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiOutlineInstagram className="mr-3"/>Instagram</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiOutlineTwitter className="mr-3"/>Twitter</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><FaDiscord className="mr-3"/>Discord</button>
    </div>
    <div className="pl-6 pt-12">
        <iframe
        src="https://linkcord.js.org/api/v3/widget/267373400022843393?type=vsc&theme=dark&background=0C0F16"
        width="500"
        height="120"
        allowtransparency="true"
        frameborder="0"
        />
    </div>
            </>
        );
    }}
    className="bg-dark_label rounded-lg shadow-lg p-4 max-w-xl w-full"
>

    <div className="group w-80 h-20 bg-dark_label rounded-lg p-2.5 px-4 flex items-center justify-start transition-all">
        <img src="https://cdn.discordapp.com/avatars/267373400022843393/c9db1e48768c1393a6ddf42054c05030.png?size=1024" className="h-12 w-12 rounded-md group-hover:scale-y-125 group-hover:scale-x-125  transition-all duration-200"/>
        <div className='ml-4'>
            <h1 className="font-semibold">Thendra</h1>
            <h1 className="text-sm">Full-Stack Developer</h1>
        </div>
    </div>
</Modal>


<Modal
    content={({ close }) => {
        return (
            <>
    <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Can "Wickly" Ayyıldız</h2>
        <Button onClick={close} size="sm" variant="text" className='w-8 h-8 flex items-center justify-center'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </Button>
    </div>
    <p className="mt-2 text-dark_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quo veritatis, libero quis earum blanditiis, harum incidunt corrupti id, corporis doloribus eius architecto fugit explicabo pariatur! Unde facere velit vel?</p>
    <div className='pt-4 flex items-center justify-between'>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiFillGithub className="mr-3"/>Github</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiOutlineInstagram className="mr-3"/>Instagram</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiOutlineTwitter className="mr-3"/>Twitter</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><FaDiscord className="mr-3"/>Discord</button>
    </div>
    <div className="pl-6 pt-12">
        <iframe
        src="https://linkcord.js.org/api/v3/widget/940697066357809182?type=vsc&theme=dark&background=0C0F16"
        width="500"
        height="120"
        allowtransparency="true"
        frameborder="0"
        />
    </div>
            </>
        );
    }}
    className="bg-dark_label rounded-lg shadow-lg p-4 max-w-xl w-full"
>

    <div className="group w-80 h-20 bg-dark_label rounded-lg p-2.5 px-4 flex items-center justify-start transition-all">
        <img src="https://cdn.discordapp.com/avatars/940697066357809182/a_d991c1bee4e8b9c15c89444df67a302c.gif?size=1024" className="h-12 w-12 rounded-md group-hover:scale-y-125 group-hover:scale-x-125  transition-all duration-200"/>
        <div className='ml-4'>
            <h1 className="font-semibold">Wickly</h1>
            <h1 className="text-sm">Backend Developer</h1>
        </div>
    </div>
</Modal>


<Modal
    content={({ close }) => {
        return (
            <>
    <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Seid "Troya" Isgenderov</h2>
        <Button onClick={close} size="sm" variant="text" className='w-8 h-8 flex items-center justify-center'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </Button>
    </div>
    <p className="mt-2 text-dark_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quo veritatis, libero quis earum blanditiis, harum incidunt corrupti id, corporis doloribus eius architecto fugit explicabo pariatur! Unde facere velit vel?</p>
    <div className='pt-4 flex items-center justify-between'>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiFillGithub className="mr-3"/>Github</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiOutlineInstagram className="mr-3"/>Instagram</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><AiOutlineTwitter className="mr-3"/>Twitter</button>
        <button className='mt-2 bg-dark_other font-medium rounded-lg px-4 py-2 justify-center flex items-center hover:bg-dark_label2'><FaDiscord className="mr-3"/>Discord</button>
    </div>
    <div className="pl-6 pt-12">
        <iframe
        src="https://linkcord.js.org/api/v3/widget/991485021682663504?type=vsc&theme=dark&background=0C0F16"
        width="500"
        height="120"
        allowtransparency="true"
        frameborder="0"
        />
    </div>
            </>
        );
    }}
    className="bg-dark_label rounded-lg shadow-lg p-4 max-w-xl w-full"
>

    <div className="group w-80 h-20 bg-dark_label rounded-lg p-2.5 px-4 flex items-center justify-start transition-all">
        <img src="https://i.scdn.co/image/ab6775700000ee85c481b7e5d00b4ebf8a9e967d" className="h-12 w-12 rounded-md group-hover:scale-y-125 group-hover:scale-x-125  transition-all duration-200"/>
        <div className='ml-4'>
            <h1 className="font-semibold">Troya</h1>
            <h1 className="text-sm">Backend Developer</h1>
        </div>
    </div>
</Modal>
        </div>
        <Footer />
        </>
    )
}