import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import img from "../../../../../assets/avatar.jpeg"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react";
const QuickTransfer = () => {
    return (
        <div className="mt-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Quick Transfer</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <Carousel className="mt-3">
                        <CarouselContent>
                            <CarouselItem>
                                <Avatar className="size-28 mx-auto">
                                    <AvatarImage src={img} alt="Avatar" />
                                </Avatar>
                                <div className="mt-2 text-center">
                                    <span className="text-xl font-semibold">Rayna Siphron</span>
                                    <p className="text-gray-600 text-lg">Influencer</p>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <Avatar className="size-28 mx-auto">
                                    <AvatarImage src={img} alt="Avatar" />

                                </Avatar>
                                <div className="mt-2 text-center">
                                    <span className="text-xl font-semibold">Rayna Siphron</span>
                                    <p className="text-gray-600 text-lg">Influencer</p>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <Avatar className="size-28 mx-auto">
                                    <AvatarImage src={img} alt="Avatar" />

                                </Avatar>
                                <div className="mt-2 text-center">
                                    <span className="text-xl font-semibold">Rayna Siphron</span>
                                    <p className="text-gray-600 text-lg">Influencer</p>
                                </div>
                            </CarouselItem>

                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="space-y-3 mt-3">
                
                            <Textarea placeholder="Type your message here." />

                            <div className="flex w-full max-w-sm items-center space-x-2 ">
                                <Input type="number" placeholder="Amount" className="" />
                                <Button type="submit" className="flex items-center gap-2 ">Send <Send/></Button>
                            </div>

                      
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default QuickTransfer;
