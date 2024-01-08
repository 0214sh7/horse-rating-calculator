export function ShowData({data}){
    return(
        <div className="ShowData" style={styles.showData}>
            {data}
        </div>
    );
};

export function OutputResult({size, setSize, allowance, setAllowance, course, setCourse, horses, setHorses}){
    return(
        <div className="outputResult" style={styles.outputResult}>
            <div>
                レーティング
            </div>
            <table className = "outputRating" style={styles.outputRating}>
                <tr>
                    <th>名前</th>
                    <th>1着基準</th>
                    <th>2着基準</th>
                    <th>3着基準</th>
                    <th>4着基準</th>
                    <th>5着基準</th>
                </tr>
                <tr>
                    <td> <OutputName horse = {horses[0]}/> </td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td> <OutputName horse = {horses[1]}/> </td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td> <OutputName horse = {horses[2]}/> </td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td> <OutputName horse = {horses[3]}/> </td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td> <OutputName horse = {horses[4]}/> </td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                </tr>
            </table>
            {/* <div className = "outputRating" style={styles.outputRating}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <OutputName place = '1'/>
                    <OutputName place = '2'/>
                    <OutputName place = '3'/>
                    <OutputName place = '4'/>
                    <OutputName place = '5'/>
                </div>
            </div> */}
        </div>
        
    );
};

export function OutputName({horse}){
    return(
        <div className = "outputName" style={styles.outputName}>
            <div className="place">
                {horse.id}着
            </div>
            {/* <input type="text" placeholder="馬名"/> */}
            
            <ShowData data={"メイショウフメイ "+horse.id}/>
        </div>
    );
};

const styles = {
    showData: {
        padding: '5px',
        fontWeight: "bold",
        border: "solid 1.5px #000",
        backgroundColor: '#eee',
    },
    outputResult: {
        flexDirection: 'row',
        backgroundColor: '#cff',
    },
    outputRating: {
        // display: 'flex',
        // flexDirection: 'row',
        // padding: '0px 0px 0px 0px',
        // backgroundColor: '#fcf',
    },
    outputName: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        backgroundColor: '#fc9',
    },
  };