import axios from "axios";
import { useEffect, useState } from "react";

function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    console.log("getting teams")

    const fetchTeams = async () => {
      const allTeams: Team[] = (await axios.get(
        "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/"
      )).data as Team[];
      setTeams(allTeams);
    };
    fetchTeams();

  }, []);

  return teams;
}

export {
    useTeams
}
