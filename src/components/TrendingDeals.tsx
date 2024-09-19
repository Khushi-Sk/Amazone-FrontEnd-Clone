import {Header} from "./ReccomendationCard"
import Image from "next/image"
import ProductCards from "./productCard"

export function Product({imageLink, alt, discount, offerWieght, price, productDescription, ...rest}: {imageLink: string, alt: string, discount: string,
     offerWieght: string, price: string, productDescription: string}) {
    const offer = `${discount}% off`
    const classes = ` text-slate-100 ${offerWieght} h-[20px]  bg-red-600 rounded-sm px-2 text-[12px] `
    const offerClass = `w-${offerWieght} `
    console.log(typeof(productDescription))
    //  if (productDescription.length > 20) {
    //     return "..."
    //  } return productDescription
    return (
        <>
            <div className="relative w-[240px] h-[235px] bg-neutral-50 rounded">
                <img src={imageLink} width={200} height={200} className="m-5" alt={alt}  />
            </div>
            <div className="flex flex-col mt-2">
                {/* offer/discount */}
                <div className={classes}>
                    <p className=" m-[0.5px] p-[0.5px] w-full">{offer}</p>
                </div>
                {/* price  */}
                <span className="text-md inline-flex font-medium"> <p className="text-xs mt-1">£ </p>{price}</span>
                {/* product description  */}
                <p className="text-xs w-56 whitespace-nowrap overflow-hidden text-ellipsis">{productDescription}</p>


            </div>
            
        </>
    )
}

export default function TrendingDeals({text}: {text: string}) {
    return (
        <>
          <div className=" w-[1376px] h-[400px] bg-slate-100 m-5 p-5 shadow-lg rounded">
                <div className="flex-col flex">
                    <div className="flex flex-row">
                        <Header text={text} />
                        <button className="text-cyan-600 hover:underline hover:text-red-700 m-2 p-2 text-sm">See all deals </button>
                    </div>
                    {/* add products list here  */}
                    <div className="inline-flex flex-row justify-around overflow-x-auto w-[1350px] scroll-smooth scrollbar">
                        
                        <button className="flex flex-col " >
                            <Product  offerWieght="w-[64px]" discount="20" price="12.20"  productDescription="CAZON Blood Pressure Monitors Large Cuff Blood Pressure Machine Medical BP Monitor Upper Arm BP Cuff for Home Use Heart Rate Hypertension Monitor, Cuff 22-40cm LCD Display (Blue)"
                            imageLink={"https://m.media-amazon.com/images/I/61XEcw5+A3L._AC_UF894,1000_QL80_.jpg"} alt="Blood Pressure Moniter" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="24" price="122.90" productDescription="25cm Plain Fitted Sheet"
                            imageLink={"https://assets.sainsburys-groceries.co.uk/gol/134572670/1/640x640.jpg"} alt="Plain Fitted Sheet" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="70" price="23.99" productDescription='Smart Watch Answer/Make Calls,1.85" Smart Watches for Women and Men, Fitness Watch SpO2/Heart Rate/Sleep Monitor, 112 Sport Modes, Calorie/Step Counter, IP7 Waterproof Fitness Tracker for Android iOS'
                            imageLink={"https://m.media-amazon.com/images/I/71YhTRvNj5L._AC_UF1000,1000_QL80_.jpg"} alt="Smart Watch" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="20" price="24.99" productDescription="APTRO Mens Cargo Shorts Combat Casual Cotton Shorts with Multi Pockets Workwear CG02"
                            imageLink={"https://i5.walmartimages.com/seo/Meitianfacai-Mens-Shorts-Gifts-for-Dad-Men-s-Casual-Pure-Color-Outdoors-Pocket-Beach-Work-Trouser-Cargo-Shorts-Pant-Khaki_8fe9a2b0-e326-4089-bbd4-9595624da1ad.35dfc5cee358a95a978d66d8e5fa18e4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"} alt="Half Pant for Men" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="21" price="12.99" productDescription="TNNZEET Cycling Shorts Women High Waisted, Ladies Cycle Shorts for Gym Biker Running"
                            imageLink={"https://www.galibier.cc/wp-content/uploads/2024/05/endurance-ladies-cycling-shorts.jpg"} alt="Woman Cycling Shorts" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="14" price="94.86" productDescription="SONGMICS Executive Office Chair with High Back, Durable and Stable, Height Adjustable, Ergonomic, Black, OBG22BUK, 73 x 70 x (112-122) cm"
                            imageLink={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhZbXrFLxga1HvsgbuhhkJ4fYmjq8As4OjvirOHJwp7rDOBHSBmy2rsMVJP6RBqjCTEo&usqp=CAU"} alt="Excecutive Office Comfy Chair" />
                        </button>

                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="5" price="7.24" productDescription="ACUNA POWER Shaker Bottle For Protein Powder 700 ml (Pack Of 2) | BPA Free Leakproof Screw On Lid Secure Drink Flip Cap, Sports Gym Supplement Protein Shake Bottle"
                            imageLink={"https://m.media-amazon.com/images/I/81UwasXHd0L._AC_UF894,1000_QL80_.jpg"} alt="Power Shaker Bottle" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="20" price="122" productDescription="CKitsch Satin Heatless Curling Set - Heatless Curlers Headband for Short Hair & Long Hair | Overnight Heatless Hair Curlers | No Heat Hair Curlers for Heatless Curls"
                            imageLink={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpcIcR_NFXkfwTLixJHa-CiyVVwF-cyLinVQbkNIlMVIykH3l6s4SkIFIBOv2eXEYhfQ&usqp=CAU"} alt="Kitsch Heatless Curling Set" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="19" price="45.02" productDescription="Bedsure Waterproof Dog Bed XXL- Extra Large Washable Dog Bed Mattress with Oxford Fabric, Water Resistant Dog Pillow"
                            imageLink={"https://images.thdstatic.com/productImages/6fa4625e-b937-49b0-a9cf-7659716f19af/svn/happy-tails-dog-beds-pillows-30009-31_600.jpg"} alt="blood pressure moniter" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="29" price="16.99" productDescription="Disney Stitch Bag for Girls, Lilo and Stitch Cross Body Bag"
                            imageLink={"https://m.media-amazon.com/images/I/81mG8QpWazL._AC_UY900_.jpg"} alt="Disney Bag for girls" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="20" price="122" productDescription="CAZON Blood Pressure Monitors Large Cuff Blood Pressure Machine Medical BP Monitor Upper Arm BP Cuff for Home Use Heart Rate Hypertension Monitor, Cuff 22-40cm LCD Display (Blue)"
                            imageLink={"https://m.media-amazon.com/images/I/61XEcw5+A3L._AC_UF894,1000_QL80_.jpg"} alt="blood pressure moniter" />
                        </button>
                        <button className="flex flex-col">
                            <Product  offerWieght="w-[64px]" discount="20" price="122" productDescription="CAZON Blood Pressure Monitors Large Cuff Blood Pressure Machine Medical BP Monitor Upper Arm BP Cuff for Home Use Heart Rate Hypertension Monitor, Cuff 22-40cm LCD Display (Blue)"
                            imageLink={"https://m.media-amazon.com/images/I/61XEcw5+A3L._AC_UF894,1000_QL80_.jpg"} alt="blood pressure moniter" />
                        </button>
                        
                    </div>
          
                </div>

          </div>
        </>
    )

}