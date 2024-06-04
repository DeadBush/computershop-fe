import  Container  from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Footer = () =>{
    return(
        <footer className="bg-white ">
        <Container>
          <div className="w-full  bg-hero/30 grid grid-cols-2 md:grid-cols-4 px-4 md:px-12 py-8">
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-3xl font-semibold">Menu</h2>
              <p className="text-neutral-500 text-sm">Home</p>
              <p className="text-neutral-500 text-sm">Tại sao lại chọn chúng tôi ?</p>
              <p className="text-neutral-500 text-sm">Dòng xe đặt biệt</p>
              <p className="text-neutral-500 text-sm">Dòng xe thường</p>
              <p className="text-neutral-500 text-sm">Hiệu xe nổi bật</p>
            </div>
  
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-3xl font-semibold">Giúp đỡ</h2>
              <p className="text-neutral-500 text-sm">Riêng tư</p>
              <p className="text-neutral-500 text-sm">Terms & Condition</p>
              <p className="text-neutral-500 text-sm">Điều lệ</p>
            </div>
  
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-3xl font-semibold">Liên hệ</h2>
              <p className="text-neutral-500 text-sm">+000 0000 0000</p>
              <p className="text-neutral-500 text-sm">info@onlinecarshop.com</p>
              <p className="text-neutral-500 text-sm">6 Linh Trung, TP. Thủ Đức</p>
            </div>
  
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-3xl font-semibold">Đăng ký thư</h2>
              <div className="w-full rounded-md border-2 border-emerald-500 flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="h-full bg-transparent pl-4 text-sm text-neutral-500 w-full outline-none border-none"
                />
                <Button className="bg-emerald-500 rounded-tr-none rounded-br-none hover:bg-emerald-600">
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto py-8 ">
            <p className="text-center text-xs text-black">
              &copy; 2023 Online Car Shop, Co. All rights reserved
            </p>
          </div>
        </Container>
      </footer>
    );
}

export default Footer;