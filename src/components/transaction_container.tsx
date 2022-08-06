import { myUserData, teamInvolvedData } from "../utils/data_collection"
import { Balance } from "./balance"
import { Tag } from "./tag"

export const TransactionContainer = () => {
    return <div className="font-face-gm"
        style={{
            paddingTop: '13px',
            height: '100%',
        }} >
        <div style={{
            height: '100%',
            display: 'flex',
            borderRadius: '10px',
            flexDirection: 'column',
            backgroundColor: 'white',
            boxShadow: '4px 1px 7px 0px darkgrey'
        }}>
            <div style={{ padding: '20px', height: "30px" }}>
                <div style={{ color: "#adadad", textTransform: 'uppercase' }}>Users' Balance</div>
            </div>
            <div style={{ padding: '0px 20px 0px 20px', height: "30px" }}>
                <hr style={{ boxShadow: '4px 1px 7px 0px darkgrey', margin: '0px' }} />
            </div>
            <div style={{ height: "calc( 100% - 46px)", display: 'flex', flexDirection: "column", }}>
                <div className="scroll" style={{ height: '80%', overflowY: 'scroll', }}>
                    {teamInvolvedData.map(e => {
                        return <div
                            style={{
                                backgroundColor: (myUserData.userId === e.userId) ? "#f0fbff" : 'white',
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: 'center',
                            }}>
                            <div style={{
                                width: '100%',
                                padding: '10px',
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: 'space-between'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: "center"
                                }}>
                                    <Tag color={"#fe6160"} text={"tag1"} />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: "calc(100% - 55px)",
                                    alignItems: 'center'
                                }}>
                                    <div>{e.name}</div>
                                    <div style={{ width: '60px' }}><Balance balance={e.balance} /></div>
                                </div>
                            </div>
                        </div>
                    })}
                </div >
                <hr />
                <div style={{ height: '15%' }}>
                </div>
            </div>

        </div>
    </div >
}