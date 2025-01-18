"use client";

interface Department {
  id: number;
  name: string;
  description: string;
}

interface DepartmentListProps {
  departments: Department[];
  onEdit: (department: Department) => void;
  onDelete: (id: number) => void;
}

const DepartmentList = ({
  departments,
  onEdit,
  onDelete,
}: DepartmentListProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Departments</h2>
      <ul>
        {departments.map((dept) => (
          <li
            key={dept.id}
            className="border p-4 mb-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{dept.name}</h3>
              <p>{dept.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(dept)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(dept.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
