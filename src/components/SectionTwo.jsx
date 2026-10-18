import img11 from "../assets/Group 11.svg"
import img12 from "../assets/Group 12.svg"
import img13 from "../assets/Group 13.svg"
import img4 from "../assets/Rectangle.svg"
import img5 from "../assets/Group 8 (2).svg"

export default function SectionTwo() {
    return (
        <section className="bg-SacramentoStateGreen text-white font-Livvic">
            <img src={img4} className="pt-50 mb-15 ml-40"/>
            <div className="flex justify-between items-start">
                <p className="w-170 h-36 pl-40 text-6xl font-bold">
                    Build & manage distributed teams like no one else.</p>
                <div>
                    <div className="flex -mt-40">
                        <img className="mt-30 mr-5" src={img11} />
                        <div>
                            <h1 className="mr-100 pt-40 text-2xl font-semibold text-LightCoral">Experienced Individuals</h1>
                            <p className="mt-5 w-100 text-[15px] opacity-80">Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="mt-5 mr-5" src={img12} />
                        <div>
                            <h1 className="pr-80 pt-10 text-2xl font-semibold text-LightCoral">Easy to Implement</h1>
                            <p className="mt-5 w-110 text-[15px]  opacity-80">Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </div>
                    <div className="flex mb-40">
                        <img className="mt-5 mr-5" src={img13} />
                        <div>
                            <h1 className="pr-80 pt-10 text-2xl font-semibold text-LightCoral">Enhanced Productivity</h1>
                            <p className="mt-5 w-100 text-[15px]  opacity-80">Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={img5} className="ml-auto -mt-70"/>
        </section>
    )
}
