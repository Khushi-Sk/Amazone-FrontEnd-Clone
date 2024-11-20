import search from "../../public/loupe.png"
import uk from "../../public/united-kingdom_555417.png"
import down from "../../public/down-arrow_154710.png"
import shopping_cart from "../../public/shopping_cart_thin_icon.png"


function Searchbar() {
    return (<>
        <div className=" flex flex-row py-2 px-4">
            <p className="bg-pink-100 p-3 w-12 h-10 border border-r-neutral-400 rounded-l text-[12px] inline-flex">All<img className="w-8 h-2 mt-[6px] pl-[4px]" src={down.src} />
            </p> 
            <input className="w-[500px] h-10 text-gray-500 p-2 outline-none focus:border-2  border-orange-500" placeholder="Search Amazon.co.uk" type="search"></input>
            <span className=" w-14">
                <img className="bg-orange-300 w-10 h-10 p-[10px] rounded-r" src={search.src}/>
            </span>
        </div>
    </>)
}

function OtherDetails() {
    return (
        <>
        <div className="flex flex-row text-slate-50">
            {/* flag */}
            <div className="flex flex-row border border-transparent hover:border-neutral-50 px-2">
                <img className="w-12 h-10 mt-3 " src={uk.src}  /> <img className="w-5 h-4 mt-6 pl-2" src={down.src} />
            </div>
            
            {/* account */}
            <div className="flex flex-col p-2 m-2 border border-transparent hover:border-neutral-50">
                <p className=" text-xs">Hello, John</p>
                <div className="flex flex-row ">
                    <p className=" font-bold text-sm ">Account & Lists </p> <img className="w-4 h-4 p-[2px] ml-1 mt-1" src={down.src} />
                </div>
            </div>
            {/* return / orders*/}
            <div className="flex flex-col p-2 m-2 ml-0 border border-transparent hover:border-neutral-50">
                <p className="text-xs">Returns </p>
                <p className="text-sm font-bold" >& Orders</p>
            </div>
            {/* add to cart */}
            <div className="flex flex-row p-2 m-2 ml-0 border border-transparent hover:border-neutral-50">
                <img className="w-10 h-10 bg-neutral-50 rounded-md" src={shopping_cart.src} alt="shopping cart" />
                <p className="text-sm font-bold p-1 mt-4">Basket</p>
            </div>
        </div>
        
        
        </>
    )
}

function Navbar() {
    return (
        <>
            <nav className="inline-flex bg-slate-700 text-[14px] text-slate-50 w-full">
                <a className="p-2 hover:border-white border border-transparent ">All</a>
                <a className="p-2 hover:border-white border border-transparent ">Customer Service</a>
                <a className="p-2 hover:border-white border border-transparent ">Buy Again</a>
                <a className="p-2   hover:border-white border border-transparent">Prime</a>
                <a className="p-2 hover:border-white border border-transparent ">Today's Deals</a>
                <a className="p-2 hover:border-white border border-transparent ">Best Sellers</a>
                <a className="p-2  hover:border-white border border-transparent">Music</a>
                <a className="p-2 hover:border-white border border-transparent ">Books</a>
                <a className="p-2 hover:border-white border border-transparent ">Gift Cards &Top Up</a>
                <a className="p-2 hover:border-white border border-transparent ">New Realeases</a>
                <a className="p-2 hover:border-white border border-transparent ">Gift Ideas</a>
                <a className="p-2 hover:border-white border border-transparent ">Vouchers</a>
                <a className="p-2 hover:border-white border border-transparent ">Electronics</a>
                <a className="p-2  hover:border-white border border-transparent">Audible</a>
                <a className="p-2 hover:border-white border border-transparent ">Home & Garden</a>
                <a className="p-2  hover:border-white border border-transparent">Grocery</a>
            </nav>
        </>
    )
}

export default function Header() {
    return (
        <>
        <div className="flex flex-col bg-gray-900 absoulte ">
            <div className="bg-gray-800  flex-row flex ">
                <button> <img className="w-36 h-18 border border-transparent hover:border-neutral-50" src="https://m.media-amazon.com/images/G/02/gc/designs/livepreview/amzn_logo_squid_noto_email_v2016_uk-main._CB463270308_.png"/> 
                {/* <span className="relative bottom-14 left-24 text-slate-50 ">.co.uk</span> */}
                </button>
                <button className="flex-col flex p-2 border border-transparent hover:border-neutral-50">
                    <span className="text-gray-300 text-xs inline-flex pt-3 ">Delivering to Leicester LE1</span>
                    <p className="text-slate-50 font-semibold  mb-5 ">Update location</p>
                </button>
                <Searchbar/>
                <OtherDetails/>
               
                
            </div>
             <Navbar />

        </div>
            
        
        
        </>
    )
}
