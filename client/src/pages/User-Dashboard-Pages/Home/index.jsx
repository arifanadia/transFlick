import { DollarSign } from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import RecentTransactions from "./components/RecentTransactions";
import TransactionChart from "./components/TransactionChart";
import QuickTransfer from "./components/QuickTransfer";
import TotalBalanceChart from "./components/TotalBalanceChart";



const UserHome = () => {
    return (
        <div className="">
            <div className="p-3">
                <h1 className="text-3xl lg:text-4xl font-semibold text-black "
                >Hey,{"Arifa"}{" "}
                    <span className="text-red-700">Welcome </span>
                    here!</h1>

            </div>
            <section className="grid grid-cols-4 w-full gap-6 border border-gray-100 rounded-md p-6 mt-3">
                <div className="grid grid-cols-3 gap-6 w-full col-span-3">
                    <div className="flex flex-col col-span-2 space-y-6">
                        <div className="flex flex-col lg:flex-row flex-wrap  gap-6 ">
                            <Card className="flex-1 h-[150px]">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">My Balance</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$45,231.89</div>
                                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="flex-1 h-[150px]">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Send Money</CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$45,231.89</div>
                                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                </CardContent>
                            </Card>

                        </div>
                        <div>
                            <TotalBalanceChart/>
                        </div>
                    </div>
                    <div>
                        <RecentTransactions />
                    </div>
                </div>
                <div className="justify-end col-span-1">
                    {/* total transactions */}
                    <TransactionChart />
                    <QuickTransfer />

                </div>
            </section>

        </div>
    );
};

export default UserHome;