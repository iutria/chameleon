
export const getStrType = (type)=>{
    return type.includes('/') ? type.split('/').shift() : type;
}