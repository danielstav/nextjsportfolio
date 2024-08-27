import Image from "next/image";

export default function Home() {
  return (
    <main className=" p-[1rem] h-full w-full ">
		<div className="flex h-full w-full">
			<div className="bg-[#161616] w-[80%] h-full flex flex-col">
        		<div className="bg-[#161616] w-full h-full  border-[red] border-[2px] rounded-tr-[99px] ">1</div>
        		<div className="bg-[#161616] w-full h-[150px]  border-[red] border-[2px] rounded-bl-[33px]">2</div>
        		<div className="bg-[#161616] w-full h-[100px]  border-[red] border-[2px]">3</div>
      		</div>
	  		<div className="bg-[#161616] w-[20%] h-full  border-[red] border-[2px] rounded-tl-[99px]">4</div>
		</div>
    </main>
  );
}
