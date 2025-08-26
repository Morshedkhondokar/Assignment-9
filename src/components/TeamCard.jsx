import React from "react";

const TeamCard = ({ member }) => {
  const { image, name, desc } = member;
  return (
    <div className="bg-white mr-7 w-[220px] rounded-2xl shadow-md p-4 hover:shadow-lg transition transform hover:-translate-y-2 flex flex-col items-center">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-full mb-3 border-2 border-blue-500"
      />

      {/* Name & Role */}
      <h3 className="text-lg font-semibold text-gray-800 text-center leading-tight">
        {name}
      </h3>
      <p className="text-blue-600 text-sm font-medium text-center">
        {member.role}
      </p>

      {/* Small Description */}
      <p className="text-gray-600 text-xs mt-2  text-center line-clamp-2">
        {desc}
      </p>
    </div>
  );
};

export default TeamCard;
