import { BandaidFill, FileX } from "react-bootstrap-icons"

export const Balance = (props: { balance: number }) => {
    return <div style={{
        display: 'flex',
        justifyContent: "space-around",
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        color: "white",
        paddingTop: '3px',
        boxShadow:'4px 1px 7px 0px darkgrey',
        paddingBottom: '3px',
        background: props.balance < 0 ? "#e84d54" : "#64d87c"
    }}>
        <BandaidFill />  {props.balance}
    </div>
}