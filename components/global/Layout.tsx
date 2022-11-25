import Header from '@components/Header/Header';
import Foooter from '@components/Footer/Footer';
import AppHead from './Head';
import Image from 'next/image';

import { useRouter} from 'next/router';

type Props = {
    children: React.ReactNode;
    title?: string;
    
};

const Layout = ({ children, title }: Props) => {
    const router = useRouter();

    return (
        <>
            <div className="relative flex flex-col min-h-screen">
                   
                <AppHead title={title} />
                <Header  />
                <main className="relative flex-grow pt-[60px] flex flex-col">
                <Image
                fill
                className='object-contain -z-50'
                src="/images/tdh-small-web.png"
                alt="TDH"
                quality={100}
                />
                <div className="absolute w-full h-full bg-black bg-opacity-90 -z-40 block "></div>
                    {children}
                </main>
                <Foooter />
            </div>
        </>
    );
}

export default Layout;
