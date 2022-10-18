import React from "react";
import "./Button.scss";
import { InfinitySpin, RotatingLines } from "react-loader-spinner";

const Button = ({
  smallFont,
  loading,
  revertColor,
  title = "Button",
  className,
  link,
  width,
  onClick,
}: any) => {
  return (
    <div
      onClick={onClick}
      className={`btn-box ${className}`}
      style={{ width: width ? width : "140px" }}
    >
      {link ? (
        <a href={link} className="theme-btn btn-one">
          {title}
        </a>
      ) : (
        <p
          className={`theme-btn  ${revertColor ? "revert" : "btn-one"}`}
          style={{
            fontSize: smallFont ? "12px" : "",
          }}
        >
          {loading ? (
            <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="25"
              visible={true}
            />
          ) : (
            <>{title}</>
          )}
        </p>
      )}
    </div>
  );
};

export default Button;
