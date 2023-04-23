import rect from "../../img/Rectangle.png"
import Image from "next/image"

export default function Cont() {
    return (
        <main>
            <div className="flex-col my-5 space-y-5 mx-3">
                <div className="sm:flex space-y-5 sm:space-y-0">
                    <div className="bg-mauaBrown ml-2.5 mr-5 rounded-3xl shadow-md flex flex-col md:flex-row sm:w-1/2 ">
                        <Image src={rect} className="w-340 object-center" alt="Quadra" />
                        <div className="ml-5 mt-5 mr-5 text-center sm:text-left">
                            <h3>Quadras</h3>
                            <p className="pb-5">
                                Etiam gravida arcu sit amet dui euismod congue. Phasellus vestibulum congue neque. Aenean
                                bibendum
                                in sapien non mattis. Duis purus libero, scelerisque a consequat eget, maximus hendrerit ante.

                            </p>
                        </div>
                    </div>

                    <div className="bg-mauaBrown ml-2.5 mr-5 rounded-3xl shadow-md flex flex-col md:flex-row sm:w-1/2 ">
                        <Image src={rect} className="w-340  sm:justify-center lg:justify-right" alt="Quadra" />
                        <div className="ml-5 mt-5 mr-5 text-center sm:text-left">
                            <h3>Campo</h3>
                            <p className="pb-5">
                                Etiam gravida arcu sit amet dui euismod congue. Phasellus vestibulum congue neque. Aenean
                                bibendum
                                in sapien non mattis. Duis purus libero, scelerisque a consequat eget, maximus hendrerit ante.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-mauaBrown ml-2.5 mr-5 flex flex-col rounded-3xl shadow-md sm:flex-row">
                    <Image src={rect} className="w-340 sm:justify-center lg:justify-right" alt="Quadra" />
                    <div className="ml-5 mt-5 mr-5  text-center sm:text-left">
                        <h3>Copa Maua</h3>
                        <p className=" align-middle items-center pb-5 sm:mx-10">
                            Etiam gravida arcu sit amet dui euismod congue. Phasellus vestibulum congue neque. Aenean bibendum
                            in sapien non mattis. Duis purus libero, scelerisque a consequat eget, maximus hendrerit ante.
                        </p>
                    </div>
                </div>
            </div>


        </main>
    )
}
