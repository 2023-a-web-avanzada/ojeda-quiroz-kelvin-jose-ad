'use client'


export default function Page(
    {params}: {params: {idUsuario: string}}
){
    const semestres = ['2020A', '2020B']
    return (
        <>
            <div className={"container"}>
                <p>Ruta MOSTRAR USUARIO :
                    {params.idUsuario}</p>
                <ul>
                    {
                        semestres.map((semestre)=><li key={semestre}><a href={`/j_ruta/${params.idUsuario}/${semestre}`}>{semestre}</a></li>)
                    }
                </ul>
            </div>
        </>
    )
}