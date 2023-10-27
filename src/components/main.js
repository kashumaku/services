import { useEffect, useState } from "react";
import Card from "./Card";
import "./main.css"
const Main = () => {
    const [slider, setSlider] = useState(0)
    const data = [
        {
            id: 1,

            title: "Best cloud internet service",
            image: "/image/1.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rerum nobis labore earum reprehenderit adipisci! Sunt similique tempora libero atque, facilis doloremque? Enim cupiditate officia blanditiis nostrum saepe eaque aliquid."

        },
        {
            id: 2,
            title: "Best cloud  service",
            image: "/image/2.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rerum nobis labore earum reprehenderit adipisci! Sunt similique tempora libero atque, facilis doloremque? Enim cupiditate officia blanditiis nostrum saepe eaque aliquid."
        },
        {
            id: 3,

            title: "Best Web communication service",
            image: "/image/3.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rerum nobis labore earum reprehenderit adipisci! Sunt similique tempora libero atque, facilis doloremque? Enim cupiditate officia blanditiis nostrum saepe eaque aliquid."
        },
        {
            id: 1,

            title: "Best cloud internet service",
            image: "/image/1.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rerum nobis labore earum reprehenderit adipisci! Sunt similique tempora libero atque, facilis doloremque? Enim cupiditate officia blanditiis nostrum saepe eaque aliquid."

        },
        {
            id: 2,
            title: "Best cloud  service",
            image: "/image/2.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rerum nobis labore earum reprehenderit adipisci! Sunt similique tempora libero atque, facilis doloremque? Enim cupiditate officia blanditiis nostrum saepe eaque aliquid."
        },
        {
            id: 3,

            title: "Best Web communication service",
            image: "/image/3.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rerum nobis labore earum reprehenderit adipisci! Sunt similique tempora libero atque, facilis doloremque? Enim cupiditate officia blanditiis nostrum saepe eaque aliquid."
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {


            setSlider((prev) => {
                if (prev === data.length - 1)
                    return 0

                return prev + 1
            })

        }, 5000);

        return () => clearInterval(interval)
    }
    )
    return (
        <div className="main">


            <div className="top" >
                {
                    data.map(d => (
                        <div className="service flexColumn" key={d.id} style={{ backgroundImage: `url(${d.image})`, transform: `translateX(${-(slider * 100)}vw)`, transition: `${slider === 6 ? 'none' : 'all 4s'}` }}>
                            <p>Looking for the the</p>
                            <h1>{d.title}</h1>
                            <button className="btn topbtn">Get started</button>
                        </div>
                    ))
                }
                <div className="move moveLeft">V</div>
                <div className="move moveRight">V</div>
            </div>
            <div className="bottom flexColumn">
                <div className="about flexColumn">
                    <h2>About</h2>
                    <h1 className="title">Open Waves</h1>
                    <p className="aboutDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, laborum amet maiores dolorem eius placeat quasi obcaecati illo eum, aliquid ea totam asperiores magnam dolore sunt soluta qui cum rem.</p>
                </div>
                <div className="cards flexCenter">
                    {data.map(d => (
                        <Card icon={d.image} title={d.title.slice(5)} desc={d.desc} />
                    ))}
                </div>
                <div>
                    <button className="mainbtn">Show more</button>
                </div>
            </div>
        </div>
    );
}

export default Main;