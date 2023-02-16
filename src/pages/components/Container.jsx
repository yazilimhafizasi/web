import logo from '../../assets/img/yazılımhafızasılogo.jpg';


export default function Header() {
    return (
        <div className="bg-dark w-full h-[370px] pt-12">
            <div className="pc:mx-64 pt-20 phone:mx-8 phone:pt-8">
                <span className="text-5xl phone:text-4xl font-bold text-white leading-[55px] text-red">Yazılım Hafızası</span>
            </div>
            <div className="pc:mx-64 pc:pt-2 text-description text-base text-dark_description pc:w-[700px] phone:mx-8 phone:w-80">
                <span className="text-dark_description">Yazılıma başlamak, birçok insan için korkutucu bir süreç olabilir. Ancak, doğru adımları takip ederseniz, yazma deneyiminizi daha keyifli ve üretken hale getirebilirsiniz. Biz de sizlere bu süreçte faydalı içerik sunmak için buradayız!</span>
            </div>
            <input class="appearance-none w-96 text-dark_description bg-dark_label border border-dark_other rounded pc:mx-64 mt-6 py-2.5 px-4 leading-tight focus:outline-none focus:bg-label focus:border-dark_label phone:mx-8 phone:w-80" type="text" placeholder="Gönderiler arasında ara..." />
            <div>
                <img className="pc:w-96 pc:-mt-[280px] pc:ml-[970px] phone:w-60 phone:ml-[420px] phone:-mt-56" src={logo}></img>
            </div>
        </div>
    )
}