fetch("https://api.boardroom.info/v1/getProtocolActionCount").then((data)=> {
    console.log(data);
    return data.json();
}).then((objectData)=> {
    console.log(objectData.data);
    let tableData="";
    objectData.data.map((values)=>{
        tableData+=`<tr>
        <td>${values.protocol}</td>
        <td>${values.totalActions}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=> {
    console.log(err);
})