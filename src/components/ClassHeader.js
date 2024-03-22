import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const ClassHeader = ({isClassSchedule, isSpringBreak, isSummerBreak}) => {
    //JS functions
    console.log("Hello from Class Header", isClassSchedule, isSpringBreak, isSummerBreak)
    const [isFallClassReady, setIsFallClassReady] = useState(false) //giving the default value i.e. false
    const [count, setCount] = useState(0)
    const [classRoomData, setClassRoomData] = useState(null)
    const [classRoomError, setClassRoomError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const fetchClassRoomAPI = async() => {

        try{
            setIsLoading(true)
            const response = await axios.post('https://localhost:8080/https-web-service/v1/classroom', {course: 'CS548'})
            setClassRoomData(response?.data)
        }
        catch{
            setClassRoomError(true)
        }
        finally{
            setIsLoading(false)
        }
        
    }

    useEffect( () => {
        console.log("Hello from useEffect Hooks")

        fetchClassRoomAPI()
    }, [count]) //everytime count value is changed, this hook will run. Otherwise, you can keep it empty.

    const handleClick = () => {
        if(isSummerBreak){
            //setIsFallClassReady(true)//we can pass any number even here suppose 120. It will work since JS is loosly typed
            setIsFallClassReady(!isFallClassReady)
            setCount(count+1)
        }
    }

    //console.log(isFallClassReady, "isFallClassReady")
    console.log(count)

    console.log(classRoomData, "This is the classroom")
    console.log(classRoomError, "This is the error")

    return(
        //HTML & CSS code
        <>Class Header
        <span>
            Clicked: {count}
        </span>

        <span>
            Class Room is: {classRoomData?.classroom}
        </span>

        <button onClick={handleClick}>Check</button> 
        {/* <button onClick={fetchClassRoomAPI}>Check</button>  */}
        </>
    )
}
