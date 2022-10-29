import React from "react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import avater from "../../assets/reviewavater.jpg";
import { Instructor } from "../../typings/instructorTypings";
import Button from "../core/Button/Button";

import "./LdashInstructor.scss";
interface LdashInstructorProps {
  instructor: Instructor;
}
const LdashInstructor = ({ instructor }: LdashInstructorProps) => {
  return (
    <div className="instructor__ldash">
      <p className="title">Your Instructor</p>
      <div className="dashboard__instructor-info">
        <div className="instructor">
          <div className="image">
            <img src={instructor.avater} alt="" />
          </div>
          <div className="information">
            <p className="name">
              {instructor.firstName} {instructor.lastName}{" "}
              {instructor.gender === "Male" ? (
                <BsGenderMale />
              ) : (
                <BsGenderFemale />
              )}
            </p>
            <Button title={"Book Now"} />
          </div>
        </div>
        <div className="car__information-model">
          <div className="image">
            <img src={avater} alt="" />
          </div>
          <div className="car__info">
            <p className="car__name">{instructor.car.name}</p>
            <p className="car__number">{instructor.car.numberPlate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LdashInstructor;
