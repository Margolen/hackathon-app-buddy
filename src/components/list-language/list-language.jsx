import './list-language.css';

const ListLanguage = () =>{
    return(
    <div className='list_wrapper'>
        <div className="stylelanguages">
            <h2>Я хочу изучать..</h2>
        </div>

        <div className="container">
            <div className="item item1">
                <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JS" title="JS"
                    width="70" height="70"/>
            </div>
            <div className="item item2"> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1024px-Python.svg.png"
                    alt="Python" title="Python" width="70" height="70"/></div>
            <div className="item item3">
                <img src="https://www.svgrepo.com/show/353924/java.svg" alt="Java" title="Java"
                    width="70" height="70"/></div>
            <div className="item item4">
                <img src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
                    alt="C#" title="C#" width="70" height="70"/></div>
            <div className="item item5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
                    alt="C++" title="C++" width="70" height="70"/></div>
            <div className="item item6">
                <img src="https://cdn.worldvectorlogo.com/logos/swift-15.svg" alt="Swift" title="Swift"
                    width="70" height="70"/></div>
            <div className="item item7">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin"
                    title="Kotlin" width="70" height="70"/></div>
            <div className="item item8">
                <img src="https://cdn.worldvectorlogo.com/logos/go-logo-1.svg" alt="Go" title="Go"
                    width="70" height="70"/></div>
            <div className="item item9">JS</div>
            <div className="item item10">Python</div>
            <div className="item item11">Java</div>
            <div className="item item12">C#</div>
            <div className="item item13">C++</div>
            <div className="item item14">Swift</div>
            <div className="item item15">Kotlin</div>
            <div className="item item16">Go</div>
        </div>
    </div> 
    )
}

export default ListLanguage;