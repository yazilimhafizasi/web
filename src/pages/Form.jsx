import Navbar from "./components/Navbar";

export default function Form() {
    return (
        <>
        <Navbar />
        <div className="flex items-center mx-20 pt-12">
            <div className="w-64 h-60 bg-snow rounded-lg"> { /*Step Bar*/}
                <div className="mx-4 mt-3 border-l-4 border-purple w-50 h-16">
                    <div className="mx-2 pt-2 text-purple font-semibold">Adım 1</div>
                    <div className="mx-2 font-semibold text-sm">Kişisel Bilgiler</div>
                </div>
                <div className="mx-4 mt-3 border-l-4 border-description w-50 h-16">
                    <div className="mx-2 pt-2 text-description font-semibold">Adım 2</div>
                    <div className="mx-2 font-semibold text-sm">Mesleki Bilgiler</div>
                </div>
                <div className="mx-4 mt-3 border-l-4 border-description w-50 h-16">
                    <div className="mx-2 pt-2 text-description font-semibold">Adım 3</div>
                    <div className="mx-2 font-semibold text-sm">Mesleki Bilgiler 2</div>
                </div>
            </div>
            <div className="ml-12 w-2/3 h-[500px] bg-snow rounded-lg"> { /*Form Menu*/}
                <div class="flex mt-6 mx-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">First Name</label>
                        <input class="appearance-none block w-full bg-label text-gray-700 border border-border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-label focus:border-purple" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Last Name</label>
                        <input class="appearance-none block w-full bg-label text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-label focus:border-purple" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex mt-12 mx-6">
                    <div class="w-full md:w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">E-Posta</label>
                        <input class="appearance-none block w-full bg-label text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-label focus:border-purple" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex mt-24 mx-6">
                    <div class="w-full md:w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Ülke</label>
                        <input class="appearance-none block w-full bg-label text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-label focus:border-purple" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                    <div class="w-full md:w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Şehir</label>
                        <input class="appearance-none block w-full bg-label text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-label focus:border-purple" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                    <div class="w-full md:w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Doğum Tarihi</label>
                        <input class="appearance-none block w-full bg-label text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-label focus:border-purple" id="grid-last-name" type="date" placeholder="Doe" />
                    </div>
                </div>
                <button className="mt-12 ml-[800px] bg-purple text-snow rounded-lg px-6 py-2 justify-center flex items-center hover:bg-ppurple font-medium">İlerle</button>
            </div>
        </div>
        </>
    )
}