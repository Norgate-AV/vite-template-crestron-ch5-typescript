/* eslint-disable @typescript-eslint/ban-types */
export default function debounce(
    func: Function,
    wait: number,
    immediate?: boolean,
): Function {
    let id: NodeJS.Timeout | null = null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function timeout(this: any, ...args: any[]) {
        if (id) {
            clearTimeout(id);
        }

        id = setTimeout(() => {
            id = null;

            if (!immediate) {
                func.apply(this, args);
            }
        }, wait);

        if (immediate && !id) {
            func.apply(this, args);
        }
    };
}
