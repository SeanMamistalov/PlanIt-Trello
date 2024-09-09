import { useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_CHECKLIST_ITEM } from "../store/reducers/board.reducer";

export function ChecklistItem({ checklistTitle }) {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();

    function addItem() {
        if(!item) return
        
        dispatch({
            type: ADD_CHECKLIST_ITEM,
            checklistTitle,
            item: { title: item, isChecked: false }
        });
        setItem("");
    };

    return (
        <div className="checklist-item-adder">
            <input className="item-input"
                type="text"
                placeholder="Add an item"
                value={item}
                onChange={(e) => setItem(e.target.value)}/>
            <button className="add-checklist" onClick={addItem}>
                Add
            </button>
        </div>
    );
}
