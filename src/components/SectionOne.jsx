import img10 from"../assets/myteam.svg"
import img1 from "../assets/Group 7.svg"
import img2 from "../assets/Group 8 (1).svg"
import img3 from "../assets/Rectangle (1).svg"

export default function SectionOne() {
    return (
        <section className="bg-MidnightGreen text-white font-Livvic">
            <div className="flex items-center justify-center">
            <img src={img10} className="m-30"/>
            <div className="flex items-center gap-10 text-lg font-medium ">
                <a>home</a>
                <a>about</a>
            </div>
            <div className="ml-auto">
                <button className="mr-30 border-white text-[18px] font-semibold rounded-3xl w-38.25 h-12 border-2 hover:text-DarkGreen hover:bg-white cursor-pointer">contact us</button>
            </div>
            </div>
            <img src={img2} className="-mb-70"/>
            <div className="flex justify-between items-center pb-40">
                <h1 className="text-8xl font-bold ml-45">Find the <br />best <span className="text-LightCoral">tallent</span></h1>
                    <img src={img3} className="-mt-50 -mr-70"/>
                <div className="w-111.25 h-28 m-20 mt-40 mr-90 text-xl">
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
            </div>
            <img src={img1} className="ml-auto mr-40 -mt-20"/>
        </section>
    )
}
