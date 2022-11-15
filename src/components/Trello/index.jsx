import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { test, onDragEnd } from "../../redux/reducers/trelloSlice";

// Object
// combine
// :
// null
// destination
// :
// droppableId
// :
// "33"
// index
// :
// 0
// [[Prototype]]
// :
// Object
// draggableId
// :
// "4"
// mode
// :
// "FLUID"
// reason
// :
// "DROP"
// source
// :
// droppableId
// :
// "11"
// index
// :
// 0
// [[Prototype]]
// :
// Object
// type
// :
// "DEFAULT"
// [[Prototype]]
// :
// Object

// const onDragEnd = (result, columns, setColumns) => {
//   if (!result.destination) return;
//   const {source, destination} = result;
//   const column = columns[source.droppableId]; // element which i move to drop
//   const copiedItems = [...columns.items];  // copy all columns
//   console.log(copiedItems);
// //   const [removed] = copiedItems.splice(source.index, 1); //remove element which clicked
// //   copiedItems.splice(destination.index,0,removed);
//   setColumns({
//     ...columns,
//     [source.droppableId]: {
//         ...column,
//         items: copiedItems
//     }
//   })
// };
const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    if (!destination) return;
    

}

function Trello() {
  // const [columns, setColumns] = useState(columnsFromBackend);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(test());
  }, []);

  const { columnsFromBackend } = useSelector((state) => state.trello);

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {columnsFromBackend.map((column, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={column.id}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={column.id} key={column.id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.text}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Trello;

// import React from "react";

// const Trello = () => {
//     return ( <>
//     <div className="h-[60vh]">
//          Nothing is impossable</div>
//     </> );
// }

// export default Trello;
