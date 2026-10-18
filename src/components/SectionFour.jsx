import img8 from "../assets/Group 8.svg"

export default function SectionFour() {
    return (
        <section className="bg-LightCoral text-SacramentoStateGreen font-Livvic">
            <div className="flex justify-between items-center">
                <h1 className="text-5xl font-bold p-15 pl-70">Ready to get started?</h1>
                <div>
                    <button className="mr-100 border-SacramentoStateGreen text-[18px] font-semibold rounded-3xl w-38.25 h-12 border-2 hover:text-white hover:bg-SacramentoStateGreen cursor-pointer">contact us</button>
                </div>
            </div>
            <img src={img8} className="-mt-35 bg-LightCoral"/>
        </section>
    )
}
