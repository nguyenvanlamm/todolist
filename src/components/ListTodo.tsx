import { useContext, useState } from 'react'
import { ContextData, DataTodo } from '../contexts/ContextData';
import Todo from './Todo';

const ListTodo = () => {
    const { listTodo, setListTodo } = useContext(ContextData);
    const [valueInput, setValueInput] = useState("");

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
                <input type='text' value={valueInput} onChange={(e) => setValueInput(e.target.value)}></input>
                <button onClick={UpdateState}>Add todo</button>
            </div>
            {listTodo == null ? <div>Not todo</div> : <div className=''>{
                listTodo.map((item: DataTodo) => <div>
                    <Todo {...item}></Todo>
                </div>)
            }</div>
            }

        </>
    )
}

export default ListTodo