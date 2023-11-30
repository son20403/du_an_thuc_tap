import { useEffect, useState } from "react";
import { getAllCategories } from "../api/connect";

export default function useGetAllCategories() {
    const [dataCategories, setDataCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleGetCategories = async () => {
        setLoading(true)
        try {
            const data = await getAllCategories()
            const dataCate = await data.data_theloai
            const dataCategories = dataCate?.filter((prod) => prod.is_delete === 0)
            setDataCategories(dataCategories)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
    useEffect(() => {
        handleGetCategories()
    }, []);
    return { dataCategories, loading }
}
