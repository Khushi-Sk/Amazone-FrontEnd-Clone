import RecommendationCard from "./ReccomendationCard"
import { Header} from "./ReccomendationCard"
import { ReccomendationCard2 } from "./ReccomendationCard"
import TrendingDeals from "./TrendingDeals"


export default function EchoCards() {
    return (
        <>
        <div className="inline-flex flex-row "> 
<RecommendationCard bg={true} text={"Echo Show Family"} imageDescription1="Echo Show 5" imageLink1="https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/410246-smart-speakers-amazon-echo-show-5-3rd-gen-10035890.png"
         imageDescription2="Echo Show 10" imageLink2="https://media.croma.com/image/upload/v1618643830/Croma%20Assets/Entertainment/Media%20Streaming%20Devices/Images/234173_wqko7d.png"
         imageDescription3="Echo Show 15" imageLink3="https://www.tuttotech.net/wp-content/uploads/2022/01/echo-show-15.png"
         imageDescription4="Echo Show 8" imageLink4="https://www.security.org/app/uploads/2020/04/Amazon-Echo-Show-8.png"
        />

<RecommendationCard  text={"Garden Essentials"} imageDescription1="Furniture" imageLink1="https://www.robertdyas.co.uk/media/wysiwyg/sofa_760_570_1.jpg"
         imageDescription2="Gardening" imageLink2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaRV4SPfaorwVDDQSdEpdynz5Px8bjqeX0Bri4KIEWA&s"
         imageDescription3="Outdoor Cooking" imageLink3="https://www.licious.in/blog/wp-content/uploads/2016/07/Barbecue.jpg"
         imageDescription4="Decor & Lighting" imageLink4="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c241f3b01bb0ce95f94578dc5de737aa.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
        />

<RecommendationCard text={"Popular categorties"} imageDescription1="Grocery" imageLink1="https://hips.hearstapps.com/hmg-prod/images/09dce7b7-ea40-406b-a2c0-a3f57c420b17-1657946362.jpeg?crop=0.660xw:1.00xh;0.0794xw,0&resize=640:*"
         imageDescription2="Home Storage" imageLink2="https://peterwardhomes.co.uk/wp-content/uploads/2022/10/26.10.22.jpg"
         imageDescription3="Electronics" imageLink3="https://globerec.com/wp-content/uploads/2022/10/consumer.jpeg"
         imageDescription4="Books" imageLink4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltahJCyYmO_kBkVUkKZU1Fj8rE-btY3bJF3Noi5MFHw&s"
        />

        <div className="  bg-slate-100 w-[350px] h-48 m-5 p-4 shadow-lg rounded">
            <Header text="Looking for a gift?" />
            <p className="text-[13px] p-2">Find personalized gift ideas and surprise<br/> someone you love</p>
            <p className="text-cyan-600 text-[13px] p-2 mt-5">Check out the Gift Finder </p>
        </div>

        </div>
        <div className="flex flex-row  ">
            <div className="flex flex-col bg-pink-100 rounded-lg ml-4 hover:bg-[#bccbf7]">
                <img src="https://m.media-amazon.com/images/S/pv-target-images/694ee1828b722bcd7b81a55ade837c50962d1acea5cff8bab436225f04b1f3a9._SX720_FMjpg_.jpg"
                className="p-4 m-2 w-[700px]"/>
                <button  className="bg-slate-300 text-2xl font-bold pl-5 py-1 mx-40 rounded hover:bg-[#ccccff] ">Watch Now on Amazon Prime</button >
                    
            </div>
            
        <ReccomendationCard2 headerText="Top Deal" w={'w-[100px]'} h="h-8" discount="Up to 33% off" alt="snack mio"
                src="https://m.media-amazon.com/images/I/71cUKTrKJFL._AC_UF894,1000_QL80_.jpg"
                description={'Pet Products by Felix, James Wellbeloved & more'}/>

        <ReccomendationCard2 headerText="Echo Show 8"  alt="headphone" 
            src="https://m.media-amazon.com/images/I/51ECcfWp0nL._AC_UF894,1000_QL80_.jpg" />

        </div>

        <TrendingDeals text="Trending Deals" />
        <TrendingDeals text="Unexpected Deals" />
        
        

        </>
    )
}