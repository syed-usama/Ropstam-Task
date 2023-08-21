import { getData, setData } from './AsyncStorageServices';


export async function get_cars_list() {
  var data = [
    {
      id:1,
      name: 'Honda',
    },
    {
      id:2,
      name: 'Toyota',
    },
    {
      id:3,
      name: 'Audi',
    },
    {
      id:4,
      name: 'Mercidies',
    },
    {
      id:5,
      name: 'BMW',
    },
  ];
  return data;
}
export async function get_colors_list() {
  var data = [
    {
      id:1,
      name: 'Red',
      colorCode:'red',
    },
    {
      id:2,
      name: 'Black',
      colorCode:'black',
    },
    {
      id:3,
      name: 'Blue',
      colorCode:'blue',
    },
    {
      id:4,
      name: 'White',
      colorCode:'white',
    },
    {
      id:5,
      name: 'Grey',
      colorCode:'grey',
    },
  ];
  
  return data;
}
export async function register_Car(data, changeLoader) {
  var cars= [];
  var carsData = await getData('carsData');
  if(carsData){
    cars = carsData;
    cars.push(data)
    await setData('carsData',cars)
    changeLoader()
  }else{
    cars.push(data);
    await setData('carsData',cars)
    changeLoader()
  }
}
