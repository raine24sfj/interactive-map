import field_ops from "../assets/25px-Field_Operation.png";

export function Header() {
    return (
        <>
        <div className="flex p-3 size-24">
            <img src={field_ops} alt="Field Ops" />
            <h1 className="pl-2 text-2xl">Lorem, ipsum</h1>
        </div>
        </>
    );
}