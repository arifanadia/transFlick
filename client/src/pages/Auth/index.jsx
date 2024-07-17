import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/login (2).png"
import { apiClient } from "@/lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants";
import { toast } from "sonner";


const Auth = () => {
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    const navigate = useNavigate();


     const validateSignup = () => {
        if (!email.length) {
            toast.error("Email is Required")
            return false
        }
        if (!pin.length) {
            toast.error("pin is Required")
            return false
        }
        if (pin !== confirmPin) {
            toast.error("pin and Confirm pin Should be same")
            return false
        }
        return true
    }
    const validateLogin = () => {
        if (!email.length) {
            toast.error("Email is Required")
            return false
        }
        if (!pin.length) {
            toast.error("pin is Required")
            return false
        }
        return true
    }
    const handleLogin = async () => {
        if (validateLogin()) {
            const res = await apiClient.post(LOGIN_ROUTE,
                { email, pin },
                { withCredentials: true }
            );
            if (res.data.user.id) {
                console.log(res.data.user);
                
                if (res.data.user) {

                    navigate('/dash-board')
                } else {
                    navigate('/auth')
                }
            }
        }

    }
    const handleSignUp = async () => {


        if (validateSignup()) {
            const res = await apiClient.post(SIGNUP_ROUTE,
                { email, pin },
                { withCredentials: true }
            );
            if (res.status === 201) {
               
                navigate('/dash-board')
            }
        }
    }



    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="h-[80vh] border-2 border-white shadow-2xl bg-white w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] text-opacity-90 grid xl:grid-cols-2 ">
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex justify-center items-center flex-col">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-2xl md:text-3xl font-bold">Welcome There! in<span className="text-[#C21E57]"> TransFlick</span></h1>

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