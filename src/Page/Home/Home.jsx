import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";
import Pagination from "../../Component/Pagination/Pagination";
import fetchUserDetails from "../../Redux/actions";
import styles from './styles.module.css'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userDetailsPerPage, setUserDetailsPerPage] = useState(10);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, []);
  // console.log(data.userDetailsAData)

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
      <DetailsCard userDeatials={currentUserDeatils} />
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
