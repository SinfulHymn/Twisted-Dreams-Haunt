import Header from '@components/Header/Header';
import Foooter from '@components/Footer/Footer';

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
            <Foooter />
        </div>
    );
}

export default Layout;
