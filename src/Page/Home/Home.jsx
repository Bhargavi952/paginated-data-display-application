import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";
import NavBar from "../../Component/NavBar/NavBar";
import Pagination from "../../Component/Pagination/Pagination";
import fetchUserDetails from "../../Redux/actions";
import styles from "./styles.module.css";
import PropagateLoader from "react-spinners/PropagateLoader";

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
  console.log(currentUserDeatils);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavBar />
      <h1>User Details</h1>
      {isLoading ? (
        <div className={styles.loader}>
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
    </div>
  );
};

export default Home;
