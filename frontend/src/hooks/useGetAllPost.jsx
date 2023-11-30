import { useEffect, useState } from "react";
import { getAllProduct } from "../api/connect";

export default function useGetAllProducts() {
    const [dataProducts, setDataProducts] = useState([]);
    const [dataImages, setDataImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleGetProduct = async () => {
        setLoading(true)
        try {
            const data = await getAllProduct()
            const dataProducts = await data.data_sanpham
            const dataImages = await data.data_hinhanh
            const dataProductsValid = dataProducts?.filter((prod) => prod.is_delete === 0)
            setDataProducts(dataProductsValid)
            setDataImages(dataImages)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
    useEffect(() => {
        handleGetProduct()
    }, []);
    return { dataProducts, dataImages, loading }
}
