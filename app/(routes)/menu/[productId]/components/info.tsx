"use client"

import { Products } from "@/type-db";
import { Factory, GroupIcon, List, SquareActivity } from "lucide-react";

interface InfoProps {
    product : Products;
}

const Info = ({product}: InfoProps) => {
    return (
    <div>
        <h1 className="text-3xl font-bold text-neutral-800">{product.name}</h1>
        <div className="mt-3 flex items-end justify-between">
            <p className="text-base text-left text-neutral-600">Đây là thông tin sản phẩm</p>
        </div>
        <div className="w-full flex items-center justify-start gap-2 flex-wrap px-2">
            {product.brand && (
                <div className="rounded-md bg-emerald-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
                    <GroupIcon className="w-5 h-5"/>
                    {product.brand}
                </div>
            )}

            {product.category && (
                <div className="rounded-md bg-emerald-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
                    <List className="w-5 h-5"/>
                    {product.category}
                </div>
            )}

            {product.manufacturer && (
                <div className="rounded-md bg-emerald-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
                    <Factory className="w-5 h-5"/>
                    {product.manufacturer}
                </div>
            )}

            {product.size && (
                <div className="rounded-md bg-emerald-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
                    <SquareActivity className="w-5 h-5"/>
                    {product.size}
                </div>
            )}  
        </div>

        <div className="w-full grid grid-cols-4 my-12">
            <div className="col-span-1 space-y-8"></div>
        </div>
    </div>
    );
}

export default Info;