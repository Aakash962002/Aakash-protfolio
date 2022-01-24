import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineGitlab,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return ( <
        Container fluid className = "home-about-section"
        id = "about" >
        <
        Container >
        <
        Row >
        <
        Col md = { 8 }
        className = "home-about-description" >
        <
        h1 style = {
            { fontSize: "2.6em" }
        } >
        LET ME < span className = "purple" > INTRODUCE < /span> MYSELF < /h
        1 >
        <
        p className = "home-about-body" >
        I am Junior Backend Developer <
        br / >
        <
        br / >
        I am fluent in classics like < i >
        <
        b className = "purple" > C++, Javascript and PHP. < /b> < /i > < br / >
        <
        br / >
        My field of Interest 's are building new &nbsp; <i > <
        b className = "purple" > Web Technologies and Products < /b> and
        also in areas related to { " " } <
        b className = "purple" >
        Web Development and Mobile Application Development. <
        /b> < /
        i > <
        br / >
        <
        br / >
        Whenever possible, I also apply my passion
        for developing products with < b className = "purple" > Node.js < /b> and <
        i >
        <
        b className = "purple" > { " " }
        Modern Javascript Library and Frameworks <
        /b> < /
        i > &
        nbsp; like <
        i >
        <
        b className = "purple" > React.js and PHP < /b> < /
        i > <
        /p> < /
        Col > <
        Col md = { 4 }
        className = "myAvtar" >
        <
        Tilt >
        <
        img src = { myImg }
        className = "img-fluid"
        alt = "avatar" / >
        <
        /Tilt> < /
        Col > <
        /Row> <
        Row >
        <
        Col md = { 12 }
        className = "home-about-social" >
        <
        h1 > FIND ME ON < /h1> <
        p >
        Feel free to < span className = "purple" > connect < /span>with me < /
        p > < ul className = "home-about-social-links" >

        <
        li className = "social-icons" >
        <
        a href = "https://github.com/Aakash962002"
        target = "_blank"
        rel = "noreferrer"
        className = "icon-colour  home-social-icons" >
        <
        AiFillGithub / >
        <
        /a>  < /
        li > <
        li className = "social-icons" >
        <
        a href = "https://gitlab.com/aakash211"
        target = "_blank"
        rel = "noreferrer"
        className = "icon-colour  home-social-icons" >
        <
        AiOutlineGitlab / >
        <
        /a>  < /
        li >

        <
        li className = "social-icons" >
        <
        a href = "https://www.linkedin.com/in/aakash-bansal-82a103206/"
        target = "_blank"
        rel = "noreferrer"
        className = "icon-colour  home-social-icons" >
        <
        FaLinkedinIn / >
        <
        /a> < /li >
        <
        li className = "social-icons" >
        <
        a href = "https://www.instagram.com/_aakash_b962002/?igshid=16ng2qluzdl1r"
        target = "_blank"
        rel = "noreferrer"
        className = "icon-colour home-social-icons" >
        <
        AiFillInstagram / >
        <
        /a> < /
        li > <
        /ul> < /
        Col > <
        /Row> < /
        Container > <
        /Container>
    );
}
export default Home2;
ps: //www.linkedin.com/in/aakash-bansal-82a103206/"
    target = "_blank"
rel = "noreferrer"
className = "icon-colour  home-social-icons" >
    <
    FaLinkedinIn / >
    <
    /a> < /li >
    <
    li className = "social-icons" >
    <
    a href = "https://www.instagram.com/_aakash_b962002/?igshid=16ng2qluzdl1r"
target = "_blank"
rel = "noreferrer"
className = "icon-colour home-social-icons" >
    <
    AiFillInstagram / >
    <
    /a> < /
li > <
    /ul> < /
Col > <
    /Row> < /
Container > <
    /Container>
);
}
export default Home2;