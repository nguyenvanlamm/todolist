import { createContext, useEffect, useState } from "react";


export interface DataTodo {
    userId: number,
    id: number,
    title: string,
    completed: false
}

export const defaultValue: DataTodo[] = [{
    userId: 1,
    id: 0,
    title: "REACT1",
    completed: false
}, {
    userId: 1,
    id: 1,
    title: "REACT2",
    completed: false
}
]

export const ContextData = createContext();

interface typeData {
    children: React.ReactNode
}

export const DataProvider = ({ children }: typeData) => {
    const [listTodo, setListTodo] = useState<DataTodo[]>(defaultValue);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((respon) => respon.json())
            .then((respons) => {
                setListTodo(respons);
            }
            )
            .catch(err => console.log(err));
    }, [])

    return <ContextData.Provider value={{ listTodo, setListTodo }}>
        {children}
    </ContextData.Provider>
}