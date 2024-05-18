"use client"

import Box from "@/components/ui/box";
import { Products } from "@/type-db";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string"

interface PageContentProps {
    products:Products[]
}

const PageContent = ({products}:PageContentProps) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const currentParams = Object.fromEntries(searchParams.entries())

    const handleClick = (param : string) => {

        if(currentParams.hasOwnProperty(param)){
            const newParams = {...currentParams};
            delete newParams[param];
            
            const href=qs.stringifyUrl({
                url:"/menu",
                query: newParams
            });
            router.push(href);
        }
    };
    return <>
        <Box className="pt-4 pb-24 flex-col items-start">
            <Box className="text-neutral-700 text-sm items-center">
                <Link href={"/"} className="flex items-center gap-2">
                    <Home className="w-4 h-4"/>
                    Trang chủ
                </Link>

                <ChevronRight className="w-5 h-5 text-muted-foreground"/>
                <Link href={"/menu"} className="flex items-center gap-2">
                    Sản phẩm
                </Link>
            </Box>
        </Box>
    </>
};

export default PageContent;