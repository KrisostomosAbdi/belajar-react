export default function SearchForm() {
  return (
    <form>
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("form submitted");
        }}
      >
        Search
      </button>
    </form>
  );
}
