import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

const challengeList = [
    {
        id: 3,
        title: "Day-4 Challenge",
        body: "Meditate"
    },
    {
        id: 4,
        title: "Day-5 Challenge",
        body: "Hunt Job"
    },
    {
        id: 5,
        title: "Day-6 Challenge",
        body: "Do what u want"
    }
]

export default function App() {
    const [noteList, setNoteList] = React.useState([]);

    function addNote(note) {
        setNoteList((prevValue) => {
        return [...prevValue, note];
        });
    }

    function deleteNote(id) {
        setNoteList((prevValue) => {
        return prevValue.filter((eachNote, index) => {
            return index !== id;
        });
        });
    }
    
    return (<div>
        <Header />
        <CreateArea onAdd={addNote} />
        {console.log(noteList)}
        {noteList.map((eachNote, index) => (
            <Note
                key={index}
                id={index}
                title={eachNote.title}
                content={eachNote.content}
                onChecked={deleteNote}
            />
        ))}

        <Footer />
    </div>);
}

