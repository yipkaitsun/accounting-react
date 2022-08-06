import { teamInvolvedData } from "../utils/data_collection"
import '../font/OpenSans-Regular.ttf'
import { SelfButton } from "./button"
import { DisplayBox } from "./display_box"
import { Racing } from "./racing"
import { CSSProperties, useEffect, useState } from "react"
import { Test2 } from "./test2"

export const Test1 = (props: {
    style: CSSProperties,
    setPage: (newPage: JSX.Element, curPage: JSX.Element) => void
}) => {

    useEffect(() => {
        setWidth(props.style.width)
    }, [])

    const [width, setWidth] = useState<any>(0)
    return <div

        style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
        }}>
        <div

            style={{
                width: width,
                transition: 'width 0.9s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
            }}>
            <DisplayBox

                style={{
                    backgroundColor: 'rgb(50 40 32 / 80%)',
                    boxShadow: 'rgb(100 59 29) -3px -3px 6px 1px',
                    color: '#dee45f'
                }}
                element={
                    <Racing
                        name={teamInvolvedData[0].name}
                        iconId={teamInvolvedData[0].iconId}
                        step={10} />
                } />

            <DisplayBox
                style={{
                    backgroundColor: 'rgb(62 28 28 / 80%)',
                    boxShadow: 'rgb(100 59 29) -1px -1px 6px 1px',
                    color: '#e23f01'
                }}
                element={
                    <Racing
                        name={teamInvolvedData[1].name}
                        iconId={teamInvolvedData[1].iconId}
                        step={6} />
                } />

            <DisplayBox
                style={{
                    backgroundColor: 'rgb(51 25 51 / 80%)',
                    boxShadow: 'rgb(128 52 126) -1px -1px 6px 1px',
                    color: '#6e56e4'
                }}
                element={
                    <Racing
                        name={teamInvolvedData[2].name}
                        iconId={teamInvolvedData[2].iconId}
                        step={8} />
                } />

            <DisplayBox
                style={{
                    backgroundColor: 'rgb(30 29 45 / 80%)',
                    boxShadow: '#2e2d42 -3px -3px 6px 1px',
                    color: '#5177d4'
                }}
                element={
                    <Racing
                        name={teamInvolvedData[2].name}
                        iconId={teamInvolvedData[2].iconId}
                        step={3} />
                } />

            <SelfButton
                onClick={() => {
                    props.setPage(
                        <Test2 setPage={props.setPage} style={{ width: '80%' }} />,
                        <Test1 setPage={props.setPage} style={{ width: '78%' }} />)
                }}
                style={{
                    marginTop: '10px',
                    width: '200px',
                    height: '60px',
                    backgroundColor: 'rgb(34 34 34 / 87%)',
                    color: "#c0c0c0",
                    boxShadow: '#2a2a2a -3px -3px 6px 1px',
                    fontSize: 'large',
                    letterSpacing: '0.18rem',
                    textTransform: 'uppercase',
                    fontFamily: 'interstellar'
                }} title={'START'}
                customStyle={{
                    backgroundColor2: 'rgb(49 48 48)'
                }} />
        </div>
    </div>
}