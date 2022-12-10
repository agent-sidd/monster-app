import './search-box.styles.css'
const SearchBox =(props)=>{
        return(
            <input 
            className={props.className}
            type="text" 
            maxLength={100}
            placeholder={props.Placeholder}  
            onChange={props.onSearchHandler }/>
         
        )
    }

export default SearchBox;