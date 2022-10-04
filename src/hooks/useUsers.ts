import axios from "axios";
import { useEffect, useState } from "react";

type UsersById = {
  [key: string]: User
}

function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [usersById, setUsersById] = useState<UsersById>({});

  useEffect(() => {
    const fetchTeams = async () => {
      const allUsers: User[] = (await axios.get(
        "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/"
      )).data as User[];

      setUsers(allUsers);

      const byId: UsersById = {};
      allUsers.forEach(u => {
        byId[u.id] = u;
      })

      setUsersById(byId);
    };
    fetchTeams();
  }, []);

  return {users, usersById};
}

export {
    useUsers
}
