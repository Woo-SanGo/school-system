'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./teacher.module.css";

const TeacherClassForm = () => {
  const [formData, setFormData] = useState({
    college: "",
    department: "",
    year: "",
    semester: "",
    generation: "",
    className: "",
    subject: "",
  });

  const router = useRouter();

  const colleges = [
    "Faculty of Science",
    "Faculty of Social Science and Humanities",
    "Faculty of Engineering",
    "Faculty of Development Studies",
    "Faculty of Education",
    "Institute For International Study and Public Policy",
  ];

  const years = ["Year 1", "Year 2", "Year 3", "Year 4"];
  const semesters = ["Semester 1", "Semester 2"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    localStorage.setItem("formData", JSON.stringify(formData)); // Save form data locally
    alert("Form data saved!");
    router.push("/student"); // Navigate to the next page
  };

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className={styles.formContainer}>
      <h1>Create Class</h1>
      <form>
        <label>
          College:
          <select name="college" value={formData.college} onChange={handleChange} required>
            <option value="">Select College</option>
            {colleges.map((college, index) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter Department"
            required
          />
        </label>
        <br />
        <label>
          Year:
          <select name="year" value={formData.year} onChange={handleChange} required>
            <option value="">Select Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Semester:
          <select name="semester" value={formData.semester} onChange={handleChange} required>
            <option value="">Select Semester</option>
            {semesters.map((semester, index) => (
              <option key={index} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Generation:
          <input
            type="text"
            name="generation"
            value={formData.generation}
            onChange={handleChange}
            placeholder="Enter Generation"
            required
          />
        </label>
        <br />
        <label>
          Class:
          <input
            type="text"
            name="className"
            value={formData.className}
            onChange={handleChange}
            placeholder="Enter Class"
            required
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            required
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          OK
        </button>
      </form>
    </div>
  );
};

export default TeacherClassForm;
