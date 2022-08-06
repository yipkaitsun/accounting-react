

export const Tag = (props: { color: string, text: string }) => {
    return <div style={{
        width: '100%',
        height: '40px',
        fontSize: '10px',
        paddingLeft: '10%',
        border: `2px solid ${props.color}`,
        backgroundColor: props.color,
        color: 'white',
        borderRadius: "30px 0px 0px 30px",
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }}>
        {props.text}
    </div>
}
