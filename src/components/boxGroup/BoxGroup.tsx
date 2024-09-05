import { BoxInfo } from '../../model/models';
import { Box } from '../box/Box';
import './BoxGroup.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
export type BoxGroupProps = {
  items: (BoxInfo & { id: string })[];
  onItemsChange: (items: (BoxInfo & { id: string })[]) => void;
};

export const BoxGroup = (props: BoxGroupProps) => {
  const { items, onItemsChange } = props;
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;
    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, movedItem);
    onItemsChange(reorderedItems);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="box-group"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className="box-group-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Box item={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
