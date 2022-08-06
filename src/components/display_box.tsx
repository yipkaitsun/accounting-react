import { CSSProperties, useState } from "react"

export const DisplayBox = (props: {
    element: JSX.Element,
    style: CSSProperties


}) => {

    const [width, setWidth] = useState('calc(100% - 65px')

    return <div style={{
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: props.style.backgroundColor,//'#322820'
        boxShadow: props.style.boxShadow,//'rgb(100 59 29) -3px -3px 6px 1px'
        cursor: 'pointer',
        width: width,
        transition: 'width 0.3s',
    }}
        onMouseEnter={() => setWidth('100%')}
        onMouseLeave={() => setWidth('calc(100% - 65px')}
    >

        <div style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center'
        }}>

            <div className="interstellar" style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                color: props.style.color,//'#dee45f'
                fontSize: 'xxx-large',
                fontWeight: 'bold',
                letterSpacing: '0.4rem',
                paddingTop: '3px',
                paddingBottom: '3px'
            }}>489</div>
            {props.element}
        </div>

    </div>


}