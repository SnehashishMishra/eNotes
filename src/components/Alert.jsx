import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className="flex justify-center h-10">
      {alert && (
        <div
          className={`
            m-1 px-4 py-2 rounded-lg text-sm font-medium shadow 
            ${
              alert.type === "success"
                ? "bg-green-500 text-white"
                : alert.type === "danger"
                ? "bg-red-500 text-white"
                : alert.type === "warning"
                ? "bg-yellow-400 text-black"
                : alert.type === "info"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }
          `}
          role="alert"
        >
          {alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
