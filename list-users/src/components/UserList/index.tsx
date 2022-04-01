import { List } from "./styles";
interface UsersProps {
    name: string;
}

export function UserList({ name }: UsersProps) {
    return (
        <List>{name}</List>
    );
}