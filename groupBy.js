const data = [
  {name: 'John Doe', sex: 'F', age: 30},
  {name: 'Jane Smith', sex: 'F', age: 25},
  {name: 'Alice Johnson', sex: 'F', age: 35},
  {name: 'John Doe', sex: 'M', age: 28},
  {name: 'Thomas', sex: 'M', age: 28},
  {name: 'Julien Smith', sex: 'F', age: 28},
];

function groupBy(data, generateKey) {
  
  const groupedData = {};

  data.forEach(item => {

    const itemKey = generateKey(item);

    if (!groupedData[itemKey]) {
      groupedData[itemKey] = [];
    }

    groupedData[itemKey].push(item);
  });

  return groupedData;

}

console.log(groupBy(data, (p) => p.sex));
