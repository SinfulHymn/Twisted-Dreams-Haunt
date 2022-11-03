const Nav = () => {
    const { data, loading, error } = useQuery(GET_MERCH);
    if (loading) return <Loading />;
    if (error) return <Error />;
    return (
        <nav>
        <ul>
            {data.merch.map((item) => (
            <li key={item.id}>
                <Link href={`/merch/${item.id}`}>
                <a>{item.name}</a>
                </Link>
            </li>
            ))}
        </ul>
        </nav>
    );
    }
    export default Nav;
    