import Image from "next/image"
import quotes from "../public/images/quotes.png"
import { review_utils } from "./utils"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


export default function Reviews(){



    return(
        <>
         <div className="flex">
             <OwlCarousel autoWidth={true}>
             { review_utils.map((review, index) => {
                        return(
                            <div key={index} className="border-[#E8E9ED] border-[1.5px] w-[340px] h-[294px] rounded-[20px] p-[20px] flex justify-center flex-col items-center text-center mr-[16px]" >
                                <div className="w-[88px] h-[88px] rounded-full relative mb-[8px]">
                                    <Image src={review.image} alt="webb" objectFit="contain" layout="fill" quality={100} />
                                </div>
                                <p className="text-16 font-[700] text-[#1B1C20]">{review.name}</p>
                                <p  className="text-12 font-[400] text-[#D68676] mt-[8px] mb-[11px]">{review.profession}</p>
                                <article className="review_article relative">
                                    <Image src={quotes} alt="quotes"  layout="fill" quality={100}  />
                                    <p className="text-14 font-[500] leading-[20px] text-para2 px-8 z-10 relative">{review.review}</p>
                                </article>
                            </div>
                        )
                    }) }
             </OwlCarousel>
        </div>
        </>
      
    )

}