export function Head({setTask}){

    function postNewTask(event){
        
    }


    return(
        <div id="head">
            <h1>Scrum Board</h1>
            <form>
                <input type="text" placeholder="Beskriv problemet kort!" id="input"></input>
                <select id="workArea" name="workArea">
                    <option value="backend">Dev Backend</option>
                    <option value="ux">UX</option>
                    <option value="frontend">Dev Frontend</option>
                </select>
                <button onClick={postNewTask}>Add</button>
            </form>
        </div>
    )
}