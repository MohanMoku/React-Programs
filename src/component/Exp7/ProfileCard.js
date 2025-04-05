import React from 'react'

function ProfileCard(props) {
    return (
        <div71 style={{ backgroundColor: props.themeColor }}>
            <div711>
                <img src={props.avatar} alt={props.name} />
            </div711>
            <div712>
                <h2>{props.name}</h2>
                <p>{props.bio}</p>
            </div712>
        </div71>
    )
}

export default ProfileCard