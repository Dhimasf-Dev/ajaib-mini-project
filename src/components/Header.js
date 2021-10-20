import React, {useRef} from 'react'
import './Header.css'

function Header(props) {
    const refSearch = useRef(null)

    const onSearch = () => {
        console.log(refSearch.current.value)
        let dataInput = refSearch.current.value
        
        if (dataInput){
            let data = props.users.filter(user => {
                return (
                    user.login.username.includes(dataInput) ||
                    user.name.first.includes(dataInput) ||
                    user.name.last.includes(dataInput) ||
                    user.email.includes(dataInput) ||
                    user.gender.includes(dataInput) ||
                    user.registered.date.includes(dataInput)
                )
            })
            props.setUsersFilters(data)
        } else {
            props.getUsers()
        }
      }

    const onGender = (e) => {
        let inputGender = e.target.value.toLowerCase()
        console.log(inputGender)

        if (inputGender !== "all"){
            props.getUsers()
            let dataGender = props.users.filter(uGen =>  uGen.gender === inputGender)
            props.setUsersFilters(dataGender)
        } else {
            props.getUsers()
        }
    }


    return (
        <div className="container-header">
            <div>
                <div>Search</div>
                <input type="text" ref={refSearch}/>
                <button className="button-search" onClick={onSearch}>
                    <i class="bi bi-search"></i>
                </button>
            </div>
            <div>
                <div className="lable-gender">Gender</div>
                <select className="dropdown" name="genders" id="genders" onChange={onGender}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="button-reset">
                <button onClick={() => props.getUsers()}>Reset Filter</button>
            </div>
        </div>
    )
}

export default Header
