"use client"

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-carts";
import { Trash } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import CartItem from "./cart-item";

interface CartContentProps{
    userId: string | null
}

const CartContent = ({userId} : CartContentProps) =>{

    const cart= useCart()

    const searchParams = useSearchParams()

    const totalPrice = cart.items.reduce((total, item) => {
        return total + Number(item.price * item.qty)
    },0)

    useEffect(()=>{
        if(searchParams.get("success")){
            toast.success("Giao dịch thành công")
        }
        if(searchParams.get("canceled")){
            toast.error("Có gì đó sai sai");
        }
    },[searchParams, cart.removeAll]);
    return(
        <>
            <div className="w-full flex items-center justify-between gap-4">
                <h2 className="text-3xl font-semibold text-neutral-700"></h2>
                <Button onClick={cart.removeAll} variant={"destructive"}>
                    Xóa tất cả <Trash className="w-4 h-4 ml-2"/>
                </Button>
            </div>

            <div className="w-full lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
                <div className="col-span-8">
                    {cart.items.length === 0 && (
                        <div className="w-full items-center flex justify-center">
                            <p className="text-3xl text-neutral-600 font-semibold">
                                Chưa thêm vật phẩm nào vào giỏ hàng
                            </p>
                        </div>
                    )}

                    <div className="w-full space-y-4">
                        {cart.items.map(item => (
                            <CartItem item={item} key={item.id}/>
                        ))}
                    </div>
                </div>
                <div className="col-span-4"></div>
            </div>
        </>
    );
}

export default CartContent;