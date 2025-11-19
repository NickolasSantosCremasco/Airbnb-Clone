import Image from "next/image";


const MyReservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
        
            <h1 className="my-6 text-2xl">My reservations</h1>
       
            <div>
                <div className="p-5  grid  grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-e-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                alt="beach"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-3">

                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date:</strong>12/12/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong>14/12/2024</p>
                        <p className="mb-2"><strong>Number of nights:</strong>2</p>
                        <p className="mb-2"><strong>Total Price:</strong>$200</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-[#ff385c] text-white rounded-xl">Go To Property</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-5  grid  grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-e-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                alt="beach"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-3">

                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date:</strong>12/12/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong>14/12/2024</p>
                        <p className="mb-2"><strong>Number of nights:</strong>2</p>
                        <p className="mb-2"><strong>Total Price:</strong>$200</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-[#ff385c] text-white rounded-xl">Go To Property</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyReservationsPage;

