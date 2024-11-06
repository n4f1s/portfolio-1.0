'use client';

const loading = () => {

    return (
        <div className="flex w-full h-screen items-center justify-center">
            <div className="w-48 md:w-96 mx-auto p-6 md:p-8 border-4 border-gray-800 bg-gray-900 
            text-green-500 font-mono text-lg shadow-lg rounded relative overflow-hidden transform 
            scale-125">
                <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t 
                flex items-center px-4 box-border">
                    <div className="text-gray-300 text-lg">Status</div>
                    <div className="ml-auto flex space-x-4">
                        <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                    </div>
                </div>
                <div className="mt-8 inline-block whitespace-nowrap overflow-hidden border-r-4 
                border-green-500 type-and-delete text-lg">
                    Loading...
                </div>
            </div>
        </div>
    )
}

export default loading;