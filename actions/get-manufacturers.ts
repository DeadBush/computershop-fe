import { Manufacturer } from "@/type-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/manufacturers`;

const getManufacturers = async (): Promise<Manufacturer[]> => { 
    const res = await fetch(URL);
    return (res.json());
}

export default getManufacturers;   