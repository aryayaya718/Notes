function NoteCard(props){

    return(
        <div className="card bg-taupe "> 
        <div className="card-body">

            <div className="card-title">{props.note.title}</div>
            <p>Content</p>
            <div className="card-actions justify-end">
                <button className="btn"></button>
            </div>
        </div>
        </div>
    )    
}
export default NoteCard;