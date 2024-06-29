import Image from "next/image";
import { Input } from "@/components/ui/input"
import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HiOutlineCursorClick } from "react-icons/hi";
import { RiFunctionAddLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-28">
      {/* <Image src='/assets/background.jpg'width={1000}  height={1000}  className="absolute w-full h-full bg-cover bg-center rounded-br-[24rem]"/> */}
      <div className="bg-indigo-700 w-full h-[40rem] sm:rounded-br-[24rem] flex justify-center flex-col gap-4 pt-56">
        
        <h1 className="text-3xl sm:text-5xl text-center text-white font-semibold">Sell online with Shopify</h1>
        <p className="text-xl sm:text-3xl text-white text-center font-light">Trusted by over 800,000 business worldwide</p>
        <div className="flex flex-row gap-3 justify-center w-full">
        <Input type="email" placeholder="Enter your email address" className="w-full sm:w-80"/>
        <Button className='bg-black text-white px-7'>Start free trial</Button>
        </div>
        <p className="text-sm sm:text-lg text-white text-center font-light">Try Shopify for 14 days, no credit card require. By entering your email, you agree to recieve <br className="hidden sm:block"/> marketing emails from shopify.</p>
        <div className="flex flex-col justify-center ">
        <Image src='/assets/front.png' width={1000} height={1000} className="w-full sm:w-[60rem] h-[20rem] sm:h-[35rem] bg-cover bg-center flex self-center shrink"/>
        </div>
        
      </div>
      <div className="flex flex-col sm:flex-row justify-center ">
          <div className="flex flex-col justify-center items-center p-5 w-full sm:w-fit h-fit m-10">
          <Card className="w-full sm:w-80 h-72 flex flex-col justify-center">
  <CardHeader>
    <CardTitle><HiOutlineCursorClick size={40} color="indigo"/></CardTitle>
    <CardDescription className="text-xl text-black font-semibold">Choose & Customize a theme</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Customize the design of your shop from over thousands of themes. No design experience or progarmming skills required.</p>
  </CardContent>
  
</Card>

          </div>
          <div className="flex flex-col sm:flex-col max-sm:flex-row justify-center items-center p-5 w-full sm:w-fit h-fit m-10">
          <Card className="w-full sm:w-80 h-72 flex flex-col justify-center">
  <CardHeader>
    <CardTitle><RiFunctionAddLine size={40} color="indigo"/></CardTitle>
    <CardDescription className="text-xl text-black font-semibold">Add Products</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Add your products to the shop. List your eye catching products with the best photos</p>
  </CardContent>
  
</Card>

          </div>
          <div className="flex flex-col justify-center items-center p-5 w-full sm:w-fit h-fit m-10">
          <Card className="w-full sm:w-80 h-72 flex flex-col justify-center">
  <CardHeader>
    <CardTitle><BsBoxArrowUpRight size={40} color="indigo"/></CardTitle>
    <CardDescription className="text-xl text-black font-semibold">Start selling</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Set up payments and shipping, and start selling.</p>
  </CardContent>
  
</Card>

          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center">
          <h1 className="text-lg sm:text-2xl text-center">"Shopify is the perfect solution for my ecommerence website,<br className="hidden sm:block"/> which is both easy to build and easy to maintain."</h1>
          <h1 className="text-xs sm:text-sm font-extrabold text-center">RIMJHIM HADA, FOUNDER OF AACHO</h1>
        <Button className='bg-indigo-700 text-white px-7 w-36 flex self-center mt-8 mb-14'>Start free trial</Button>
        </div>

        
    </div>
  );
}
