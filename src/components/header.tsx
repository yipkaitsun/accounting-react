import { FileX } from "react-bootstrap-icons"

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
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                fontSize:'x-large',
                letterSpacing:'0.2rem'
            }}>{props.title}</div>

            <div style={{
                width: '92px',
                height: '60px',
                backgroundColor: 'white'
            }}></div>
        </div>
    </div >

}