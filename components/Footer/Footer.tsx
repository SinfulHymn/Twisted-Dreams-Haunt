const Footer = () =>{
    return (
        <footer className="relative w-full min-h-[400px] bg-contain bg-no-repeat bg-footer bg-center -z-50 overflow-hidden">
            
            <div className="absolute w-full h-full bg-black bg-opacity-40 -z-40"></div>
            
            <div className="absolute w-full h-full flex justify-center items-center text-white">
                <div>
                    <p>
                        Twisted Dreams Haunted House 
                        <br />
                        2020 Warren St, Orange County, CA 90000
                    </p>
                </div>
                <div>
                    <p>
                        Copyright © 2022 Twisted Dreams Haunted House
                    </p>
                    <p>
                        Created by <a href="https://github.com/Kmachappy" target="_blank" rel="noreferrer">Alejandro Rojas</a>
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer