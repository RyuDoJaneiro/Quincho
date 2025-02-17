import webLogo from '../assets/WebLogo.png'

function HomeView()
{
        return (
                <>
                        <img alt="Nothing" src={webLogo} width={190} className="absolute z-1 top-30 left-130"/>
                        <p className="absolute z-1 top-110 left-85 text-[#eda274] font-bold">
                        Descubre los mejores quinchos para tus reuniones, asados y eventos especiales.
                        </p>
                </>
        )
}

export default HomeView;