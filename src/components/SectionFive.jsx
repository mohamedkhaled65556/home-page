import img10 from "../assets/myteam.svg"
import facebook from "../assets/Path.svg"
import pintrest from "../assets/Path (1).svg"
import twitter from "../assets/Path (2).svg"

export default function SectionFive() {
    return (
        <section className="bg-DarkGreen text-white font-Livvic p-10 pt-15">
            <div className="flex justify-between">
                <div className="flex gap-30">
                    <div>
                        <img src={img10} className="ml-20" />
                        <div className="m-8 ml-20 flex items-center gap-10 text-lg font-medium">
                            <a>home</a>
                            <a>about</a>
                        </div>
                    </div>
                    <div className="opacity-60">
                        <p className="w-40">
                            987 Hillcrest Lane
                            Irvine,CA
                        </p>
                        <p>
                            California 92714
                        </p>
                        <p>
                            Call Us : 949-833-7432
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center mr-30 gap-3">
                        <img src={facebook}/>
                        <img src={pintrest}/>
                        <img src={twitter}/>
                    </div>
                    <div>
                        <p className="flex opacity-60 mt-15 -ml-40">Copyright 2020. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
