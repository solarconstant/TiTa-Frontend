import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import axios from "axios";

import Timetable from "../../components/Timetable/Timetable";
import StudentNav from "../../components/Navbar/student/studentnav";

import "./Timetable.css";

const StudTimetablePage = () =>
{
    const [tt, setTt] = useState(null);
    const { user } = useSelector(state => ({...state}));

    const loadTimetable = (user) =>
    {
        axios(
        {
            method: "GET",
            url: `${process.env.REACT_APP_API}/students/timetable/${user.email}`,
        })
        .then((res) => 
        {
            setTt(res.data);
        })
        .catch((err) => 
        {
            console.log(err);
        });
    }

    useEffect(() =>
    {
        loadTimetable(user);
    }, []);

    return (
        <div class = "row">
            <div class = "col-12">
                <StudentNav />
            </div>
            <div class = "col-11 Timetable__timetable-component">

            {tt ? (tt.length > 0 ? <Timetable tt = {tt} /> : <p>Join some classrooms first...</p>) : <p>Loading timetable...</p>}

            </div>
        </div>
    )
}

export default connect()(withRouter(StudTimetablePage));