import { useEffect, useState } from "react"
import '../style.css'

function Card() {
    const [userData, setUsterData] = useState(null)

    const fetchUserData = () => {
        const url = 'https://randomuser.me/api/?results=1'

        fetch(url)
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            setUsterData(data.results[0])
        })
    }

    useEffect(() => {
        fetchUserData()

    }, [])
        if(!userData){
            return "loading....."
        }
    return(
        <div>
            <div className="containerCol">
                <div className="containerRow">
                    <img src= {userData.picture.large} alt=""/>
            </div>
                <div className="containerRowText">
                    <ul>
                        <h1>Name: <div className='resp' id="text"> {userData.name.first} {userData.name.last}</div></h1>
                        <li>Email: <br/> <div className="resp">{userData.email}</div></li>
                        <li>DOB: <br/><div className="resp">{userData.dob.date}</div></li>
                        <li>Address: <br/><div className="resp">{userData.location.street.number} {userData.location.street.name} <br/>{userData.location.city} ,{userData.location.state}, {userData.location.country}</div></li>
                        <li>Phone: <div className="resp">{userData.phone}</div></li>
                    </ul>
                </div>
                <button onClick={fetchUserData}>New Person</button>
                <br/>
            </div>

        </div>
    )
}

export default Card