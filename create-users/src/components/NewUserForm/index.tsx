import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { Container } from "./styles";
import * as singleSpa from "single-spa";
import { client } from "../../lib/apollo";

const CREATE_USER = gql`
    mutation ($name: String!) {
        createUser(name: $name) {
            id,
            name
        }
    }
`

export function NewUserForm() {
    const [name, setName] = useState("")
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER)

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault();

        if (!name) return;

        await createUser({
            variables: {
                name
            }
        })

        if (error) return;

        singleSpa.navigateToUrl("/");
    }

    return (
        <Container>
            <h1>Criar usuário</h1>
            <form onSubmit={handleCreateUser}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </Container>
    );
}