import React, { createContext, useContext, useState } from 'react'
import Todo from './Todo';
import { ContextData, DataProvider } from '../contexts/ContextData';

const Home = () => {
    
    return (
        <>
            <DataProvider >
                <Todo></Todo>
            </DataProvider>
        </>
    )
}

export default Home