console.log('Hello Veronica');

const csvFilePath='./Junk.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    console.log(jsonObj)
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
})
.on('done',(error)=>{
    console.log('File Processed! Thp Thp')
})