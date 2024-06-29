import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
           <Link to={"/"}>Home</Link>
           <Link to={"/login"}> login</Link>

            <h3>this is home</h3>
        </div>
    );
};

export default Home;