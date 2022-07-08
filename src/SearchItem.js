const SearchItem = ({ search, setSearch }) => {
    console.log(search)
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search' className="searchh"></label>
            
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Your Movie'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
        </form>
    )
}

export default SearchItem