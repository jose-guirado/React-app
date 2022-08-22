import './Footer.css';

function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    {/* Facebook */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
                        <img src="https://i.im.ge/2022/08/22/OhonaC.facebook.png" alt="facebook" />
                    </a>

                    {/* Instagram */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button">
                        <img src="https://i.im.ge/2022/08/22/OhXXir.instagram.png" alt="instagram" />
                    </a>
                </section>
            </div>

            <div className="text-center p-3">
                <p> <strong> © 2022 Copyright </strong> José Guirado</p>
            </div>
        </footer>
    )
}

export default Footer;