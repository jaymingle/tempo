import React, { useState } from "react";
import styledComponents from "styled-components";
import { useUserDetails } from "../hooks/useUserDetails.ts";
import { useUsers } from "../hooks/useUsers.ts";


type UserDetailsProps = {
    teamMember: any
}
const SeeMore = styledComponents.span`
    margin-left: 1rem;
    font-size: 0.7rem;
    cursor: pointer;
    color: blue;

`
const Wrapper = styledComponents.div`
`
const  User = styledComponents.div`
    background-color: grey;
    margin: 30px;
    border-radius: 10px
`

function UserDetails({teamMember}:UserDetailsProps){

    const { usersById } = useUsers();
    const [showDetails, setShowDetails]  = useState(false)

    const {userDetails} = useUserDetails(teamMember, showDetails)

    const handleGetUserDetails = () =>{
        setShowDetails(true)
    }
    console.log("user details ==>", userDetails)
    return (
        <div>
            { !userDetails &&  usersById[teamMember]?.displayName}
            {/* {!userDetails && <p>{teamMember.name}</p>} */}

            {userDetails && (<User>
                <p>{userDetails.firstName} {userDetails.lastName}</p>            
                <p>{userDetails.location}</p>
                <img src={userDetails.avatarUrl}  />
            </User>)}

            {!showDetails && 
            <SeeMore onClick={handleGetUserDetails}>See more...</SeeMore>
            }
        </div>
    )

}

export default UserDetails