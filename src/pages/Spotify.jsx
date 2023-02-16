import { FiSend } from 'react-icons/fi';


export default function SpotifyPage() {
    return(
        <div className="w-full h-screen bg-dark_other text-white">
            <div className="bg-dark_label w-11/12 h-5/6 mx-16 my-12 rounded">
                <div className="pt-6 pl-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="w-40 h-12" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"></img>
                        <h1 className="pl-2 font-bold text-2xl text-dark_description">/</h1>
                        <h1 className="pl-2 font-semibold text-lg text-dark_description">Takipçi</h1>
                    </div>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="bg-dark_other hover:bg-dark_label mr-6 rounded-lg px-3 py-1.5 text-center inline-flex items-center text-base font-medium" href="#">Platformlar <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-blue rounded shadow w-44 dark:bg-blue">
                            <ul class="py-1 text-sm text-whitw dark:text-white" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                            </ul>
                        </div>
                </div>

                <div className="mx-16 pt-12 grid gap-1 grid-cols-2">
                    <div>
                        <h1 className="text-base font-semibold">Hesap ID</h1>
                        <p className="text-dark_description text-xs">Spotify hesabınızın ID'sini giriniz. Yalnızca https://spotify.com/user/ sonrasını giriniz.</p>
                        <input class="appearance-none block w-96 text-dark_description bg-dark_other border border-dark_other rounded mt-4 py-2.5 px-4 leading-tight focus:outline-none focus:bg-label focus:border-dark_label" type="text" placeholder="Spotify üzerinde ara..." />
                    </div>
                    <div className="">
                        <h1 className="text-base font-semibold">Gönderilecek Takipçi Sayısı</h1>
                        <p className="text-dark_description text-xs w-[470px]">Hesabınıza göndermek istediğiniz hesap sayısını yazınız.</p>
                        <input class="appearance-none block w-44 text-dark_description bg-dark_other border border-dark_other rounded mt-4 py-2.5 px-4 leading-tight focus:outline-none focus:bg-label focus:border-dark_label" type="text" placeholder="Bir sayı giriniz..." />
                    </div>
                    <div className="pt-12">
                        <h1 className="text-base font-semibold">Takipçi Adları</h1>
                        <p className="text-dark_description text-xs w-[500px]">Alta isim girdiğiniz takdirde oluşturulan hesapların adları doldurduğunuz takdirde olur. Varsayılan olarak bu ayar "Random Name" şeklindedir. Eklemek istediğiniz isimleri "isim1","isim2","isim3" şeklinde giriniz.</p>
                        <input class="appearance-none block w-[320px] text-dark_description bg-dark_other border border-dark_other rounded mt-4 py-2.5 px-4 leading-tight focus:outline-none focus:bg-label focus:border-dark_label" type="text" placeholder="Oluşturalacak hesapların isimleri..." />
                    </div>
                    <div className="pt-12">
                        <h1 className="text-base font-semibold">Takipçi Profil Resimleri</h1>
                        <p className="text-dark_description text-xs w-[500px]">Alta isim girdiğiniz takdirde oluşturulan hesapların profil resimleri doldurduğunuz takdirde olur. Varsayılan olarak bu ayar "Random Profile Picture" şeklindedir. Eklemek istediğiniz resimleri "url1","url2","url3" şeklinde giriniz.</p>
                        <input class="appearance-none block w-[390px] text-dark_description bg-dark_other border border-dark_other rounded mt-4 py-2.5 px-4 leading-tight focus:outline-none focus:bg-label focus:border-dark_label" type="text" placeholder="Oluşturalacak hesapların profil resimleri..." />
                    </div>
                </div>

                <button className="bg-dark_other rounded-lg mt-40 ml-[1060px] px-6 py-2 justify-center flex items-center hover:bg-dark text-white"><FiSend/> <span className='font-medium ml-2'>Hesapları Göndermeye Başla</span></button>

            </div>
        </div>
    )
}