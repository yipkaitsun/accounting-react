import { Dropdown, DropdownButton } from "react-bootstrap"

export const Expanses = (props: { param: Array<{ id: number, name: string }> }) => (
    <>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {props.param.map(e =>
                <Dropdown.Item href="#/action-1">{e.name}</Dropdown.Item>
            )}
        </DropdownButton>
    </>
)