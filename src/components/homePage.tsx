import { useEffect, useState } from "react"
import { teamInvolvedData } from "../utils/data_collection"
import { Test1 } from "./test1"
import { TransactionContainer } from "./transaction_container"
import { UserContainer } from "./users_container"

export const HomePage = () => {

    const [data, setData] = useState<{
        name: string;
        iconId: number;
        balance: number;
    }[]>([])

    useEffect(() => {
        const tempdata = teamInvolvedData.map(e => {
            return {
                name: e.name,
                iconId: e.iconId,
                balance: e.balance
            }
        })
        setData(tempdata)
    }, [])

    return <div style={{
        height: '90vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }}>
        <div style={{ height: "80%", display: 'flex', justifyContent: 'space-evenly' }}>
            {/* <div style={{ width: "28%", height: '100%' }}> <UserContainer /></div>
            <div style={{ width: "68%", height: '100%' }}> <TransactionContainer /></div> */}
            <div style={{ width: "100%", height: '100%' }}> </div>

        </div>
        {/* <div style={{ height: '40%', backgroundSize: 'contain', backgroundImage: "url(background_image.jpg)" }}></div> */}
    </div >
}
