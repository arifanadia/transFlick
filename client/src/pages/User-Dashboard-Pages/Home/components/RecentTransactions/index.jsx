import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Card,
    CardContent,
} from "@/components/ui/card"


const RecentTransactions = () => {
    return (
        <div>
            <Card>
                <div className="flex items-center justify-between p-3  ">
                    <h1 className="text-xl font-semibold">Recent Transactions</h1>
                    <button className="border-b border-gray-100 rounded-md px-3 py-1">See All</button>
                </div>
                <div className="border-b w-72 my-6 border-gray-100 mx-auto"></div>

                <CardContent className="grid gap-8">
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">Olivia Martin</p>
                            <p className="text-sm text-muted-foreground">
                                olivia.martin@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">+$1,999.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/02.png" alt="Avatar" />
                            <AvatarFallback>JL</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">Jackson Lee</p>
                            <p className="text-sm text-muted-foreground">
                                jackson.lee@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">+$39.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/03.png" alt="Avatar" />
                            <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                            <p className="text-sm text-muted-foreground">
                                isabella.nguyen@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">+$299.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/04.png" alt="Avatar" />
                            <AvatarFallback>WK</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">William Kim</p>
                            <p className="text-sm text-muted-foreground">will@email.com</p>
                        </div>
                        <div className="ml-auto font-medium">+$99.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/05.png" alt="Avatar" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">Sofia Davis</p>
                            <p className="text-sm text-muted-foreground">
                                sofia.davis@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">+$39.00</div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
};

export default RecentTransactions;