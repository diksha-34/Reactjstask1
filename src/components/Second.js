import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt, faShoppingCart, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Second = () => {
  return (
    <div className="w-full px-10 py-6"> {/* Increased left and right margin with px-10 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-start border border-gray-200"> {/* Added border */}
          <FontAwesomeIcon icon={faUser} className="text-purple-600 h-6 w-6 mb-4" />
          <h3 className="text-xl font-semibold mb-2">People</h3>
          <p className="mb-4">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </p>
          <button className="p-2 bg-purple-600 text-white rounded-lg">Connect</button>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-start border border-gray-200"> {/* Added border */}
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-600 h-6 w-6 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Place</h3>
          <p className="mb-4">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
          <button className="p-2 bg-purple-600 text-white rounded-lg">Meet up</button>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-start border border-gray-200"> {/* Added border */}
          <FontAwesomeIcon icon={faShoppingCart} className="text-purple-600 h-6 w-6 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Product</h3>
          <p className="mb-4">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
          <button className="p-2 bg-purple-600 text-white rounded-lg">Get it</button>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-start border border-gray-200"> {/* Added border */}
          <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-600 h-6 w-6 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Program</h3>
          <p className="mb-4">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <button className="p-2 bg-purple-600 text-white rounded-lg">Attend</button>
        </div>
      </div>
    </div>
  );
};

export default Second;
