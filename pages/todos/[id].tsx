import Nav from "@/components/Nav";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const Todo : React.FC<{todo: Todo}> = ({todo}) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div key={todo?.id}>
            <Link href="/todos">Back</Link>
            <h2>Todo: {todo?.title}</h2>
            {
                todo?.completed?
                    <p>Completed</p> :
                    <p>Not completed</p>
            }
        </div>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
    const { id } = context.query;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await response.json();

    return {
        props: {todo}
    }
}

export default Todo;