import { useContext } from 'react'
import { ContextData } from '../contexts/ContextData';

const Todo = () => {
    const { listTodo, setListTodo } = useContext(ContextData);
    const UpdateState = () => {
        setListTodo([{
            id: 2,
            title: "React2",
            description: "Learn2"
        }]);
    }

    return (
        <>
            <div>{listTodo[0].id}</div>
            <button onClick={UpdateState}>Update</button>
        </>
    )
}

export default Todo