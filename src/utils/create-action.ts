type Action<T> = ((props?: T) => {type: string; payload?: T}) & {type: string};

export function createAction(action: string): (() => {type: string}) & {type: string};
export function createAction<T extends object = {}>(
    action: string,
): ((props: T) => {type: string; payload: T}) & {type: string};
export function createAction<T extends object = {}>(action: string): Action<T> {
    const creator = (props: T) => {
        if (props) {
            return {type: action, payload: props};
        } else {
            return {type: action};
        }
    };

    Object.defineProperties(creator, {
        type: {
            configurable: false,
            enumerable: false,
            value: action,
            writable: false,
        },
    });

    return creator as Action<T>;
}
