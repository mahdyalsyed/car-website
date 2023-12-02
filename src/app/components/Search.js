"use client";
// search context
import { useContext } from "react";
import { SearchContext } from "../context/search";

// components
import LocationSelection from "./LocationSelection";
import DataSelection from "./DataSelection";
import HoursSelection from "./HoursSelection";

export default function Search() {
    const { searchActive } = useContext(SearchContext);
    return (
        <div
            className={`${
                searchActive
                    ? "bg-gray-50 rounded-none xl:h-[80px]"
                    : "bg-gray-50 rounded-[20px] py-6 xl:pr-6 xl:h-[98px]"
            } hidden xl:block w-full relative shadow-lg`}>
            <div
                className={`flex h-full ${
                    searchActive && "container mx-auto"
                }`}>
                <LocationSelection />
                <DataSelection />
                <HoursSelection />
                {/* btn */}
                <div className="xl:h-full flex items-center px-6 xl:px-0">
                    <button
                        className={`${
                            searchActive
                                ? "btn btn-sm btn-accent xl:w-[164px]"
                                : "btn btn-lg btn-accent xl:w-[184px]"
                        }`}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
