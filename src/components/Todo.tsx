import { IconContext } from 'react-icons';
import { ContextData, DataTodo } from '../contexts/ContextData';
import { SiCheckmarx } from "react-icons/si";
import { useContext } from 'react';

const Todo = (dataTodo: DataTodo) => {
    const {listTodo, setListTodo} = useContext(ContextData);
    const styleText = dataTodo.completed ? {textDecorationLine: "line-through", height: "50px", display: "flex", textAlign: "start"} : {height: "50px", textAlign: "start"};
    const CheckDoneTodo = () => {
        const fakeData = [...listTodo];
        fakeData.map((item) => {
            if (item.id === dataTodo.id) {
                fakeData[item.id - 1] = {
                    userId: dataTodo.userId,
                    id: dataTodo.id,
                    title: dataTodo.title,
                    completed: true
                }
            }
        });
        setListTodo([...fakeData]);
    }

    return (
        <>
            <IconContext.Provider value={{color: 'blue'}}>
                <div onClick={CheckDoneTodo} style={{ display: "flex", paddingTop: "20px", paddingLeft: "5%", paddingRight: "5%", marginTop: "10px", backgroundColor: "gray", justifyContent: "space-between"}}>
                    <div style={styleText}>{dataTodo.id} {dataTodo.title} {dataTodo.completed ? "true" : "false"}</div>
                    {dataTodo.completed ? <SiCheckmarx></SiCheckmarx> : <></>}
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Todo 