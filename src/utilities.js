let nextId = 0;
function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
}

export default generateId;