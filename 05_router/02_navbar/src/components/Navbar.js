import {NavLink} from "react-router-dom"

function Navbar() {

    const activeStyle = {
        backgroundColor: 'orangered',
    }
    return (
        <div>
            <ul>
                {/* <li>Home</li>
                <li>마이페이지</li>
                <li>로그인</li> */}

                {/* <li><a href={"/"}>Home</a></li>
                <li><a href={"/"}>마이페이지</a></li>
                <li><a href={"/"}>로그인</a></li> */}

                {/* <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/mypage">마이페이지</NavLink></li>
                <li><NavLink to="/login">로그인</NavLink></li> */}

                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle: undefined}>마이페이지</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle: undefined}>로그인</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;