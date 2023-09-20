import { createContext, useState } from "react";


interface DataTodo {
    id: number,
    title: string,
    description: string
}

const defaultData: DataTodo[] = [{
    id: 1,
    title: "React",
    description: "Learn"
}]

export const ContextData = createContext();

interface typeData {
    children: React.ReactNode
}

export const DataProvider = ({ children }: typeData) => {
    const [listTodo, setListTodo] = useState(defaultData);

    return <ContextData.Provider value={{listTodo, setListTodo}}>
        {children}
    </ContextData.Provider>
}