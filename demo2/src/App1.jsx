// https://codesandbox.io/p/sandbox/react-props-8xxq5

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            
            <div className="card">
                <div className="top">
                    <h2 className="name">Beyonce</h2>
                    <img
                        className="circle-img"
                        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                        alt="avatar_img"
                    />
                </div>
                <div className="bottom">
                    <p className="info">+123 456 789</p>
                    <p className="info">b@beyonce.com</p>
                </div>
            </div>

            <div className="card">
                <div className="top">
                    <h2 className="name">Jack Bauer</h2>
                    <img
                        className="circle-img"
                        src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                        alt="avatar_img"
                    />
                </div>
                <div className="bottom">
                    <p className="info">+987 654 321</p>
                    <p className="info">jack@nowhere.com</p>
                </div>
            </div>

            <div className="card">
                <div className="top">
                    <h2 className="name">Chuck Norris</h2>
                    <img
                        className="circle-img"
                        src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                        alt="avatar_img"
                    />
                </div>
                <div className="bottom">
                    <p className="info">+918 372 574</p>
                    <p className="info">gmail@chucknorris.com</p>
                </div>
            </div>
        </div>
    )
}

export default App
