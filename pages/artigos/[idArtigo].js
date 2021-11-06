import { useRouter } from 'next/router'
const DetalhesPage = () => {
    const router = useRouter()
    console.log(router.query.idArtigo)
    return <h1>
        Detalhes
    </h1>
}

export default DetalhesPage