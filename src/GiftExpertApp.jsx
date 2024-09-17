import { useState } from 'react';
import {AddCategory, GiftGrid} from './components/';

export const GiftExpertApp = () => {

    const [categories,  setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory) ) return;
        // console.log(newCategory);
        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GiftExpertApp</h1>

            {/* Input  */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value)}
                
            />
            {/* listado de gifts */}
            { categories.map( (category) => (
                    <GiftGrid 
                        key={category}
                        category={category}
                    />
                )) 
            }

        </>
    )
}
