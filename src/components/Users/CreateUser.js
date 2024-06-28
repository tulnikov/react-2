import Card from '../UI/Card'
import styles from './createUser.module.css'
import Button from '../UI/Button'
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {


    const [inputName, setInputName] = useState('')
    const [inputAge, setInputAge] = useState('')
    const [error, setError] = useState()

    const createUserHandler = (event) => {
        event.preventDefault();
        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({
                title:
                    'Некорректный ввод',
                message:
                    'Эти поля не могут быть пустыми'
            })
            return
        }
        if (+inputAge < 1) {
            setError({
                title:
                    'Некорректный возраст',
                message:
                    'Возраст должен быть больше 0'
            })
            return;
        }
        // console.log(inputName, inputAge)

        props.onCreateuser(inputName, inputAge)
        setInputName('')
        setInputAge('')
    }

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    }

    const errorHandler = () => {
        setError(false)
    }

    return (
        <div>
            {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor='name'>Имя</label>
                    <input type='text' id='name' onChange={nameChangeHandler} value={inputName}/>
                    <label htmlFor='age'>Возраст</label>
                    <input type='text' id='age' onChange={ageChangeHandler} value={inputAge}/>
                    <Button type='submit'>Добавить пользователя</Button>
                </form>
            </Card>
        </div>
    )
}

export default CreateUser