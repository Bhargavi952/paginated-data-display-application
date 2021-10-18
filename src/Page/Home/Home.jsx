import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";
import NavBar from "../../Component/NavBar/NavBar";
import fetchUserDetails from "../../Redux/actions";
import "./styles.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import PaginationMui from "@mui/material/Pagination";

const Home = () => {
  // Change page

  const [page, setPage] = useState(1);
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  const data = useSelector((state) => state);
  const isLoading = data.isLoading;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails(page));
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
        <DetailsCard userDeatials={data.userDetailsAData} />
      )}

      <div className="pagination-Mui">
        <PaginationMui
          count={10}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Home;
