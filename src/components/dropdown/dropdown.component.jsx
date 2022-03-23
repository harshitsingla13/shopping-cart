import "./dropdown.styles.css";

const Dropdown = ({ label, value, options, onChange, selectedValue }) => {
  return (
    <div className="dropdown-container">
      <label>
        {label}
        <select value={selectedValue} onChange={(e) => onChange(e)}>
          {options.map((option) =>
            option.id === selectedValue ? (
              <option value={option.id}>{option.name}</option>
            ) : (
              <option value={option.id}>{option.name}</option>
            )
          )}
          <option value="All">All</option>
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
