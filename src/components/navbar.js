import './navbar.css'
const Nav = () => {
    return (
        <div className="nav flexCenter ">
            <h1>Cloud <span> Services</span></h1>
            <ul className="menu flexAlignCenter">
                <li>wave communication</li>
                <li>Internet services</li>
                <li>Solution</li>
                <li>Contact us</li>
                <li className="phone">+251 974 65 886</li>
            </ul>

        </div>
    );
}

export default Nav;