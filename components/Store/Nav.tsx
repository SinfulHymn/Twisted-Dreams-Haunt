
import Link from "next/link";
const Nav = () => {
    return (
        <div className="flex justify-center items-center font-custom2 z-30 bg-slate-900 text-white">
            <ul className="flex justify-center items-center text-xl">
                <li>
                    <Link className="block p-4" href={'/merch'}>All Products</Link>
                </li>
                <li>
                    <Link className="block p-4" href={'/merch'}>Merch</Link>
                </li>
                <li>
                    <Link className="block p-4" href={'/merch'}>Merch</Link>
                </li>
            </ul>
        </div>
    );
}
    export default Nav;
