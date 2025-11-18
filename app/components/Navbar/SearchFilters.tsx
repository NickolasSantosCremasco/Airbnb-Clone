import Image from "next/image";

const SearchFilters = () => {
    return(
       <div className="h-16 flex flex-row items-center justify-between ">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between border border-neutral-300 rounded-full">
                    <div className="cursor-pointer w-[250px] h-16 px-8 flex flex-col rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm">Wanted Location</p>
                    </div>

                    <div className="cursor-pointer  h-16 px-8 flex flex-col rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check In</p>
                        <p className="text-sm">Add Dates</p>
                    </div>

                    <div className="cursor-pointer  h-16 px-8 flex flex-col rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check Out</p>
                        <p className="text-sm">Add Dates</p>
                    </div>
                    <div className="cursor-pointer  h-16 px-8 flex flex-col rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm">Add Guests</p>
                    </div>

                   
                </div>
                
            </div>
             <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 lg:block rounded-full transition hover:bg-[#d50027] bg-[#ff385c] text-white">
                     <Image src="/big-search-len.png" alt="procura" width={20} height={20}/>
                </div>
            </div>
       </div>
    )
}

export default SearchFilters;