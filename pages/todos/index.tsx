import Nav from "@/components/Nav";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const Todos : React.FC<{data: Todo[]}> = ({data}) => {
    return (
        <main>
            <Nav />
            <h1>Todos</h1>
            <section style={{display: "flex", flexDirection: "column", gap: ".8rem"}}>
                {
                    data?.map(todo => {
                        return (
                            <section key={todo?.id} style={{padding: "1rem", border: "1px solid black", cursor: "pointer"}}>
                                <Link href={`/todos/${todo?.id}`}>{todo?.title}</Link>
                            </section>
                        )
                    })
                }
            </section>
        </main>
    )
}

export const getServerSideProps : GetServerSideProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return {
        props: {data}
    }
}

export default Todos;