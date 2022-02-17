
//tailwind 
export function selectColor(color){
    if(color === 'red') return 'bg-red-200'
    if(color === 'blue') return 'bg-blue-200'
    if(color === 'yellow') return 'bg-yellow-200'
    if(color === 'green') return 'bg-green-200'
    if(color === 'orange') return 'bg-orange-200'
    if(color === 'gray') return 'bg-gray-200'
    if(color === 'pink') return 'bg-pink-200'
    if(color === 'purple') return 'bg-purple-200' 
}

// func. to check if object empty or not
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
