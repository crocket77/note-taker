const fs = require('fs');
const path = require('path')

function createNote(body, notesArr){
    for(let i=0;i<notesArr.length;i++){
        notesArr[i].id=i.toString()
    }
    const newNote = body;
    notesArr.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notesArr}, null, 2)
    )
    return newNote;
}

function deleteNote(id,notesArr){
    console.log("delete note",id)
    for(let i=0;i<notesArr.length;i++){
        if(notesArr[i].id===id){
            notesArr.splice(i,1);
            fs.writeFileSync(
                path.join(__dirname,'../db/db.json'),
                JSON.stringify({notesArr},null,2)
            );
            console.log(notesArr,"note arr");
            // location.reload()
            return notesArr;
        }
    }
}

function findNote(id, notesArr) {
    let note;
    for(let i=0;i<notesArr.length;i++){
        if(notesArr[i].id===id){
            note=notesArr[i]
            return note;
        }else{
            console.log(notesArr[i].id)
            console.log("no note found2")
        }
    }
}

module.exports={createNote,deleteNote,findNote}