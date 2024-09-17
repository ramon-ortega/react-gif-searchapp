import { useState } from 'react';
import {AddCategory, GiftGrid, CustomHeader} from './components/';

export const GiftExpertApp = () => {

    const [categories,  setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory) ) return;
        // console.log(newCategory);
        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            <CustomHeader />

            <div className="text-center">
                <h3>
                    Explore <span className="animated-text">gif search engine</span>
                </h3>
            </div>

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
