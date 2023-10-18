import { Encabezado } from "./componentes/encabezados/Encabezado"
import { BarraLateral } from "./componentes/barraLateral/BarraLateral"

export default function Home() {

  const options = ['Home', 'Empleadores', 'Buscando Trabajo'];

  return (
    <>
      <BarraLateral menu={options}/>
      <Encabezado />
      <main>
        <div>
          Buenas Mundo.
        </div>
      </main>
    </>
  )
}
