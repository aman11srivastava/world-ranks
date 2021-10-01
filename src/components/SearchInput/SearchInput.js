import React from "react";
import {SearchRounded} from "@material-ui/icons";
import styles from './SearchInput.module.css'

export const SearchInput = ({...rest}) => {
    return (
        <div className={styles.wrapper}>
            <SearchRounded color={"inherit"}/>
            <input
                className={styles.input}
                {...rest}
            />
        </div>
    )
}

export default SearchInput