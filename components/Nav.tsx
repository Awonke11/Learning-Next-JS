import Link from "next/link"

const Nav = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/todos">Todos</Link>
        </nav>
    )
}

export default Nav;