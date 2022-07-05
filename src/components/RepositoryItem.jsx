export function RepositoryItem(props) {

    return (

        <li>
            {/* Em props.repository?.name verifica se repository é nulo ou não. 
                Caso não seja, name é acessado. Caso seja, name não será 
                acessado e Default é retornado */}
            <strong>{props.repository?.name ?? 'Default'}</strong>
            {/*Se repository for vazio, recebe default*/}
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>
                Acessar repositório
            </a>
        </li>

    );


}