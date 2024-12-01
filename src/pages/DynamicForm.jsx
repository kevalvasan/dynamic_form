import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ id: Date.now(), type: 'text', value: '' }]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  // Add a new field dynamically
  const addField = () => {
    setFields([...fields, { id: Date.now(), type: 'text', value: '' }]);
  };

  // Remove a specific field
  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Update a field's value
  const handleFieldChange = (id, newValue) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, value: newValue } : field)));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      dynamicFields: fields.map((field) => field.value),
      email,
      password,
      description,
      selectedOption,
      checked,
      gender,
    };
    // Navigate to the confirmation page and pass the data as state
    navigate('/confirmation', { state: formData });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Dynamic Form Builder</h1>
      <form onSubmit={handleSubmit}>
        {/* Dynamic Fields Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Dynamic Fields</h2>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center mb-4">
            <input
              type={field.type}
              value={field.value}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              placeholder={`Field ${index + 1}`}
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mr-4"
            />
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => removeField(field.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addField}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add New Field
        </button>

        <hr className="my-6" />

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Description (Text Area) */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Write a brief description..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Dropdown */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Choose your branch:</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="computer science and engineering">computer science and engineering</option>
            <option value="machenical engineering">machenical engineering</option>
            <option value="civil engineering">civil engineering</option>
          </select>
        </div>

        {/* Checkbox */}
        <div className="mb-6">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-2 focus:ring-2 focus:ring-blue-500"
            />
            I agree to the terms and conditions
          </label>
        </div>

        {/* Radio Buttons */}
        <div className="mb-6">
          <p className="text-gray-700 font-medium mb-2">Gender:</p>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            Female
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
