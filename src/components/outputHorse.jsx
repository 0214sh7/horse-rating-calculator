export function ShowData({data,color}){
    return(
        <div className="ShowData" style={{...styles.showData, color:color}}>
            {data}
        </div>
    );
};

export function OutputError({error}){

    if(error.length===0){
        return;
    }else{

        var err = ''
        for(var i=0;i<error.length;i++){
            err = err + "エラー: " + error[i] + "\n"
        }
        
        return(
            <div className="ShowData" style={{...styles.showData, color:"red"}}>
                {err}
            </div>
        );
    }

}

export function OutputResult({size, horses, rating}){

    return(
        <div className="outputResult" style={styles.outputResult}>
            <div>
                レーティング
            </div>
            <table className = "outputTable" style={styles.outputTable}>
                <thead>
                    <tr>
                        <th>名前</th>
                        <th>1着基準</th>
                        <th>2着基準</th>
                        <th>3着基準</th>
                        <th>4着基準</th>
                        <th>5着基準</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <OutputName horse = {horses[0]}/> </td>
                        <td> <OutputRating horse = {horses[0]} rating={rating[0][0]}/> </td>
                        <td> <OutputRating horse = {horses[0]} rating={rating[0][1]}/> </td>
                        <td> <OutputRating horse = {horses[0]} rating={rating[0][2]}/> </td>
                        <td> <OutputRating horse = {horses[0]} rating={rating[0][3]}/> </td>
                        <td> <OutputRating horse = {horses[0]} rating={rating[0][4]}/> </td>
                    </tr>
                    <tr>
                        <td> <OutputName horse = {horses[1]}/> </td>
                        <td> <OutputRating horse = {horses[1]} rating={rating[1][0]}/> </td>
                        <td> <OutputRating horse = {horses[1]} rating={rating[1][1]}/> </td>
                        <td> <OutputRating horse = {horses[1]} rating={rating[1][2]}/> </td>
                        <td> <OutputRating horse = {horses[1]} rating={rating[1][3]}/> </td>
                        <td> <OutputRating horse = {horses[1]} rating={rating[1][4]}/> </td>
                    </tr>
                    <tr>
                        <td> <OutputName horse = {horses[2]}/> </td>
                        <td> <OutputRating horse = {horses[2]} rating={rating[2][0]}/> </td>
                        <td> <OutputRating horse = {horses[2]} rating={rating[2][1]}/> </td>
                        <td> <OutputRating horse = {horses[2]} rating={rating[2][2]}/> </td>
                        <td> <OutputRating horse = {horses[2]} rating={rating[2][3]}/> </td>
                        <td> <OutputRating horse = {horses[2]} rating={rating[2][4]}/> </td>
                    </tr>
                    <tr>
                        <td> <OutputName horse = {horses[3]}/> </td>
                        <td> <OutputRating horse = {horses[3]} rating={rating[3][0]}/> </td>
                        <td> <OutputRating horse = {horses[3]} rating={rating[3][1]}/> </td>
                        <td> <OutputRating horse = {horses[3]} rating={rating[3][2]}/> </td>
                        <td> <OutputRating horse = {horses[3]} rating={rating[3][3]}/> </td>
                        <td> <OutputRating horse = {horses[3]} rating={rating[3][4]}/> </td>
                    </tr>
                    <tr>
                        <td> <OutputName horse = {horses[4]}/> </td>
                        <td> <OutputRating horse = {horses[4]} rating={rating[4][0]}/> </td>
                        <td> <OutputRating horse = {horses[4]} rating={rating[4][1]}/> </td>
                        <td> <OutputRating horse = {horses[4]} rating={rating[4][2]}/> </td>
                        <td> <OutputRating horse = {horses[4]} rating={rating[4][3]}/> </td>
                        <td> <OutputRating horse = {horses[4]} rating={rating[4][4]}/> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
};

export function OutputName({horse}){
    return(
        <div className = "outputName" style={styles.outputName}>
            <div className="place">
                {horse.id}着
            </div>
            <ShowData data={horse.name===""?"(入力なし)":horse.name} color = {(horse.isMare?"red":"black")}/>
        </div>
    );
};


export function OutputRating({horse,rating}){
    return(
        <div style = {{color:(horse.isMare?"red":"black")}}>
            {rating}
        </div>
    );
};

const styles = {
    showData: {
        padding: '5px',
        fontWeight: "bold",
        border: "solid 1.5px #000",
        backgroundColor: '#eee',
        whiteSpace: 'pre-line',
    },
    outputResult: {
        flexDirection: 'row',
        backgroundColor: '#cff',
    },
    outputTable: {
        textAlign: 'center',
        backgroundColor: '#fcf',
    },
    outputName: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        backgroundColor: '#fc9',
    },
  };