import { UserList } from "../../components/UserList";
import * as singleSpa from 'single-spa';
import { gql, useQuery } from "@apollo/client";
import { Container } from "./styles";

interface Users {
    id: string;
    name: string;
}

export const GET_USERS = gql`
    query {
        users {
            id,
            name
        }
    }
`

export function List() {
    const { loading, data } = useQuery<{ users: Users[] }>(GET_USERS);
    
    return (
        <Container>
            <h1>Lista de usuários</h1>
            <button
                type="button"
                onClick={() => singleSpa.navigateToUrl('create')}
            >
                Novo usuário
            </button>
            {
                loading ?
                    <p>Carregando...</p>
                    : <ul>
                        {data?.users.map(user => (
                            <UserList key={user.id} name={user.name} />
                        ))}
                    </ul>
            }
        </Container>
    );
}