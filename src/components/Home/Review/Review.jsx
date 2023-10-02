import React from 'react'
import Error from "../../../assets/images/onError.png"
import Salman from "../../../assets/images/Salman.jpg"
import Saqib from "../../../assets/images/Saqib.jpg"
import Faysal from "../../../assets/images/Faysal.jpg"
import Gondal from "../../../assets/images/Gondal.jpg"
import Zaman from "../../../assets/images/Zaman.jpg"
import Basim from "../../../assets/images/Basim.jpg"
import Haris from "../../../assets/images/Haris.jpg"
import Shahzad from "../../../assets/images/Shahzad.jpg"
import Shahid from "../../../assets/images/Shahid.jpg"
import Kamran from "../../../assets/images/Kamran.jpg"
import Zuraiz from "../../../assets/images/Zuraiz.jpg"

const ReviewCard = ({name, title, photo}) => {
    return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full mt-14">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team"
                     className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                     src={photo}
                     onError={({currentTarget}) => {
                         currentTarget.onerror = null; // prevents looping
                         currentTarget.src = Error;
                     }}/>
                <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{name}</h2>
                    <p className="text-gray-500">{title}</p>
                </div>
            </div>
            {/*<footer className="mt-4">*/}
            {/*    <p className="text-xs text-gray-500">John Doe - 12th January, 2024</p>*/}
            {/*</footer>*/}
        </div>

    )
}
const Review = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Customers
                        Feedback</h1>
                </div>
                <div className="flex flex-wrap -m-2">

                    <ReviewCard name="Salman"
                                title="Thank you so much ! ye bohat kamaal ky tools hain, kuch mai ny daikhy hain, kuch ka mujy ni pta un ka kya use h, wo mai search kr lu ga, but really really thank you."
                                photo={Salman}/>
                    <ReviewCard name="Saqib Ali" title="I bought envatoelments subscription and its working perfectly, Great service i will give 10/10" photo={Saqib}/>
                    <ReviewCard name="Basim" title="Very Supportive for new user" photo={Basim}/>
                    <ReviewCard name="Myiank" title="thanks buddy" photo={Faysal}/>
                    <ReviewCard name="Shahzad Roy" title="Full sport  thanks janab etny help k ly" photo={Shahzad}/>
                    <ReviewCard name="Zaman Ali"
                                title="Mein 1 month se Toolsfix ki services le raha hu bht acha services de rehe hai or cheapest prices mein mein appreciate krta hu i recommend to everyone use this and save your money"
                                photo={Zaman}/>
                    <ReviewCard name="Samran Sajawal" title="Lovely service, cheapest in pakistan"
                                photo={Shahid}/>
                    <ReviewCard name="Aanand" title="Bahi yh loog sbsy sasti service de rhy hu bakio ke compaction me"
                                photo={Zuraiz}/>
                    <ReviewCard name="Haris Amjad"
                                title="Mjy phly to lga yh scammer ha itni km prise kesy phr inho ne jb mjy demo dia to mny foran se buy ki yr achi khasi cheap service sr rhy hu"
                                photo={Haris}/>
                    <ReviewCard name="Gondal" title="Recommended"
                                photo={Gondal}/>
                    <ReviewCard name="Kamran Khan"
                                title="Using from 20 days bhoot jaldi issue resolve kr dety hu because yh tools stable ni hoty lakin yh loog such bta dety hu ignore ni krty"
                                photo={Kamran}/>
                </div>
            </div>
        </section>
    )
}

export default Review