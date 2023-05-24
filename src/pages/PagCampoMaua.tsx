import Header from './components/header'
import { links } from '../constants'
import { CampoMaua } from './components/campoMaua'

export default function PagCampo() {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <CampoMaua/>

        </>

    )
}
