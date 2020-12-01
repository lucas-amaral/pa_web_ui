export const getSelectNeighborhoods = (neighborhoodsList) => {
    return neighborhoodsList
        .map((neighborhood) => ({
            id: neighborhood.id,
            value: neighborhood.name,
        }))
        .sort((a, b) => (a.value > b.value ? 1 : -1));
};
