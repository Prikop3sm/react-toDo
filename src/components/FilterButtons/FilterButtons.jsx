import { useFilterTodos } from "../../hooks/useFilterTodos.jsx"
import { useRef, useState, useEffect } from "react"

export function FilterButtons() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    const { onFilterCompleteOnly, onFilterNonCompleteOnly, onFilterAll } =
        useFilterTodos()

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className={"buttons__filter"} ref={menuRef}>
            <button
                className={"buttons__button buttons-item"}
                onClick={() => setIsOpen(!isOpen)}
            >
                Filter by:
            </button>
            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li className={"menu-item"}>
                    <button
                        className={"buttons-item"}
                        onClick={onFilterCompleteOnly}
                    >
                        Completed only
                    </button>
                </li>
                <li className={"menu-item"}>
                    <button
                        className={"buttons-item"}
                        onClick={onFilterNonCompleteOnly}
                    >
                        Non-completed only
                    </button>
                </li>
                <li className={"menu-item"}>
                    <button className={"buttons-item"} onClick={onFilterAll}>
                        All
                    </button>
                </li>
            </ul>
        </div>
    )
}
