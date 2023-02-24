import { BiSearchAlt } from "react-icons/bi";

function SearchInput({ holder }) {
	return (
		<form
			action="/search"
			method="GET"
			className="hidden lg:flex bg-white dark:bg-[#ffffff33] dark:text-white dark:border-transparent text-gray-500 item-center justify-between p-1 border rounded shadow">
			<input
				type="text"
				name="q"
				placeholder={holder}
				className="bg-transparent text-sm hidden lg:flex dark:placeholder:text-white"
			/>
			<button>
				<BiSearchAlt size="1.3rem" />
			</button>
		</form>
	);
}

export default SearchInput;
