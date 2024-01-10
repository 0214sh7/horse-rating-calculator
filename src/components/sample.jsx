

const sampledata = [
    [
        {racename:'2023年ジャパンカップ', size:5, course:'tl', allowance:4},
        {id: 1, name: 'イクイノックス', isMare: false, prerating: '129', margin: '0'},
        {id: 2, name: 'リバティアイランド', isMare: true, prerating: '120', margin: '4'},
        {id: 3, name: 'スターズオンアース', isMare: true, prerating: '114', margin: '1'},
        {id: 4, name: 'ドウデュース', isMare: false, prerating: '120', margin: '0.75'},
        {id: 5, name: 'タイトルホルダー', isMare: false, prerating: '124', margin: '2'},
    ],
    [
        {racename:'2023年有馬記念', size:5, course:'tl', allowance:4},
        {id: 1, name: 'ドウデュース', isMare: false, prerating: '121', margin: '0'},
        {id: 2, name: 'スターズオンアース', isMare: true, prerating: '118', margin: '0.5'},
        {id: 3, name: 'タイトルホルダー', isMare: false, prerating: '124', margin: '1'},
        {id: 4, name: 'ジャスティンパレス', isMare: false, prerating: '121', margin: '0.125'},
        {id: 5, name: 'シャフリヤール', isMare: false, prerating: '121', margin: '0.25'},
    ],
    [
        {racename:'2023年ドバイSC', size:5, course:'tl', allowance:4},
        {id: 1, name: 'イクイノックス', isMare: false, prerating: '126', margin: '0'},
        {id: 2, name: 'ウエストオーバー', isMare: false, prerating: '119', margin: '3.5'},
        {id: 3, name: 'ザグレイ', isMare: false, prerating: '113', margin: '2.5'},
        {id: 4, name: 'モスターダフ', isMare: false, prerating: '121', margin: '1.25'},
        {id: 5, name: 'シャフリヤール', isMare: false, prerating: '121', margin: '1'},
    ],

]

export function InputSample({setSize, setCourse, setAllowance, setHorses}){

    const inputSample = (id) => {
        setSize(sampledata[id][0].size)
        setCourse(sampledata[id][0].course)
        setAllowance(sampledata[id][0].allowance)
        
        for(var i=0;i<sampledata[id][0].size;i++){
            setHorses[i](sampledata[id][i+1])
            if(sampledata[id][i+1].isMare){

            }
        }
    }


    return(
        <div>
            サンプル入力
            <button onClick={ () => { inputSample(0) }}> {sampledata[0][0].racename} </button>
            <button onClick={ () => { inputSample(1) }}> {sampledata[1][0].racename} </button>
            <button onClick={ () => { inputSample(2) }}> {sampledata[2][0].racename} </button>

        </div>
    );
};