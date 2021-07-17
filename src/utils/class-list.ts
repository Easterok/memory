export function classList(classes: Record<string, boolean>): string {
    return Object.keys(classes)
        .filter(key => !!classes[key])
        .join(' ');
}
