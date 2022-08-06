import { useState } from "react"

export const BackButton = (props: { click: () => void }) => {
    const [width, setWidth] = useState('94px')

    return <div style={{
        width: '100%',
        height: '50px',
        paddingTop: '10px',
    }}>
        <div
            onClick={() => { props.click() }}
            style={{
                width: width,
                height: '100%',
                transition: 'width 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: '#242424',
                paddingRight: '10px',
                boxShadow: 'rgb(47 47 47 / 90%) 0px 0px 4px 5px inset',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setWidth('133px')}
            onMouseLeave={() => setWidth('94px')}
        >
            <span style={{
                color: 'white',
                fontSize: 'large',
                letterSpacing: '0.18rem',
                textTransform: 'uppercase',
                fontFamily: 'interstellar'
            }}>Back</span>
        </div>

    </div>
}