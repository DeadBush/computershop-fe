"use client"

import { Products } from "@/type-db"

interface PopularContentProps{
    data: Products;
}

export const PopularContent = ({data}: PopularContentProps) =>{
    return <div>Các mặt hàng bán chạy</div>
}

