import React from "react";

const InfoBox = ({ label, value }) => {
  return (
    <>
      <label className="text-sm font-medium text-slate-800">{label}</label>

      <p className="text-[12px] text-gray-600 mt-0.5">{value}</p>
    </>
  );
};

export default InfoBox;
