import { Button } from "react-bootstrap"
import { myUserData, teamInvolvedData } from "../utils/data_collection"
import '../font/OpenSans-Regular.ttf'

export const UserContainer = () => {
    const image = ['pixel image/meow.jpg', 'pixel image/hello.jpg', 'pixel image/fish.jpg', 'pixel image/quack.jpg']

    return <div className="font-face-gm" style={{
        paddingTop: '13px',
        height: '100%'
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
                <div style={{ color: "#adadad", textTransform: 'uppercase' }}>Team Involved</div>
            </div>
            <div style={{ padding: '0px 20px 0px 20px', height: "30px" }}>
                <hr style={{ boxShadow: '4px 1px 7px 0px darkgrey', margin: '0px' }} />
            </div>
            <div style={{ height: "calc( 100% - 46px)", display: 'flex', flexDirection: "column", }}>
                <div className="scroll" style={{ height: '80%', overflowY: 'scroll', }}>
                    {teamInvolvedData.map(e => {
                        return <div style={{
                            display: "flex",
                            alignItems: 'center',
                            margin: "10px"
                        }}>
                            <img style={{ width: '50px', height: '50' }} src={image[e.iconId % image.length]}></img>
                            <div>{e.name}</div>
                        </div>
                    })}
                </div >
                <hr />
                <div style={{ height: '15%' }}>
                    <Button  >Add TEAMATE</Button  >
                </div>
            </div>

        </div>

    </div >
}