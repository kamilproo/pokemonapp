import '../style/searchBar.css'

export const SearchBar = ({inputValue, changeValue, Searching}) => {
    return(
        <form className={"searchBar_app"}>
            <div className={"searchBar_container"}>
                <input
                    className={"input_searchBar"}
                    value={inputValue}
                    onChange={changeValue}
                    type={"text"}
                    placeholder={"Поиск покемона"}
                />
                <button className={"button_search"} onClick={Searching}>Поиск</button>
            </div>
        </form>
    )
}