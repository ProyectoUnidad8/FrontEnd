const FilterComponent = ({ filterText, onFilter, onClear, msg }:any) => (
	<>
		<input
			id="search"
			type="text"
			placeholder={msg}
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<button type="button" onClick={onClear}>
			X
		</button>
	</>
);

export default FilterComponent;