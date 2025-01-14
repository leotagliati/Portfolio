import { TextField } from "@mui/material";
import TextCalloutArea from "../components/ContactPage/TextCalloutArea";

function ContactPage() {
    return (
        <div className="bg-red-400 h-screen">
            <div className="flex justify-end">
                <div className="bg-green-400 absolute my-24 h-160 w-3/6 mx-12 z-1">
                    <div className="bg-blue-300 relative">
                        <h1 className="text-center text-white text-6xl">Contact Me</h1>
                        <div className="p-16 mx-12 grid gap-y-12">
                            <TextField id="standard-basic" label="Nome Completo" variant="standard" className="w-full" />
                            <TextField id="standard-basic" label="Email" variant="standard" className="w-full" />
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" maxRows={3} className="w-full "></TextField> */}
                            <TextField id="filled-multiline-static" label="Mensagem" multiline rows={8} placeholder="Digite sua mensagem" variant="filled" className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row z-0">
                <div className="bg-blue-600 h-screen w-2/5"></div>
                <div className="bg-yellow-300 h-screen w-3/5"></div>
            </div>
        </div>

    );
}
export default ContactPage