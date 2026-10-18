import img14 from "../assets/Group 14.svg"
import img15 from "../assets/Oval.svg"
import img16 from "../assets/Oval Copy 5.svg"
import img17 from "../assets/Oval Copy 6.svg"

export default function SectionThree() {
    return (
        <section className="bg-DeepJungleGreen text-white font-Livvic">
            <h1 className="text-6xl text-center p-60 pt-40 pb-20 font-bold">Delivering real results for top companies. Some of our <span className="text-RaptureBlue">success stories.</span></h1>
            <div className="flex justify-center pb-40">
                <div className="ml-25">
                    <img src={img14} />
                    <p className="w-87.5 -ml-35 -mt-6 text-center text-lg">“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <div className="-ml-6 mt-6">
                        <h1 className="text-xl font-bold text-RaptureBlue">Kady Baker</h1>
                        <p className="-ml-9 text-[13px] italic">Product Manager at Bookmark</p>
                        <img src={img15} className="mt-8 ml-4" />
                    </div>
                </div>
                <div className="ml-50">
                    <img src={img14} />
                    <p className="w-87.5 -ml-35 -mt-6 text-center text-lg">“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <div className="-ml-6 mt-6">
                        <h1 className="text-xl font-bold text-RaptureBlue">Aiysha Reese</h1>
                        <p className="ml-1 text-[13px] italic">Founder of Manage</p>
                        <img src={img16} className="mt-8 ml-6" />
                    </div>
                </div>
                <div className="ml-50">
                    <img src={img14} />
                    <p className="w-87.5 -ml-35 -mt-6 text-center text-lg">“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <div className="-ml-6 mt-13">
                        <h1 className="text-xl font-bold text-RaptureBlue">Arthur Clarke</h1>
                        <p className="-ml-2 text-[13px] italic">Co-founder of MyPhysio</p>
                        <img src={img17} className="mt-8 ml-8" />
                    </div>
                </div>
            </div>
        </section>
    )
}
