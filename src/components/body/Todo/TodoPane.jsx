export function TodoPane({todoList}){
    
    function toInprogress(event){

    }

    return(
        <>
            {Object.keys(todoList).map(key => {
                const task = todoList[key];
                const style = task.workArea.toLowerCase();
                return(
                    <div key={key} className={`pane ${style}`}>
                        <p>Task: {task.task}</p>
                        <p>Work Area: {task.workArea}</p>
                        <input type="text" placeholder="Enter name"></input>
                        <button onClick={toInprogress} key={key}>Assign</button>
                        <br></br>
                    </div>
                )
            })}
        </>
    )
}