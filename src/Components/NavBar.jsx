import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const NavBar = ({search}) => {
  const onSearch = (word) =>{
    search(word)
  }
  return (
    <div className="bg-slate-600 flex items-center justify-around p-[9px]">
        <button>
            <a href='/'>
              <img src="/m.svg"/>
            </a>
        </button>
        <div className="bg-white p-1 rounded-[15px] w-[1500px] h-[40px]">
            <input onChange={(e)=>onSearch(e.target.value)} type="text" placeholder="ابحث..." className="outline-none w-[1442px] h-[33px] px-[10px] rounded-[15px]"/>
            <button className="w-[50px]"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            
        </div>
    </div>
  )
}

export default NavBar