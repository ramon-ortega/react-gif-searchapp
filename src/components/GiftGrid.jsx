
import { GridItem } from "./GridItem";
import { useFetchGifts } from "../hooks/useFetchGifts";


export const GiftGrid = ({category}) => {

    const {images, isLoading} = useFetchGifts(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>) 
            }
            <div className="card-grid" >
                {
                    images.map((image) => (
                        <GridItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
            
        </>
    )
}
