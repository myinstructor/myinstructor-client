import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleBookingAdmin,
  getSingleInstructorAdmin,
  getSingleUserAdmin,
} from "../api_calls/Admin/admin_userapi";
import AdminPageWrapper from "../components/AdminPageWrapper/AdminPageWrapper";
import "./view__items-page.scss";
import UserDetailCard from "../components/UserDetailCard/UserDetailCard";
import InstructorDetailCard from "../components/InstructorDetailCard/InstructorDetailCard";
import BookingsDetailCard from "../components/BookingsDetailCard/BookingsDetailCard";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import AdminListEdit from "../components/AdminListEdit/AdminListEdit";

interface Props {
  type: string;
}
const ViewItemsPage = ({ type }: Props) => {
  const [editVisible, setEditVisible] = useState(false);
  const [item, setItem] = useState<any>();
  const { id } = useParams();

  const getItem = {
    user: getSingleUserAdmin,
    instructor: getSingleInstructorAdmin,
    booking: getSingleBookingAdmin,
  };

  const ShowItem = {
    user: <UserDetailCard item={item} />,
    instructor: <InstructorDetailCard item={item} />,
    booking: <BookingsDetailCard item={item} />,
  };

  useEffect(() => {
    getDatas();
  }, [editVisible]);

  const getDatas = async () => {
    const data = await getItem[type as keyof typeof getItem](id);
    setItem(data[type]);
  };

  console.log(item);

  return (
    <>
      <AdminListEdit
        item={item}
        type={type}
        visible={editVisible}
        setEditVisible={setEditVisible}
      />
      <AdminPageWrapper>
        <div className="view__items-page">
          {!item ? (
            <p>Loading...</p>
          ) : (
            <div className="user__info">
              {ShowItem[type as keyof typeof ShowItem]}
            </div>
          )}
        </div>
        <Fab
          variant="extended"
          color={"primary"}
          onClick={() => setEditVisible(true)}
        >
          <EditIcon sx={{ mr: 1 }} />
          Edit
        </Fab>
      </AdminPageWrapper>
    </>
  );
};

export default ViewItemsPage;
