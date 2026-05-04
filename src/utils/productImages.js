const imageModules = import.meta.glob('../img/*.{png,jpg,jepg,webp,gif,svg}',{
    eager:true
});
const baseName = (path) => {
    const name = path.split('/').pop() || '';
    return name.replace(/\.[^.]+$/,'');
};
export const imageMap =  Object.fromEntries (
    Object.entries (imageNodules).map(([path,mod]) => [baseName (path),mod.default])
);
export function resolveProductImage(ImageKey)
{ if(iamgeKey == null || imageKey === '')}