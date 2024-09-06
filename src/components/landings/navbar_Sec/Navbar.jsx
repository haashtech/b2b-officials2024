import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"
import { Link } from "react-router-dom"


function Navbar() {
  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: <HomeIcon />,
      current: true,
    },
    {
      title: "About",
      href: "/about",
      icon: <HomeIcon />,
      current: true,
    },
    // {
    //   title: "Services",
    //   href: "/services",
    //   icon: <HomeIcon />,
    //   current: true,
    // }
  ]
  return (
    <nav className="w-full flex py-5">
      <div className="flex justify-between w-full">
        <img src="/src/assets/images/logo/Logo_black.svg" alt="" />
        <ul className="flex justify-around">
          {
            navItems.map((item, index) => (
              <li key={index} className="">
                <Link to={item.href} draggable={false} className={`p-2 flex items-center gap-3 ${item.current? 'text-primary' : ''}`}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="">
        <Button variant='outline'  className="">Download</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar