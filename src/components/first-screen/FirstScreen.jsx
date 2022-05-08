import './first-screen.css';

const FirstScreen = () => {
    return(
        <div className="first-screen">
                <div className="first-screen__content">
                    <h1 className="first-screen__title">
                        Кодить вместе - <br /> веселее!
                    </h1>
                    <p className="first-screen__subtitle">
                        Найди напарника с CodeBuddy
                    </p>
                    <button className="btn">Оставить заявку</button>
                </div>
                <div className="first-screen__image">
                    <img src="img/first-screen.jpg" alt="" />
                </div>
        </div>
    )
}

export default FirstScreen;