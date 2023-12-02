import React, { useState } from "react";

export function InputResult(){

    const [allowance, setAllowance] = useState(4)
    const [course, setCourse] = useState(1.5)

    const [horseName1, setHorseName1] = useState("")
    const [horseName2, setHorseName2] = useState("")
    const [horseName3, setHorseName3] = useState("")
    const [horseName4, setHorseName4] = useState("")
    const [horseName5, setHorseName5] = useState("")

    const [isMare1, setIsMare1] = useState(false)
    const [isMare2, setIsMare2] = useState(false)
    const [isMare3, setIsMare3] = useState(false)
    const [isMare4, setIsMare4] = useState(false)
    const [isMare5, setIsMare5] = useState(false)

    const [horseRating1, setHorseRating1] = useState("")
    const [horseRating2, setHorseRating2] = useState("")
    const [horseRating3, setHorseRating3] = useState("")
    const [horseRating4, setHorseRating4] = useState("")
    const [horseRating5, setHorseRating5] = useState("")

    const [margin1, setMargin1] = useState(0)
    const [margin2, setMargin2] = useState(0)
    const [margin3, setMargin3] = useState(0)
    const [margin4, setMargin4] = useState(0)

    return(
        <div className="inputResult" style={styles.inputResult}>
        
            <div style={{display: "flex", flexDirection: "row"}}>
                <InputCourse defaultValue = {course} setCourse={setCourse}/>
                <div>
                    牝馬斤量差 
                    <input 
                        type="text" 
                        value={allowance}
                        onChange={(e) => setAllowance(e.target.value)}
                    />
                    ポンド
                </div>
            </div>
            
            <div className = "inputArrival" style={styles.inputArrival}>
                <div className = "inputRank" style={styles.inputRank}>
                    <InputHorse place = '1' defaultName = {horseName1} setName = {setHorseName1} defaultMare = {isMare1} setMare = {setIsMare1} defaultRating = {horseRating1} setRating = {setHorseRating1}/>
                    <InputHorse place = '2' defaultName = {horseName2} setName = {setHorseName2} defaultMare = {isMare2} setMare = {setIsMare2} defaultRating = {horseRating2} setRating = {setHorseRating2}/>
                    <InputHorse place = '3' defaultName = {horseName3} setName = {setHorseName3} defaultMare = {isMare3} setMare = {setIsMare3} defaultRating = {horseRating3} setRating = {setHorseRating3}/>
                    <InputHorse place = '4' defaultName = {horseName4} setName = {setHorseName4} defaultMare = {isMare4} setMare = {setIsMare4} defaultRating = {horseRating4} setRating = {setHorseRating4}/>
                    <InputHorse place = '5' defaultName = {horseName5} setName = {setHorseName5} defaultMare = {isMare5} setMare = {setIsMare5} defaultRating = {horseRating5} setRating = {setHorseRating5}/>
                </div>
                <div className = "inputMargin" style={{flexDirection: 'column', padding: '35px 0px 0px 0px',}}>
                    <InputMargin place = '1' defaultMargin = {margin1} setMargin = {setMargin1}/>
                    <InputMargin place = '2' defaultMargin = {margin2} setMargin = {setMargin2}/>
                    <InputMargin place = '3' defaultMargin = {margin3} setMargin = {setMargin3}/>
                    <InputMargin place = '4' defaultMargin = {margin4} setMargin = {setMargin4}/>
                    <button onClick={ () => {
                        console.log(allowance)
                        console.log(course)
                        console.log(horseName1)
                        console.log(horseName2)
                        console.log(horseName3)
                        console.log(horseName4)
                        console.log(horseName5)
                        console.log(isMare1)
                        console.log(isMare2)
                        console.log(isMare3)
                        console.log(isMare4)
                        console.log(isMare5)
                        console.log(horseRating1)
                        console.log(horseRating2)
                        console.log(horseRating3)
                        console.log(horseRating4)
                        console.log(horseRating5)
                        console.log(margin1)
                        console.log(margin2)
                        console.log(margin3)
                        console.log(margin4)
                    }}>
                        計算
                    </button>
                </div>
                
            </div>
        
        </div>
    );
};

export function InputHorse({place, defaultName, setName, defaultMare, setMare, defaultRating, setRating}){
    
    const [color, setColor] = useState("black")
    
    return(
        <div className = "inputHorse" style={styles.inputHorse}>
            <div className="place">
                {place}着
            </div>
            <input 
                type="text"
                className="horseName"
                placeholder="馬名"
                value={defaultName}
                onChange={(e) => setName(e.target.value)}
                style = {{color:color}}
            />
            <div>
                <input 
                    type="checkbox"
                    id="isMare"
                    value={defaultMare}
                    onChange={(e) => {
                        setMare(e.target.checked)
                        setColor(e.target.checked?"red":"black")
                    }}
                />
                <label>牝馬 </label>
            </div>
            <input
                type="text"
                placeholder="プレレーティング"
                value={defaultRating}
                onChange={(e) => setRating(e.target.value)}
                style = {
                    {color:color}
                }
            />
        </div>
    );
};

export function InputMargin({place, defaultMargin, setMargin}){
    return(
        <div className = "inputMargin" style={styles.inputMargin}>
            <label htmlFor="selectMargin"> {Number(place)}-{Number(place)+1} 着差 </label>

            <select 
                id="selectMargin"
                value={defaultMargin}
                onChange={(e) => setMargin(e.target.value)}
            >
                <option value='0'>同着</option>
                <option value='0.08333'>ハナ</option>
                <option value='0.16667'>アタマ</option>
                <option value='0.33333'>クビ</option>
                <option value='0.5'>1/2</option>
                <option value='0.75'>3/4</option>
                <option value='1'>1</option>
                <option value='1.25'>1 1/4</option>
                <option value='1.5'>1 1/2</option>
                <option value='1.75'>1 3/4</option>
                <option value='2'>2</option>
                <option value='2.5'>2 1/2</option>
                <option value='3'>3</option>
                <option value='3.5'>3 1/2</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>大差</option>
            </select>
        </div>

    );
};

export function InputCourse({defaultValue, setCourse}){
    return(
        <div className = "inputCourse" style={styles.inputCourse}>
            <label htmlFor="selectCourse"> コース </label>

            <select id="selectCourse" key={defaultValue} defaultValue={defaultValue}
            onChange={(e) => setCourse(e.target.value)}>
                <option value='3'>芝 1000m</option>
                <option value='2.5'>芝 S(1200m～1300m)</option>
                <option value='2'>芝 M(1301m～1899m)</option>
                <option value='1.75'>芝 I(1900m～2100m)</option>
                <option value='1.5'>芝 L(2101m～2700m)</option>
                <option value='1'>芝 E(2701m～)</option>
                <option value='3.0'>ダ 1000m</option>
                <option value='2.50'>ダ S(1200m～1599m)</option>
                <option value='2.0'>ダ M(1600m～1899m)</option>
                <option value='1.50'>ダ I(1900m～2100m)</option>
                <option value='1.0'>ダ L(2101m～)</option>
            </select>
        </div>

    );
};

const styles = {
    inputResult: {
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#fcc',
    },
    inputCourse: {
        padding: '0px 10px 0px 0px',
    },
    inputArrival: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0px 0px 0px 0px',
        backgroundColor: '#ffc',
    },
    inputRank: {
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#ccf',
    },
    inputMargin: {
        display: 'flex',
        flexDirection: 'row',
        boxSizing: 'border-box',
        padding: '5px',
        backgroundColor: '#cfc',
    },
    inputHorse: {
        display: 'flex',
        flexDirection: 'row',
        boxSizing: 'border-box',
        padding: '5px',
    },
  };