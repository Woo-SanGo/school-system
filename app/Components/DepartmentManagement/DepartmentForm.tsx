"use client";

interface DepartmentFormProps {
  name: string;
  description: string;
  onChange: (key: string, value: string) => void;
  onSubmit: () => void;
  buttonLabel: string;
}

const DepartmentForm = ({
  name,
  description,
  onChange,
  onSubmit,
  buttonLabel,
}: DepartmentFormProps) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Department Name"
        value={name}
        onChange={(e) => onChange("name", e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <textarea
        placeholder="Department Description"
        value={description}
        onChange={(e) => onChange("description", e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default DepartmentForm;
