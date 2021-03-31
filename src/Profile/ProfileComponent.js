import React, { Children } from 'react'

const ProfileComponent = ({donnee,handleName,children}) => {
    return (
        <div>

            <p> My name is {donnee.FullName} , I'm an {donnee.Bio} and my futur profession is {donnee.Profession}</p>
            <button onClick={() => handleName(donnee.FullName)}>Click me</button>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ProfileComponent
