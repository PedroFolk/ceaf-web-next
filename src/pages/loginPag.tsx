import Header from './components/header'
import { links } from '../constants'
import Login from './components/login'


export default function loginPage() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <Login />
        </>

    )
}
