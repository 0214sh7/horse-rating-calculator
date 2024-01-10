import React, { useState } from "react";

export function InputResult({size, setSize, allowance, setAllowance, course, setCourse, horses, setHorses, calculation}){
    return(
        <div className="inputResult" style={styles.inputResult}>
        
            <div style={{display: "flex", flexDirection: "row"}}>
                <InputCourse course = {course} setCourse={setCourse}/>
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
                    <InputHorse horse = {horses[0]} setHorse = {setHorses[0]}/>
                    <InputHorse horse = {horses[1]} setHorse = {setHorses[1]}/>
                    <InputHorse horse = {horses[2]} setHorse = {setHorses[2]}/>
                    <InputHorse horse = {horses[3]} setHorse = {setHorses[3]}/>
                    <InputHorse horse = {horses[4]} setHorse = {setHorses[4]}/>
                </div>
                <div className = "inputMargin" style={{flexDirection: 'column', padding: '35px 0px 0px 0px',}}>
                    <InputMargin horse = {horses[1]} setHorse={setHorses[1]}/>
                    <InputMargin horse = {horses[2]} setHorse={setHorses[2]}/>
                    <InputMargin horse = {horses[3]} setHorse={setHorses[3]}/>
                    <InputMargin horse = {horses[4]} setHorse={setHorses[4]}/>
                    <button onClick={ () => {
                        calculation()
                    }}>
                        計算
                    </button>
                </div>
                
            </div>
        
        </div>
    );
};

export function InputCourse({course, setCourse}){

    return(
        <div className = "inputCourse" style={styles.inputCourse}>
            <label htmlFor="selectCourse"> コース </label>

            <select id="selectCourse" key={course} defaultValue={course}
            onChange={(e) => setCourse(e.target.value)}>
                <option value='tk'>芝 1000m</option>
                <option value='ts'>芝 S(1200m～1300m)</option>
                <option value='tm'>芝 M(1301m～1899m)</option>
                <option value='ti'>芝 I(1900m～2100m)</option>
                <option value='tl'>芝 L(2101m～2700m)</option>
                <option value='te'>芝 E(2701m～)</option>
                <option value='dk'>ダ 1000m</option>
                <option value='ds'>ダ S(1200m～1599m)</option>
                <option value='dm'>ダ M(1600m～1899m)</option>
                <option value='di'>ダ I(1900m～2100m)</option>
                <option value='dl'>ダ L(2101m～)</option>
            </select>
        </div>

    );
};

export function InputHorse({horse,setHorse}){
    
    return(
        <div className = "inputHorse" style={styles.inputHorse}>
            <div className="place">
                {horse.id}着
            </div>
            <input 
                type="text"
                className="horseName"
                placeholder="馬名"
                value={horse.name}
                onChange={(e) => setHorse({...horse, name: e.target.value})}
                style = {{color:(horse.isMare?"red":"black")}}
            />
            <div>
                <input 
                    type="checkbox"
                    id="isMare"
                    checked ={horse.isMare}
                    onChange={(e) => {
                        setHorse({...horse, isMare: e.target.checked})
                        // setColor(e.target.checked?"red":"black")
                    }}
                />
                <label>牝馬 </label>
            </div>
            <input
                type="text"
                placeholder="プレレーティング"
                value={horse.prerating}
                onChange={(e) => setHorse({...horse, prerating: e.target.value})}
                style = {{color:(horse.isMare?"red":"black")}}
            />
        </div>
    );
};

export function InputMargin({horse,setHorse}){
    return(
        <div className = "inputMargin" style={styles.inputMargin}>
            <label htmlFor="selectMargin"> {Number(horse.id)-1}-{Number(horse.id)} 着差 </label>

            <select 
                id="selectMargin"
                value={horse.margin}
                onChange={(e) => setHorse({...horse, margin: e.target.value})}
            >
                <option value='-0.001'>-</option>
                <option value='0'>同着</option>
                <option value='0.06125'>ハナ</option>
                <option value='0.125'>アタマ</option>
                <option value='0.25'>クビ</option>
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