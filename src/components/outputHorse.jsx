export function ShowData({data}){
    return(
        <div className="ShowData" style={styles.showData}>
            {data}
        </div>
    );
};

export function OutputResult(){
    return(
        <div className="outputResult" style={styles.outputResult}>
            <div>
                レーティング
            </div>
            <div className = "outputRating" style={styles.outputRating}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <OutputName place = '1'/>
                    <OutputName place = '2'/>
                    <OutputName place = '3'/>
                    <OutputName place = '4'/>
                    <OutputName place = '5'/>
                </div>
            </div>
        </div>
        
    );
};

export function OutputName({place}){
    return(
        <div className = "outputName" style={styles.outputName}>
            <div className="place">
                {place}着
            </div>
            {/* <input type="text" placeholder="馬名"/> */}
            
            <ShowData data={"メイショウフメイ "+place}/>
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
        display: 'flex',
        flexDirection: 'row',
        padding: '0px 0px 0px 0px',
        backgroundColor: '#fcf',
    },
    outputName: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        backgroundColor: '#fc9',
    },
  };