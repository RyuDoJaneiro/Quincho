function NavBar()
{
        return (
                <nav className="absolute z-1 text-white top-18 font-bold">
                        <ul className="flex row [&_:is(li)]:pl-5 p-2">
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/reservation">Mi perfil</a></li>
                        </ul>
                </nav>
        )
}

export default NavBar;