import { useState } from "react"
import axios from "axios"
import classes from "../sass/index.module.sass"


const Create = () => {
    const [postData, setPostData] = useState("");
    const [inputData, setInputData] = useState("");

    const inp = () => {
        if (inputData.trim() !== "") {
            setPostData(e.value)
        }else{
            alert("Please enter text!!!")
        }
    }
    const handlePostRequest = async () => {
        try {
            const response = await axios.post('https://dummyjson.com/posts/add', {title:inputData,userId:1, });
            console.log('Ответ на POST-запрос:', response.data);
        } catch (error) {
            console.error('Ошибка при выполнении POST-запроса:', error);
        }
    };

    return (
        <div >
            <div className={classes.create}>
                <h1>Post push</h1>
                <button onClick={handlePostRequest}>POST-запрос</button>
                <input onChange={(e) =>  setInputData(event.target.value)} />

            </div>

        </div>
    )
}

export default Create;