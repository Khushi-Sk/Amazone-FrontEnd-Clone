import { useState } from "react"
import { Interface } from "readline"

export function Header({text}: {text : string}) {
    return (
        <>
         <header className="text-[21.5px] text-neutral-1000 font-semibold m-2">{text}</header>
        </>
    )
}

function ImageBox({imageLink, imageDescription, bg, ...rest}: {imageLink ?: string,  imageDescription?: string, bg?: boolean} ) {

    const background = bg ? "bg-[#97579a] p-4 m-2  w-32 h-28 " : "p-0 m-2 h-28 "
    const imageClass = bg ? " h-24": " w-32 h-28 "
    const classes = `${background}  `
    return (
        <>
        <div className="flex flex-col">
            <div className={classes}>
                <img className={`flex justify-center items-center ${imageClass}`} {...rest} src={`${imageLink}`} />
            </div>
            <p className='text-xs ml-2 mt-1'>{imageDescription}  </p>
        </div>
        
        </>
    )
}


interface ReccomendationCardProps {
    text: string, imageLink1?: string, imageLink2?: string, imageLink3?: string, imageLink4?: string,
     imageDescription1? :string,  imageDescription2?:string,  imageDescription3?:string,  imageDescription4?:string, bg?:boolean, height?:string
} 

export  default function RecommendationCard({text, imageLink1, imageLink2, imageLink3, imageLink4, 
    imageDescription1,  imageDescription2,  imageDescription3,  imageDescription4, bg=false, height='h-[440px]', ...rest}: 
    ReccomendationCardProps) {

        const divClass = `bg-neutral-100 w-80 p-4 m-5 mr-0 rounded shadow-lg transition hover:translate-y-1 hover:scale-105  hover:delay-[50ms] hover:duration-300 hover:ease-in-out ${height}`
    return (
        <>
            <div className={divClass} >
                <div className="flex flex-col absoulte">
                
                    <Header text={text}/>
                    <div className="flex flex-row">
                        <ImageBox {...rest}  bg={bg} imageLink={imageLink1} imageDescription={imageDescription1}/>
                        <ImageBox {...rest} bg={bg} imageLink={imageLink2} imageDescription={imageDescription2}/> 
                    </div>

                    <div className="flex flex-row">
                        <ImageBox {...rest} bg={bg} imageLink={imageLink3} imageDescription={imageDescription3}/>
                        <ImageBox {...rest} bg={bg} imageLink={imageLink4} imageDescription={imageDescription4}/>
                    </div>
                    <p className="text-xs text-cyan-600 ml-2 mt-2 p-5 pl-0">Show more</p>
                </div>
                
            </div>
        </>
    )
}

interface ReccomendationCard2Props {
headerText: string, src:string, alt:string, description?: string, w?:string, h?:string, discount?:string
}

export function ReccomendationCard2({headerText, src, alt, description, w='w-0',  h='h-0', discount}: ReccomendationCard2Props) {

    const offerClass = ` text-slate-100 ${w} ${h}  bg-red-600 rounded px-2 text-[12px] `
    return (
        <>
            <div className="bg-neutral-100 w-[300px] h-[440px] p-2 m-5 mr-0 flex rounded shadow-lg hover:ease-in-out hover:scale-105">
                <div className="flex flex-col m-2">
                    <Header text={headerText}/>
                    <img className="w-[200px] h-[250px] p-4 flex items-center justify-center" src={src} alt={alt}  />
                    <div className={offerClass}>
                        <p className=" m-0.5 p-[0.5px]">{discount}</p>
                    </div>
                    
                    <p className=" text-xs mt-2 ">{description}</p>
                    <p className="text-[13px] text-cyan-600 mt-10 pl-0">Shop more deals</p>
                </div>

            </div>

        </>
    )
}