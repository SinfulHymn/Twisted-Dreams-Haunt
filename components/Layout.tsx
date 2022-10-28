import Header from '@components/Header/Header';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
}

export default Layout;
