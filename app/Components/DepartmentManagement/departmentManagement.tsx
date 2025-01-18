"use client";

import { useState, useEffect } from "react";
import DepartmentList from "./DepartmentList";
import DepartmentForm from "./DepartmentForm";

interface Department {
  id: number;
  name: string;
  description: string;
}

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
  });
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(
    null
  );

  // Fetch departments
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("/api/departments");
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Failed to fetch departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleFormChange = (key: string, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddOrUpdateDepartment = async () => {
    if (editingDepartment) {
      // Update department
      try {
        const response = await fetch(`/api/departments/${editingDepartment.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        if (response.ok) {
          const updatedDepartment = await response.json();
          setDepartments((prev) =>
            prev.map((dept) =>
              dept.id === updatedDepartment.id ? updatedDepartment : dept
            )
          );
          setEditingDepartment(null);
          setFormState({ name: "", description: "" });
        }
      } catch (error) {
        console.error("Error updating department:", error);
      }
    } else {
      // Add new department
      try {
        const response = await fetch("/api/departments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        if (response.ok) {
          const createdDepartment = await response.json();
          setDepartments((prev) => [...prev, createdDepartment]);
          setFormState({ name: "", description: "" });
        }
      } catch (error) {
        console.error("Error adding department:", error);
      }
    }
  };

  const handleDeleteDepartment = async (id: number) => {
    try {
      const response = await fetch(`/api/departments/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDepartments((prev) => prev.filter((dept) => dept.id !== id));
      }
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };

  const handleEditDepartment = (department: Department) => {
    setEditingDepartment(department);
    setFormState({
      name: department.name,
      description: department.description,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Department Management</h1>

      <h2 className="text-xl font-semibold mb-2">
        {editingDepartment ? "Edit Department" : "Add New Department"}
      </h2>
      <DepartmentForm
        name={formState.name}
        description={formState.description}
        onChange={handleFormChange}
        onSubmit={handleAddOrUpdateDepartment}
        buttonLabel={editingDepartment ? "Save Changes" : "Add Department"}
      />

      <DepartmentList
        departments={departments}
        onEdit={handleEditDepartment}
        onDelete={handleDeleteDepartment}
      />
    </div>
  );
};

export default DepartmentManagement;
