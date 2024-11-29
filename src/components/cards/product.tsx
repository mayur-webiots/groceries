"use client"    
import {useHandleList} from "../../store/productList"
export default function Product(props: any) {
    const HandleProductClick = ()=>{
        console.log('handle product click ')
        useHandleList({product:props.product,action:"add"})
    }
    const HandleMinus = ()=>{
        console.log("handle minus Clicked")
    }
    return (
        <>
            <div className="border-s-violet-50 border-2 m-2 flex flex-col" >
                <div onClick={HandleProductClick}>
                <div className="image">
                    <img src={props.img} />
                </div>
                <div className="flex justify-center">
                    <div className="product-name text-xs lg:text-lg md:text-base">
                        {props.id} -- {props.name} 
                    </div>
                </div>

                </div>
                <div className="bottons flex justify-center px-3">
                    
                    <button type="button" onClick={HandleMinus} className="z-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200    dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        0</button>
                    




                </div>
            </div>
        </>
    )
}