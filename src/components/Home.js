import React, {useState} from 'react'
import './Home.css'
import ReactPaginate from 'react-paginate';

function Home(props) {
    const[pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = props.usersFilters
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.login.username}</td>
                    <td>{user.name.first} {user.name.last}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.registered.date}</td>
                </tr>                 
            );
        })

        const pageCount = Math.ceil(props.usersFilters.length / usersPerPage);

        const changePage = ({ selected }) => {
            setPageNumber(selected);
        }

    return (
        <div className="container-home">
            <div>{console.log(props)}</div>
            <table border="1px solid black" cellPadding={10} cellSpacing={0}>
                <tr>
                    <th>Username</th>
                    <th> Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Registered Date</th>
                </tr>
                {displayUsers}                          
            </table>
            <ReactPaginate 
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"previousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
            />               
        </div>
    )
}

export default Home
