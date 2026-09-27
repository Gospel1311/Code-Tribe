import "./header.css"
import { Bell, ChevronDown, CircleUserRound } from "lucide-react";
import image from "../../../assets/codetribe.png"

const header = () => {
    return(

        <div>
            <section className=" flex items-center justify-between">
            <img src={image} alt="codetribe" width={250} className="pl-0" />
<main className="flex items-center gap-20">
                <section>
                <Bell /> 
                </section>

                <section className="flex items-center gap-2 pr-20">     
            <CircleUserRound /> 
            <h3 className="alex">Alex Johnson</h3>
            <ChevronDown />
            </section>
            </main>
</section>

        </div>
    )
}

export default header;