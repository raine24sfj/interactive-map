import { Search } from "./search";

export function SideBar() {
    return (
        <>
            <div className="grid grid-cols-subgrid gap-4 bg-gradient-to-r from-[#22c55e] to-[##06b6d4]">
                <p className="col-start-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat sunt quasi ad est. Quaerat, deleniti consectetur. 
                    Rem debitis amet odio voluptate incidunt saepe laboriosam laudantium eum. 
                    Minus ullam vero omnis.
                </p>
                <Search />
            </div>
        </>
    );
}