'use client'


export default function Page(
    {params}: {
        params: {
            idUsuario: string;
            semestre: string;
            materia: string;
        }
    }
) {
    return (
        <>
            <div className={"container"}>
                <p>Usuario:{params.idUsuario}/Semestre:{params.semestre}/Materia:{params.materia}</p>
            </div>
        </>
    )
}