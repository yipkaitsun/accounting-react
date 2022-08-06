import { teamInvolvedData } from "../utils/data_collection"
import '../font/OpenSans-Regular.ttf'
import { SelfButton } from "./button"
import { DisplayBox } from "./display_box"
import { Racing } from "./racing"
import { CSSProperties, useEffect, useState } from "react"

export const Test2 = (props: {
    style: CSSProperties,
    setPage: (newPage: JSX.Element) => void
}) => {

    useEffect(() => {
        setWidth(props.style.width)
    }, [])

    const [width, setWidth] = useState<any>(0)
    return <div style={{
        width: width,
        transition: 'width 0.9s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    }}>

    

    </div>
}