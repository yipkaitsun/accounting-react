import '../font/OpenSans-Regular.ttf'
import { CSSProperties, useEffect, useState } from "react"
import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';



export const Test2 = (props: {
    style: CSSProperties,
    setPage: (newPage: JSX.Element, curPage: JSX.Element) => void
}) => {

    useEffect(() => {
        setWidth('100vw')
    }, [])

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitUser((event.target as HTMLInputElement).value);
        setError(false);
    };
    const [error, setError] = useState(false);
    const [btnBackgroundColor, setBtnBackgroundColor] = useState('#151212c4')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const [submitUser, setSubmitUser] = useState('');
    const [width, setWidth] = useState<any>(0)


    return <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
    }}>
        <div style={{
            paddingTop: '20px',
            transition: 'width 0.9s',
            display: 'flex',
            width: width,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <div style={{
                width: props.style.width,
                marginTop: '3px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                height: '70px',
                backgroundColor: 'rgb(34 34 34 / 87%)',
                color: "#c0c0c0",
                boxShadow: '#2a2a2a -3px -3px 6px 1px',
                justifyContent: 'space-between'
            }}>
                <div
                    style={{
                        padding: '10px',
                        fontFamily: 'interstellar',
                        fontSize: 'xx-large',
                        letterSpacing: '0.18rem',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    PAY
                </div>
                <div

                    onMouseEnter={() => { setBtnBackgroundColor(description && amount > 0 ? 'rgb(49 48 48)' : '#151212c4') }}
                    onMouseLeave={() => setBtnBackgroundColor('#151212c4')}
                    style={{
                        transition: 'background-color 0.3s',
                        backgroundColor: btnBackgroundColor,
                        paddingLeft: '14px',
                        paddingRight: '14px',
                        height: '100%',
                        fontFamily: 'interstellar',
                        fontSize: 'x-large',
                        letterSpacing: '0.18rem',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: description && amount > 0 ? "pointer" : 'not-allowed'
                    }}>
                    START
                </div>
            </div>
            <div
                className='scroll'
                style={{
                    height: 'calc(100% - 70px)',
                    width: props.style.width,
                    overflowY: 'auto'
                }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: '#000000b3'
                }}>
                    <div style={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <TextField
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{
                                input: {
                                    padding: '10px',
                                    color: 'white',
                                },
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: 'grey',
                                    }
                                },

                                fieldSet: {
                                    borderColor: 'grey',
                                    borderWidth: '2px'
                                },
                                label: {
                                    color: '#6d6976'
                                }
                            }}
                            color={'primary'}
                            fullWidth
                            id="outlined-basic"
                            label="Description"
                            variant="outlined" />
                    </div>
                    <div style={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <TextField
                            onChange={(e) => setAmount(Number(e.target.value))}
                            id="filled-number"
                            sx={{
                                input: {
                                    padding: '10px',
                                    color: 'white',
                                },
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: 'grey',
                                    }
                                },
                                fieldSet: {
                                    borderColor: 'grey',
                                    borderWidth: '2px'
                                },
                                label: {
                                    color: '#6d6976'
                                }
                            }}
                            color={'primary'}
                            fullWidth
                            label="Amount"
                            variant="outlined"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <div style={{
                        padding: '10px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            width: '100%',
                            border: `solid ${"#120f14"}`,
                            borderRadius: '10px 10px 10px 10px',

                        }}>
                            <span style={{ marginLeft: '10px', color: '#6d6976' }}>User Pay</span>
                            <RadioGroup
                                style={{ paddingLeft: '20px' }}
                                value={submitUser}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel
                                    value="best"
                                    control={
                                        <Radio
                                            sx={{
                                                color: '#6d6976',
                                                '&.Mui-checked': {
                                                    color: 'rgb(46 125 50 / 47%)',
                                                },
                                                label: {
                                                    color: 'rgb(46 125 50 / 47%)'
                                                },
                                            }}
                                        />}
                                    label={<Typography style={{ color: '#6d6976' }}>Test1</Typography>} />
                                <FormControlLabel value="worst" control={<Radio
                                    sx={{
                                        color: '#6d6976',
                                        '&.Mui-checked': {
                                            color: 'rgb(46 125 50 / 47%)',
                                        },
                                    }} />}
                                    label={<Typography style={{ color: '#6d6976' }}>Test2</Typography>} />
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}