import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Third = () => {
  return (
    <div className="w-full px-10 py-6">
      <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-start border border-gray-200">
        <FontAwesomeIcon icon={faPlusCircle} className="text-blue-500 h-6 w-6 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Add Your Own</h3>
        <p className="mb-4">
          Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
        </p>
        <button className="p-2 bg-purple-600 text-white rounded-lg">Add new</button>
      </div>
    </div>
  );
};

export default Third;
