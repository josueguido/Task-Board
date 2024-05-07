const filterNotesByStatus = (notes, status) => {
    return Object.values(notes).filter(note => note.status === status);
};

export { filterNotesByStatus };

const filterNotesByPriority = (notes, priority) => {
    return Object.values(notes).filter(note => note.priority === priority);
};

export { filterNotesByPriority };


const filterNotesByName = (notes, name) => {
    return Object.values(notes).filter(note => note.taskName  === name);
};

export { filterNotesByName };
