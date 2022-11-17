import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { test, sort } from "../../redux/reducers/trelloSlice";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Trello() {
  const { columnsFromBackend } = useSelector((state) => state.trello);
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
          
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
                                      position: 'relative',
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <img
                                      className=" brightness-[80%]    w-[100%] h-[100%] object-fill  cursor-pointer group-hover:scale-105 ease-out duration-300 "
                                      src={item.img}
                                      alt="Photo"
                                    />

                                    <span className="  z-20 font-bold text-2xl md:text-sm lg:text-base  max-sm:text-2xl text-[#F7F7F7] bottom-[8%]  right-0 left-0 text-center  absolute  group-hover:scale-105 ease-out duration-300  ">
                                      {item.text}
                                    </span>
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

//   const dispatch = useDispatch();

//   const onDragEnd = (result) => {
//     const { destination, source, draggableId } = result;
//     if (!result.destination) return;

//     let droppableIdStart = source.droppableId
//     console.log(droppableIdStart)
//     let droppableIdEnd = destination.droppableId;
//     let droppableIndexStart = source.index;
//     let droppableIndexEnd = destination.index;
//     console.log(droppableIdStart)

//     dispatch(
//       sort({
//         droppableIdStart,
//         droppableIdEnd,
//         droppableIndexStart,
//         droppableIndexEnd,
//         draggableId,
//       })
//     );
//   };

//   const { columnsFromBackend } =  useSelector((state) => state.trello)

// const [colum, setCoumn]}

//   console.log(columnsFromBackend)

//   return (

//     <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
//       <DragDropContext
//         onDragEnd={result => onDragEnd(result)}
//       >
//         {columnsFromBackend.map((column, index) => {
//           return (
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center"
//               }}
//               key={column.id}
//             >
//               <h2>{column.name}</h2>
//               <div style={{ margin: 8 }}>
//                 <Droppable droppableId={column.id} key={column.id}>
//                   {(provided, snapshot) => {
//                     return (
//                       <div
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       ref={provided.innerRef}
//                         style={{
//                           background: snapshot.isDraggingOver
//                             ? "lightblue"
//                             : "lightgrey",
//                           padding: 4,
//                           width: 250,
//                           minHeight: 500
//                         }}
//                       >
//                         {column.items.map((item, index) => {

//                           return (
//                             <Draggable
//                               key={item.id}
//                               draggableId={item.id}
//                               index={index}

//                             >
//                               {(provided, snapshot) => {
//                                 return (
//                                   <div
//                                   {...provided.draggableProps}
//                                   {...provided.dragHandleProps}
//                                   ref={provided.innerRef}
//                                     style={{
//                                       userSelect: "none",
//                                       padding: 16,
//                                       margin: "0 0 8px 0",
//                                       minHeight: "50px",
//                                       backgroundColor: snapshot.isDragging
//                                         ? "#263B4A"
//                                         : "#456C86",
//                                       color: "white",
//                                       ...provided.draggableProps.style
//                                     }}
//                                   >
//                                    <h2 >{item.text}</h2>
//                                   </div>
//                                 );
//                               }}
//                             </Draggable>
//                           );
//                         })}
//                         {provided.placeholder}
//                       </div>
//                     );
//                   }}
//                 </Droppable>
//               </div>
//             </div>
//           );
//         })}
//       </DragDropContext>
//     </div>
//  );
