import { Link } from "react-router"


const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-2">
        <h2 className="text-4xl font-medium">This isn’t just a platform launch — it’s a movement.</h2>
        <Link to="/auth" className="text-chicago-300">Join as a Creator</Link>
        <Link to="contact" className="text-chicago-300">Partner with Cirqah</Link>
        <Link to="mailto:hello@cirqah.com" className="text-chicago-300">hello@cirqah.com</Link>
    </section>
  )
}

export default Footer