import axios from "axios";
import { useEffect, useState } from "react";

type UserDetailsCache = {
 [key: string]: UserDetails
}

function useUserDetails(userId: string, retrieve: boolean) {
  const [userDetailsCache, setUserDetailsCache] = useState<UserDetailsCache>({});
  const [userDetails, setUserDetails] = useState<UserDetails>();
  
  useEffect(() => {
    if(!retrieve) return
    if(userDetailsCache[userId]) {
      setUserDetails(userDetailsCache[userId]);
      return;
    }
    const fetchTeamDetails = async () => {
      const currentTeamDetails: UserDetails = (await axios.get(
        "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/" + userId 
        )).data as UserDetails;
        console.log({currentTeamDetails, userId})
        setUserDetails(currentTeamDetails);

        const cache = {...userDetailsCache, [userId]: currentTeamDetails}
        setUserDetailsCache(cache);
      };
      fetchTeamDetails();
      
    }, [userId, retrieve]);
    
  return {
    userDetails,
    userDetailsCache
  };
}

export {
    useUserDetails
}
