const SearchAndFilter = ({
    onSearch,
    onFilter,
  }: {
    onSearch: (query: string) => void;
    onFilter: (criteria: any) => void;
  }) => {
    return (
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2"
          onChange={(e) => onSearch(e.target.value)}
        />
        <select
          className="border p-2"
          onChange={(e) => onFilter(e.target.value)}
        >
          <option value="">Filter</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    );
  };
  
  export default SearchAndFilter;
  