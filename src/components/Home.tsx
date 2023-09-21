import ListTodo from './ListTodo';
import { DataProvider } from '../contexts/ContextData';

const Home = () => {

    return (
        <>
            <DataProvider >
                {/* <h1>List </h1> */}
                <ListTodo></ListTodo>
            </DataProvider>
        </>
    )
}

export default Home