import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import { useTeams } from './hooks/useTeams.ts';
import Teams from './components/Teams.tsx';
import TeamDetails from './components/TeamDetails.tsx';
import styled from 'styled-components';


const TwoPane = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Input = styled.input`
  padding: 10px;
  font-size: 2rem;
`

const LeftPane = styled.div`
  width: 50%;
`


function App() {

  const [currentTeam, setCurrentTeam] = useState<Team>()
  const [search, setSearch] = useState<string>('');

  const teams = useTeams();

  const onSelectTeam = useCallback((team) => {
    console.log("Searching", team)
    setCurrentTeam(team);
  }, [])

  const filteredTeams = useMemo(() => {
    console.log("PErforming filtering ", search)
    return teams.filter(team => team.name.toLowerCase().includes(search));
  }, [search])


  const TeamsDisplay = useMemo(() => {
    console.log("Recreating teams");
    return <Teams teams={filteredTeams} onSelectTeam={onSelectTeam} />;
  }, [filteredTeams])

  const TeamDetailsDisplay = useMemo(() => {
    return <TeamDetails team={currentTeam} />;
  }, [currentTeam])


  const filter = (e) => {
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <TwoPane>
        <LeftPane>
      <Input placeholder='Search by team name' onChange={filter} />
        {TeamsDisplay}

        </LeftPane>
        {TeamDetailsDisplay}
      </TwoPane>
    </div>
  );
}

export default App;
