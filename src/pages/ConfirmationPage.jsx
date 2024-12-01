import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Form Submission Confirmation</h1>
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Form Details</h2>
        <div className="mt-4">
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
          <p><strong>Description:</strong> {formData.description}</p>
          <p><strong>chose your branch:</strong> {formData.selectedOption}</p>
          <p><strong>Agreed to Terms:</strong> {formData.checked ? "Yes" : "No"}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700">Dynamic Fields:</h3>
          <ul className="list-disc ml-6 mt-2">
            {formData.dynamicFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
