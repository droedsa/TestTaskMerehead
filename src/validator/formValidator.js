export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Maximum length ${maxLength} characters`;
    return undefined;
};

export const required = value => {
    if (value) return undefined
    return 'The field must be filled'
}