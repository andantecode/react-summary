import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Empty from "./Empty";
import { useState } from "react";

const NoteList = () => {
    const notes = useSelector(state => state.notes);
    const [sortOrder, setSortOrder] = useState("latest");
    const sortedNotes = [...notes].sort((a, b) => {
        if(sortOrder === "latest") {
            return new Date(b.time) - new Date(a.time);
        }
        else {
            return a.title.localeCompare(b.title);
        }
    })
    return (
        <div className="max-w-[1030px] m-auto rounded-lg bg-gray-900 p-4">
            <div className="flex justify-end space-x-4 mb-4">
                <button 
                    onClick={() => setSortOrder("latest")} 
                    className={`bg-gray-800 py-2 px-4 rounded-full ${sortOrder === "latest" ? "text-white" : "text-gray-400"}`}
                    >
                    최근
                </button>
                <button 
                    onClick={() => setSortOrder("name")}
                    className={`bg-gray-800 py-2 px-4 rounded-full ${sortOrder === "name" ? "text-white" : "text-gray-400"}`}
                    >
                    이름 순
                </button>
            </div>
            {
                sortedNotes.length ? (
                    <ul>
                    {
                        sortedNotes.map(note => {
                            return <li key={note.id}>
                                <Link 
                                    to={`/notes/${note.id}`}
                                    className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-2 hover:bg-gray-700">
                                    <div>
                                        <h3 className="text-lg font-semibold">{note.title}</h3>
                                        <p className="text-sm text-gray-400">{note.content.slice(0, 100)}</p>
                                    </div>
                                    <div>
                                        <time className="text-sm text-gray-400">{format(note.time, "yyyy년 MM월 dd일 HH시mm분")}</time>
                                    </div>
                                </Link>
                            </li>
                        })
                    }
                    </ul>
                ) : <Empty/>
            }
            
        </div>
    )
}

export default NoteList;