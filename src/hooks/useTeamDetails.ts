import axios from "axios";
import { useEffect, useState } from "react";

type TeamDetailsCache = {
 [key: string]: TeamDetails
}

function useTeamsDetails(teamId: string) {
  const [teamDetailsCache, setTeamDetailsCache] = useState<TeamDetailsCache>({});
  const [teamDetails, setTeamDetails] = useState<TeamDetails>();
  
  useEffect(() => {
    if(teamDetailsCache[teamId]) {
      setTeamDetails(teamDetailsCache[teamId]);
      return;
    }
    const fetchTeamDetails = async () => {
      const currentTeamDetails: TeamDetails = (await axios.get(
        "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/" + teamId 
        )).data as TeamDetails;
        console.log({currentTeamDetails, teamId})
        setTeamDetails(currentTeamDetails);

        const cache = {...teamDetailsCache, [teamId]: currentTeamDetails}
        setTeamDetailsCache(cache);
      };
      fetchTeamDetails();
      
    }, [teamId]);
    
  return {
    teamDetails,
    teamDetailsCache
  };
}

export {
    useTeamsDetails
}
