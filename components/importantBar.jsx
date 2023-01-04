import React from "react";

const ImportantBar = () => {
    return(
        <div className="bg-gray-800 text-white text-center py-4 lg:px-4 ">
            <div className="p-2 bg-indigo-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span className="flex rounded-full bg-indigo-200 uppercase px-2 py-1 text-xs font-bold mr-3">Important</span>
                <span className="font-semibold mr-2 text-left flex-auto">Last date to register for INNOVERSE 03/02/2023(FRIDAY) !</span>
                <a href="https://hack2skill.com/hack/innoverse" target="_blank" rel="noreferrer" className="text-white font-bold underline">Register Now</a>
            </div>
        </div>

    )
}

export default ImportantBar