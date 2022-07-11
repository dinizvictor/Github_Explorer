interface RepositoryItemProps { //Tipo da propriedade
    repository: {
        name: string;
        description: string;
        html_url: string;
    }

}

export function RepositoryItem(props: RepositoryItemProps) {

    return (

        <li>
            {/* Em props.repository?.name verifica se repository é nulo ou não. 
                Caso não seja, name é acessado. Caso seja, name não será 
                acessado e Default é retornado */}
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>

    );


}