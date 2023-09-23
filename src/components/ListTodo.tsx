import { useContext, useState } from 'react'
import { ContextData, DataTodo, TypeValue } from '../contexts/ContextData';
import Todo from './Todo';

const ListTodo = () => {
    const { listTodo, setListTodo, isLoading } = useContext(ContextData) as TypeValue;
    const [valueInput, setValueInput] = useState("");

    console.log("Loading" + isLoading);
    


    const UpdateState = () => {
        setListTodo([...listTodo, {
            userId: 1,
            id: listTodo.length + 1,
            title: valueInput,
            completed: false
        }]);

        setValueInput("");
    }

    return (
        <>
            <div className='flex flex-col'>
                <input type='text' style={{width:"80%", height: "40px"}} value={valueInput} onChange={(e) => setValueInput(e.target.value)}></input>
                <button style={{marginLeft: "10px"}} onClick={UpdateState}>Add todo</button>
            </div>
            {isLoading ? <div>Loading...</div> : listTodo == null ? <div>Not todo</div> : <div className=''>{
                listTodo.map((item: DataTodo) => <div>
                    <Todo {...item}></Todo>
                </div>)
            }</div>
            }

        </>
    )
}

export default ListTodo