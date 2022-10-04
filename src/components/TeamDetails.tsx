import React from 'react';
import styled from 'styled-components';
import { useTeamsDetails } from '../hooks/useTeamDetails.ts';
import {useUserDetails} from "../hooks/useUserDetails"
import { useUsers } from '../hooks/useUsers.ts';
import UserDetails from "../components/UserDetails.tsx"

type TeamDetailsProps = {
    team?: Team
}

const TeamDetailsContainer = styled.div`
    width: 50%;
    color: white;
    background-color: black;
`

const Heading = styled.h1`
    margin-bottom: 50px;
`
const SubHeading = styled.h3`
    margin-top: 50px;
`


function TeamDetails({ team }: TeamDetailsProps) {

    const { teamDetails } = useTeamsDetails(team?.id);
  
    const { usersById } = useUsers();

    console.log({ teamDetails })



    if (!teamDetails) return null;

    return <TeamDetailsContainer>
        <Heading>{teamDetails.name}</Heading>

        <SubHeading>Team Leader</SubHeading>
        <div>{usersById[teamDetails?.teamLeadId]?.displayName}</div>

        <SubHeading>Team Members</SubHeading>
        {
            usersById && teamDetails.teamMemberIds?.map(teamMember => {
                return <div key={teamMember}>
                 
                <UserDetails teamMember={teamMember} />
                </div>
            })
        }
    </TeamDetailsContainer>
}

export default TeamDetails;