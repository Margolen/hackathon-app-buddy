import FirstScreen from '../first-screen/FirstScreen';
import ListLanguage from '../list-language/list-language';
import Header from '../header/Header';
import FriendsSection from '../friends/friends';
import Form from '../form/Form';
import Footer from '../footer/footer';


import './app.css';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <FirstScreen></FirstScreen>
            <ListLanguage></ListLanguage>
            <FriendsSection></FriendsSection>
            <Form></Form>
            <Footer></Footer>  
        </div>
);
}

export default App;