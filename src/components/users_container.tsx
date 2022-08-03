import { Button } from "react-bootstrap"
import { teamInvolvedData } from "../utils/data_collection"

export const UserContainer = () => <div >
    <div style={{ padding: "30px", display: 'flex', flexDirection: 'column', margin: "20px", backgroundColor: 'white' }}>
        <div>Team Involved</div>
        <hr />
        <div style={{ display: 'flex', flexDirection: "column", }}>
            <div style={{   height: '400px' ,overflowY: 'scroll', }}>
                {teamInvolvedData.map(e => {
                    return <div style={{ display: "flex" }}>
                        <div style={{ width: '50px', height: '50px' }}></div>
                        <div>{e.name}</div>
                    </div>
                })}
            </div >
            <hr/>
            <div style={{ height: '40px' }}>
                <Button  >Add TEAMATE</Button  >
            </div>
        </div>

    </div>

</div >