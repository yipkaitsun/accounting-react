import React, { useState } from "react"
import { BackspaceReverse } from 'react-bootstrap-icons';
import { pannelButtonsData } from "../utils/data_collection";
import { HomePage } from "./homePage";
export const LeftPannel = (props: { pageManager: React.Dispatch<React.SetStateAction<JSX.Element>> }) => {
    const [pageId, setPageId] = useState(1)

    const setPage = (pageId: number) => {
        setPageId(pageId);
        switch (pageId) {
            case 1:
                props.pageManager(<HomePage />);
                break;
        }
    }

    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
            padding: '10px',
            color: 'white',
            height: "10vh",
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "#a488d5"
        }}>
            <span style={{ height: '50%' }}>Buddy,</span>
            <span style={{ height: '50%' }}>Alvis</span>
        </div>
        <>
            {pannelButtonsData.map(e => (
                <PanelButton curPageId={pageId} setPage={setPage} id={e.id} name={e.name} />
            ))}
        </>
    </div>

}

export const PanelButton = (props: { setPage: (pageId: number) => void, curPageId: number, id: number, name: string }) => {

    return <div
        onClick={(e) => props.setPage(props.id)}
        style={{
            backgroundColor: props.curPageId === props.id ? "#1d212a" : "#313443",
            paddingTop: '5px',
            paddingBottom: '5px',
            display: "flex",
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: "row"
        }}>
        <BackspaceReverse color="white" />
        <div style={{ color: 'white' }}>{props.name}</div>
    </div>
}