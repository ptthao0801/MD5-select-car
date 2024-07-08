import { useState, useEffect } from 'react';
function Car() {
    const cars = ["Toyota", "Honda", "Ford", "Chevrolet"];
    const colors = ["Blue", "Red", "Green", "Yellow"];

    const [selectedOption, setSelectedOption] = useState({
        car: cars[0],
        color: colors[0]
    });
   

    // phải tạo 2 hàm handle khác nhau riêng cho Car và Color, thay đổi Select dựa trên prevState để 2 cái không bị tác động lẫn nhau
    // cách viết 1
    const handleCarChange = (e) => {
        setSelectedOption(prevState => ({
            ...prevState,
            car: cars[e.target.value]
        }));
    }
    // cách viết 2
    const handleColorChange = (e) => {
        setSelectedOption((prevState) => {
            return {
                ...prevState,
                color: colors[e.target.value]
            }
        })
    }

    return (
        <div>
            <h1>Select your car</h1>
            <div>
                Select a car
                <select onChange={handleCarChange}>
                    {cars.map((car, index) => (
                        <option value={index}>{car }</option>
                    ))}
                </select>
            </div>
            <div>
                Select a color
                <select onChange={handleColorChange}>
                    {colors.map((color, index) => (
                         <option value={index}>{color}</option> 
                    ))}
                </select>
            </div>
            <h2>You selected a {selectedOption.color} - {selectedOption.car}</h2>
        </div>
    )
}
export default Car;