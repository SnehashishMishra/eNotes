import React from "react";
import Notes from "./Notes";

const Home = ({ showAlert }) => {
  return (
    <>
      <div className="mx-auto my-6 w-full max-w-7xl px-4">
        <Notes showAlert={showAlert} />
      </div>
    </>
  );
};

export default Home;
