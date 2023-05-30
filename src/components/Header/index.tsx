import './style.css'
export const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="menu">
                        <div className="logo_pokebola">
                            <a href="/"><img src="src/assets/images/pokebola.png" alt="logo de uma pokebola" /></a>
                        </div>
                        <div className="pokemon">
                            <img src="src\assets\images\pokemon.webp" alt="logo escrito pokemon" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}