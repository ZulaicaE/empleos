import './barraLateral.css'

export const BarraLateral = (props: any) => {
    const { menu } = props;

    /*
    const objeto = {
        nombre: 'Emiliano',
        direccion: {
            calle: 'Berlin',
            altura: 1989
        }
    }

    const { nombre, direccion: { calle, altura } } = objeto;
    
    Barra Lateral: {nombre} vive en {calle} en la altura {altura}.
    */



    return (
        <div className="divBarraLateral">
            <ul className="list-group">
                {menu.map((item: string) => <li key={`menuIt${item}`} className="list-group-item">{item}</li>)}
            </ul>
        </div>
    )
}