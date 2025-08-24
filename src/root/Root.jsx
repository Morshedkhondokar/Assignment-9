
import Navbar from '../Layout/Navbar';
import Home from '../pages/Home';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Home></Home>
            </main>
            <footer></footer>
            
        </div>
    );
};

export default Root;