const { default: Link } = require("next/link")

const NavLink = ({href,title}) => {
    return(

        <Link href={href} className="text-white font-semibold">
            {title}
            </Link>
    )
}
export default NavLink