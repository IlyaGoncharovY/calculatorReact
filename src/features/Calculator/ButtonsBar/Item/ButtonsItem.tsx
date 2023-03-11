import React, {FC} from 'react';

interface ButtonsItemType {
    value:  string
    onChangeHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonsItem: FC<ButtonsItemType> = ({value, onChangeHandler}) => {

    return (
        <div>
            <button onClick={() => onChangeHandler} value={value}>
                {value}
            </button>
        </div>
    );
};

export default ButtonsItem;