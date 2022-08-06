import { flexbox } from "@mui/system"

export const Header = (props: {
    color: {
        main: string,
        second: string,
        third: string,
    }, title: string,
    height: string
}) => {

    return <div style={{
        height: props.height,
        backgroundColor: props.color.main,
        borderColor: props.color.second,
        color: props.color.third,
        borderStyle: 'solid',
        borderLeft: '0px',
        borderRight: ' 0px',
        borderTop: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        <div style={{
            width: '100vw',
            height: props.height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <div style={{
                paddingLeft: '20px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                fontSize: 'x-large',
                letterSpacing: '0.2rem'
            }}>{props.title}</div>

            <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}>
                <div style={{
                    display: 'flex',
                    height: '90%',
                    backgroundColor: 'black',
                    borderRadius: '10px 0px 00px 10px',
                }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '5px 0px 5px 8px'
                        }}
                    >
                        <span
                            style={{
                                fontWeight: 'bold',
                                paddingLeft: '5px',
                                fontSize: 'x-small',
                                color: 'white',
                                textAlign: 'center'

                            }}
                        >FIU653asdf</span>
                        <span
                            style={{
                                fontWeight: 'bold',
                                paddingLeft: '5px',
                                fontSize: 'x-small',
                                color: '#f44',
                                textAlign: 'center',
                                backgroundColor: '#4006',
                                textShadow: '0 0 4px #f44a',
                            }}
                        >Test1</span>


                    </div>
                    <img style={{
                        padding:'3px',
                        height: props.height,
                        width: props.height
                    }} src='digimon/digimon (1).gif' />
                </div>
            </div>
        </div>
    </div >

}