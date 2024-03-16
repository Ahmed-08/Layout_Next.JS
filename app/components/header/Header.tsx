import './header.scss';

export default function Header(props: any) {

    return <header>
        <img src="/vector45.png" alt="vector image" />
        <h1>{props.title}</h1>
    </header>
}