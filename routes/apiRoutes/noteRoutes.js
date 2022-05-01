const router = require('express').Router();
const{createNote,deleteNote,findNote}=require('../../lib/notes');

const {notesArr} = require('../../db/db');

router.get('/notes', (req,res)=>{
    let savedNotes=notesArr
    res.json(savedNotes);
})

router.post("/notes", function(req,res){
    req.body.id=notesArr.length.toString();
    let note=createNote(req.body,notesArr);
    res.json(note);
})

router.delete('/notes/:id',(req,res)=>{
    const note = findNote(req.params.id, notesArr)
    if(note){
        console.log(note)
        deleteNote(req.params.id,notesArr);
        location.reload()
        
    }else{
        console.log("no note found1")
    }
})

module.exports=router;
    