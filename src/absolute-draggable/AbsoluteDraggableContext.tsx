import React, {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

import { v4 as uuid } from "uuid";
import { useCallbackRef } from "use-callback-ref";

export type AbsoluteDragEvent = {
  deltaX: number;
  deltaY: number;
};

type DraggableItemState = {
  id: string;
  onDrag?: (event: AbsoluteDragEvent) => void;
};

type DraggableState = {
  currentDown: DraggableItemState[];
};

type ReducerActions =
  | { type: "addMouseDown"; draggableState: DraggableItemState }
  | { type: "clearCurrentDown" };

const DraggableReducer = (
  state: DraggableState,
  action: ReducerActions
): DraggableState => {
  switch (action.type) {
    case "addMouseDown":
      return {
        ...state,
        currentDown: [...state.currentDown, action.draggableState],
      };

    case "clearCurrentDown":
      return {
        ...state,
        currentDown: [],
      };
  }
};

const DispatchContext = createContext<Dispatch<ReducerActions> | undefined>(
  undefined
);

const AbsoluteDraggableProvider = ({ children }: { children: ReactNode }) => {
  const [draggableState, draggableDispatch] = useReducer(DraggableReducer, {
    currentDown: [],
  });

  const draggableStateRef = useRef(draggableState);
  const lastPosDown = useRef({ x: 0, y: 0 });

  const masterMouseUp = (evt: MouseEvent) => {
    if (draggableStateRef.current.currentDown.length !== 0)
      draggableDispatch({ type: "clearCurrentDown" });
  };

  const masterMouseDown = (evt: MouseEvent) => {
    lastPosDown.current = {
      x: evt.clientX,
      y: evt.clientY,
    };
  };

  const masterMouseMove = (evt: MouseEvent) => {
    if (draggableStateRef.current.currentDown.length !== 0) {
      draggableStateRef.current.currentDown.forEach((e) => {
        e.onDrag?.({
          deltaX: lastPosDown.current.x - evt.clientX,
          deltaY: lastPosDown.current.y - evt.clientY,
        });
      });
    }

    lastPosDown.current = {
      x: evt.clientX,
      y: evt.clientY,
    };
  };

  useEffect(() => {
    draggableStateRef.current = draggableState;
  }, [draggableState]);

  useEffect(() => {
    document.body.addEventListener("mouseup", masterMouseUp);
    document.body.addEventListener("mousedown", masterMouseDown);
    document.body.addEventListener("mousemove", masterMouseMove);

    return () => {
      document.body.removeEventListener("mouseup", masterMouseUp);
      document.body.removeEventListener("mousedown", masterMouseDown);
      document.body.removeEventListener("mousemove", masterMouseMove);
    };
  }, []);

  return (
    <DispatchContext.Provider value={draggableDispatch}>
      {children}
    </DispatchContext.Provider>
  );
};

const useDraggableDispatch = () => {
  const draggableDispatch = useContext(DispatchContext);
  if (typeof draggableDispatch === "undefined")
    throw new Error(
      "useDraggableDispatch must be used within a DraggableProvider"
    );

  const addMouseDown = useCallback(
    (draggableStart: DraggableItemState) => {
      draggableDispatch({
        type: "addMouseDown",
        draggableState: draggableStart,
      });
    },
    [draggableDispatch]
  );

  return addMouseDown;
};

const useAbsoluteDraggable = <T extends HTMLElement>({
  onDrag,
  onMouseDown,
}: {
  onDrag?: (event: AbsoluteDragEvent) => void;
  onMouseDown?: (event: MouseEvent) => void;
}) => {
  const addMouseDown = useDraggableDispatch();

  const mouseDown = (evt: MouseEvent) => {
    addMouseDown({
      id: uuid(),
      onDrag,
    });
    evt.preventDefault();

    onMouseDown?.(evt);
  };

  const refUpdate = (newValue: T | null, lastValue: T | null) => {
    if (lastValue !== null) {
      lastValue.removeEventListener("mousedown", mouseDown);
    }

    if (newValue !== null) {
      newValue.addEventListener("mousedown", mouseDown);
    }
  };
  const ref = useCallbackRef<T | null>(null, refUpdate);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mousedown", mouseDown);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousedown", mouseDown);
      }
    };
  });

  return { ref };
};

export { AbsoluteDraggableProvider, useAbsoluteDraggable };
