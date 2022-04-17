
const fs = require('fs');
const path = require('path')
const notes = require('../../db/db');

router.get('/notes', (req,res)=>{
    const result=notes;
    res.json(result);
})

function createNewNote(body, notesArr){
    const newNote = body;
    notesArr.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    )
    }