import { Main } from "next/document";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/pexels-photo-1685413.webp')] pb-8">
        <div className="flex justify-between pl-4 gap-8 space-y-1.5 pt-4 text-white">
          <ol className="flex gap-4 space-y-1.5 items-center">
            <li className="text-2xl font-bold p-1"><button>FREEPIK</button></li>
            <li><button>Tools</button></li>
            <li><button>Images</button></li>
            <li><button>Icons</button></li>
            <li><button>Videos</button></li>
            <li><button>Templates</button></li>
            <li><button>PSD</button></li>
            <li><button>Mockups</button></li>
            <li><button>More</button></li>
          </ol>

          <ol className="flex pr-6 gap-6 items-center">
            <li><button>Pricing</button></li>
            <li><button className="border px-3 py-1 rounded">Sign-in</button></li>
          </ol>

        </div>
        <div>
          <main>
            <h2 className="flex text-3xl font-bold text-4xl justify-center pb-6 pt-16 text-white">Creating great designs, faster</h2>
            <p className="flex justify-center text-xl text-white">High quality photos, video, vectors, PSD, AI images, icons... to go from ideas to outstanding designs</p>
          </main>
        </div>

        <div className="flex justify-center my-10 bg-white p-2 w-3/5 m-auto h-16 rounded">
          <div className="px-4 flex border-r">
            <select className="text-lg pr-20">
              <option>Asset</option>
              <option>PSD</option>
            </select>
          </div>
          <input className="flex-1 rounded px-4" placeholder="Search all assets"/>
          <button className="text-white bg-blue-700 rounded px-8 font-semibold">Search</button>
        </div>

        <div className="flex justify-center gap-3 text-sm text-white pb-20">
          <button className="bg-gray-400/25 p-2 rounded">happy birthday</button>
          <button className="bg-gray-400/25 p-2 rounded">christmas tree</button>
          <button className="bg-gray-400/25 p-2 rounded">iphone mockup</button>
        </div>
      </div>


      <div className="flex gap-8 bg-black h-24 justify-center items-center" >
        <p className="text-white text-2xl text-yellow-500 font-bold">40% off premium plans</p>
        <div className="flex gap-1 items-center">
          <p className="text-white font-bold text-xl">only</p>
          <div>
            <div className="flex bg-white rounded text-black px-3 py-1 font-semibold text-base">08:45:02</div>
          </div>
          <p className="text-white font-bold text-xl">left!</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold justify-center pl-16 pt-10 text-3xl">Free tools to skyrocket your creative freedom</h1>
      </div>

      <div className="flex gap-8 pt-10 w-full rounded-md">
        <div>
          <img src="https://fps.cdnpk.net/home/banner-tools/image-generator-bg.webp" />
        </div>
        <div>
          <img src="https://fps.cdnpk.net/home/banner-tools/designer-bg.webp" />
        </div>
        <div>
          <img src="https://fps.cdnpk.net/home/banner-tools/mockup-bg.webp" />
        </div>

        <div>
          <img src="https://fps.cdnpk.net/home/banner-tools/reimagine-bg.webp" />
        </div>
        <div>
          <img src="https://fps.cdnpk.net/home/banner-tools/retouch.webp" />
        </div>
      </div>
    </div>
  );
}
