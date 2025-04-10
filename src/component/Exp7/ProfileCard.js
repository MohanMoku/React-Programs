import React from 'react'

function ProfileCard(props) {
    return (
        <div71 style={{
            backgroundColor: props.themeColor,
            padding: '30px 0'
        }}>
            <div711 style={{ color: props.textColor }}>
                <img src={props.avatar} alt={props.name}
                    style={
                        {
                            width: '100%',
                            height: '100%',
                            scale: '1.7',
                            transformOrigin: 'top center'
                        }} />
            </div711>
            <div712 style={{ color: 'white' }}>
                <h2>{props.name}</h2>
                <p>{props.bio}</p>
            </div712>
        </div71>
    )
}

export default ProfileCard