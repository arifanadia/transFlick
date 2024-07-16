import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/login (2).png"


const Auth = () => {
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    const navigate = useNavigate();


    const handleLogin = async () => {
        navigate('/dash-board')
    }

    const handleSignUp = async () => {

    }



    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="h-[80vh] border-2 border-white shadow-2xl bg-white w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] text-opacity-90 grid xl:grid-cols-2 ">
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex justify-center items-center flex-col">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-2sxl md:text-3xl font-bold">Welcome There! in<span className="text-[#C21E57]"> TransFlick</span></h1>

                        </div>
                        <p className="font-medium text-center mt-4">Fill in the details to get start with the best Money Transfer app </p>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <Tabs className="w-3/4" defaultValue="login">
                            <TabsList className="bg-transparent rounded-none w-full">
                                <TabsTrigger
                                    className="text-black text-opacity-90 border-b-2 w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-rose-700 p-3 transition-all duration-300"
                                    value="login" >Login</TabsTrigger>
                                <TabsTrigger
                                    className="text-black text-opacity-90 border-b-2 w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-rose-700 p-3 transition-all duration-300"
                                    value="signUp" >SignUp</TabsTrigger>
                            </TabsList>
                            <TabsContent className="flex flex-col gap-5 mt-10 " value="login">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-6 rounded-full"
                                />
                                <Input
                                    type="password"
                                    placeholder="Pin"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    className="p-6 rounded-full"
                                />
                                <Button className="p-6 rounded-full" onClick={handleLogin}>Login</Button>
                            </TabsContent>
                            <TabsContent className="flex flex-col gap-5" value="signUp">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-6 rounded-full"
                                />
                                <Input
                                    type="password"
                                    placeholder="Pin"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    className="p-6 rounded-full"
                                />
                                <Input
                                    type="password"
                                    placeholder="Confirm Pin"
                                    value={confirmPin}
                                    onChange={(e) => setConfirmPin(e.target.value)}
                                    className="p-6 rounded-full"
                                />
                                <Button className="p-6 rounded-full" onClick={handleSignUp}>SignUp</Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className="hidden xl:flex justify-center items-center">
                    <img src={Background} alt="Background Login " className="size-[500px]" />
                </div>

            </div>
        </div>
    );
};

export default Auth;