import { CheckCircle } from 'react-bootstrap-icons';
export const Racing = (props: {
    name: string,
    iconId: number,
    step: number

}) => {

    const image = [
        'digimon/digimon (1).gif',
        'digimon/digimon (2).gif',
        'digimon/digimon (3).gif',
        'digimon/digimon (4).gif',
        'digimon/digimon (5).gif'
    ]

    return <div style={{

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }}>
        <div style={{
            width: '450px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start'
        }}>
            <div style={{
                height: '78px',
                width: `calc(${props.step * 10}% - 78px)`
            }} />
            <div style={{
                height: '78px',
                width: `calc(${(10 - props.step) * 10}% + 78px)`
            }}>
                <img style={{
                    padding: "5px",
                    height: '78px',
                    width: '78px'
                }} src={image[props.iconId]} />
            </div>
        </div>
        <div style={{ padding: '4px' }}>
            <CheckCircle
                size='34px'
                color={props.step === 10 ? 'green' : 'grey'}
            />
        </div>
    </div>
}