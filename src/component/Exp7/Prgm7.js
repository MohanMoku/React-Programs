import React, { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard'

function Prgm7() {

    const userName = 'mohanmoku'
    const [userData, setUserData] = useState({})
    const [themeColor, setThemeColor] = useState(getRandomColor())

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color)
        return color;
    }
    const changeTheme = () => {
        setThemeColor(getRandomColor())
    }

    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch user data')
                }
                const data = await response.json()
                setUserData(data)
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchUserData()
    }, [userName])

    return (
        <div7>
            <h1>7. React Profile Card</h1>
            <button onClick={changeTheme}>Change Theme</button>
            <ProfileCard name ={userData.name} avatar={userData.avatar_url} bio={userData.bio} themeColor={themeColor} />
        </div7>
    )
}

export default Prgm7