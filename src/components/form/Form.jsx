import './form.css';

const Form = () => {
    return(
        <div className="form__block">
                <div className="form__image">
                    <img src="img/form.jpg" alt="form" />
                </div>
                <div className="form__container">
                <h2 className="title">Начни практиковаться сейчас</h2>
                <form action="" className="form">
                    <label htmlFor="">Имя</label>
                    <input type="text" />
                    <label htmlFor="">Язык программирования</label>
                    <select name="" id="">
                        <option value="javascript">javascript</option>
                        <option value="javascript">C++</option>
                        <option value="javascript">Go</option>
                        <option value="javascript">C#</option>
                        <option value="javascript">Kotlin</option>
                    </select>
                    <label htmlFor="">Онлайн/Оффлайн</label>
                    <select name="" id="">
                        <option value="javascript">Онлайн</option>
                        <option value="javascript">Оффлайн</option>
                        <option value="javascript">Оба варианта</option>
                    </select>
                    <label htmlFor="">Навык владения</label>
                    <select name="" id="">
                        <option value="javascript">Junior</option>
                        <option value="javascript">Middle</option>
                        <option value="javascript">Senior</option>
                    </select>
                    <button className="btn" type="submit">
                        Отправить
                    </button>
                </form>
                </div>
        </div>
    )
}

export default Form;
