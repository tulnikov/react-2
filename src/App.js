import './App.css';
import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserList";
import {useState} from "react";

function App() {

    const [userList, setUserList] = useState([])

    const onCreateUserHandler = (name,age) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name:name ,age: age ,id:Math.random().toString()}];
        })
    }

    return (<div>
            <CreateUser onCreateuser = {onCreateUserHandler}/>
            <UserList users={userList}/>
        </div>
    );
}

export default App;
