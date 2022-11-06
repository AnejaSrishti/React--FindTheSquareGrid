
function DivGrid({inputSquare})
{
    console.log('input-' + inputSquare);
    const items = Array.from(Array(inputSquare* inputSquare).keys())

    console.log(items);

const groupedItems = items.reduce(
  (acc, item) => {

    acc[acc.length-1].push(<div  key={item} className="divBox"></div>);
    
    return acc;
  },
  [[]]
);
    return(
        <div className="boxWrapper boxCenter" id="boxWrapper">
        {groupedItems}
        
        </div>
    )
}

export default DivGrid;