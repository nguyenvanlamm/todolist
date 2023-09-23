import { createContext, useEffect, useReducer, useState } from "react";


export interface DataTodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const defaultValue: DataTodo[] = [{
    userId: 1,
    id: 0,
    title: "REACT1",
    completed: false
}
]

export interface TypeValue {
    listTodo: DataTodo[],
    setListTodo: React.Dispatch<React.SetStateAction<DataTodo[]>>,
    isLoading: boolean
}


export const ContextData = createContext<TypeValue | undefined>(undefined);

interface typeData {
    children: React.ReactNode
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "loading":
            return true
        case "loaded":
            return false
        default:
            return false
    }
}

export const DataProvider = ({ children }: typeData) => {
    const [listTodo, setListTodo] = useState<DataTodo[]>(defaultValue);
    const [isLoading, Setload] = useReducer(reducer, true);
    useEffect(() => {
        Setload({ type: "loading" });
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((respon) => respon.json())
                .then((respons) => {
                    setListTodo(respons);
                    Setload({ type: "loaded" });
                }
                )
                .catch(err => console.log(err));
        }, 5000);
    }, [])

    return <ContextData.Provider value={{ listTodo, setListTodo, isLoading }}>
        {children}
    </ContextData.Provider>
}