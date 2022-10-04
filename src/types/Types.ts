
interface Team {
    id: string;
    name: string;
}

interface User {
    id: string;
    displayName: string;
}

interface UserDetails extends User {
    firstName: string;
    lastName: string;
    avatarUrl: string;
    location: string;
}

interface TeamDetails extends Team {
    teamLeadId: string;
    teamMemberIds: string[];
}