import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";


const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/apartamento.avif"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">nome da propriedade</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        3 guests - 2 bedrooms - 1 bathrooms
                    </span>

                    <hr />

                    

                        <p><strong>Josh</strong> is your host</p>
                    

                    <hr />

                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptates iusto officia dolores ipsam impedit? Soluta delectus nulla enim, quam voluptates quos magnam eos eligendi! A neque ullam quo eveniet.
                    </p>
                </div>

                <ReservationSideBar />
            </div>
        </main>
    )
}

export default PropertyDetailPage;