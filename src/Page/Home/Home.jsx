import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";
import NavBar from "../../Component/NavBar/NavBar";
import Pagination from "../../Component/Pagination/Pagination";
import fetchUserDetails from "../../Redux/actions";
import "./styles.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import PaginationMui from "@mui/material/Pagination";
import axios from "axios";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userDetailsPerPage, setUserDetailsPerPage] = useState(10);

  const data = useSelector((state) => state);
  const isLoading = data.isLoading;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, []);

  // Get current userDetails
  const indexOfLastUserDetail = currentPage * userDetailsPerPage;
  const indexOfFirstUserDetail = indexOfLastUserDetail - userDetailsPerPage;
  const currentUserDeatils = data.userDetailsAData?.slice(
    indexOfFirstUserDetail,
    indexOfLastUserDetail
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination using Material UI

  const [userDetails, setUserDeatils] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const getData = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => setUserDeatils(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <NavBar />
      <h1>User Details</h1>
      {isLoading ? (
        <div className="loader">
          <PropagateLoader color={"#11bf71"} loading={isLoading} size={20} />
        </div>
      ) : (
        <DetailsCard userDeatials={currentUserDeatils} />
      )}

      <Pagination
        userDetailsPerPage={userDetailsPerPage}
        totaluserDetails={
          data.userDetailsAData && data.userDetailsAData?.length
        }
        paginate={paginate}
      />

      {/* Pagination using Material UI */}

      <h1>Pagination Using Material UI</h1>

      <DetailsCard userDeatials={userDetails} />
      <div className="pagination-Mui">
        <PaginationMui
          count={20}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Home;
