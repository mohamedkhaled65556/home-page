import img10 from"../assets/myteam.svg"

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
            <div className="flex justify-between items-center pb-40">
                <h1 className="text-8xl font-bold ml-60">Find the <br />best <span className="text-LightCoral">tallent</span></h1>
                <div className="w-111.25 h-28 m-20 mt-40 mr-60 text-xl">
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
            </div>
        </section>
    )
}
