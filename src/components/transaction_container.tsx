import { teamInvolvedData } from "../utils/data_collection"

export const TransactionContainer = () => {
    return <>
        <div style={{ padding: "30px", display: 'flex', flexDirection: 'column', margin: "20px", backgroundColor: 'white' }}>
            <div>Balance</div>
            <hr />
            <div style={{ display: 'flex', flexDirection: "column", }}>
                <div style={{ height: '400px', overflowY: 'scroll', }}>
                    {teamInvolvedData.map(e => {
                        return <div style={{ display: "flex" }}>
                            <div style={{ width: '50px', height: '50px' }}></div>
                            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", width:"80%"}}>
                                <div>{e.name}</div>
                                <div>{e.balance}</div>
                            </div>
                        </div>
                    })}
                </div >
            </div>

        </div>
    </>
}