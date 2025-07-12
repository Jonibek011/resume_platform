import { Link } from "react-router-dom";

//iconst
import { IoDocumentText } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { ImFacebook } from "react-icons/im";
//images
import template1 from "../assets/template1.svg";
import template2 from "../assets/template2.jpg";
import template3 from "../assets/template3.svg";
import template4 from "../assets/template4.jpg";
import template5 from "../assets/template5.jpg";
function Home() {
  return (
    <div className=" h-auto bg-gradient-to-br from-blue-800  to-white">
      <div className=" relative overflow-hidden">
        <span className="absolute gradient right-10 -bottom-14 w-32 h-32 rounded-full -z-0 "></span>
        <span className="absolute top-0 left-0 w-full h-full backdrop-blur-3xl z-0"></span>
        <header className="h-14 z-50 relative px-5 flex items-center  shadow-sm backdrop-blur-xl ">
          <nav className="w-full flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white">Resumer.uz</h1>
            <div className="register flex gap-5">
              <Link className="btn btn-sm border-none btn-ghost hover-blue-500 text-white h-10">
                Kirish
              </Link>
              <Link className="btn btn-sm text-white h-10 bg-gradient-to-br from-pink-500 to-yellow-500 border-none">
                Ro'yxatdan o'tish
              </Link>
            </div>
          </nav>
        </header>
        <div className="home-section relative z-10 flex px-5 h-full py-5">
          <div className="home-content py-10 flex-1 flex flex-col gap-8 justify-center h-full">
            <h2 className="text-white text-5xl  font-sans font-semibold">
              Bir necha daqiqada professional O`zbekcha rezyume yarating
            </h2>
            <p className="text-gray-300">
              Bizning andozalar yordamida zamonaviy va to`liq rezyume tayyorlang
            </p>
            <Link
              to=""
              className="btn whitespace-nowrap self-start bg-orange-500 hover:bg-orange-600 border-none text-white font-medium text-lg"
            >
              Rezyume yaratishni boshlash
            </Link>
          </div>
          <div className="hero-section flex-1 hidden md:flex">
            <div className="w-full  h-full flex justify-center items-center">
              <img src="resume-bg.png" alt="" className="w-full  mx-auto " />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full  px-5 py-10">
        {/* ======================== Xizmatlar ======================================== */}
        <div className="card-section flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Xizmatlar</h2>
          <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-4">
            <div className="card flex flex-col gap-4 p-5 border bg-gradient-to-br from-orange-300 to-40% to-pink-500">
              <div className="card-image flex justify-center items-center">
                <IoDocumentText className="w-20 h-20 text-orange-200" />
              </div>
              <h2 className="card-title text-white text-center">
                Resume yaratuvchi
              </h2>
              <p className="text-gray-300 text-center">
                Step-by-step rezyume yaratish
              </p>
            </div>

            <div className="card flex flex-col gap-4 p-5 border bg-gradient-to-br from-purple-500 to-40% to-indigo-700">
              <div className="card-image flex justify-center items-center">
                <IoIosColorPalette className="w-20 h-20 text-blue-400" />
              </div>
              <h2 className="card-title text-white text-center">
                Turli dizayn andozalari
              </h2>
              <p className="text-gray-300 text-center">
                Keng tanlovdagi shablonlar
              </p>
            </div>

            <div className="card flex flex-col gap-4 p-5 border bg-gradient-to-br from-orange-300 to-40% to-orange-500">
              <div className="card-image flex justify-center items-center">
                <RiDownloadCloud2Fill className="w-20 h-20 text-red-600" />
              </div>
              <h2 className="card-title text-white text-center">
                PDF yuklab olish/havola
              </h2>
              <p className="text-gray-100 text-center">
                Havola hamda resumeni ulashish
              </p>
            </div>

            <div className="card flex flex-col gap-4 p-5 border bg-gradient-to-br from-green-300 to-40% to-sky-500">
              <div className="card-image flex justify-center items-center">
                <MdOutlineSecurity className="w-20 h-20 text-blue-600" />
              </div>
              <h2 className="card-title text-white text-center">
                Ma'lumot xavfsizligi
              </h2>
              <p className="text-gray-100 text-center">
                Ma'lumotlaringiz ximoya ostida bo'ladi
              </p>
            </div>
          </div>
        </div>

        {/* =============== Templates ====================================== */}
        <div className="andozalar mt-14 flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Andozalar</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="template1">
              <img src={template5} alt="" />
            </div>
            <div className="template1">
              <img src={template2} alt="" />
            </div>
            <div className="template1">
              <img src={template4} alt="" />
            </div>
          </div>
        </div>

        {/* ==================== Narxlar ======================================== */}
        <div className="narxlar mt-14  pb-14 flex flex-col gap-4 md:gap-8">
          <h2 className="text-3xl font-bold">Ta'riflar</h2>
          <div className="w-full flex gap-4 md:gap-5 lg:gap-10 flex-col sm:flex-row ">
            <div className="bepul-card max-h-80 max-w-80 mx-auto border rounded-lg bg-gradient-to-br from-green-400 to-sky-400 text-white shadow-sm p-10 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-center">Bepul</h2>
              <p className="text-2xl font-bold text-center">0 so'm</p>
              <ul className="list-disc">
                <li className="text-lg font-semibold">2 ta andoza</li>
                <li className="text-lg font-semibold">Reklamalar</li>
                <li className="text-lg font-semibold">PDF yuklab olish</li>
              </ul>
              <Link className="btn btn-sm btn-neutral">Bepul boshlash</Link>
            </div>
            <div className="premium-card flex-1 border relative rounded-md h-auto">
              <div className="premium-inner p-5 absolute rounded-md">
                <div className="flex premium-items gap-5 w-full h-auto">
                  <div className="bir-martalik-tarif bg-white p-4 card border flex-1">
                    <h2 className="text-center text-2xl font-bold text-slate-600">
                      Pro
                    </h2>
                    <p className="text-center text-xl font-bold text-slate-700">
                      15000 so'm/Bir marta
                    </p>
                    <ul className="list-disc ps-10 font-semibold">
                      <li>10+ andozalar</li>
                      <li>PDF yuklab olish/ 1 marta</li>
                      <li>Rangli dizaynlar</li>
                      <li>Reklamalarsiz</li>
                    </ul>
                  </div>
                  <div className="oylik-tarif  bg-white p-4 card border flex-1">
                    <h2 className="text-center text-2xl font-bold text-slate-600">
                      Premium
                    </h2>

                    <p className="text-center text-xl font-bold text-slate-700">
                      50 000 so'm/Oy
                    </p>
                    <ul className="list-disc ps-10 font-semibold">
                      <li>10+ andozalar</li>
                      <li>PDF yuklab olish/ 10</li>
                      <li>Rangli dizaynlar</li>
                      <li>Reklamalarsiz</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button className="btn btn-sm bg-blue-600 hover:bg-blue-500 text-white border-none">
                    Premium bilan boshlash
                  </button>
                </div>
              </div>

              <span className="badge premium-badge absolute  -top-3  font-semibold border-none text-white p-3 left-[50%] translate-x-[-50%]  ">
                Premium
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full p-5 border-t  bg-white flex flex-col gap-10">
        <div className="menu flex gap-5 flex-row w-[70%] mx-auto justify-center items-center text-slate-500 underline">
          <Link>Biz haqimizda</Link>
          <Link>Biz bilan bog'lanish</Link>
          <Link>Fikr va mulohazalar</Link>
        </div>
        <div className="social flex justify-center items-center gap-5">
          <Link>
            <FaTelegramPlane className="w-7 h-7" />
          </Link>
          <Link>
            <TbBrandLinkedinFilled className="w-7 h-7" />
          </Link>
          <Link>
            <ImFacebook className="w-7 h-7" />
          </Link>
        </div>

        <div className="faq flex gap-3 justify-center items-center font-medium">
          <Link className="border-r-2 border-slate-400 pe-3">FAQ</Link>
          <Link className="border-r-2 border-slate-400 pe-3">
            Privacy Policy
          </Link>
          <Link>Help?</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
