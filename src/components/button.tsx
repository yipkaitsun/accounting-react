import { CSSProperties, MouseEventHandler, useState } from "react"

export const SelfButton = (props: {
    onClick: () => void
    style: CSSProperties
    customStyle: { backgroundColor2: string }
    title: string,
}) => {
    const [backgroundColor, setBackgroundColor] = useState(props.style.backgroundColor)
    return <div
        onClick={props.onClick}
        onMouseEnter={() => setBackgroundColor(props.customStyle.backgroundColor2)}
        onMouseLeave={() => setBackgroundColor(props.style.backgroundColor)}

        style={{
            ...props.style,
            transition: 'background-color 0.3s',
            backgroundColor: backgroundColor,
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        }}>
        {props.title}
    </div >
}