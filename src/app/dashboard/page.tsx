import { db } from "@/db";
import { auth } from "../auth";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import CreateStoreModal from "./createStoreDialog";
import { databaseUserQueryFunction } from "./action";
import UserDashboard from "./userDashboard";

 const Dashboard = async() => {
    let user:any = null
    const some = await auth();
    if(some?.user?.email){
        user = await databaseUserQueryFunction(some?.user?.email!);
        console.log(user,"das");
    }



   
    return (
        <div className="">
            {

                user?.store.length ? <>
                
                <div>
                    <UserDashboard/>
                </div>
                
                
                </> : <>
                
                <CreateStoreModal storelen={user.store.length}/>
                </>
                
            }
          
        </div>
    )
}

export default Dashboard;


