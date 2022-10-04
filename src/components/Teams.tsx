import React from 'react';
import styled from 'styled-components';

type TeamsProps = {
    teams: Team[],
    onSelectTeam: (team: Team) => void
}

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
`

const TeamInfo = styled.div`
    background-color: gray;
    margin: 20px;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`;

function Teams({ teams, onSelectTeam }: TeamsProps): JSX.Element {


    return <TeamContainer>
        {
            teams.map(team => {
                return (<TeamInfo key={team.id} onClick={() => onSelectTeam(team)}>
                    {team.name}
                </TeamInfo>)
            })
        }

    </TeamContainer>

}

export default Teams;