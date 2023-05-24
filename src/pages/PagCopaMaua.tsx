import Header from './components/header'
import { links } from '../constants'
import { CopaMaua } from './components/copaMaua'

export default function PagCopa() {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <CopaMaua/>

        </>

    )
}
