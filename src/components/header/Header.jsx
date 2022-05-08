import { useEffect } from 'react'
import { useRef } from 'react'
import './header.css';

const Header = () => {
    const headerNav = useRef()
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 100){
            document.querySelector('.header').classList.add('_white')
        }else{
            document.querySelector('.header').classList.remove('_white')
        }
    })
    const showNav = (e) => {
        headerNav.current.classList.toggle('_active')
        e.target.classList.toggle('_active')
    }
const headerLinks = [
    {
        name: "Языки",
        link: "#"
    },
    {
        name: "Найти напарника",
        link: "#lala"
    },
]
return(
    <header className="header">
        <div className="container">
            <a href="/" className="header__logo" >CodeBuddy</a>
            <div className="header__nav" ref={headerNav}>
                {headerLinks.map(item => {
                    return <a href={item.link} key={item.link} className="header__link">{item.name}</a>
                })}
            </div>
            <div className="header__burger" onClick={showNav}>
                <div></div>
            </div>
        </div>
    </header>
)
}

export default Header;