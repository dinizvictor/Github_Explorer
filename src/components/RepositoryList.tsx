import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

interface Repository { //Tipo do estado

    name: string;
    description: string;
    html_url: string;

}

export function RepositoryList() {
    //useState<type> >> Generic do typescript para especificar o tipo do estado. type[] quando for um array.
    const [repositories, setRepositories] = useState<Repository[]>([]); //Iniciando a lista de repositórios.
    // A chamada à API justifica a utilização de estados para armazenar os repositórios, pois
    // existe um tempo até a informação ser entregue à aplicação e a interface precisa ser capaz
    // de lidar com essa dinamicidade.

    //* O useEffect é outro hook do React que é amplamente usado. Ele dispara uma função quando
    //  algo (uma variável muda seu valor, etc) acontece.

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);
    //P1 - Função a ser executada; P2 - Variável a ser vigiada (dependências).
    //* Caso [] seja fornecido como dependência do useEffect, a função será executada uma única
    //  vez quando o componente for exibido em tela. Se nada for passado no segundo parâmetro,
    //  o useEffect entrará em loop.

    return ( //Parênteses no return sempre quando formos retornar mais de uma linha de HTML.

        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>

                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}

                {/* Alternativa:
                    {repositories.map(repository => (<RepositoryItem repository={repository} />))} 
                */}

            </ul>
        </section>

    );

}