export const random = (min = 1, max = 10) => {
    return Math.floor(Math.random() * max + min);
};